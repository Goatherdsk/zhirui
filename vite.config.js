import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // CSS Modules 配置
      localsConvention: 'camelCase', // 类名转换为驼峰命名
      generateScopedName: '[name]__[local]__[hash:base64:5]', // 类名生成规则
    },
    preprocessorOptions: {
      less: {
        // LESS 配置选项
        javascriptEnabled: true,
        // 可以在这里添加全局变量或mixins
        additionalData: `
          @primary-color: #c9a96e;
          @primary-dark: #8b7355;
          @secondary-dark: #2d2d2d;
          @accent-gold: #c9a96e;
          @accent-light-gold: #f4e4bc;
          @gold-light: #f4e4bc;
          @accent-blue: #1e3a8a;
          @background-black: #1a1a1a;
          @background-dark: #2d2d2d;
          @text-white: #ffffff;
          @text-light: #f5f5f5;
          @text-gray: #cccccc;
          @text-color: #f5f5f5;
          @border-color: rgba(201, 169, 110, 0.2);
        `
      }
    }
  }
})
