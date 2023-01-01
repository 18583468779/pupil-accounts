import * as React from 'react';
import { NavLink } from 'react-router-dom';
export const Welcome3: React.FC =() =>{
return <div>Welcome3  <NavLink to={"/welcome/4"}>跳转4</NavLink></div>;
}; 