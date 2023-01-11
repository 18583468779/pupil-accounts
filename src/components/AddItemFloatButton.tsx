import * as React from 'react';
import { Icon } from './Icon';
export const AddItemFloatButton: React.FC =() =>{
return <button w-56px h-56px bg="#5c33be" rounded="50%" b-none text-white text-6xl text-center fixed bottom-16px right-16px flex justify-center items-center>
      <Icon name="add" className='w-48px h-48px'/>
     </button>;
}; 