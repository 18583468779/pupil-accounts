import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { AddItemFloatButton } from "../components/AddItemFloatButton";
import type { TimeRange } from "../components/TimeRangePicker";
import { TimeRangePicker } from "../components/TimeRangePicker";
import { TopMenu } from "../components/TopMenu";
import { TopNav } from "../components/TopNav";
import { useMenuStore } from "../stores/useMenuStore";
import { ItemsList } from "./ItemsPage/ItemsList";
import { ItemsSummary } from "./ItemsPage/ItemsSummary";
const Div = styled.div`
  background: rgb(143, 76, 215);
  background: linear-gradient(
    0deg,
    rgba(143, 76, 215, 1) 0%,
    rgba(92, 51, 190, 1) 100%
  );
`;
// export const MenuContext = React.createContext({
//   setVisible: (visble: boolean) => {},
// });
export const ItemPages: React.FC = () => {
  const [items] = useState<Item[]>([
    {
      id: 1,
      kind: "incomes",
      amount: 1000,
      user_id: 1,
      tag_ids: [1],
      happen_at: "2021-08-01T00:00:00.000Z",
      created_at: "2021-08-01T00:00:00.000Z",
      updated_at: "2021-08-01T00:00:00.000Z",
    },
    {
      id: 2,
      kind: "incomes",
      amount: 1000,
      user_id: 1,
      tag_ids: [1],
      happen_at: "2021-08-01T00:00:00.000Z",
      created_at: "2021-08-01T00:00:00.000Z",
      updated_at: "2021-08-01T00:00:00.000Z",
    },
  ]);

  const [timeRange, setTimeRange] = useState<TimeRange>("thisMonth");
  //上下文 === 局部的全局变量
  //全局变量 === 全局的上下文
  // const [visible, setVisible] = useState(false);

  const {visible,setVisible} = useMenuStore()
  return (


    <div>
        <Div>
          <TopNav title="我的记账本" />
          <TimeRangePicker selected={timeRange} onSelected={setTimeRange} />
        </Div>
        <ItemsSummary />
        <ItemsList items={items} />
        <AddItemFloatButton />
        <TopMenu onClickMask={()=>setVisible(false)} visible={visible}/> 
     
    </div>
  );
};
