# React 脚手架项目

一个功能完整的 React 脚手架项目，集成了现代前端开发所需的各种工具和库。

## 🚀 技术栈

### 核心框架
- **React 19** - 最新的 React 版本
- **TypeScript** - 类型安全的 JavaScript
- **Vite** - 快速的构建工具

### UI 和样式
- **Tailwind CSS** - 实用优先的 CSS 框架
- **shadcn/ui** - 高质量的 React 组件库
- **Framer Motion** - 强大的动画库
- **React Icons** - 丰富的图标库

### 状态管理和数据获取
- **Redux Toolkit** - 可预测的状态管理
- **React Query** - 强大的数据获取和缓存库
- **React Hook Form** - 高性能的表单处理

### 路由和工具
- **React Router** - 声明式路由
- **Axios** - HTTP 客户端
- **ECharts** - 数据可视化图表库
- **Cesium** - 3D 地球和地图库

### 开发和测试
- **Vitest** - 快速的单元测试框架
- **Testing Library** - 简单而完整的测试工具
- **ESLint** - 代码质量检查
- **Prettier** - 代码格式化
- **Stylelint** - CSS 代码检查

## 📦 安装和运行

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

### 运行测试
```bash
# 运行所有测试
npm run test

# 运行测试并生成覆盖率报告
npm run test:coverage

# 运行测试 UI
npm run test:ui
```

### 代码检查
```bash
# ESLint 检查
npm run lint

# 样式检查
npm run lint:styles

# 代码格式化
npm run format
```

## 📁 项目结构

```
src/
├── app/                    # Redux store 配置
├── components/             # 可复用组件
│   ├── ui/                # shadcn/ui 基础组件
│   ├── Examples/          # 示例组件
│   ├── Charts/            # 图表组件
│   └── Cesium/            # 3D 地球组件
├── config/                # 配置文件
├── features/              # Redux 功能模块
├── hooks/                 # 自定义 Hooks
├── lib/                   # 工具函数和配置
├── routes/                # 路由配置
├── test/                  # 测试配置
└── views/                 # 页面组件
```

## 🎯 功能特性

### 1. 动画效果 (Framer Motion)
- 页面进入动画
- 悬停和点击动画
- 列表交错动画
- 组件过渡动画

### 2. 表单处理 (React Hook Form)
- 表单验证
- 错误处理
- 性能优化
- 类型安全

### 3. 数据管理 (React Query)
- 数据缓存
- 后台更新
- 乐观更新
- 错误重试

### 4. UI 组件 (shadcn/ui)
- 可访问性支持
- 主题定制
- 响应式设计
- 类型安全

### 5. 测试 (Vitest + Testing Library)
- 单元测试
- 组件测试
- 模拟 API
- 覆盖率报告

## 🔧 配置说明

### Vite 配置
- TypeScript 支持
- 路径别名 (@/ 指向 src/)
- 环境变量
- 构建优化

### Tailwind CSS 配置
- 自定义主题
- 响应式断点
- 动画支持
- 暗色模式支持

### ESLint 配置
- React Hooks 规则
- TypeScript 规则
- 导入排序
- 代码质量检查

## 📝 使用示例

### 创建动画组件
```tsx
import { motion } from 'framer-motion'

const AnimatedComponent = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    内容
  </motion.div>
)
```

### 使用 React Hook Form
```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, '姓名不能为空'),
  email: z.string().email('邮箱格式不正确'),
})

const MyForm = () => {
  const form = useForm({
    resolver: zodResolver(schema),
  })

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* 表单字段 */}
    </form>
  )
}
```

### 使用 React Query
```tsx
import { useQuery } from '@tanstack/react-query'

const fetchUsers = async () => {
  const response = await fetch('/api/users')
  return response.json()
}

const UserList = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  })

  if (isLoading) return <div>加载中...</div>
  if (error) return <div>加载失败</div>

  return <div>{/* 渲染用户列表 */}</div>
}
```

## 🌟 最佳实践

1. **组件设计**: 使用 TypeScript 接口定义组件 props
2. **状态管理**: 合理使用 Redux 和 React Query
3. **样式管理**: 优先使用 Tailwind CSS 类名
4. **动画效果**: 适度使用动画，避免过度设计
5. **测试覆盖**: 为核心功能编写测试用例
6. **代码质量**: 使用 ESLint 和 Prettier 保持代码一致性

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**注意**: 这是一个脚手架项目，请根据实际需求进行定制和扩展。