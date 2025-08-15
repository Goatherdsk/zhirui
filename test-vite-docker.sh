#!/bin/bash

# Vite Docker 构建测试脚本

echo "🔧 Vite Docker 构建测试..."

# 检查必要文件
echo "📋 检查必要文件..."
required_files=("package.json" "vite.config.js" "Dockerfile" "nginx.conf" "docker-compose.yml")

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file 存在"
    else
        echo "❌ $file 不存在"
        exit 1
    fi
done

# 检查 package.json 中的构建脚本
echo ""
echo "🔍 检查 package.json 构建脚本..."
if grep -q '"build".*"vite build"' package.json; then
    echo "✅ Vite 构建脚本配置正确"
else
    echo "❌ Vite 构建脚本配置错误"
    exit 1
fi

# 清理旧的构建产物
echo ""
echo "🗑️ 清理旧的构建产物..."
rm -rf dist/
docker-compose down 2>/dev/null || true
docker rmi $(docker images -q zhirui*) 2>/dev/null || true

# 本地构建测试
echo ""
echo "🔨 本地 Vite 构建测试..."
if npm run build; then
    echo "✅ 本地构建成功"
    
    # 检查构建产物
    if [ -d "dist" ] && [ -f "dist/index.html" ]; then
        echo "✅ 构建产物检查通过"
        echo "📁 构建产物:"
        ls -la dist/
    else
        echo "❌ 构建产物检查失败"
        exit 1
    fi
else
    echo "❌ 本地构建失败"
    exit 1
fi

# Docker 构建测试
echo ""
echo "🐳 Docker 构建测试..."
if docker-compose build --no-cache; then
    echo "✅ Docker 构建成功"
else
    echo "❌ Docker 构建失败"
    exit 1
fi

# 启动容器测试
echo ""
echo "🚀 启动容器测试..."
export HOST_PORT=8081  # 使用不同端口避免冲突

if docker-compose up -d; then
    echo "✅ 容器启动成功"
    
    # 等待服务启动
    echo "⏳ 等待服务启动..."
    sleep 10
    
    # 健康检查
    echo "🏥 健康检查..."
    for i in {1..30}; do
        if docker-compose ps | grep "healthy\|Up" > /dev/null; then
            echo "✅ 服务健康检查通过"
            break
        elif [ $i -eq 30 ]; then
            echo "❌ 服务健康检查超时"
            docker-compose logs
            exit 1
        else
            echo "⏳ 等待健康检查... ($i/30)"
            sleep 2
        fi
    done
    
    # 测试 HTTP 访问
    echo ""
    echo "🌐 测试 HTTP 访问..."
    if curl -s -o /dev/null -w "%{http_code}" http://localhost:8081 | grep -q "200"; then
        echo "✅ HTTP 访问测试成功"
        echo "🌐 访问地址: http://localhost:8081"
    else
        echo "❌ HTTP 访问测试失败"
        echo "🔍 响应码: $(curl -s -o /dev/null -w "%{http_code}" http://localhost:8081)"
        docker-compose logs
        exit 1
    fi
    
else
    echo "❌ 容器启动失败"
    docker-compose logs
    exit 1
fi

echo ""
echo "🎉 所有测试通过！"
echo "📋 容器状态:"
docker-compose ps

echo ""
echo "🔧 清理测试环境..."
read -p "是否清理测试环境？(y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    docker-compose down
    echo "✅ 测试环境已清理"
else
    echo "💡 容器继续运行，访问地址: http://localhost:8081"
    echo "💡 停止命令: docker-compose down"
fi
