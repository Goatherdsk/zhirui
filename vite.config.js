import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  
  // 路径解析
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
      '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
    },
  },
  
  // 生产构建配置
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    chunkSizeWarningLimit: 1000,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          mobx: ['mobx', 'mobx-react-lite'],
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const extType = info[info.length - 1];
          if (/\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)) {
            return `assets/media/[name]-[hash].${extType}`;
          }
          if (/\.(png|jpe?g|gif|svg|webp|avif)(\?.*)?$/i.test(assetInfo.name)) {
            return `assets/images/[name]-[hash].${extType}`;
          }
          if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash].${extType}`;
          }
          if (/\.(css)(\?.*)?$/i.test(assetInfo.name)) {
            return `assets/css/[name]-[hash].${extType}`;
          }
          return `assets/[name]-[hash].${extType}`;
        },
      },
    },
  },
  
  // 开发服务器配置
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    open: false,
    cors: true,
    proxy: {
      // 如果需要代理 API 请求
      // '/api': {
      //   target: 'http://localhost:3000',
      //   changeOrigin: true,
      //   rewrite: (path) => path.replace(/^\/api/, '')
      // }
    },
  },
  
  // 预览服务器配置
  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: false,
    open: false,
    cors: true,
  },
  
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
        // 全局变量
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
  },
  
  // 依赖优化
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'mobx', 'mobx-react-lite'],
  },
  
  // 环境变量
  define: {
    __DEV__: JSON.stringify(mode === 'development'),
    __PROD__: JSON.stringify(mode === 'production'),
  },
}))
