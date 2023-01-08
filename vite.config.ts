import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import {viteMockServe} from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({command})=>({
  define:{
    //是判断用户是开发环境还是上线
    isDev : command === 'serve' //isDev在开发的时候是true，上线是false
  },
  plugins: [
    Unocss(),
    react(),
    viteMockServe()
  ]
}))
