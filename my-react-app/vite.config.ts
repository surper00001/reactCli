import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import cesium from 'vite-plugin-cesium'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  const host = env.VITE_DEV_HOST || 'localhost'
  const port = Number(env.VITE_DEV_PORT || 5173)

  const proxyTarget = env.VITE_PROXY_TARGET || env.VITE_API_BASE_URL || 'http://localhost:3000'
  const proxyPrefix = env.VITE_PROXY_PREFIX || '/api'

  return {
    plugins: [
      react(),
      // Cesium插件，自动处理静态资源
      cesium()
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      host: '0.0.0.0',
      port,
      open: true,
      proxy: {
        [proxyPrefix]: {
          target: proxyTarget,
          changeOrigin: true,
          secure: false,
          rewrite: (p) => p.replace(new RegExp(`^${proxyPrefix}`), ''),
        },
      },
    },
    preview: {
      host,
      port: Number(env.VITE_PREVIEW_PORT || 5174),
      open: true,
      proxy: {
        [proxyPrefix]: {
          target: proxyTarget,
          changeOrigin: true,
          secure: false,
          rewrite: (p) => p.replace(new RegExp(`^${proxyPrefix}`), ''),
        },
      },
    },
    build: {
      sourcemap: mode !== 'production',
      outDir: 'dist',
      assetsDir: 'assets',
      chunkSizeWarningLimit: 2048, // 增大警告限制，因为Cesium体积较大
      // 优化打包配置，实现tree-shaking
      rollupOptions: {
        output: {
          // 手动分包，避免单个chunk过大
          manualChunks: {
            // 将React相关库打包到单独的chunk
            'react-vendor': ['react', 'react-dom'],
            // 将路由相关库打包到单独的chunk
            'router-vendor': ['react-router-dom'],
            // 将状态管理相关库打包到单独的chunk
            'redux-vendor': ['@reduxjs/toolkit', 'react-redux'],
            // 将ECharts相关库打包到单独的chunk
            'echarts-vendor': ['echarts', 'echarts-for-react'],
            // 将工具库打包到单独的chunk
            'utils-vendor': ['axios', 'clsx', 'tailwind-merge'],
          },
        },
      },
      // 启用压缩
      minify: 'terser',
      terserOptions: {
        compress: {
          // 移除console.log（生产环境）
          drop_console: mode === 'production',
          // 移除debugger
          drop_debugger: true,
        },
      },
    },
    css: {
      devSourcemap: mode !== 'production',
    },
    // 优化依赖预构建
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        '@reduxjs/toolkit',
        'react-redux',
        'echarts',
        'echarts-for-react',
        'cesium',
      ],
    },
  }
})
