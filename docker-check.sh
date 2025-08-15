#!/bin/bash

# Docker 启动和测试脚本

echo "🚀 Docker 启动和测试向导..."

# 检查 Docker 是否安装
if ! command -v docker &> /dev/null; then
    echo "❌ Docker 未安装"
    echo "📥 请访问 https://docs.docker.com/get-docker/ 下载安装 Docker Desktop"
    exit 1
fi

echo "✅ Docker 已安装"

# 检查 Docker daemon 是否运行
if ! docker info &> /dev/null; then
    echo "❌ Docker daemon 未运行"
    echo ""
    echo "🔧 启动 Docker 的方法："
    echo ""
    
    # 检测操作系统
    OS="$(uname -s)"
    case "${OS}" in
        Darwin*)
            echo "🍎 macOS 用户："
            echo "1. 打开 Launchpad 或 Applications 文件夹"
            echo "2. 找到并点击 'Docker Desktop' 应用"
            echo "3. 等待 Docker 图标出现在菜单栏且显示为绿色"
            echo "4. 或者使用命令: open -a Docker"
            echo ""
            echo "⏳ 正在尝试启动 Docker Desktop..."
            if command -v open &> /dev/null; then
                open -a Docker 2>/dev/null && echo "✅ Docker Desktop 启动命令已执行" || echo "⚠️ 请手动启动 Docker Desktop"
            fi
            ;;
        Linux*)
            echo "🐧 Linux 用户："
            echo "sudo systemctl start docker"
            echo "或者: sudo service docker start"
            ;;
        *)
            echo "❓ 未知操作系统，请手动启动 Docker"
            ;;
    esac
    
    echo ""
    echo "⏳ 请启动 Docker 后重新运行此脚本"
    echo "💡 提示：Docker Desktop 启动需要几十秒时间"
    exit 1
fi

echo "✅ Docker daemon 正在运行"

# 显示 Docker 信息
echo ""
echo "📋 Docker 版本信息："
docker --version

echo ""
echo "🔧 Docker 系统信息："
docker system df 2>/dev/null || echo "Docker 存储信息获取失败"

echo ""
echo "📋 当前配置的镜像源："
if docker info 2>/dev/null | grep -A 10 'Registry Mirrors'; then
    echo "✅ 镜像源配置正常"
else
    echo "⚠️ 未找到镜像源配置，建议运行 ./setup-docker-mirrors.sh"
fi

echo ""
echo "🧪 测试基础功能..."

# 测试运行容器
echo "📦 测试运行 hello-world 容器："
if docker run --rm hello-world; then
    echo "✅ Docker 基础功能测试成功！"
else
    echo "❌ Docker 基础功能测试失败"
    echo "🔍 可能的原因："
    echo "- 网络连接问题"
    echo "- 镜像源配置问题"
    echo "- Docker 权限问题"
fi

echo ""
echo "🎉 Docker 检查完成！"
