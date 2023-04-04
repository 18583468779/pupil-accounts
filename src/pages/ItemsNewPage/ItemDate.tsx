import * as React from 'react';
import { Datepicker } from '../../components/Datepicker';
import { Icon } from '../../components/Icon';
import { usePopup } from '../../hooks/usePopup';
import { time } from '../../lib/time';

export const ItemDate: React.FC =() =>{
    const [valueDate, setValueDate] = React.useState(time().date.toLocaleDateString())
    const { popup, toggle, hide } = usePopup({children:<Datepicker
        onConfirm={ (d) => { setValueDate(d.toLocaleDateString()); hide() }}
        onCancel={() => hide()}
      />})

return (
    <>
        {popup}
        <span onClick={toggle} items-center flex gap-x-8px>
            <Icon name="calendar" className='w-24px h-24px grow-0 shrink-0'/>
            <span grow-0 shrink-0 text-12px color="#999"> {valueDate === new Date().toLocaleDateString() ? '今天' : valueDate}</span>
        </span>
    </>
)
} 