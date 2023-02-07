
import * as echarts from 'echarts'
import * as React from 'react'

import { useEffect, useRef } from 'react'
type Props = {
  className?: string
  items?: { x: number | string; y: number }[]
}
export const LineChart: React.FC<Props> = (props) => {
  const { className, items } = props
  const div = useRef<HTMLDivElement>(null)
  const xItems = items?.map(item => item.x)
  const yItems = items?.map(item => item.y)
  useEffect(() => {
    if (!div.current) { return }
    const myChart = echarts.init(div.current)
    myChart.setOption({
      tooltip: {
        trigger:'axis',
        show: true,
        formatter:([{axisValue,data}]:any)=>{
          const parts = axisValue.split('-')
          const label = parts[0] + '年' + parts[1] + '月' + parts[2] + '日'
          const _data = data === null ? '无数据' : data;
          return `${label}<br/>${_data}元`
        }
      },
      grid: {
        left: 16,
        top: 8,
        right: 16,
        bottom: 20
      },
      xAxis: {
        type: 'category',
        data: xItems,
        axisLabel: { // 操作x坐标
          formatter(label: string) {
            const _index = label.indexOf('-')
            return label.slice(_index + 1)
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          show: false
        }
      },
      series: [
        {
          data: yItems,
          type: 'line',
          itemStyle: {
            // color: 'red'
          },
          emphasis:{
            itemStyle:{
              color:'#009866'
            }
          }
        }
      ]
    })
  }, [])
  return <div ref={div} className={className}></div>
}
