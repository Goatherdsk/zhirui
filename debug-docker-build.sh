#!/bin/bash

# Docker 构建调试脚本

echo "🔍 Docker 构建问题诊断..."

# 检查 package.json
echo "📋 检查 package.json..."
if [ -f "package.json" ]; then
    echo "✅ package.json 存在"
    echo "📦 依赖信息:"
    grep -A 10 '"dependencies"' package.json || echo "未找到 dependencies"
    echo ""
    grep -A 15 '"devDependencies"' package.json || echo "未找到 devDependencies"
else
    echo "❌ package.json 不存在"
    exit 1
fi

echo ""
echo "🧪 本地依赖安装测试..."

# 测试本地 npm install
if command -v npm &> /dev/null; then
    echo "✅ npm 可用"
    echo "📱 npm 版本: $(npm --version)"
    echo "📱 node 版本: $(node --version)"
    
    # 清理并重新安装
    echo "🗑️ 清理 node_modules..."
    rm -rf node_modules package-lock.json
    
    echo "📦 尝试安装依赖..."
    if npm install; then
        echo "✅ 本地依赖安装成功"
        
        echo "🔨 尝试本地构建..."
        if npm run build; then
            echo "✅ 本地构建成功"
            
            if [ -d "dist" ]; then
                echo "✅ dist 目录存在"
                echo "📁 构建产物:"
                ls -la dist/
            else
                echo "❌ dist 目录不存在"
            fi
        else
            echo "❌ 本地构建失败"
        fi
    else
        echo "❌ 本地依赖安装失败"
    fi
else
    echo "❌ npm 不可用"
fi

echo ""
echo "🐳 Docker 构建测试..."

# 逐步构建测试
echo "🔨 测试 Docker 构建（仅到依赖安装）..."
cat > Dockerfile.debug << 'EOF'
FROM node:18-alpine
WORKDIR /app
RUN apk add --no-cache git python3 make g++
RUN npm config set registry https://registry.npmmirror.com/
COPY package*.json ./
RUN npm install --verbose
EOF

if docker build -f Dockerfile.debug -t zhirui-debug . ; then
    echo "✅ Docker 依赖安装测试成功"
    
    # 清理测试镜像
    docker rmi zhirui-debug 2>/dev/null || true
    rm Dockerfile.debug
    
    echo "🔨 尝试完整 Docker 构建..."
    if docker build -t zhirui-test . ; then
        echo "✅ Docker 完整构建成功"
        
        # 测试运行
        echo "🚀 测试容器运行..."
        if docker run -d -p 8888:80 --name zhirui-test-container zhirui-test; then
            echo "✅ 容器启动成功"
            sleep 5
            
            if curl -s http://localhost:8888 > /dev/null; then
                echo "✅ 容器访问测试成功"
                echo "🌐 测试地址: http://localhost:8888"
            else
                echo "❌ 容器访问测试失败"
            fi
            
            # 清理
            docker stop zhirui-test-container > /dev/null 2>&1
            docker rm zhirui-test-container > /dev/null 2>&1
        else
            echo "❌ 容器启动失败"
        fi
        
        # 清理测试镜像
        docker rmi zhirui-test 2>/dev/null || true
    else
        echo "❌ Docker 完整构建失败"
        echo "🔍 可能的问题:"
        echo "- 依赖版本冲突"
        echo "- 构建脚本问题"
        echo "- 源码问题"
    fi
else
    echo "❌ Docker 依赖安装测试失败"
    echo "🔍 可能的问题:"
    echo "- package.json 配置问题"
    echo "- 网络连接问题"
    echo "- 镜像源问题"
    
    rm Dockerfile.debug 2>/dev/null || true
fi

echo ""
echo "🎯 建议："
echo "1. 确保本地构建成功后再进行 Docker 构建"
echo "2. 检查 package.json 中的依赖版本"
echo "3. 确保网络连接正常"
echo "4. 尝试使用简化版 Dockerfile"
