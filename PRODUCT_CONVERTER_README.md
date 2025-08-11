# 智睿商务车产品数据转换工具

## 🚗 项目概述

这个工具可以将`public/products/`目录下的DOCX文件自动转换为JSON格式的产品数据，供React应用使用。

## 📁 文件结构

```
zhirui/
├── public/
│   ├── products/          # 原始DOCX文件
│   ├── data/             # 转换后的JSON数据
│   │   ├── products.json
│   │   └── products_summary.json
│   └── images/
│       └── products/     # 提取的产品图片
├── src/
│   ├── utils/
│   │   └── productManager.js  # 产品数据管理器
│   └── pages/
│       └── Products/     # 产品页面组件
├── convert_products.py   # 核心转换脚本
├── setup_converter.sh    # 安装脚本
├── run_converter.sh      # 一键运行脚本
└── requirements.txt      # Python依赖
```

## 🔧 安装与使用

### 1. 安装依赖

```bash
# 运行安装脚本
./setup_converter.sh
```

或者手动安装：

```bash
# 创建虚拟环境
python3 -m venv converter_env
source converter_env/bin/activate

# 安装依赖
pip install python-docx Pillow
```

### 2. 运行转换

```bash
# 一键转换（推荐）
./run_converter.sh
```

或者手动运行：

```bash
# 激活虚拟环境
source converter_env/bin/activate

# 运行转换脚本
python3 convert_products.py

# 停用虚拟环境
deactivate
```

## 📊 转换结果

### 生成的文件

1. **`public/data/products.json`** - 完整的产品数据
2. **`public/data/products_summary.json`** - 产品统计摘要
3. **`public/images/products/`** - 从DOCX中提取的图片

### 产品数据结构

```json
{
  "id": "zx_yh_fdk",
  "name": "智锐·尊行版",
  "subtitle": "曜影黑 × 凡戴克咖",
  "category": "premium",
  "series": "尊行版",
  "exteriorColor": "曜影黑",
  "interiorColor": "凡戴克咖",
  "price": "面议",
  "description": "高端商务车型...",
  "features": ["配置1", "配置2", "..."],
  "specs": {
    "engine": "发动机信息",
    "power": "功率信息"
  },
  "highlights": ["亮点1", "亮点2"],
  "images": {
    "exterior": ["/images/products/xxx_1.jpg"],
    "interior": ["/images/products/xxx_2.jpg"],
    "details": ["/images/products/xxx_3.jpg"]
  },
  "gradient": "linear-gradient(...)",
  "badge": "PREMIUM",
  "availability": "available",
  "launchDate": "2024-01-01",
  "warranty": "3年或10万公里"
}
```

## 🎯 React组件集成

转换完成后，React应用会自动使用新的产品数据：

### ProductManager使用

```javascript
import { productManager, categoryConfig } from '../utils/productManager';

// 加载数据
const products = await productManager.loadData();

// 获取分类产品
const premiumProducts = productManager.getProductsByCategory('premium');

// 搜索产品
const searchResults = productManager.searchProducts('尊行版');
```

### 在Products页面中

- 产品会自动从JSON数据加载
- 图片会从`/images/products/`路径显示
- 支持按分类筛选
- 支持不同的徽章类型和颜色配置

## 🎨 产品分类

- **executive** - 行政商务
- **premium** - 奢华尊享  
- **tech** - 科技智能
- **luxury** - 至尊版（未来扩展）

## 🏷️ 徽章类型

- **HOT** - 热销（红色）
- **NEW** - 新品（绿色）
- **LUXURY** - 奢华（橙色）
- **PREMIUM** - 尊享（金色）
- **TECH** - 科技（蓝色）
- **EXECUTIVE** - 行政（深蓝）
- **EXCLUSIVE** - 限量（棕色）

## 🔍 文件名解析规则

脚本会自动解析DOCX文件名：

- `尊行版 曜影黑，凡戴克咖.docx` → 系列：尊行版，外观：曜影黑，内饰：凡戴克咖
- `幻影白，牡蛎白.docx` → 系列：标准版，外观：幻影白，内饰：牡蛎白

## 🎨 颜色映射

外观色和内饰色会自动映射到对应的CSS渐变：

- **曜影黑** → `linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)`
- **幻影白** → `linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)`
- **尊行版** → `linear-gradient(135deg, #c9a96e 0%, #f4e4bc 100%)`

## 🚀 性能优化

- 图片自动压缩为JPG格式
- 支持懒加载
- 按需加载产品数据
- 图片分类存储（外观/内饰/细节）

## 🛠️ 故障排除

### 常见问题

1. **Python环境问题**
   ```bash
   # 确保Python 3.7+
   python3 --version
   ```

2. **依赖安装失败**
   ```bash
   # 使用虚拟环境
   python3 -m venv converter_env
   source converter_env/bin/activate
   pip install --upgrade pip
   pip install python-docx Pillow
   ```

3. **DOCX文件读取失败**
   - 检查文件是否损坏
   - 确保文件不是受密码保护的

4. **图片提取失败**
   - 检查DOCX文件中是否包含图片
   - 确保有足够的磁盘空间

### 日志查看

转换过程中的详细日志会显示在终端，包括：
- 处理进度
- 图片提取状态
- 错误信息
- 最终统计

## 📈 扩展功能

### 未来计划

1. **批量处理优化** - 并行处理多个文件
2. **图片优化** - 自动压缩和格式转换
3. **数据验证** - 自动检查数据完整性
4. **增量更新** - 只处理修改过的文件
5. **Web界面** - 可视化的转换和管理界面

### 自定义配置

可以修改`convert_products.py`中的配置：

```python
# 颜色映射
self.color_gradients = {
    "新颜色": "linear-gradient(...)"
}

# 分类映射
self.category_mapping = {
    "新系列": "new_category"
}
```

## 📞 技术支持

如果遇到问题，请检查：
1. 文件路径是否正确
2. Python环境是否配置正确
3. DOCX文件格式是否标准
4. 磁盘空间是否充足

转换完成后，您的React应用将拥有完整的产品数据支持！🎉
