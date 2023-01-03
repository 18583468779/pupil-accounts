import { animated, useTransition } from '@react-spring/web'
import type { ReactNode } from 'react'
import { useRef } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import logo from '../assets/images/logo.svg';
export const WelcomeLayout: React.FC = () => {
  const map = useRef<Record<string, ReactNode>>({})
  const location = useLocation()
  const outlet = useOutlet()
  map.current[location.pathname] = outlet
  const transitions = useTransition(location.pathname, {
    from: { transform: location.pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 300 }
  })
  return (
   <div>
    <header>
      <img src={logo} />
      <h1>小学生记账</h1>
    </header>
    <div>
        {transitions((style, pathname) =>
        <animated.div key={pathname} style={style}>
          {map.current[pathname]}
        </animated.div>
      )}
    </div>
    <footer>尾巴</footer>
   </div>
  )

}

