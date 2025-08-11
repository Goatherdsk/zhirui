#!/bin/bash

echo "🚗 智睿商务车产品数据转换器"
echo "==============================="

# 检查虚拟环境是否存在
if [ ! -d "converter_env" ]; then
    echo "❌ 虚拟环境不存在，请先运行 ./setup_converter.sh"
    exit 1
fi

# 激活虚拟环境
echo "🔗 激活虚拟环境..."
source converter_env/bin/activate

# 检查依赖是否安装
if ! python -c "import docx" 2>/dev/null; then
    echo "📦 安装缺失的依赖..."
    pip install python-docx Pillow
fi

# 运行转换脚本
echo "🔄 开始转换产品数据..."
python3 convert_products.py

# 检查转换结果
if [ -f "public/data/products.json" ]; then
    echo ""
    echo "✅ 转换成功完成！"
    echo "📊 查看转换结果："
    echo "   产品数量: $(cat public/data/products.json | grep -o '"id"' | wc -l)"
    echo "   数据文件: public/data/products.json"
    echo "   摘要文件: public/data/products_summary.json"
    echo "   图片目录: public/images/products/"
    
    # 显示文件大小
    if command -v du &> /dev/null; then
        echo "   文件大小: $(du -h public/data/products.json | cut -f1)"
    fi
else
    echo ""
    echo "❌ 转换失败，请检查错误信息"
fi

# 停用虚拟环境
deactivate
