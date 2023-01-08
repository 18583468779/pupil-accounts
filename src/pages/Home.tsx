import * as React from "react";
import useSWR from 'swr'
import p from "../assets/images/pig.svg";
import add from "../assets/images/add.svg";
import { ajax } from "../lib/ajax";
export const Home: React.FC = () => {

  //使用swr发送请求，不用在useEffect中使用，swr会自己处理
  const {data:meData,error:errorData} = useSWR('/api/v1/me',(path)=>{
    //判断用户是否登录
    return ajax.get(`${path}`)
  })
  const {data:meItem,error:errorItem} = useSWR(meData ? '/api/v1/item' : null,(path)=>{
    //用户登录后发送请求
    return ajax.get(`${path}`)
  })

  return (
    <div>
      <div flex justify-center items-center>
        <img src={p} w="128" height="130" mt-20vh mb-20vh />
      </div>
      <div px-16px>
        <button h-48px w="100%" bg="#5c33be" b-none text-white rounded-8px>
          开始记账
        </button>
      </div>

      <button w-56px h-56px bg="#5c33be" rounded="50%" b-none text-white text-6xl text-center fixed bottom-16px right-16px><img src={add} w="100%"/> </button>
    </div>
  );
};
