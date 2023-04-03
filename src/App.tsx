import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
export const App: React.FC =() =>{
return (
        <div>    
            <RouterProvider router={router} /> 
        </div>)
} 