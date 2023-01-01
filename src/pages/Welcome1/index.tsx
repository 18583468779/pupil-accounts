import * as React from 'react';
import { NavLink } from 'react-router-dom';
export const Welcome1: React.FC =() =>{
return <div>Welcome1  <NavLink to={"/welcome/2"}>跳转2</NavLink></div>;
}; 