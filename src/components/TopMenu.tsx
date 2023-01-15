import { animated, useSpring } from '@react-spring/web';
import { useState } from 'react';
import { CurrentUser } from './TopMenu/CurrentUser'
import { Menu } from './TopMenu/Menu'
interface Props{
  onClickMask?:()=>void
  visible?:boolean
}


export const TopMenu: React.FC<Props> = ({onClickMask,visible}) => {
  //动画
  const [maskVisible,setMaskVisible] = useState(visible)
  const maskStyles = useSpring({
      opacity:visible ? 1: 0,
      onStart:({value})=>{
        if(value.opacity < .1){
          setMaskVisible(true)
        }
      },
      onRest:({value})=>{
        if(value.opacity < .1){
          setMaskVisible(false)
        }
      }
   
  })
  const menuStyles = useSpring({
    opacity:visible ? 1: 0,
    transform:visible ? 'translateX(0%)' : 'translateX(-100%)' ,
    config:{
      duration:300
    }
 
})
const x = {
  ...maskStyles,
  visibility:(maskVisible ? 'visible' : 'hidden') as 'visible' | 'hidden'
}
  return (
    <>
    <animated.div style={x} fixed top-0 left-0 w='100%' h="100%" className='bg-black:75' z="[calc(var(--z-menu)-1)]" onClick={onClickMask}/>
    <animated.div style={menuStyles} fixed top-0 left-0 w="70vw" max-w-20em h-screen flex flex-col z="[var(--z-menu)]">
          <CurrentUser className="grow-0 shrink-0" />
          <Menu className="grow-1 shrink-1" />
      </animated.div></>
  )
}