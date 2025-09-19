import React from 'react'
import { LineChart, PieChart, BarChart } from '@/components/Charts'

/**
 * 图表展示页面
 * 展示各种类型的ECharts图表示例
 */
const Charts: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* 页面标题 */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            ECharts 图表展示
          </h1>
          <p className="text-gray-600">
            这里展示了使用ECharts库创建的各种图表类型
          </p>
        </div>

        {/* 图表网格布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 折线图 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              销售趋势图
            </h2>
            <LineChart
              title=""
              height={350}
              data={{
                categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月'],
                series: [
                  {
                    name: '销售额',
                    data: [120, 200, 150, 80, 70, 110, 130, 180],
                    color: '#5470c6'
                  },
                  {
                    name: '利润',
                    data: [60, 100, 75, 40, 35, 55, 65, 90],
                    color: '#91cc75'
                  }
                ]
              }}
            />
          </div>

          {/* 饼图 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              用户设备分布
            </h2>
            <PieChart
              title=""
              height={350}
              data={[
                { name: '移动端', value: 1048 },
                { name: '桌面端', value: 735 },
                { name: '平板端', value: 580 },
                { name: '其他', value: 484 }
              ]}
            />
          </div>

          {/* 柱状图 */}
          <div className="bg-white rounded-lg shadow-md p-6 lg:col-span-2">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              产品销量对比
            </h2>
            <BarChart
              title=""
              height={350}
              data={{
                categories: ['产品A', '产品B', '产品C', '产品D', '产品E', '产品F'],
                series: [
                  {
                    name: '2023年',
                    data: [23, 24, 18, 25, 27, 22],
                    color: '#5470c6'
                  },
                  {
                    name: '2024年',
                    data: [30, 25, 20, 28, 35, 26],
                    color: '#91cc75'
                  }
                ]
              }}
            />
          </div>
        </div>

        {/* 功能说明 */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            功能特性
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">响应式设计</h3>
              <p className="text-blue-600 text-sm">
                图表支持响应式布局，适配不同屏幕尺寸
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">交互功能</h3>
              <p className="text-green-600 text-sm">
                支持鼠标悬停、点击等交互操作
              </p>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-800 mb-2">自定义配置</h3>
              <p className="text-purple-600 text-sm">
                支持自定义颜色、样式和数据
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Charts

