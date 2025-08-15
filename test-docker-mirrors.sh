#!/bin/bash

# Docker 镜像源测试脚本

echo "🧪 测试 Docker 镜像源配置..."

# 检查 Docker 是否运行
if ! docker info &> /dev/null; then
    echo "❌ Docker daemon 未运行，请先启动 Docker"
    exit 1
fi

echo "📋 当前配置的镜像源："
docker info | grep -A 20 'Registry Mirrors' || echo "❌ 未找到镜像源配置"

echo ""
echo "🚀 测试镜像拉取速度..."

# 测试镜像列表
images=(
    "hello-world:latest"
    "alpine:latest"
    "nginx:alpine"
)

for image in "${images[@]}"; do
    echo "📦 测试拉取镜像: $image"
    
    # 记录开始时间
    start_time=$(date +%s)
    
    # 拉取镜像
    if docker pull "$image" > /dev/null 2>&1; then
        # 计算用时
        end_time=$(date +%s)
        duration=$((end_time - start_time))
        echo "✅ $image 拉取成功，用时: ${duration}s"
    else
        echo "❌ $image 拉取失败"
    fi
    
    echo ""
done

echo "🎉 测试完成！"
echo "💡 如果拉取速度较慢，请检查镜像源配置是否正确"
