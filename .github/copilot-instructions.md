# Copilot 项目指导文档

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## 项目概述
这是一个高端商务车官方网站项目，采用现代化的技术栈开发。

## 技术栈
- **框架**: React 18
- **构建工具**: Vite
- **路由**: React Router DOM v6
- **状态管理**: MobX + mobx-react-lite
- **样式**: CSS3 + CSS Modules / Styled Components
- **设计风格**: 参考 zart.ru，追求高端、奢华、简洁的设计风格

## 设计要求
- **响应式设计**: 完美适配PC端和移动端
- **高端视觉效果**: 大图背景、优雅动画、奢华配色
- **用户体验**: 流畅的页面过渡、直观的导航
- **性能优化**: 图片懒加载、代码分割、SEO友好

## 页面结构
1. **首页 (Home)**: 品牌展示、主要产品亮点、英雄区域
2. **产品页 (Products)**: 商务车型号展示、详细配置
3. **服务页 (Services)**: 定制服务、售后支持
4. **关于我们 (About)**: 公司介绍、品牌故事
5. **联系我们 (Contact)**: 联系方式、经销商信息

## 开发规范
- 使用函数式组件和React Hooks
- MobX stores用于全局状态管理
- 组件文件使用PascalCase命名
- CSS文件使用kebab-case命名
- 所有组件都应支持响应式设计
- 代码注释使用中文

## 色彩方案
- 主色：深色调 (#1a1a1a, #2d2d2d)
- 辅助色：金色/香槟色 (#c9a96e, #f4e4bc)
- 文本色：白色/浅灰 (#ffffff, #f5f5f5)
- 强调色：深蓝 (#1e3a8a)

## 组件开发建议
- 所有组件都应该可复用
- 使用TypeScript类型定义（如果需要的话）
- 移动端优先的响应式设计
- 考虑SEO优化
- 实现平滑的页面过渡动画
