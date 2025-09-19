import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AnimatedCard } from '../AnimatedCard'

/**
 * AnimatedCard 组件测试
 */
describe('AnimatedCard', () => {
  it('应该正确渲染卡片内容', () => {
    const mockProps = {
      title: '测试标题',
      description: '测试描述',
      rating: 4.5,
      likes: 100,
      views: 1000,
    }

    render(<AnimatedCard {...mockProps} />)

    // 验证标题和描述是否正确显示
    expect(screen.getByText('测试标题')).toBeInTheDocument()
    expect(screen.getByText('测试描述')).toBeInTheDocument()
    
    // 验证评分、点赞数和浏览数是否正确显示
    expect(screen.getByText('4.5')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('1000')).toBeInTheDocument()
  })

  it('应该使用默认值当某些属性未提供时', () => {
    const mockProps = {
      title: '测试标题',
      description: '测试描述',
    }

    render(<AnimatedCard {...mockProps} />)

    // 验证默认值
    expect(screen.getByText('4.5')).toBeInTheDocument() // 默认评分
    expect(screen.getByText('128')).toBeInTheDocument() // 默认点赞数
    expect(screen.getByText('1024')).toBeInTheDocument() // 默认浏览数
  })
})
