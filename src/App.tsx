import * as React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import { usePopup } from './hooks/usePopup';
import styled from 'styled-components';
import { Icon } from './components/Icon';
import { useLoadingStore } from './stores/useLoadingStore';
import { useEffect } from 'react';
export const App: React.FC =() =>{

    const {visible} = useLoadingStore()


    const {popup,hide,show} = usePopup({children:<div p-16px>
        <Spin className="w-32px h-32px" name="loading"/></div>,position:"center"})

    useEffect(()=>{
        if(visible){
            show();
        }else{
            hide();
        }
    },[visible])

    return (<div>    
                <RouterProvider router={router} /> 
                {popup}
            </div>)
} 


const Spin = styled(Icon)`
    animation:spin 1s linear infinite;
    @keyframes spin{
        form{transform:rotate(0deg);}
        to{transform:rotate(360deg);}
    }
`