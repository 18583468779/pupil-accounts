import create from 'zustand'

interface Demo {
  count: number
  add: () => void
}

export const useDemoStore = create<Demo>((set, get) => {
  return{
        count: 0,
        add: () => {
            set(demo => ({ count: demo.count + 1 }))
        },
        sub: () => {
          set(demo => ({ count: demo.count - 1 }))
      }
    }
})