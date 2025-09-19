import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiHeart, FiUsers, FiMail, FiArrowRight } from 'react-icons/fi'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatedCardList, ContactForm, UserList } from '@/components/Examples'

/**
 * 示例页面组件
 * 展示各种库的使用方法和示例
 */
export const Examples: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'animations' | 'forms' | 'queries'>('animations')

  const tabs = [
    {
      id: 'animations' as const,
      label: '动画效果',
      icon: FiHeart,
      description: 'Framer Motion 动画示例',
    },
    {
      id: 'forms' as const,
      label: '表单处理',
      icon: FiMail,
      description: 'React Hook Form 表单示例',
    },
    {
      id: 'queries' as const,
      label: '数据查询',
      icon: FiUsers,
      description: 'React Query 数据管理示例',
    },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'animations':
        return <AnimatedCardList />
      case 'forms':
        return <ContactForm />
      case 'queries':
        return <UserList />
      default:
        return <AnimatedCardList />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 页面头部 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-sm border-b"
      >
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4"
            >
              <FiCode className="w-8 h-8 text-blue-600" />
            </motion.div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              组件示例展示
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              这里展示了项目中使用的各种库和组件的实际应用示例，
              包括动画效果、表单处理和数据查询等功能。
            </p>
          </div>
        </div>
      </motion.div>

      {/* 标签页导航 */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id
            
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  flex items-center space-x-3 px-6 py-4 rounded-lg border-2 transition-all duration-200
                  ${isActive 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg' 
                    : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:shadow-md'
                  }
                `}
              >
                <Icon className="w-5 h-5" />
                <div className="text-left">
                  <div className="font-medium">{tab.label}</div>
                  <div className={`text-sm ${isActive ? 'text-blue-100' : 'text-gray-500'}`}>
                    {tab.description}
                  </div>
                </div>
                <FiArrowRight className={`w-4 h-4 transition-transform duration-200 ${
                  isActive ? 'translate-x-1' : ''
                }`} />
              </motion.button>
            )
          })}
        </motion.div>

        {/* 内容区域 */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {renderContent()}
        </motion.div>
      </div>

      {/* 底部信息卡片 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="max-w-7xl mx-auto px-6 pb-8"
      >
        <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
          <CardHeader>
            <CardTitle className="text-2xl">技术栈说明</CardTitle>
            <CardDescription className="text-blue-100">
              本项目使用了以下主要技术栈和库
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">Framer Motion</div>
                <div className="text-blue-100 text-sm">动画库</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">React Hook Form</div>
                <div className="text-blue-100 text-sm">表单处理</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">React Query</div>
                <div className="text-blue-100 text-sm">数据管理</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">Shadcn/ui</div>
                <div className="text-blue-100 text-sm">UI 组件</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
