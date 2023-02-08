import * as React from 'react'
import type { ReactNode } from 'react'
import { EmojiInput } from './Ipunt/EmojiInput'
import { SmsCodeInput } from './Ipunt/SmsCodeInput'

type Props = {
  label?: string | ReactNode
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  error?: string
  disableError?:boolean
} & (
  | {type:'text'} 
  | {type:'emoji'} 
  | {type:'sms_code';request?:()=>Promise<unknown>} 
  | {type:'select'; options:{value:string;text:string}[]}
 )
export const Input: React.FC<Props> = (props) => {
  const { label, placeholder, type, value, onChange, error,disableError } = props
  const renderInput = () => {
    switch (type) {
      case undefined:
      case 'text':
        return <input j-input-text type={type} placeholder={placeholder}
     value={value} onChange={ e => onChange?.(e.target.value)} />
      case 'emoji':
        return <EmojiInput value={value} onChange={value => onChange?.(value)}/>
      case  'select':
        return  <select className='h-36px'  value={value}  onChange={ e => onChange?.(e.target.value)} >
                      {props.options.map(option => <option key={option.value} value={option.value}>{option.text}</option>)}
        </select>
      case 'sms_code':
        return (
          <SmsCodeInput value={value} placeholder={placeholder} request={props.request} onChange={onChange}/>
        )
      default:
        return null
    }
  }
  return (
   <div>
        <div flex flex-col gap-y-8px>
            <span text='18px'>{label}</span>
            { renderInput()}

            {disableError ? null : <span text-red text-12px>{ error || ' '}</span>}
        </div>
    </div>
  ) }
