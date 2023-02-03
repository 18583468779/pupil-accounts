import * as React from 'react'
import { animated, useSpring } from '@react-spring/web'
import { useState } from 'react'
type Props = {
  visible: boolean
  onClickMask?: () => void
  children: React.ReactNode
}
export const Popup: React.FC<Props> = ({ visible, onClickMask, children }) => {
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
  const menuStyles = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0%)' : 'translateY(100%)',
  })
  const styles = {
    ...maskStyles,
    visibility: (maskVisible ? 'visible' : 'hidden') as 'visible' | 'hidden'
  }
  return <div>
            <animated.div style={styles} onClick={onClickMask} fixed top-0 left-0 h-full w-full className="bg-black:75" z="[calc(var(--z-popup)-1)]" touch-none></animated.div>
            <animated.div style={menuStyles} fixed bottom-0 left-0 w-full min-h-100px bg-white rounded-t-10px z="[calc(var(--z-popup))]" touch-none>
              {children}
            </animated.div>
  </div>
}
