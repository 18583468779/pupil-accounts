import * as React from 'react'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import { TopNav } from '../components/TopNav'
import { TagForm } from './TagsNewPage/TagForm'
import { useAjax } from '../lib/ajax'
import { useParams } from 'react-router-dom'
export const TagsEditPage: React.FC = () => {

  const confirmable = (fn:()=>void) =>()=>{
    const result = window.confirm('您确认要删除吗？');
    if(result){
      fn()
    }
  } 

  const {destroy} = useAjax({showLoading:true,handleError:true});
  const params = useParams();
  const onDelete = confirmable(async ()=>{
    if(!params.id){ 
      throw new Error('id不能为空')
    }
    await destroy(`/api/v1/tags/${params.id}`);
    window.alert('删除成功')
  })
  return (
<div>
    <Gradient className="grow-0 shrink-0">
      <TopNav title="查看标签" icon={<Icon name="back" />} />
    </Gradient>
     <TagForm type="edit"/>
     <div px-16px p-b-32px>
        <button j-btn bg-red onClick={onDelete}>删除</button>
     </div>
  </div>)
}
