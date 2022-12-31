import React from 'react'
import ReactDOM from 'react-dom/client';
import { ErrorPage } from './components/ErrorPage';
import App from './App';
import { Outlet,createBrowserRouter,RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:'/',
    element: <div><Outlet /></div>,
    errorElement: <ErrorPage />,
    children:[
      {
        index:true,
        element: <div>主页</div>,
      },
      {
        path:'/1',
        element: <div>1</div>,
      },
      {
        path:'/2',
        element: <div>2</div>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
