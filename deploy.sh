#!/bin/bash

# 智睿商务车网站 Docker 部署脚本

set -e  # 遇到错误时退出

echo "🚗 开始部署智睿商务车网站..."

# 检查是否以root权限运行（生产环境需要）
check_root_for_production() {
    if [ "$ENVIRONMENT" = "production" ] && [ "$EUID" -ne 0 ]; then
        echo "⚠️  生产环境使用80端口需要root权限"
        echo "🔧 请使用以下命令之一："
        echo "   sudo ./deploy.sh --prod"
        echo "   或者设置 HTTP_PORT=8080 ./deploy.sh --prod"
        exit 1
    fi
}

# 检查 Docker 是否安装
if ! command -v docker &> /dev/null; then
    echo "❌ Docker 未安装，请先安装 Docker"
    echo "📖 安装指南: https://docs.docker.com/get-docker/"
    exit 1
fi

# 检查 Docker daemon 是否运行
if ! docker info &> /dev/null; then
    echo "❌ Docker daemon 未运行"
    echo "🔧 请启动 Docker Desktop 或运行: sudo systemctl start docker"
    exit 1
fi

# 检查 Docker Compose 是否安装
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose 未安装，请先安装 Docker Compose"
    echo "📖 安装指南: https://docs.docker.com/compose/install/"
    exit 1
fi

# 解析命令行参数
ENVIRONMENT="development"
COMPOSE_FILE="docker-compose.yml"

while [[ $# -gt 0 ]]; do
    case $1 in
        --prod|--production)
            ENVIRONMENT="production"
            COMPOSE_FILE="docker-compose.prod.yml"
            shift
            ;;
        --dev|--development)
            ENVIRONMENT="development"
            COMPOSE_FILE="docker-compose.yml"
            shift
            ;;
        -h|--help)
            echo "🚗 智睿商务车网站部署工具"
            echo ""
            echo "用法: $0 [选项]"
            echo ""
            echo "选项:"
            echo "  --prod, --production     生产环境部署（需要sudo权限）"
            echo "  --dev, --development     开发环境部署（默认）"
            echo "  -h, --help              显示帮助信息"
            echo ""
            echo "示例:"
            echo "  $0                       # 开发环境部署"
            echo "  sudo $0 --prod           # 生产环境部署（80端口）"
            echo "  HTTP_PORT=8080 $0 --prod # 生产环境使用8080端口"
            exit 0
            ;;
        *)
            echo "❌ 未知选项: $1"
            echo "💡 使用 -h 或 --help 查看帮助"
            exit 1
            ;;
    esac
done

echo "📋 部署环境: $ENVIRONMENT"
echo "📄 配置文件: $COMPOSE_FILE"

# 检查生产环境权限
check_root_for_production

# 检查配置文件是否存在
if [ ! -f "$COMPOSE_FILE" ]; then
    echo "❌ 配置文件 $COMPOSE_FILE 不存在"
    exit 1
fi

# 检查环境变量配置
if [ ! -f ".env" ]; then
    echo "⚠️  未找到 .env 文件，使用默认配置"
    echo "💡 建议复制 .env.example 为 .env 来自定义配置"
    echo "   cp .env.example .env"
else
    echo "✅ 找到 .env 配置文件"
    source .env
fi

# 根据环境设置端口配置
if [ "$ENVIRONMENT" = "production" ]; then
    # 生产环境默认使用80端口
    HOST_PORT=${HTTP_PORT:-80}
    CONTAINER_NAME=${CONTAINER_NAME:-zhirui-business-website-prod}
    
    # 检查80端口是否被占用
    if [ "$HOST_PORT" = "80" ] && netstat -tuln 2>/dev/null | grep -q ":80 "; then
        echo "⚠️  端口80已被占用，请检查其他服务："
        netstat -tuln | grep ":80 " || true
        echo "💡 您可以："
        echo "   1. 停止占用80端口的服务"
        echo "   2. 使用其他端口: HTTP_PORT=8080 sudo $0 --prod"
        exit 1
    fi
    
    if [ "$HOST_PORT" = "80" ]; then
        HEALTH_CHECK_URL="http://localhost"
    else
        HEALTH_CHECK_URL="http://localhost:${HOST_PORT}"
    fi
    
    echo "🏭 生产环境配置:"
    echo "   🚪 端口: ${HOST_PORT}"
    echo "   🏥 健康检查: $HEALTH_CHECK_URL"
else
    # 开发环境端口配置
    HOST_PORT=${HOST_PORT:-8080}
    CONTAINER_NAME=${CONTAINER_NAME:-zhirui-business-website}
    HEALTH_CHECK_URL="http://localhost:${HOST_PORT}"
fi

echo "🔧 端口配置: ${HOST_PORT} -> 80"

# 停止并删除现有容器
echo "🛑 停止现有服务..."
docker-compose -f "$COMPOSE_FILE" down

