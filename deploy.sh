#!/bin/bash

# 智睿商务车网站 Docker 部署脚本

set -e  # 遇到错误时退出

echo "🚀 开始部署智睿商务车网站..."

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
            echo "用法: $0 [选项]"
            echo "选项:"
            echo "  --prod, --production     生产环境部署"
            echo "  --dev, --development     开发环境部署（默认）"
            echo "  -h, --help              显示帮助信息"
            exit 0
            ;;
        *)
            echo "未知选项: $1"
            echo "使用 -h 或 --help 查看帮助"
            exit 1
            ;;
    esac
done

echo "📋 部署环境: $ENVIRONMENT"
echo "📄 配置文件: $COMPOSE_FILE"

# 检查配置文件是否存在
if [ ! -f "$COMPOSE_FILE" ]; then
    echo "❌ 配置文件 $COMPOSE_FILE 不存在"
    exit 1
fi

# 检查环境变量配置
if [ ! -f ".env" ]; then
    echo "⚠️  未找到 .env 文件，使用默认配置"
    echo "💡 建议复制 .env.example 为 .env 来自定义配置"
    echo "cp .env.example .env"
else
    echo "✅ 找到 .env 配置文件"
    source .env
fi

# 获取端口配置
HOST_PORT=${HOST_PORT:-8080}

# 停止并删除现有容器
echo "🛑 停止现有服务..."
docker-compose -f "$COMPOSE_FILE" down

# 清理旧镜像（可选）
read -p "是否清理旧镜像？(y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🗑️  清理旧镜像..."
    docker image prune -f
fi

# 构建新镜像
echo "🔨 构建新镜像..."
docker-compose -f "$COMPOSE_FILE" build --no-cache

# 启动服务
echo "🚀 启动服务..."
docker-compose -f "$COMPOSE_FILE" up -d

# 等待服务启动
echo "⏳ 等待服务启动..."
sleep 10

# 检查服务状态
echo "📋 检查服务状态..."
docker-compose -f "$COMPOSE_FILE" ps

# 健康检查
echo "🏥 执行健康检查..."
for i in {1..30}; do
    if curl -s -f "http://localhost:${HOST_PORT}" > /dev/null; then
        echo "✅ 健康检查通过"
        break
    elif [ $i -eq 30 ]; then
        echo "❌ 健康检查超时"
        echo "🔍 查看日志："
        docker-compose -f "$COMPOSE_FILE" logs --tail=20
        exit 1
    else
        echo "⏳ 健康检查中... ($i/30)"
        sleep 2
    fi
done

# 显示最近日志
echo "📝 显示最近日志..."
docker-compose -f "$COMPOSE_FILE" logs --tail=50

echo ""
echo "✅ 部署完成！"
echo ""
echo "🌐 网站访问地址:"
echo "   HTTP: http://localhost:${HOST_PORT}"
if [ ! -z "${HTTPS_PORT}" ] && [ "$ENVIRONMENT" = "production" ]; then
    echo "   HTTPS: https://localhost:${HTTPS_PORT}"
fi
echo ""
echo "📋 常用命令:"
echo "   📊 查看日志: docker-compose -f $COMPOSE_FILE logs -f"
echo "   🛑 停止服务: docker-compose -f $COMPOSE_FILE down"
echo "   🔄 重启服务: docker-compose -f $COMPOSE_FILE restart"
echo "   🔍 查看状态: docker-compose -f $COMPOSE_FILE ps"
echo ""
echo "🔧 配置信息:"
echo "   环境: $ENVIRONMENT"
echo "   端口: ${HOST_PORT} -> 80"
echo "   容器: ${CONTAINER_NAME:-zhirui-business-website}"
