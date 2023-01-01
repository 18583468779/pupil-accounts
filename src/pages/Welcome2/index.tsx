import * as React from 'react';
import { NavLink } from 'react-router-dom';
export const Welcome2: React.FC =() =>{
return <div>Welcome2  <NavLink to={"/welcome/3"}>跳转3</NavLink></div>;
}; 