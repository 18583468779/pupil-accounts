import * as React from 'react'
import { useDemoStore } from '../stores/useDemoStore'
export const Home: React.FC = () => {
  const { count, add, sub } = useDemoStore()
  return <div>
       <div>{count}</div>
       <div><button onClick={add}>+1</button></div>
       <div><button onClick={sub}>-1</button></div>
     </div>
}
