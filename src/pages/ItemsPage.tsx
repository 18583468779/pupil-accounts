import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { AddItemFloatButton } from "../components/AddItemFloatButton";
import { TimeRange, TimeRangePicker } from "../components/TimeRangePicker";
import { TopNav } from "../components/TopNav";
import { ItemsList } from "./ItemsPage/ItemsList";
import { ItemsSummary } from "./ItemsPage/ItemsSummary";
export const ItemPages: React.FC = () => {
  const Div = styled.div`
    background: rgb(143, 76, 215);
    background: linear-gradient(
      0deg,
      rgba(143, 76, 215, 1) 0%,
      rgba(92, 51, 190, 1) 100%
    );
  `;

  const [timeRange,setTimeRange] = useState<TimeRange>("thisMonth")
  return (
    <div>
      <Div>
        <TopNav title="我的记账本"/>
        <TimeRangePicker selected={timeRange} onSelected={setTimeRange}/>
      </Div>
      <ItemsSummary />
      <ItemsList />
      <AddItemFloatButton />
    </div>
  );
};
