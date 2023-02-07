import * as React from 'react';
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

type Props = {
    className?: string
    items?:{ x: string, y: number}[]
  }
export const PieChart: React.FC<Props> =(props) =>{
const {className,items} = props
const div = useRef<HTMLDivElement>(null);
console.log(items)
useEffect(()=>{
    if (!div.current) { return }
    const myChart = echarts.init(div.current)
    myChart.setOption({
        tooltip: {
          trigger: 'item'
        },
        grid:{
            top:0,
            left:0,
            right:0,
            bottom:0
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: items?.map(item => ({value:item.y,name:item.x})),
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      });
},[])



return (
<div>
     <div ref={div} className={className}></div>
 </div>)
} 