import type { FormEventHandler, ReactNode } from 'react'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import { Tabs } from '../components/Tabs'
import { TopNav } from '../components/TopNav'
import s from './ItemsNewPage.module.scss'
import { ItemAmount } from './ItemsNewPage/ItemAmount'
import { Tags } from './ItemsNewPage/Tags'
import { useCreateItemStore } from '../stores/useCreateItemStore'
import { ItemDate } from './ItemsNewPage/ItemDate'
import { hasError, validate } from '../lib/validate'
import { useAjax } from '../lib/ajax'

export const ItemsNewPage: React.FC = () => {
  const {data,error,setData,setError} = useCreateItemStore();
  const tabItems: { key: Item['kind']; text: string; element?: ReactNode }[]= [
      { key: 'expenses', text: '支出', 
        element: <Tags kind="expenses" value={data.tag_ids} onchange={(ids)=>setData({tag_ids:ids})} /> },
      { key: 'income', text: '收入', 
        element: <Tags kind="income"  value={data.tag_ids} onchange={(ids)=>setData({tag_ids:ids})} /> }
  ]
  const {post} = useAjax({showLoading:true,handleError:true})
  const onSubmit:FormEventHandler<HTMLFormElement> =async (e) =>{
    e.preventDefault()
   const error = validate(data,[
      {key:'kind',type:'required',message:"请选择类型：收入还是支出"},
      {key:'tag_ids',type:'required',message:"请选择一个标签"},
      {key:'happen_at',type:'required',message:"请选择一个时间"},
      {key:'amount',type:'required',message:"请输入金额"},
      {key:'amount',type:'notEqual',value:0,message:"金额不能为0"},
    ]);
    setError(error);
    if(hasError(error)){
      const message = Object.values(error).flat().join('\n');
      window.alert(message)
    }else{
     const response = await post<Resource<Item>>('/api/v1/items',data);
     console.log(response.data.resource)
    }
  }
  return (
    <form className={s.wrapper} h-screen flex flex-col onSubmit={onSubmit}>
      <Gradient className="grow-0 shrink-0">
        <TopNav title="记一笔" icon={<Icon name="back" />} />
      </Gradient>
      <Tabs tabItems={tabItems} className="text-center grow-1 shrink-1 overflow-hidden" classPrefix='itemsNewPage'
        value={data.kind!}
        onChange={(tabItem) => { setData({kind:tabItem}) }} />
      <ItemAmount className="grow-0 shrink-0" value={data.amount} onChange={(amount)=>{setData({amount})}}
        ItemDate={<ItemDate value={data.happen_at} onChange={(d)=>{setData({happen_at:d})}}/>} 
      />
    </form>
  )
}
