import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { FiUser, FiMail, FiPhone, FiMessageSquare, FiSend } from 'react-icons/fi'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

// 表单验证模式
const contactFormSchema = z.object({
  name: z.string().min(2, '姓名至少需要2个字符').max(50, '姓名不能超过50个字符'),
  email: z.string().email('请输入有效的邮箱地址'),
  phone: z.string().min(10, '电话号码至少需要10位数字').regex(/^[0-9+\-\s()]+$/, '请输入有效的电话号码'),
  message: z.string().min(10, '消息至少需要10个字符').max(500, '消息不能超过500个字符'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

/**
 * 联系表单组件
 * 展示 React Hook Form 的使用方法和表单验证
 */
export const ContactForm: React.FC = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  // 表单提交处理函数
  const onSubmit = async (data: ContactFormData) => {
    try {
      // 模拟 API 调用
      console.log('提交的表单数据:', data)
      
      // 模拟网络延迟
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // 显示成功消息
      alert('表单提交成功！我们会尽快与您联系。')
      
      // 重置表单
      form.reset()
    } catch (error) {
      console.error('表单提交失败:', error)
      alert('提交失败，请稍后重试。')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto p-6"
    >
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            联系我们
          </CardTitle>
          <CardDescription className="text-center">
            请填写以下信息，我们会尽快回复您
          </CardDescription>
        </CardHeader>
        
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* 姓名字段 */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <FiUser className="w-4 h-4" />
                      <span>姓名</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="请输入您的姓名"
                        {...field}
                        className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 邮箱字段 */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <FiMail className="w-4 h-4" />
                      <span>邮箱</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="请输入您的邮箱地址"
                        {...field}
                        className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 电话字段 */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <FiPhone className="w-4 h-4" />
                      <span>电话</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="请输入您的电话号码"
                        {...field}
                        className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 消息字段 */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center space-x-2">
                      <FiMessageSquare className="w-4 h-4" />
                      <span>消息</span>
                    </FormLabel>
                    <FormControl>
                      <textarea
                        placeholder="请输入您要发送的消息..."
                        rows={4}
                        {...field}
                        className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* 提交按钮 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>提交中...</span>
                    </>
                  ) : (
                    <>
                      <FiSend className="w-4 h-4" />
                      <span>发送消息</span>
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </motion.div>
  )
}


