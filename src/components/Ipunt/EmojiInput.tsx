import * as React from 'react'
import { useState } from 'react'
import { emojis } from '../../lib/emojis'
type Props = {
  value?: string
  onChange?: (value: string) => void
}
export const EmojiInput: React.FC<Props> = (props) => {
  const { value, onChange } = props
  const [emojiKind, setEmojiKind] = useState('表情')
  return <div b-1 b="#5c33be" rounded-8px>
  <div flex flex-nowrap p-8px gap-x-16px overflow-auto>
      {
          emojis.map(emoji =>
          <span whitespace-nowrap key={emoji.name}
          onClick={() => setEmojiKind(emoji.name)}
          className={emoji.name === emojiKind ? 'red' : ''}
          color="#999"
          >{emoji.name}</span>
          )
      }
  </div>

  <div text-24px p-8px h-300px overflow-auto >
      {
          emojis.map(emoji => <div key={emoji.name} flex flex-wrap style={{ display: emojiKind === emoji.name ? '' : 'none' }}>
            {emoji.chars.map(char => <span key={char}
            b-1 b-transparent rounded='4px' text="center" w-34px className={char === value ? 'selected' : ''}
             onClick={() => value !== char && onChange?.(char)}
            >{char}</span>)}
            </div>)
      }
  </div>
</div>
}
