import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  const host = env.VITE_DEV_HOST || 'localhost'
  const port = Number(env.VITE_DEV_PORT || 5173)

  const proxyTarget = env.VITE_PROXY_TARGET || env.VITE_API_BASE_URL || 'http://localhost:3000'
  const proxyPrefix = env.VITE_PROXY_PREFIX || '/api'

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    server: {
      host,
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
      chunkSizeWarningLimit: 1024,
    },
    css: {
      devSourcemap: mode !== 'production',
    },
  }
})
