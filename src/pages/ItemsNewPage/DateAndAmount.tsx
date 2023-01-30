import { useState } from 'react'
import { Icon } from '../../components/Icon'
import { Popup } from '../../components/Popup'
import { usePopup } from '../../hooks/usePopup'

type Props = {
  className?: string
}
export const DateAndAmount: React.FC<Props> = (props) => {
  const { className } = props
  const [isTouching,setIsTouching] = useState(false)
  const [lastY,setLastY] = useState(-1) //起始坐标
  const [translateY,setTranslateY] = useState(0) //移动距离
  const {popup,toggle} = usePopup(<div h="50vh" relative overflow-hidden
    onTouchStart={(e)=>{
      setIsTouching(true)
      setLastY(e.touches[0].clientY)
    }}
    onTouchMove={(e)=>{
      if(isTouching){
       const y = e.touches[0].clientY
       const dy = y - lastY; //移动的距离
       setTranslateY(translateY + dy)
       setLastY(y)
      }
    }}
    onTouchEnd={()=>{
      setIsTouching(false)
    }}
  >
    <div w-full absolute b-1 b-red h-36px top="[calc(50%-18px)]" />
    <div w-full absolute b-1 b-red h-36px top="[calc(50%-18px)]" >
      <ol style={{transform:`translateY(${translateY}px)` }} children-h-36px text-center children-leading-36px>
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

  </div>);
  return (
    <>
      <div className={className}>
        <div flex p-16px border-t-1px border-t="#ddd" >
          <span onClick={toggle} items-center flex gap-x-8px>
            <Icon name="calendar" className='w-24px h-24px grow-0 shrink-0'/>
            <span grow-0 shrink-0 text-12px color="#999"> 2022-02-03</span>
          </span>
            <code grow-1 shrink-1 text-right color='#53a867'>123456</code>
        </div>
        <div py-1px className={className} grid
          grid-cols="[repeat(4,1fr)]"
          grid-rows="[repeat(4,56px)]"
          children-b-none
          children-bg-white
          bg="#ddd"
          gap-1px
        >
          <button row-start-1 col-start-1 row-end-2 col-end-2>1</button>
          <button row-start-1 col-start-2 row-end-2 col-end-3>2</button>
          <button row-start-1 col-start-3 row-end-2 col-end-4>3</button>
          <button row-start-2 col-start-1 row-end-3 col-end-2>4</button>
          <button row-start-2 col-start-2 row-end-3 col-end-3>5</button>
          <button row-start-2 col-start-3 row-end-3 col-end-4>6</button>
          <button row-start-3 col-start-1 row-end-4 col-end-2>7</button>
          <button row-start-3 col-start-2 row-end-4 col-end-3>8</button>
          <button row-start-3 col-start-3 row-end-4 col-end-4>9</button>
          <button row-start-4 col-start-1 row-end-5 col-end-3>0</button>
          <button row-start-4 col-start-3 row-end-5 col-end-4>.</button>
          <button row-start-1 col-start-4 row-end-3 col-end-5>清空</button>
          <button row-start-3 col-start-4 row-end-5 col-end-5>提交</button>
        </div>
      </div>
     {popup}
    </>


  )
}
