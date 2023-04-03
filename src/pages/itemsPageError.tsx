import * as React from 'react';
import { Navigate, useLocation, useRouteError } from 'react-router-dom';
export const ItemsPageError: React.FC =() =>{
    const error = useRouteError();
    const e = error as Error;
    const loc = useLocation()
    if(e.message === 'unauthorized'){
        const from = encodeURIComponent(`${loc.pathname}${loc.search}`)
        return <Navigate to={`/sign_in?from=${from}`}/>
    }else if(e.message === 'data_empty'){
        return <Navigate replace to={'/home'}/>
    }else{
        return (<div>出错了 </div>)
    }

} 