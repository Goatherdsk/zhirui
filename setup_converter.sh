#!/bin/bash

echo "🚗 智睿商务车产品数据转换工具安装脚本"
echo "================================================"

# 检查Python是否安装
if ! command -v python3 &> /dev/null; then
    echo "❌ Python3 未安装，请先安装Python3"
    exit 1
fi

echo "✅ 发现Python3: $(python3 --version)"

# 创建虚拟环境
echo "🔧 创建虚拟环境..."
python3 -m venv converter_env

# 激活虚拟环境
echo "🔗 激活虚拟环境..."
source converter_env/bin/activate

# 升级pip
echo "⬆️  升级pip..."
pip install --upgrade pip

# 安装依赖包
echo "📦 安装依赖包..."
pip install python-docx Pillow

# 创建必要的目录
echo "📁 创建输出目录..."
mkdir -p public/data
mkdir -p public/images/products

echo "🎉 安装完成！"
echo ""
echo "使用方法："
echo "  source converter_env/bin/activate"
echo "  python3 convert_products.py"
echo "  deactivate"
echo ""
echo "或者使用一键转换脚本："
echo "  ./run_converter.sh"
echo ""
echo "输出文件："
echo "  - public/data/products.json (产品数据)"
echo "  - public/data/products_summary.json (产品摘要)"
echo "  - public/images/products/ (提取的图片)"
