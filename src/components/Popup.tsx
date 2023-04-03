import * as React from 'react'
import { animated, useSpring } from '@react-spring/web'
import { useState } from 'react'
type Props = {
  visible: boolean
  onClickMask?: () => void
  children: React.ReactNode
  position?: 'bottom' | 'center'
}
export const Popup: React.FC<Props> = ({ visible, onClickMask, children ,position='bottom'}) => {
    const [maskVisible, setMaskVisible] = useState(visible)
    const maskStyles = useSpring({
      opacity: visible ? 1 : 0,
      onStart: ({ value }) => {
        if (value.opacity < 0.1) { setMaskVisible(true) }
      },
      onRest: ({ value }) => {
        if (value.opacity < 0.1) { setMaskVisible(false) }
      }
    })
    const wrapperStyles = useSpring({
      opacity: visible ? 1 : 0,
      transform:position === 'bottom' ? (visible ? 'translateY(0%)' : 'translateY(100%)') : "",
    })
    const styles = {
      ...maskStyles,
      visibility: (maskVisible ? 'visible' : 'hidden') as 'visible' | 'hidden'
    }
    return <div touch-none>
              <animated.div style={styles} onClick={onClickMask} fixed top-0 left-0 h-full w-full className="bg-black:75" z="[calc(var(--z-popup)-1)]" touch-none></animated.div>
               {position === 'bottom' ? 
                <animated.div style={wrapperStyles} fixed bottom-0 left-0 w-full min-h-100px bg-white rounded-t-10px z="[calc(var(--z-popup))]" >
                  {children}
                </animated.div>
                :   
                <animated.div style={wrapperStyles} fixed bg-white left="[50%]" top="[50%]" translate-x="-50%" translate-y="-50%" rounded-10px  z="[calc(var(--z-popup))]" >
                  {children}
                </animated.div>  
            }
           
          </div>
}
