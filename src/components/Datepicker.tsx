import * as React from 'react'
import { useState } from 'react'
type Props = {
  strat?: Date
  end?: Date
  value?: Date
}
export const Datepicker: React.FC<Props> = (props) => {
  const {star,end,value} = props
  const [isTouching, setIsTouching] = useState(false)
  const [lastY, setLastY] = useState(-1) // 起始坐标
  const [translateY, setTranslateY] = useState(0) // 移动距离
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
    const remainder = translateY % 36
    let y = translateY - remainder
    if (Math.abs(remainder) < 18) {
      y += 36 * (remainder > 0 ? 1 : -1)
    }
    setTranslateY(y)
    setIsTouching(false)
  }}
>
  <div w-full absolute b-1 b-red h-36px top="[calc(50%-18px)]" />
  <div w-full absolute b-1 b-red h-36px top="[calc(50%-18px)]" >
    <ol style={{ transform: `translateY(${translateY}px)` }} children-h-36px text-center children-leading-36px>
      <li>123</li>
      <li>123</li>
      <li>42343</li>
      <li>345</li>
      <li>356</li>
      <li>456</li>
      <li>456</li>
      <li>234</li>
      <li>234</li>
      <li>234</li>
      <li>123</li>
      <li>123</li>
      <li>42343</li>
      <li>345</li>
      <li>356</li>
      <li>456</li>
      <li>456</li>
      <li>234</li>
      <li>234</li>
      <li>234</li>
    </ol>
  </div>

</div>
}
