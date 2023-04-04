import create from "zustand"

type List = {
    list:Tag[]
    setList:(data: Tag[])=>void
}

export const useTagStore = create<List>((set,get)=>{
    return {
        list:[],
        setList: (list: Tag[]) => {
            set(state => { return {list}})
          }
    }
})