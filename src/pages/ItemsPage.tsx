import * as React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { AddItemFloatButton } from '../components/AddItemFloatButton'
import type { TimeRange } from '../components/TimeRangePicker'
import { TimeRangePicker } from '../components/TimeRangePicker'
import { TopNav } from '../components/TopNav'
import { ItemsList } from './ItemsPage/ItemsList'
import { ItemsSummary } from './ItemsPage/ItemsSummary'
export const ItemPages: React.FC = () => {
  const Div = styled.div`
    background: rgb(143, 76, 215);
    background: linear-gradient(
      0deg,
      rgba(143, 76, 215, 1) 0%,
      rgba(92, 51, 190, 1) 100%
    );
  `
  const [items] = useState<Item[]>([
    {
      id: 1,
      kind: 'incomes',
      amount: 1000,
      user_id: 1,
      tag_ids: [1],
      happen_at: '2021-08-01T00:00:00.000Z',
      created_at: '2021-08-01T00:00:00.000Z',
      updated_at: '2021-08-01T00:00:00.000Z',
    },
    {
      id: 2,
      kind: 'incomes',
      amount: 1000,
      user_id: 1,
      tag_ids: [1],
      happen_at: '2021-08-01T00:00:00.000Z',
      created_at: '2021-08-01T00:00:00.000Z',
      updated_at: '2021-08-01T00:00:00.000Z',
    },
  ])

  const [timeRange, setTimeRange] = useState<TimeRange>('thisMonth')
  return (
    <div>
      <Div>
        <TopNav title="我的记账本"/>
        <TimeRangePicker selected={timeRange} onSelected={setTimeRange}/>
      </Div>
      <ItemsSummary />
      <ItemsList items={items}/>
      <AddItemFloatButton />
    </div>
  )
}
