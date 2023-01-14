
import create from "zustand";

interface Menu{
    visible:boolean
    setVisible:(show:boolean)=>void
}
export const useMenuStore = create<Menu>((set,get)=>({
    visible:false,
    setVisible:(show:boolean)=>{
        const result = show ? true : false
        set({visible: result })
    }

}))