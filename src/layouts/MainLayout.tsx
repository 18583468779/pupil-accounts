import * as React from 'react';
import { Outlet } from 'react-router-dom';
export const MainLayout: React.FC =() =>{
return <div><Outlet /> </div>;
}; 

// 网站的架子