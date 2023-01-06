import { Outlet, createBrowserRouter } from 'react-router-dom'
import { NotFound } from '../pages/NotFound'
import { Root } from '../components/Root'
import { Home } from '../pages/Home'
import { welcomeRoutes } from './welcomeRoutes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/',
    element: <Outlet />,
    errorElement: <NotFound />,
    children: [
      welcomeRoutes
    ],
  },
])
