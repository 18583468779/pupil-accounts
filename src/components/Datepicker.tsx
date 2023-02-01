import * as React from 'react'
import { useState } from 'react'
import { time} from '../lib/time'

type Props = {
  start?: Date
  end?: Date
  value?: Date
  itemHeight?:number
}
export const Datepicker: React.FC<Props> = (props) => {
  const {start,end,value,itemHeight=36} = props
  const startTime =start ? time(start) : time().add(-10,'year')
  const endTime =end ? time(end) : time().add(10,'year')
  const valueTime = value? time(value) : time();
  if(endTime.timestamp <= startTime.timestamp){
      throw new Error('结束时间必须晚于开始时间')
  }

  const yearList = Array.from({length:endTime.year- startTime.year +1}).map((_,index)=> startTime.year + index)
  const index = yearList.indexOf(valueTime.year);
  
  const [isTouching, setIsTouching] = useState(false)
  const [lastY, setLastY] = useState(-1) // 起始坐标
  const [translateY, _setTranslateY] = useState(index * -itemHeight) // 移动距离
  const setTranslateY = (y: number) => {
    y = Math.min(y, 0)
    y = Math.max(y, (yearList.length - 1) * -itemHeight)
    _setTranslateY(y)
  }
  return <div h="50vh" relative overflow-hidden
  onTouchStart={(e) => {
    setIsTouching(true)
    setLastY(e.touches[0].clientY)
  }}
  onTouchMove={(e) => {
    if (isTouching) {
      const y = e.touches[0].clientY
      const dy = y - lastY // 移动的距离
      setTranslateY(translateY + dy)
      setLastY(y)
    }
  }}
  onTouchEnd={() => {
    const remainder = translateY % itemHeight
    let y = translateY - remainder
    if (Math.abs(remainder) > 18) {
      y += itemHeight * (remainder > 0 ? 1 : -1)
    }
    setTranslateY(y)
    setIsTouching(false)
  }}
>
  <div w-full absolute b-1 b-red top="[calc(50%-18px)]" style={{height:itemHeight}}/>
  <div w-full absolute b-1 b-red  top="[calc(50%-18px)]" style={{height:itemHeight}}>
    <ol style={{ transform: `translateY(${translateY}px)` }} text-center >
     {yearList.map(year => <li key={year} style={{height:itemHeight,lineHeight:`${itemHeight}px`}}>{year}</li>)}
    </ol>
  </div>

</div>
}
