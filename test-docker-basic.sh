#!/bin/bash

# 简单的 Docker 功能测试

echo "🔧 Docker 基础功能测试..."

# 测试 Docker 版本
echo "📱 Docker 版本信息："
docker --version

echo ""
echo "🔍 Docker 系统信息："
docker system info

echo ""
echo "🧪 测试 Docker 基础功能..."

# 尝试运行一个简单的容器
echo "📦 测试运行 hello-world 容器（显示详细输出）："
docker run --rm hello-world

echo ""
echo "✅ 如果上面显示了 Hello from Docker! 信息，说明 Docker 工作正常"

echo ""
echo "🔍 检查现有镜像："
docker images

echo ""
echo "🗑️ 清理测试镜像："
docker rmi hello-world:latest 2>/dev/null || echo "hello-world 镜像已清理或不存在"

echo ""
echo "🎉 Docker 功能测试完成！"
