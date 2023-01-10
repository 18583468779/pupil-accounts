import { Outlet, createBrowserRouter } from 'react-router-dom'
import { NotFound } from '../pages/NotFound'
import { Root } from '../components/Root'
import { Home } from '../pages/Home'
import { welcomeRoutes } from './welcomeRoutes'
import { Items } from '../pages/Items'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: '/home',
    element: <Home title="主页"/>
  },
  {
    path: '/',
    element: <Outlet />,
    errorElement: <NotFound />,
    children: [
      welcomeRoutes
    ],
  },
  {
    path:'items',
    element: <Items />
  }
])
