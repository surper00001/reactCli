import axios from 'axios'
import { API_BASE_URL } from '@/config/env'

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 3000,
})

api.interceptors.request.use((config) => {
  // Attach token if present
  const token = localStorage.getItem('token')
  if (token) {
    config.headers = config.headers ?? {}
    config.headers['Authorization'] = `Bearer ${token}`
  }
  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  },
)

export default api
