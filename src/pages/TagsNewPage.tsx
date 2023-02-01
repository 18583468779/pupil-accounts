import * as React from "react";
import { useState } from "react";
import { Gradient } from "../components/Gradient";
import { Icon } from "../components/Icon";
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
      <form onSubmit={onSubmit}>
        <div>
            <span>标签名</span>
            <input type="text" j-input-text/>
            <span text-red>标签名太长</span>
        </div>
        <div>
            <span>符号 🤤</span>
            <div>
                <div flex flex-nowrap>
                {
                    emojis.map(emoji =>
                     <span key={emoji.name} onClick={()=>setEmojiKind(emoji.name)}>{emoji.name}</span>    
                    )
                }
                </div>
                <div>
                    {
                        emojis.map(emoji => <div style={{display:emojiKind===emoji.name ? '' :'none'}}>{emoji.chars}</div>)
                    }
                </div>
            </div>
            <p>记账时长按标签，进行编辑</p>
            <div>
                <button j-btn>确定</button>
            </div>
        </div>
      </form>
    </div>
  );
};
