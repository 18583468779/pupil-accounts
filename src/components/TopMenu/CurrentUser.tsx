import * as React from 'react';
interface Props{
    className?:string
}

export const CurrentUser: React.FC<Props> =({className}) =>{
return (
<div className={className} bg="#5c33be" text-white w="100%" pt-32px pb-44px px-16px>
     <h2 text='24px'>未登录用户</h2>
     <div text="#cea1ff">点击这里登录</div>
 </div>)
} 