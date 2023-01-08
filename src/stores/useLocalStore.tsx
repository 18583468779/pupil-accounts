import create from "zustand";
//设置store缓存
interface Local {
  hasReadWelcomes: boolean;
  setHasReadWelcomes: (read: boolean) => void;
}
const init = localStorage.getItem("hasReadWelcomes")
export const useLocalStore = create<Local>((set, get) => {
  return {
    hasReadWelcomes:init === 'yes',
    setHasReadWelcomes: (read: boolean) => {
      const result = read ? "yes" : "no";
      localStorage.setItem("hasReadWelcomes", result);
      set({ hasReadWelcomes: result === 'yes'});
    },
  };
});
