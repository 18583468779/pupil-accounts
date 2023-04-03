import {createBrowserRouter } from 'react-router-dom'
import useSWR,{preload} from 'swr'
import { Root } from '../components/Root'
import { WelcomeLayout } from '../layouts/WelcomeLayout'
import { Home } from '../pages/Home'
import { ItemsNewPage } from '../pages/ItemsNewPage'
import { ItemsPage } from '../pages/ItemsPage'
import { SignInPage } from '../pages/SignInPage'
import { StatisticsPage } from '../pages/StatisticsPage'
import { TagsEditPage } from '../pages/TagsEditPage'
import { TagsNewPage } from '../pages/TagsNewPage'
import { Welcome1 } from '../pages/Welcome1'
import { Welcome2 } from '../pages/Welcome2'
import { Welcome3 } from '../pages/Welcome3'
import { Welcome4 } from '../pages/Welcome4'
import axios, { AxiosError } from 'axios'
import { ItemsPageError } from '../pages/itemsPageError'
import { ErrorPage } from '../pages/ErrorPage'

export const router = createBrowserRouter([
  { path: '/', element: <Root />, },
  { path: '/home', element: <Home title="首页" /> },
  {
    path: '/welcome',
    element: <WelcomeLayout />,
    children: [
      { path: '1', element: <Welcome1 /> },
      { path: '2', element: <Welcome2 /> },
      { path: '3', element: <Welcome3 /> },
      { path: '4', element: <Welcome4 /> },
    ]
  },
  { 
    path: '/items', 
    element: <ItemsPage />,
    errorElement: <ItemsPageError />,
    loader:async ()=>{
      const onError = (error:AxiosError)=>{
        if(error.response?.status === 401){
          throw new Error('unauthorized')
        }
        throw error
      }
      return preload('/api/v1/items?page=1',async (path)=>{
        const response = await axios.get<Resources<Item>>(path).catch(onError);
        if(response.data.resources.length > 0){
          return response.data
        }else{
          throw new Error('data_empty')
        }
      })
    }
  },
  { 
    path: '/items/new', 
    element: <ItemsNewPage />,
    errorElement: <ErrorPage />,
    loader :async ()=> preload('/api/v1/me',(path) => axios.get<Resources<User>>(path).then(r => r.data,err=> {throw new Error('unauthorized')}))
  },
  { path: '/tags/new', element: <TagsNewPage /> },
  { path: '/tags/:id', element: <TagsEditPage /> },
  { path: '/sign_in', element: <SignInPage /> },
  { path: '/statistics', element: <StatisticsPage /> },
  { path: '/export', element: <div>敬请期待</div> },
  { path: '/tags', element: <div>标签</div> },
  { path: '/noty', element: <div>敬请期待</div> },
])
