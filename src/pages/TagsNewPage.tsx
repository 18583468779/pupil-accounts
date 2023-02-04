import * as React from "react";
import { useState } from "react";
import { Gradient } from "../components/Gradient";
import { Icon } from "../components/Icon";
import { Input } from "../components/Input";
import { TopNav } from "../components/TopNav";
import { emojis } from "../lib/emojis";

export const TagsNewPage: React.FC = () => {
  const [emojiKind,setEmojiKind] = useState('表情')
  const onSubmit = () => {};
  return (
    <div>
      <Gradient className="grow-0 shrink-0">
        <TopNav title="记一笔" icon={<Icon name="back" />} />
      </Gradient>
      <form onSubmit={onSubmit} px-16px py-32px flex flex-col gap-y-8px>
      <Input label="标签名" error="标签名太长"/>
        <div flex flex-col gap-y-8px>
            <span text-18px>符号 <span text-24px>🤤</span> </span>
            <div b-1 b="#5c33be" rounded-8px>
                <div flex flex-nowrap p-8px gap-x-16px overflow-auto>
                {
                    emojis.map(emoji =>
                     <span whitespace-nowrap key={emoji.name} 
                     onClick={()=>setEmojiKind(emoji.name)}
                     className={emoji.name === emojiKind? 'red' : ''}
                     color="#999"
                     >{emoji.name}</span>    
                    )
                }
                </div>
                <div text-24px p-8px h-400px overflow-auto >
                    {
                        emojis.map(emoji => <div flex flex-wrap style={{display:emojiKind===emoji.name ? '' :'none'}}>{emoji.chars.map(char => <span text="center" w-34px>{char}</span>)}</div>)
                    }
                </div>
            </div>
            <p text-center py-24px>记账时长按标签，进行编辑</p>
            <div>
                <button j-btn>确定</button>
            </div>
        </div>
      </form>
    </div>
  );
};
