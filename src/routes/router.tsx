import { createBrowserRouter } from 'react-router-dom'
import { NotFound } from '../pages/NotFound'
import { MainLayout } from '../layouts/MainLayout'
import { welcomeRoutes } from './welcomeRoutes'

export const router = createBrowserRouter([
  {
    path:'/home',
    element: <div>home</div>
  },
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      welcomeRoutes
    ],
  },
])
