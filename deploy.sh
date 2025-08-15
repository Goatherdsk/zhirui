#!/bin/bash

# 智睿商务车网站 Docker 部署脚本

echo "🚀 开始部署智睿商务车网站..."

# 检查 Docker 是否安装
if ! command -v docker &> /dev/null; then
    echo "❌ Docker 未安装，请先安装 Docker"
    exit 1
fi

# 检查 Docker Compose 是否安装
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose 未安装，请先安装 Docker Compose"
    exit 1
fi

# 停止并删除现有容器
echo "🛑 停止现有服务..."
docker-compose down

# 删除旧镜像（可选）
echo "🗑️  清理旧镜像..."
docker image prune -f

# 构建新镜像
echo "🔨 构建新镜像..."
docker-compose build --no-cache

# 启动服务
echo "🚀 启动服务..."
docker-compose up -d

# 检查服务状态
echo "📋 检查服务状态..."
docker-compose ps

# 显示日志
echo "📝 显示最近日志..."
docker-compose logs --tail=50

echo "✅ 部署完成！"
echo "🌐 网站访问地址: http://localhost"
echo "📊 查看日志: docker-compose logs -f"
echo "🛑 停止服务: docker-compose down"
