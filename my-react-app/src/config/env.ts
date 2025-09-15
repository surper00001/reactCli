export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'
export const PROXY_TARGET = import.meta.env.VITE_PROXY_TARGET || API_BASE_URL
export const PROXY_PREFIX = import.meta.env.VITE_PROXY_PREFIX || '/api'
export const DEV_HOST = import.meta.env.VITE_DEV_HOST || 'localhost'
export const DEV_PORT = Number(import.meta.env.VITE_DEV_PORT || 5173)
export const PREVIEW_PORT = Number(import.meta.env.VITE_PREVIEW_PORT || 5174)



