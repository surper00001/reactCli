import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FiHeart, FiStar, FiEye } from 'react-icons/fi'

/**
 * 动画卡片组件
 * 展示 Framer Motion 的基本动画效果
 */
interface AnimatedCardProps {
  title: string
  description: string
  imageUrl?: string
  rating?: number
  likes?: number
  views?: number
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  title,
  description,
  imageUrl = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  rating = 4.5,
  likes = 128,
  views = 1024,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer"
    >
      <Card className="overflow-hidden">
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="relative h-48 overflow-hidden"
        >
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* 悬停时显示的覆盖层 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-white text-black px-4 py-2 rounded-full font-medium"
            >
              查看详情
            </motion.button>
          </motion.div>
        </motion.div>

        <CardHeader>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-between text-sm text-gray-600"
          >
            <div className="flex items-center space-x-1">
              <FiStar className="text-yellow-500" />
              <span>{rating}</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <FiHeart className="text-red-500" />
              <span>{likes}</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <FiEye className="text-blue-500" />
              <span>{views}</span>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

/**
 * 动画列表组件
 * 展示多个卡片的交错动画效果
 */
export const AnimatedCardList: React.FC = () => {
  const cards = [
    {
      title: '美丽的风景',
      description: '这是一张展示自然美景的图片',
      rating: 4.8,
      likes: 256,
      views: 2048,
    },
    {
      title: '城市夜景',
      description: '繁华都市的夜晚灯光',
      rating: 4.6,
      likes: 189,
      views: 1536,
    },
    {
      title: '海洋风光',
      description: '蔚蓝大海的壮丽景色',
      rating: 4.9,
      likes: 312,
      views: 2560,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5,
            delay: index * 0.1 // 交错动画效果
          }}
        >
          <AnimatedCard {...card} />
        </motion.div>
      ))}
    </div>
  )
}


