import React from 'react'
import ReactECharts from 'echarts-for-react'
import type { EChartsOption } from 'echarts'

/**
 * 折线图组件
 * 展示销售数据的趋势变化
 */
interface LineChartProps {
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

const LineChart: React.FC<LineChartProps> = ({
  title = '销售趋势图',
  width = '100%',
  height = 400,
  data
}) => {
  // 默认示例数据
  const defaultData = {
    categories: ['1月', '2月', '3月', '4月', '5月', '6月'],
    series: [
      {
        name: '销售额',
        data: [120, 200, 150, 80, 70, 110],
        color: '#5470c6'
      },
      {
        name: '利润',
        data: [60, 100, 75, 40, 35, 55],
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
        type: 'cross'
      },
      formatter: (params: any) => {
        let result = `${params[0].axisValue}<br/>`
        params.forEach((param: any) => {
          result += `${param.marker}${param.seriesName}: ${param.value}<br/>`
        })
        return result
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
      boundaryGap: false,
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
      type: 'line',
      data: item.data,
      smooth: true,
      lineStyle: {
        color: item.color
      },
      itemStyle: {
        color: item.color
      },
      areaStyle: {
        opacity: 0.1,
        color: item.color
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

export default LineChart
