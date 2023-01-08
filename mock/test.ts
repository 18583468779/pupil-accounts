// test.ts

import { MockMethod } from "vite-plugin-mock";
export default [
  {
    url: "/api/v1/me",
    method: "get",
    response: () => {
      return {
        id: 1,
        email: "1123654054@qq.com",
      };
    },
  },
  {
    url: "/api/v1/item",
    method: "get",
    response: () => {
      return {
        resources: [],
        pager: {
          page: 1,
          per_page: 25,
          count: 100,
        },
      };
    },
  },
] as MockMethod[];
