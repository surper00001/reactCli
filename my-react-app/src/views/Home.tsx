import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { increment } from '@/features/counter/counterSlice'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { motion } from 'framer-motion'
import { FiCode, FiBarChart, FiGlobe, FiInfo } from 'react-icons/fi'

/**
 * 首页组件
 * 展示项目主要功能和导航
 */
export default function Home() {
  const count = useAppSelector((s: any) => s.counter.value)
  const dispatch = useAppDispatch()
  
  const navigationItems = [
    {
      title: '组件示例',
      description: 'Framer Motion, React Hook Form, React Query 等库的使用示例',
      icon: FiCode,
      link: '/examples',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: '图表展示',
      description: 'ECharts 图表组件示例',
      icon: FiBarChart,
      link: '/charts',
      color: 'from-green-500 to-green-600',
    },
    {
      title: '3D 地球',
      description: 'Cesium 3D 地球展示',
      icon: FiGlobe,
      link: '/cesium',
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: '关于项目',
      description: '项目介绍和技术栈说明',
      icon: FiInfo,
      link: '/about',
      color: 'from-orange-500 to-orange-600',
    },
  ]
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* 头部区域 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-sm border-b"
      >
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center">
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              React 脚手架项目
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
            >
              集成 Vite + React + TypeScript + Tailwind CSS + shadcn/ui + Redux Toolkit + React Query + Framer Motion
            </motion.p>
            
            {/* Redux 计数器演示 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center space-x-4"
            >
              <Input 
                placeholder="输入一些内容..." 
                className="w-64"
              />
              <Button 
                onClick={() => dispatch(increment())}
                className="bg-blue-600 hover:bg-blue-700"
              >
                计数: {count}
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* 导航卡片区域 */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {navigationItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to={item.link}>
                  <Card className="h-full cursor-pointer transition-all duration-200 hover:shadow-lg border-0 overflow-hidden">
                    <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} text-white`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* 技术栈展示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="max-w-7xl mx-auto px-6 pb-12"
      >
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
          <CardHeader>
            <CardTitle className="text-2xl text-center">技术栈</CardTitle>
            <CardDescription className="text-blue-100 text-center">
              项目使用的主要技术和库
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
              {[
                'React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 
                'shadcn/ui', 'Redux Toolkit', 'React Query', 'Framer Motion',
                'React Hook Form', 'React Router', 'ECharts', 'Cesium'
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + index * 0.05 }}
                  className="bg-white bg-opacity-20 rounded-lg py-2 px-3 text-sm font-medium"
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
