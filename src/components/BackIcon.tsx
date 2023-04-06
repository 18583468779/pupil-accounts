import * as React from 'react';
import { Icon } from './Icon';
import { useNavigate } from 'react-router-dom';

type Props = {
  className?:string
}

export const BackIcon: React.FC<Props> =(props) =>{
    const nav = useNavigate();
    const onBack = ()=>{
        nav(-1)
      }
    return (<Icon name="back" onClick={onBack} className={props.className}/>)
} 