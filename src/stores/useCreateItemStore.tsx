import create from "zustand"
import { Data, FormError } from "../lib/validate"
import { time } from "../lib/time"

type Date = Item

type CreateItem = {
    data:Partial<Date>
    error:FormError<Date>
    setData:(data: Partial<Date>)=>void
    setError: (error: Partial<FormError<Date>>) => void
}

export const useCreateItemStore = create<CreateItem>((set,get)=>{
    return {
        data:{
            kind:'expenses',
            tag_ids:[],
            happen_at:time().format(),
            amount:0
        },
        error:{
            kind:[],
            tag_ids:[],
            happen_at:[],
            amount:[]
        },
        setData: (data: Partial<Data>) => {
            set(state => ({
              ...state,
              data: {
                ...state.data,
                ...data
              }
            }))
          },
          setError: (error: Partial<FormError<Data>>) => {
            set(state => ({
              ...state,
              error: {
                ...error
              }
            }))
          }
    }
})