import type { ReactNode } from 'react'
import { useState } from 'react'
import { Popup } from '../components/Popup'

type Options={
  initVisible?:boolean
  children:ReactNode
  position?:'bottom'|'center'
}

export const usePopup = (options:Options) => {
  const {initVisible = false,children,position} = options;
  const [visible, setVisible] = useState(initVisible)
  const popup = <Popup visible={visible} position={position} onClickMask={() => setVisible(false)} >
        {children}
    </Popup>
  return {
    popup,
    show() {
      setVisible(true)
    },
    hide() {
      setVisible(false)
    },
    toggle() {
      setVisible(!visible)
    }
  }
}
