import * as React from 'react';
import { Navigate, useLocation, useRouteError } from 'react-router-dom';
export const ErrorPage: React.FC =() =>{
    const error = useRouteError();
    const e = error as Error;
    const loc = useLocation()
    if(e.message === 'unauthorized'){
        const from = encodeURIComponent(`${loc.pathname}${loc.search}`)
        return <Navigate replace to={`/sign_in?from=${from}`}/>
    }else{
        return (<div>未知错误 </div>)
    }

} 