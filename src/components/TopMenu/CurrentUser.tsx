import * as React from 'react';
import { Link } from 'react-router-dom';
interface Props{
    className?:string
}

export const CurrentUser: React.FC<Props> =({className}) =>{
return (
<Link to="/sign_in" className={className} bg="#5c33be" block text-white w="100%" pt-32px pb-44px px-16px>
     <h2 text='24px'>未登录用户</h2>
     <div text="#cea1ff">点击这里登录</div>
 </Link>)
} 