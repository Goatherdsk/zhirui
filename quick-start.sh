#!/bin/bash

# 快速启动智睿网站脚本 - 支持自定义端口

# 默认端口
DEFAULT_PORT=8080

# 获取用户指定的端口
if [ $# -eq 0 ]; then
    PORT=$DEFAULT_PORT
    echo "🚀 使用默认端口: $PORT"
else
    PORT=$1
    echo "🚀 使用指定端口: $PORT"
fi

# 检查端口是否被占用
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
    echo "❌ 端口 $PORT 已被占用"
    echo "🔍 占用进程:"
    lsof -Pi :$PORT -sTCP:LISTEN
    echo ""
    echo "💡 请选择其他端口或停止占用进程"
    exit 1
fi

echo "✅ 端口 $PORT 可用"

# 设置环境变量
export HOST_PORT=$PORT

# 构建并启动
echo "🔨 构建并启动服务..."
docker-compose up -d --build

# 等待服务启动
echo "⏳ 等待服务启动..."
sleep 5

# 检查服务状态
if docker-compose ps | grep "Up" > /dev/null; then
    echo "✅ 服务启动成功！"
    echo ""
    echo "🌐 访问地址: http://localhost:$PORT"
    echo "📱 移动端测试: http://$(ipconfig getifaddr en0):$PORT"
    echo ""
    echo "📋 服务状态:"
    docker-compose ps
    echo ""
    echo "🔧 管理命令:"
    echo "  停止服务: docker-compose down"
    echo "  查看日志: docker-compose logs -f"
    echo "  重启服务: docker-compose restart"
else
    echo "❌ 服务启动失败"
    echo "🔍 查看日志:"
    docker-compose logs
fi
