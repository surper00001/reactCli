import React from 'react'
import ReactECharts from 'echarts-for-react'
import type { EChartsOption } from 'echarts'

/**
 * 柱状图组件
 * 展示不同类别的数据对比
 */
interface BarChartProps {
  /** 图表标题 */
  title?: string
  /** 图表宽度 */
  width?: string | number
  /** 图表高度 */
  height?: string | number
  /** 自定义数据 */
  data?: {
    categories: string[]
    series: Array<{
      name: string
      data: number[]
      color?: string
    }>
  }
}

const BarChart: React.FC<BarChartProps> = ({
  title = '销售数据对比',
  width = '100%',
  height = 400,
  data
}) => {
  // 默认示例数据
  const defaultData = {
    categories: ['产品A', '产品B', '产品C', '产品D', '产品E'],
    series: [
      {
        name: '2023年',
        data: [23, 24, 18, 25, 27],
        color: '#5470c6'
      },
      {
        name: '2024年',
        data: [30, 25, 20, 28, 35],
        color: '#91cc75'
      }
    ]
  }

  const chartData = data || defaultData

  // ECharts配置选项
  const option: EChartsOption = {
    title: {
      text: title,
      left: 'center',
      textStyle: {
        fontSize: 16,
        fontWeight: 'bold'
      }
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      data: chartData.series.map(item => item.name),
      top: 30
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '15%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: chartData.categories,
      axisLine: {
        lineStyle: {
          color: '#e0e0e0'
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#e0e0e0'
        }
      },
      splitLine: {
        lineStyle: {
          color: '#f0f0f0'
        }
      }
    },
    series: chartData.series.map(item => ({
      name: item.name,
      type: 'bar',
      data: item.data,
      itemStyle: {
        color: item.color,
        borderRadius: [4, 4, 0, 0]
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }))
  }

  return (
    <div className="w-full">
      <ReactECharts
        option={option}
        style={{ width, height }}
        opts={{ renderer: 'canvas' }}
      />
    </div>
  )
}

export default BarChart
