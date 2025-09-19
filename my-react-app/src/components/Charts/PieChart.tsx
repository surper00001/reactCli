import React from 'react'
import ReactECharts from 'echarts-for-react'
import type { EChartsOption } from 'echarts'

/**
 * 饼图组件
 * 展示数据占比分布
 */
interface PieChartProps {
  /** 图表标题 */
  title?: string
  /** 图表宽度 */
  width?: string | number
  /** 图表高度 */
  height?: string | number
  /** 自定义数据 */
  data?: Array<{
    name: string
    value: number
  }>
}

const PieChart: React.FC<PieChartProps> = ({
  title = '数据分布图',
  width = '100%',
  height = 400,
  data
}) => {
  // 默认示例数据
  const defaultData = [
    { name: '移动端', value: 1048 },
    { name: '桌面端', value: 735 },
    { name: '平板端', value: 580 },
    { name: '其他', value: 484 }
  ]

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
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      top: 'middle',
      data: chartData.map(item => item.name)
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['60%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: chartData
      }
    ]
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

export default PieChart
