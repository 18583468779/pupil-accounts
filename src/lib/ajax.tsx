import axios from "axios";

axios.defaults.baseURL = isDev ? '/' : 'http://121.196.236.94:8080/api/v1'
export const ajax = {
  get: (path:string) => {
    return axios.get(path);
  },
  post: (path:string) => {
    return axios.post(path);
  },
  patch: (path:string) => {
    return axios.patch(path);
  },
  delete: (path:string) => {
    return axios.delete(path);
  },
};
