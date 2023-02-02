import * as React from 'react'
import { useEffect, useRef, useState } from 'react'
import { time } from '../lib/time'

type Props = {
  start?: Date
  end?: Date
  value?: Date
  onChange?:(value:Date) =>void
}

export const Datepicker: React.FC<Props> = (props) => {
  const { start, end, value,onChange} = props
  const [,update] = useState({}) //强行state更新组件
  const startTime = start ? time(start) : time().add(-10, 'year')
  const endTime = end ? time(end) : time().add(10, 'year')
  // const valueTime = value ? time(value) : time() //每次都重新渲染到当前年份，用useref解决
  const valueTime = useRef(value ? time(value) : time()) 
  const yearList = Array.from({ length: endTime.year - startTime.year + 1 }).map((_, index) => startTime.year + index)
  const monthList = Array.from({length:12}).map((_,index)=>index + 1)
  const dayList = Array.from({length:valueTime.current.lastDayOfMonth.day}).map((_,index)=>index + 1)


  if (endTime.timestamp <= startTime.timestamp) {
    throw new Error('结束时间必须晚于开始时间')
  }
  return (<div>
            <div flex justify-between p-8px border-b-1 b="#f3f3f3" children-p-8px>
              <span>取消</span>
              <span>时间选择</span>
              <span>确定</span>
            </div>
            <div flex>
              <Column className="grow-1" items={yearList} value={valueTime.current.year} onChange={year => {valueTime.current.year = year;update({});onChange?.(valueTime.current.date)}}/>
              <Column className="grow-1" items={monthList} value={valueTime.current.month} onChange={month => {valueTime.current.month = month;update({});onChange?.(valueTime.current.date)}}/>
              <Column className="grow-1" items={dayList} value={valueTime.current.day} onChange={day => {valueTime.current.day = day;update({});onChange?.(valueTime.current.date)}}/>
            </div>
          </div>
    
)
}
type ColumnProps = {
  className?:string
  itemHeight?: number
  items: number[]
  value:number 
  onChange:(value:number)=>void
}
export const Column: React.FC<ColumnProps> =(props) =>{
  const {items,value, className, itemHeight = 36 ,onChange} = props
   useEffect(()=>{
    const index = items.indexOf(value)
    setTranslateY(index * -itemHeight)
    // console.log('组件副作用,组件挂载完成后才调用，所以可以调用setTranslateY函数')
   },[value])
  const index = items.indexOf(value)
  const [isTouching, setIsTouching] = useState(false)
  const [lastY, setLastY] = useState(-1) // 起始坐标
  const [translateY, _setTranslateY] = useState(index * -itemHeight) // 移动距离
  const setTranslateY = (y: number) => {
    y = Math.min(y, 0)
    y = Math.max(y, (items.length - 1) * -itemHeight)
    _setTranslateY(y)
  }


return (
      <div h="50vh" relative overflow-hidden className={className}
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
          onChange(items[Math.abs(y / itemHeight)])
        }}
      >
        <div w-full absolute border-b-2px border-t-2px b="#eee" top="[calc(50%-18px)]" style={{ height: itemHeight }}>
          <ol style={{ transform: `translateY(${translateY}px)` }} text-center >
          {items.map(item => <li key={item} flex justify-center items-center style={{ height: itemHeight, lineHeight: `${itemHeight}px` }}>{item}</li>)}
          </ol>
        </div>

      </div>)
} 