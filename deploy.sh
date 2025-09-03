#!/bin/bash

# 智睿商务车网站部署脚本 (支持 HTTP/HTTPS 停止/启动/重部署)
set -euo pipefail

###############################################################################
# 基础输出函数
###############################################################################
log()  { printf '%b\n' "$1"; }
ok()   { printf '\033[32m✅ %s\033[0m\n' "$1"; }
warn() { printf '\033[33m⚠ %s\033[0m\n' "$1"; }
err()  { printf '\033[31m❌ %s\033[0m\n' "$1" >&2; }

trap 'err "执行失败 (行 $LINENO)"' ERR

log "🚗 开始部署智睿商务车网站..."

###############################################################################
# 可调默认（可被环境变量覆盖）
###############################################################################
DEFAULT_DEV_HTTP_PORT=${HOST_PORT:-8080}
DEFAULT_DEV_HTTPS_PORT=${HTTPS_PORT:-8443}
DEFAULT_PROD_HTTP_PORT=${HTTP_PORT:-80}
DEFAULT_PROD_HTTPS_PORT=${HTTPS_PORT:-443}

###############################################################################
# 检查 Docker 环境
###############################################################################
if ! command -v docker >/dev/null 2>&1; then err "Docker 未安装"; exit 1; fi
if ! docker info >/dev/null 2>&1; then err "Docker daemon 未运行"; exit 1; fi

if command -v docker-compose >/dev/null 2>&1; then
        COMPOSE_CMD="docker-compose"
elif docker compose version >/dev/null 2>&1; then
        COMPOSE_CMD="docker compose"
else
        err "未找到 docker compose/docker-compose"; exit 1
fi

###############################################################################
# 参数解析 / 变量
###############################################################################
ENVIRONMENT=development
ACTION=redeploy          # redeploy|stop|start|build
NO_CACHE=false
SKIP_BUILD=false
AUTO_PRUNE=false
FORCE=false
COMPOSE_FILE="docker-compose.yml"   # 统一使用一个文件

show_usage() {
cat <<'EOF'
🚗 智睿商务车网站部署工具

用法: ./deploy.sh [选项]

环境模式:
        --prod / --production      生产 (默认 80/443)
        --dev  / --development     开发 (默认 8080/8443)

动作控制:
        --redeploy   (默认) 停止 + (重)构建 + 启动
        --stop       仅停止并移除容器
        --start      仅启动(若未构建会自动构建)
        --build      仅构建镜像

附加开关:
        --no-cache   构建不使用缓存
        --skip-build 跳过构建 (配合 --redeploy 用)
        --prune      重部署前 prune 未使用镜像
        --force      跳过交互确认
        --help       显示本帮助

端口环境变量覆盖:
        开发: HOST_PORT / HTTPS_PORT (默认 8080/8443)
        生产: HTTP_PORT / HTTPS_PORT (默认 80/443)

示例:
        ./deploy.sh --dev --redeploy
        sudo ./deploy.sh --prod --redeploy
        HOST_PORT=3000 HTTPS_PORT=3443 ./deploy.sh --dev
        HTTP_PORT=8080 ./deploy.sh --prod --no-cache --prune
EOF
}

while [[ $# -gt 0 ]]; do
        case "$1" in
                --prod|--production) ENVIRONMENT=production; shift;;
                --dev|--development) ENVIRONMENT=development; shift;;
                --redeploy) ACTION=redeploy; shift;;
                --stop) ACTION=stop; shift;;
                --start) ACTION=start; shift;;
                --build) ACTION=build; shift;;
                --no-cache) NO_CACHE=true; shift;;
                --skip-build) SKIP_BUILD=true; shift;;
                --prune) AUTO_PRUNE=true; shift;;
                --force) FORCE=true; shift;;
                -h|--help) show_usage; exit 0;;
                *) err "未知参数: $1"; show_usage; exit 1;;
        esac
done

if [[ $ENVIRONMENT == production ]]; then
        HOST_PORT=${HTTP_PORT:-$DEFAULT_PROD_HTTP_PORT}
        HTTPS_PORT=${HTTPS_PORT:-$DEFAULT_PROD_HTTPS_PORT}
        CONTAINER_NAME=${CONTAINER_NAME:-zhirui-business-website-prod}
else
        HOST_PORT=${HOST_PORT:-$DEFAULT_DEV_HTTP_PORT}
        HTTPS_PORT=${HTTPS_PORT:-$DEFAULT_DEV_HTTPS_PORT}
        CONTAINER_NAME=${CONTAINER_NAME:-zhirui-business-website}
fi

