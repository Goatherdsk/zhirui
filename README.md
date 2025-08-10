# 智锐商务车官方网站

一个现代化的商务车官方网站，采用React、React Router和MobX技术栈开发，提供高端、奢华的用户体验。

## ✨ 特性

- 🎨 **高端设计**: 参考zart.ru的设计风格，追求奢华与简洁
- 📱 **响应式设计**: 完美适配PC端和移动端设备
- ⚡ **现代技术栈**: React 18 + Vite + React Router + MobX
- 🎭 **优雅动画**: 流畅的页面过渡和交互动效
- 🌟 **用户体验**: 直观的导航和优秀的视觉效果

## 🛠️ 技术栈

- **前端框架**: React 18
- **构建工具**: Vite
- **路由管理**: React Router DOM v6
- **状态管理**: MobX + mobx-react-lite
- **样式方案**: CSS3 + CSS Variables
- **开发工具**: ESLint

## 📁 项目结构

```
src/
├── components/          # 可复用组件
│   ├── Header.jsx      # 导航头部
│   ├── Hero.jsx        # 英雄区域
│   ├── ProductShowcase.jsx  # 产品展示
│   └── ServiceHighlights.jsx # 服务亮点
├── pages/              # 页面组件
│   ├── Home.jsx        # 首页
│   ├── Products.jsx    # 产品页
│   ├── Services.jsx    # 服务页
│   ├── About.jsx       # 关于页
│   └── Contact.jsx     # 联系页
├── stores/             # MobX状态管理
│   └── AppStore.js     # 应用状态
├── styles/             # 全局样式
└── assets/             # 静态资源
```

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:5173](http://localhost:5173) 查看网站。

### 构建生产版本

```bash
npm run build
```

### 代码检查

```bash
npm run lint
```

## 🎨 设计系统

### 色彩方案
- **主色调**: 深色系 (#1a1a1a, #2d2d2d)
- **强调色**: 金色/香槟色 (#c9a96e, #f4e4bc)  
- **文本色**: 白色/浅灰 (#ffffff, #f5f5f5)
- **辅助色**: 深蓝 (#1e3a8a)

### 字体
- 主字体: 'Helvetica Neue', Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif

## 📱 响应式断点

- 移动端: `< 768px`
- 平板端: `768px - 1024px`  
- 桌面端: `> 1024px`

## 🔧 开发规范

- 使用函数式组件和React Hooks
- MobX用于全局状态管理
- 组件文件使用PascalCase命名
- CSS文件使用kebab-case命名
- 所有组件支持响应式设计
- 代码注释使用中文

## 🌟 页面功能

- **首页**: 品牌展示、产品亮点、服务介绍
- **产品中心**: 商务车型号展示、详细配置
- **专属服务**: 定制服务、售后支持
- **关于我们**: 公司介绍、品牌故事
- **联系我们**: 联系方式、经销商信息

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交Issue和Pull Request来帮助改进项目。
