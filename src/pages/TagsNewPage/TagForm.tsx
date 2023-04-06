import * as React from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { Input } from '../../components/Input'
import { FormError, hasError, validate } from '../../lib/validate'
import { useCreateTagStore } from '../../stores/useCreateTagStore'
import { useAjax } from '../../lib/ajax'
import { AxiosError } from 'axios'

type Props = {
  type: 'create' | 'edit'
}
export const TagForm: React.FC<Props> =  (props) => {
  const { type } = props
  const { data, error, setData, setError } = useCreateTagStore();
  const nav = useNavigate();
  const [searchParams] = useSearchParams();
  const kind = searchParams.get('kind') ?? '';
  const {post} = useAjax({showLoading:true,handleError:true});
  useEffect(() => {
    if (type !== 'create') { return }
    if (!kind) {
      throw new Error('kind必填')
    }
    if (kind !== 'expenses' && kind !== 'income') { throw new Error('kind必须是expenses或者income') }
    setData({ kind })
  }, [searchParams])
  const params = useParams();

  useEffect( () => {
    if (type !== 'edit') { return }
    const id = params.id
    if (!id) {
      throw new Error('id必填')
    }
    // 发起请求

  }, [])

  const onSubmitError = (error:AxiosError<{errors:FormError<typeof data>}>)=>{
    if(error.response){
      const {status} = error.response;
      if(status === 422){
        const {errors} = error.response.data;
        setError(errors)
      }
    }
    throw error
  }

  const onSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault()
    const newError = validate(data, [{
      key: 'kind', type: 'required', message: '标签类型必填'
    }, {
      key: 'name', type: 'required', message: '标签名必填'
    }, {
      key: 'sign', type: 'length', max: 4, message: '标签名最多4个字符'
    }, {
      key: 'sign', type: 'required', message: '符号必填'
    }])
    setError(newError)
    if (!hasError(newError)) {
      // 发起请求
      // console.log('success')
      const resource = await post<Resource<Tag>>('/api/v1/tags',data).catch(onSubmitError);
      setData(resource.data.resource);
      nav(`/items/new?kind=${kind}`)
    }
  }
  return (
<form onSubmit={onSubmit} px-16px py-32px flex flex-col gap-y-8px>
    <Input type='text' label="标签名" error={error.name?.[0]} value={data.name}
     onChange={name => setData({ name })}
    />
    <Input type='emoji' label={`图标 ${data.sign}`} value={data.sign} onChange={sign => setData({ sign })} error={error.sign?.[0]}/>
    <p text-center py-24px>记账时长按标签，进行编辑</p>
        <div>
            <button j-btn>确定</button>
        </div>
  </form>)
}
