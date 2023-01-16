import { meMock } from './me.mock';
import type { MockMethod } from 'vite-plugin-mock'
import { itemsMock } from './items.mock';
export default [
  meMock,itemsMock
] as MockMethod[]
