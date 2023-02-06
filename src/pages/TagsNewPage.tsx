import * as React from 'react'
import { useState } from 'react'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import { Input } from '../components/Input'
import { TopNav } from '../components/TopNav'

export const TagsNewPage: React.FC = () => {
  const onSubmit = () => {}
  const [emoji, setEmoji] = useState('😀')
  return (
    <div>
      <Gradient className="grow-0 shrink-0">
        <TopNav title="记一笔" icon={<Icon name="back" />} />
      </Gradient>
      <form onSubmit={onSubmit} px-16px py-32px flex flex-col gap-y-8px>
        <Input label="标签名" error="标签名太长"/>
        <Input type='emoji' label={`图标 ${emoji}`} value={emoji} onChange={v => setEmoji(v)}/>
        <p text-center py-24px>记账时长按标签，进行编辑</p>
            <div>
                <button j-btn>确定</button>
            </div>
      </form>
    </div>
  )
}
