import * as React from 'react';
import { Navigate, useRouteError } from 'react-router-dom';
export const ItemsPageError: React.FC =() =>{
    const error = useRouteError();
    const e = error as Error;
    if(e.message === 'unauthorized'){
        return <Navigate to={'/sign_in'}/>
    }else if(e.message === 'data_empty'){
        return <Navigate to={'/home'}/>
    }else{
        return (<div>出错了 </div>)
    }

} 