check_root_for_production() {
        if [[ $ENVIRONMENT == production && $HOST_PORT == 80 && $EUID -ne 0 ]]; then
                err "生产监听 80 需 root。使用 sudo 重新执行或: HTTP_PORT=8080 $0 --prod"
                exit 1
        fi
}

check_root_for_production

export HOST_PORT HTTPS_PORT CONTAINER_NAME

ssl_enabled=false
if [[ -f ssl/anhuizhirui.com.cn_bundle.crt && -f ssl/anhuizhirui.com.cn.key ]]; then
        ssl_enabled=true
        ok "检测到证书，已启用 HTTPS 部署"
else
        warn "未检测到完整证书 (ssl/*.crt & *.key)，仅 HTTP"
fi

log "📋 环境: $ENVIRONMENT"
log "🌐 端口: HTTP ${HOST_PORT}->80  HTTPS ${HTTPS_PORT}->443"
log "📄 Compose: ${COMPOSE_FILE} (使用: ${COMPOSE_CMD})"

container_running() { ${COMPOSE_CMD} -f "${COMPOSE_FILE}" ps -q | grep -q .; }

stop_containers() {
        if container_running; then
                log "🛑 停止并移除容器..."; ${COMPOSE_CMD} -f "${COMPOSE_FILE}" down --remove-orphans || true
        else
                log "ℹ️ 没有运行中的容器"
        fi
}

build_image() {
        if [[ $SKIP_BUILD == true ]]; then log "⏭  跳过构建"; return; fi
        log "🔨 构建镜像 (no-cache: $NO_CACHE) ..."
        if [[ $NO_CACHE == true ]]; then
                ${COMPOSE_CMD} -f "${COMPOSE_FILE}" build --no-cache
        else
                ${COMPOSE_CMD} -f "${COMPOSE_FILE}" build
        fi
}

start_containers() {
        log "🚀 启动容器..."
        ${COMPOSE_CMD} -f "${COMPOSE_FILE}" up -d
}

health_check() {
        local http_url="http://localhost:${HOST_PORT}/health"
        local https_url="https://localhost:${HTTPS_PORT}/health"
        log "� HTTP 健康检查..."
        local ok_http=false
        for i in {1..25}; do
                local code=$(curl -s -o /dev/null -w '%{http_code}' "$http_url" || echo 000)
                if [[ $code == 200 ]]; then ok "HTTP OK"; ok_http=true; break; fi; sleep 2;
        done
        [[ $ok_http == false ]] && warn "HTTP 健康检查未通过" || true
        if $ssl_enabled; then
                log "🔒 HTTPS 健康检查..."
                local ok_https=false
                for i in {1..15}; do
                        local code=$(curl -k -s -o /dev/null -w '%{http_code}' "$https_url" || echo 000)
                        if [[ $code == 200 ]]; then ok "HTTPS OK"; ok_https=true; break; fi; sleep 2;
                done
                [[ $ok_https == false ]] && warn "HTTPS 健康检查未通过" || true
        fi
}

redeploy() {
        stop_containers
        [[ $AUTO_PRUNE == true ]] && { log "🧹 清理未使用镜像..."; docker image prune -f || true; }
        build_image
        start_containers
        sleep 5
        health_check
}

case "$ACTION" in
        stop)
                stop_containers; ok "已停止"; exit 0;;
        build)
                build_image; ok "构建完成"; exit 0;;
        start)
                if ! container_running; then build_image; start_containers; sleep 4; health_check; else warn "容器已在运行"; fi; exit 0;;
        redeploy)
                if [[ $FORCE == false ]]; then read -r -p "确认重部署?(y/N): " ans; [[ $ans =~ ^[Yy]$ ]] || { warn "取消"; exit 0; }; fi
                redeploy;;
esac

log "📝 最近日志 (20 行):"
${COMPOSE_CMD} -f "${COMPOSE_FILE}" logs --tail=20 || true

ok "部署完成"
echo "\n🌐 访问地址:"
if [[ $HOST_PORT == 80 ]]; then echo " - http://<服务器IP>"; else echo " - http://<服务器IP>:${HOST_PORT}"; fi
if $ssl_enabled; then
        if [[ $HTTPS_PORT == 443 ]]; then echo " - https://<服务器IP>"; else echo " - https://<服务器IP>:${HTTPS_PORT}"; fi
fi

echo "\n📌 管理命令:";
echo "  停止:      $0 --stop"
echo "  启动:      $0 --start"
echo "  重部署:    $0 --redeploy"
echo "  自定义端口: HOST_PORT=3000 HTTPS_PORT=3443 $0 --dev"
echo "  跳过构建:  $0 --redeploy --skip-build"
echo "  不用缓存:  $0 --redeploy --no-cache"
echo "  清理:      $0 --redeploy --prune"

exit 0