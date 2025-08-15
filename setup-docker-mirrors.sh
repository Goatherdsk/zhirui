#!/bin/bash

# Docker 国内镜像源配置脚本

echo "🔧 配置 Docker 国内镜像源..."

# 检测操作系统
OS="$(uname -s)"
case "${OS}" in
    Linux*)     MACHINE=Linux;;
    Darwin*)    MACHINE=Mac;;
    *)          MACHINE="UNKNOWN:${OS}"
esac

echo "📱 检测到操作系统: $MACHINE"

if [ "$MACHINE" = "Mac" ]; then
    echo "🍎 macOS 用户配置说明："
    echo "1. 打开 Docker Desktop"
    echo "2. 点击右上角设置图标"
    echo "3. 选择 'Docker Engine'"
    echo "4. 将以下配置添加到 JSON 中："
    echo ""
    cat daemon.json
    echo ""
    echo "5. 点击 'Apply & Restart'"
    echo ""
    echo "💡 或者手动配置："
    echo "cp daemon.json ~/.docker/daemon.json"
    
elif [ "$MACHINE" = "Linux" ]; then
    echo "🐧 Linux 用户自动配置："
    
    # 检查是否有权限
    if [ "$EUID" -ne 0 ]; then
        echo "⚠️  需要 sudo 权限来配置 Docker daemon"
        echo "🔧 正在使用 sudo 配置..."
        
        # 创建 docker 目录（如果不存在）
        sudo mkdir -p /etc/docker
        
        # 备份现有配置（如果存在）
        if [ -f "/etc/docker/daemon.json" ]; then
            echo "📦 备份现有配置到 /etc/docker/daemon.json.backup"
            sudo cp /etc/docker/daemon.json /etc/docker/daemon.json.backup
        fi
        
        # 复制新配置
        sudo cp daemon.json /etc/docker/daemon.json
        
        echo "✅ 配置文件已更新"
        echo "🔄 正在重启 Docker 服务..."
        
        # 重启 Docker 服务
        if systemctl is-active --quiet docker; then
            sudo systemctl restart docker
            echo "✅ Docker 服务重启完成"
        else
            echo "⚠️  Docker 服务未运行，正在启动..."
            sudo systemctl start docker
            echo "✅ Docker 服务启动完成"
        fi
        
    else
        echo "🔧 以 root 权限配置..."
        mkdir -p /etc/docker
        
        if [ -f "/etc/docker/daemon.json" ]; then
            cp /etc/docker/daemon.json /etc/docker/daemon.json.backup
        fi
        
        cp daemon.json /etc/docker/daemon.json
        systemctl restart docker
        echo "✅ 配置完成"
    fi
    
else
    echo "❌ 不支持的操作系统: $MACHINE"
    echo "📖 请手动配置 Docker 镜像源"
    exit 1
fi

echo ""
echo "🎉 Docker 镜像源配置完成！"
echo "🔍 验证配置："
echo "docker info | grep -A 10 'Registry Mirrors'"
echo ""
echo "📝 配置的镜像源："
echo "- 阿里云: https://registry.cn-hangzhou.aliyuncs.com"
echo "- 中科大: https://docker.mirrors.ustc.edu.cn"
echo "- 网易: https://hub-mirror.c.163.com"
echo "- 百度: https://mirror.baidubce.com"
echo "- Docker 中国: https://registry.docker-cn.com"
