import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '@/views/Home'
import About from '@/views/About'
import Charts from '@/views/Charts'
import CesiumPage from '@/views/Cesium'
import { Examples } from '@/views/Examples'

/**
 * 应用路由配置
 * 定义所有页面路由
 */
const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/charts', element: <Charts /> },
  { path: '/cesium', element: <CesiumPage /> },
  { path: '/examples', element: <Examples /> },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
