/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // 测试环境
    environment: 'jsdom',
    // 全局测试配置
    globals: true,
    // 测试文件匹配模式
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    // 排除的文件
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
    // 设置文件
    setupFiles: ['./src/test/setup.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})


