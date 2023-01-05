import { animated, useTransition } from '@react-spring/web'
import { ReactNode, useState } from 'react'
import { useRef } from 'react'
import { Link, useLocation, useOutlet } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

const linkMap: Record<string, string> = {
  '/welcome/1': '/welcome/2',
  '/welcome/2': '/welcome/3',
  '/welcome/3': '/welcome/4',
  '/welcome/4': '/welcome/xxx',
}
// linkMap 表驱动编程
export const WelcomeLayout: React.FC = () => {
  const map = useRef<Record<string, ReactNode>>({})
  const location = useLocation()
  const outlet = useOutlet()
  map.current[location.pathname] = outlet
  const [extraStyle, setExtraStyle] = useState<{ position: 'relative' | 'absolute' } > ({ position: 'relative' })
  const transitions = useTransition(location.pathname, {
    from: { transform: location.pathname === '/welcome/1' ? 'translateX(0%)' : 'translateX(100%)' },
    enter: { transform: 'translateX(0%)' },
    leave: { transform: 'translateX(-100%)' },
    config: { duration: 300 },
    // 动画定位的问题
    onStart: () => {
      setExtraStyle({ position: 'absolute' })
    },
    onRest: () => {
      setExtraStyle({ position: 'relative' })
    }
  })
  return (
   <div className='bg-#5f34bf h-screen flex flex-col justify-center items-strech pb-16px'>
    <header shrink-0 text-center pt-44px>
      <img src={logo} w-64px h-69px/>
      <h1 text="#D4D4EE">小学生记账</h1>
    </header>
    <main shrink-1 grow-1 relative>
        {transitions((style, pathname) =>
        <animated.div key={pathname} style={{ ...style, ...extraStyle }} w="100%" h="100%" p-16px flex>
         <div grow-1 bg-white rounded-8px flex justify-center items-center>
          {map.current[pathname]}
         </div>
        </animated.div>
        )}
    </main>
    <footer shrink-0 text-center text-24px text-white grid grid-cols-3 grid-rows-1>
      <Link style={{ gridArea: '1 / 2 / 2 / 3' }} to={linkMap[location.pathname]} text-white>下一页</Link>
      <Link style={{ gridArea: '1 / 3 / 2 / 4' }} to="/welcome/xxx" text-white>跳过</Link>
    </footer>
   </div>
  )
}

