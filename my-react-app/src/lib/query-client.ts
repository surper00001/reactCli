import { QueryClient } from '@tanstack/react-query'

// 创建 React Query 客户端配置
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 数据缓存时间（毫秒）
      staleTime: 5 * 60 * 1000, // 5分钟
      // 数据在缓存中保留的时间（毫秒）
      gcTime: 10 * 60 * 1000, // 10分钟
      // 重试次数
      retry: 3,
      // 是否在窗口重新获得焦点时重新获取数据
      refetchOnWindowFocus: false,
      // 是否在重新连接时重新获取数据
      refetchOnReconnect: true,
    },
    mutations: {
      // 重试次数
      retry: 1,
    },
  },
})
