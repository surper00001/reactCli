import React from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { motion, AnimatePresence } from 'framer-motion'
import { FiUser, FiMail, FiPhone, FiMapPin, FiEdit, FiTrash2, FiRefreshCw } from 'react-icons/fi'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

// 用户数据类型定义
interface User {
  id: number
  name: string
  email: string
  phone: string
  address: {
    city: string
    country: string
  }
  avatar?: string
}

// 模拟 API 函数
const fetchUsers = async (): Promise<User[]> => {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // 模拟用户数据
  return [
    {
      id: 1,
      name: '张三',
      email: 'zhangsan@example.com',
      phone: '+86 138 0013 8000',
      address: { city: '北京', country: '中国' },
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 2,
      name: '李四',
      email: 'lisi@example.com',
      phone: '+86 139 0013 9000',
      address: { city: '上海', country: '中国' },
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    },
    {
      id: 3,
      name: '王五',
      email: 'wangwu@example.com',
      phone: '+86 137 0013 7000',
      address: { city: '广州', country: '中国' },
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
    },
  ]
}

const deleteUser = async (userId: number): Promise<void> => {
  // 模拟网络延迟
  await new Promise(resolve => setTimeout(resolve, 500))
  console.log(`删除用户 ID: ${userId}`)
}

/**
 * 用户卡片组件
 */
const UserCard: React.FC<{ user: User; onDelete: (id: number) => void }> = ({ user, onDelete }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="overflow-hidden">
        <CardHeader className="pb-3">
          <div className="flex items-center space-x-4">
            <motion.img
              src={user.avatar}
              alt={user.name}
              className="w-12 h-12 rounded-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            />
            <div>
              <CardTitle className="text-lg">{user.name}</CardTitle>
              <CardDescription>用户 ID: {user.id}</CardDescription>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-3">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <FiMail className="w-4 h-4" />
            <span>{user.email}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <FiPhone className="w-4 h-4" />
            <span>{user.phone}</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <FiMapPin className="w-4 h-4" />
            <span>{user.address.city}, {user.address.country}</span>
          </div>
          
          <div className="flex space-x-2 pt-2">
            <Button size="sm" variant="outline" className="flex-1">
              <FiEdit className="w-4 h-4 mr-1" />
              编辑
            </Button>
            <Button 
              size="sm" 
              variant="destructive" 
              className="flex-1"
              onClick={() => onDelete(user.id)}
            >
              <FiTrash2 className="w-4 h-4 mr-1" />
              删除
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

/**
 * 用户列表组件
 * 展示 React Query 的数据获取、缓存和状态管理
 */
export const UserList: React.FC = () => {
  const queryClient = useQueryClient()

  // 获取用户列表
  const {
    data: users = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    staleTime: 5 * 60 * 1000, // 5分钟内数据被认为是新鲜的
  })

  // 删除用户 mutation
  const deleteUserMutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      // 删除成功后，重新获取用户列表
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
    onError: (error) => {
      console.error('删除用户失败:', error)
    },
  })

  const handleDeleteUser = (userId: number) => {
    if (window.confirm('确定要删除这个用户吗？')) {
      deleteUserMutation.mutate(userId)
    }
  }

  const handleRefresh = () => {
    refetch()
  }

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <CardContent className="flex items-center justify-center py-12">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"
            />
            <span className="ml-3 text-lg">加载用户数据中...</span>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (isError) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Card>
          <CardContent className="text-center py-12">
            <div className="text-red-500 text-lg mb-4">
              加载用户数据失败
            </div>
            <div className="text-gray-600 mb-4">
              {error?.message || '未知错误'}
            </div>
            <Button onClick={handleRefresh} variant="outline">
              <FiRefreshCw className="w-4 h-4 mr-2" />
              重试
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">用户列表</h2>
          <p className="text-gray-600">使用 React Query 管理用户数据</p>
        </div>
        <Button onClick={handleRefresh} variant="outline">
          <FiRefreshCw className="w-4 h-4 mr-2" />
          刷新
        </Button>
      </div>

      <AnimatePresence mode="popLayout">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onDelete={handleDeleteUser}
            />
          ))}
        </div>
      </AnimatePresence>

      {users.length === 0 && (
        <Card>
          <CardContent className="text-center py-12">
            <FiUser className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <div className="text-lg text-gray-600">暂无用户数据</div>
          </CardContent>
        </Card>
      )}
    </motion.div>
  )
}


