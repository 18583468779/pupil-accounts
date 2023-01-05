import { RefObject, useEffect, useRef, useState } from "react"

export const useSwipe = (elementRef:RefObject<HTMLElement> | null) =>{
    //elementRef是一个ref
    const [direction,setDirection] = useState<'' | 'left' | 'right'>('')
    const x = useRef(-1) //初始化坐标,去判断用户是左滑还是右滑
    
    const onTouchStart = (e:TouchEvent)=>{
        e.preventDefault();
       x.current = e.touches[0].clientX
        // console.log('onTouchStart')
    }
    const onTouchMove = (e:TouchEvent)=>{
        const newX = e.touches[0].clientX
        const d =  newX - x.current //用户滑动的距离
        //如果 d 大于 0 ，说明是向右滑动，d等于0 说明是没滑动
        if(Math.abs(d) <3){
            setDirection('')
        }else if(d > 0){
            setDirection('right')
        }else{
            setDirection('')
            setDirection('left')
        }
        // console.log('onTouchMove')
    }
    const onTouchEnd = (e:TouchEvent)=>{
        // console.log('onTouchEnd')
    }
    useEffect(()=>{
        if(!elementRef.current){return}
        elementRef.current.addEventListener('touchstart',onTouchStart)
        elementRef.current.addEventListener('touchmove',onTouchMove)
        elementRef.current.addEventListener('touchend',onTouchEnd)
        return ()=>{
            //页面卸载时，清除事件
            if(!elementRef.current){return}
            elementRef.current.removeEventListener('touchstart',onTouchStart)
            elementRef.current.removeEventListener('touchmove',onTouchMove)
            elementRef.current.removeEventListener('touchend',onTouchEnd)
        }
    },[])
    return {direction}
}