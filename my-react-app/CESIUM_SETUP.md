# Cesium.js 配置说明

## 概述
本项目已成功集成 Cesium.js，用于3D地球可视化。以下是配置详情和使用说明。

## 配置内容

### 1. 依赖安装
```bash
npm install cesium @types/cesium vite-plugin-cesium
```

### 2. Vite 配置优化
- 使用 `vite-plugin-cesium` 自动处理 Cesium 静态资源
- 配置了分包策略，避免单个 chunk 过大
- 增大了 chunk 大小警告限制到 2048KB

### 3. TypeScript 支持
- 安装了 `@types/cesium` 提供完整的类型支持
- 添加了全局类型声明

### 4. Cesium Token 配置
已配置 Cesium Ion 访问令牌：
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4YzZmNjY0MS0yNmNjLTRkMDQtOTk2ZS04ZjM2NDUzNzc1NDAiLCJpZCI6Mjc1MzYzLCJpYXQiOjE3MzkzNTE0NTl9.OKBa5UnL_esutACrX6Q_UBTB9GQV5XmDD4V4Qyt5atQ
```

## 文件结构

```
src/
├── config/
│   └── cesium.ts              # Cesium 配置文件
├── components/
│   └── Cesium/
│       ├── CesiumViewer.tsx   # Cesium 查看器组件
│       └── index.ts           # 导出文件
├── views/
│   └── Cesium.tsx             # Cesium 页面
└── index.css                  # 包含 Cesium 样式
```

## 使用方法

### 1. 访问 Cesium 页面
在浏览器中访问：`http://localhost:5173/cesium`

### 2. 功能特性
- 3D 地球显示
- 默认视角：北京上空
- 示例实体：北京标记点和多边形
- 交互控制：
  - 添加随机点
  - 清除所有实体
  - 飞到北京

### 3. 组件使用
```tsx
import { CesiumViewer } from '@/components/Cesium'

<CesiumViewer 
  onViewerReady={(viewer) => {
    // viewer 准备就绪后的回调
    console.log('Cesium Viewer 已准备就绪')
  }}
  className="w-full h-full"
/>
```

## 打包优化

### 1. 分包策略
- React 相关库：`react-vendor`
- 路由相关库：`router-vendor`
- 状态管理：`redux-vendor`
- ECharts：`echarts-vendor`
- 工具库：`utils-vendor`

### 2. 构建结果
```
dist/assets/index-BJZnm-wk.css             14.17 kB │ gzip:   3.50 kB
dist/assets/react-vendor-HnKmhvXM.js       11.18 kB │ gzip:   3.96 kB
dist/assets/utils-vendor-CrFdsnXa.js       20.72 kB │ gzip:   6.68 kB
dist/assets/redux-vendor-d3xPNsO8.js       23.08 kB │ gzip:   8.45 kB
dist/assets/router-vendor-C4acjB1P.js      61.54 kB │ gzip:  20.23 kB
dist/assets/index-EwV_mcFv.js             187.06 kB │ gzip:  59.64 kB
dist/assets/echarts-vendor-D3x2i2vO.js  1,037.44 kB │ gzip: 337.24 kB
```

## 注意事项

1. **浏览器兼容性**：需要支持 WebGL 的现代浏览器
2. **网络要求**：需要访问 Cesium Ion 服务
3. **性能优化**：已启用按需渲染模式
4. **Token 管理**：生产环境建议使用环境变量管理 Token

## 开发命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 扩展功能

可以基于现有配置添加更多功能：
- 地形数据
- 3D 模型加载
- 动画效果
- 数据可视化
- 测量工具
- 图层管理