# 清理旧镜像（可选）
read -p "🗑️  是否清理旧镜像以释放空间？(y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🧹 清理旧镜像..."
    docker image prune -f
    echo "✅ 清理完成"
fi

# 设置环境变量
export HTTP_PORT=$HOST_PORT
export CONTAINER_NAME=$CONTAINER_NAME

# 构建新镜像
echo "🔨 构建智睿商务车网站镜像..."
docker-compose -f "$COMPOSE_FILE" build --no-cache

# 启动服务
echo "🚀 启动智睿商务车网站服务..."
docker-compose -f "$COMPOSE_FILE" up -d

# 等待容器启动
echo "⏳ 等待容器启动..."
sleep 8

# 检查容器状态
echo "📋 检查容器状态..."
CONTAINER_STATUS=$(docker-compose -f "$COMPOSE_FILE" ps --services --filter "status=running" 2>/dev/null || echo "")

if [ -z "$CONTAINER_STATUS" ]; then
    echo "❌ 容器启动失败"
    echo "🔍 查看错误日志："
    docker-compose -f "$COMPOSE_FILE" logs --tail=30
    exit 1
fi

# 改进的健康检查
echo "🏥 执行健康检查..."
echo "🔗 检查地址: $HEALTH_CHECK_URL"
HEALTH_CHECK_SUCCESS=false

for i in {1..30}; do
    # 检查容器是否还在运行
    if ! docker ps --format "table {{.Names}}" | grep -q "$CONTAINER_NAME"; then
        echo "❌ 容器已停止运行"
        break
    fi
    
    # 尝试HTTP健康检查
    HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$HEALTH_CHECK_URL" 2>/dev/null || echo "000")
    
    if [ "$HTTP_STATUS" = "200" ]; then
        echo "✅ 健康检查通过 (HTTP 200)"
        HEALTH_CHECK_SUCCESS=true
        break
    elif [ "$HTTP_STATUS" = "000" ]; then
        echo "⏳ 健康检查中... ($i/30) [连接中]"
    else
        echo "⏳ 健康检查中... ($i/30) [HTTP $HTTP_STATUS]"
    fi
    
    sleep 2
done

# 显示最近日志
echo ""
echo "📝 最近容器日志："
docker-compose -f "$COMPOSE_FILE" logs --tail=20

echo ""
if [ "$HEALTH_CHECK_SUCCESS" = true ]; then
    echo "🎉 智睿商务车网站部署成功！"
    echo ""
    echo "🌐 网站访问地址:"
    
    if [ "$HOST_PORT" = "80" ]; then
        echo "   🏠 本地访问: http://localhost"
    else
        echo "   🏠 本地访问: http://localhost:${HOST_PORT}"
    fi
    
    # 尝试获取外网IP
    EXTERNAL_IP=$(curl -s ifconfig.me 2>/dev/null || echo "")
    if [ ! -z "$EXTERNAL_IP" ]; then
        if [ "$HOST_PORT" = "80" ]; then
            echo "   🌍 外网访问: http://${EXTERNAL_IP}"
        else
            echo "   🌍 外网访问: http://${EXTERNAL_IP}:${HOST_PORT}"
        fi
    fi
    
    if [ "$ENVIRONMENT" = "production" ]; then
        echo ""
        echo "🏭 生产环境部署完成:"
        echo "   ✅ 使用端口: ${HOST_PORT}"
        echo "   🔒 建议下一步："
        echo "      - 配置域名DNS解析"
        echo "      - 安装SSL证书启用HTTPS"
        echo "      - 配置防火墙规则"
        echo "      - 设置监控和备份"
    fi
else
    echo "⚠️  健康检查未完全通过，但网站可能仍在正常运行"
    echo "🔍 请手动检查网站是否可访问: $HEALTH_CHECK_URL"
    echo "🔍 检查容器状态: docker-compose -f $COMPOSE_FILE ps"
    echo "🔍 查看完整日志: docker-compose -f $COMPOSE_FILE logs"
fi

echo ""
echo "📋 常用管理命令:"
echo "   📊 查看实时日志: docker-compose -f $COMPOSE_FILE logs -f"
echo "   🛑 停止服务: docker-compose -f $COMPOSE_FILE down"
echo "   🔄 重启服务: docker-compose -f $COMPOSE_FILE restart"
echo "   🔍 查看状态: docker-compose -f $COMPOSE_FILE ps"
echo "   💻 进入容器: docker exec -it $CONTAINER_NAME sh"
echo ""
echo "🔧 当前配置:"
echo "   🌍 环境: $ENVIRONMENT"
echo "   🚪 端口映射: ${HOST_PORT} -> 80"
echo "   📦 容器名: $CONTAINER_NAME"
echo "   📁 配置文件: $COMPOSE_FILE"
echo "   🏥 健康检查: $HEALTH_CHECK_URL"