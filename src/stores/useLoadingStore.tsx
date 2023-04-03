import create from 'zustand'

interface Loading {
  visible: boolean
  setVisible: (read: boolean) => void
}

export const useLoadingStore = create<Loading>((set, get) => (
  {
    visible:false,
    setVisible: (visible: boolean) => {
        set({visible})
    },
  }
))
