import * as React from 'react'
import { Gradient } from '../components/Gradient'
import type { TimeRange } from '../components/TimeRangePicker'
import { TimeRangePicker } from '../components/TimeRangePicker'
import { TopNav } from '../components/TopNav'
import { LineChart } from '../components/LineChart'
import { PieChart } from '../components/PieChart'
import { RankChart } from '../components/RankChart'
import { Input } from '../components/Input'
import { useState } from 'react'
import { BackIcon } from '../components/BackIcon'

export const StatisticsPage: React.FC = () => {
  const [timeRange, setTimeRange] = React.useState<TimeRange>('thisMonth')
  const items = [
    { data: '2000-01-01', value: 15000 },
    { data: '2000-01-02', value: 1500 },
    { data: '2000-01-03', value: 3500 },
    { data: '2000-01-04', value: 4500 },
    { data: '2000-01-05', value: 150 },
    { data: '2000-01-06', value: 3500 },
    { data: '2000-01-07', value: 4500 },
    { data: '2000-01-08', value: 150 },
    { data: '2000-01-09', value: 3500 },
    { data: '2000-01-10', value: 4500 },
    { data: '2000-01-11', value: 150 },
    { data: '2000-01-12', value: 3500 },
    { data: '2000-01-13', value: 4500 },
    { data: '2000-01-14', value: 1500 },
    { data: '2000-01-15', value: 3500 },
    { data: '2000-01-16', value: 4500 },
    { data: '2000-01-17', value: 150 },
    { data: '2000-01-18', value: 3500 },
    { data: '2000-01-19', value: 4500 },
    { data: '2000-01-20', value: 4500 },
    { data: '2000-01-21', value: 150 },
    { data: '2000-01-22', value: 3500 },
    { data: '2000-01-23', value: 4500 },
    { data: '2000-01-24', value: 150 },
    { data: '2000-01-25', value: 3500 },
    { data: '2000-01-26', value: 4500 },
    { data: '2000-01-27', value: 150 },
    { data: '2000-01-28', value: 3500 },
    { data: '2000-01-29', value: 4500 },
  ].map(item => ({ x: item.data, y: item.value }))

  const data = [
    { tag: { name: '衣服', sign: '😍' }, amount: 1500 },
    { tag: { name: '裤子', sign: '😘' }, amount: 500 },
    { tag: { name: '手机', sign: '😚' }, amount: 3500 },
    { tag: { name: '电脑', sign: '😪' }, amount: 4500 },
    { tag: { name: '零食', sign: '😵' }, amount: 150 },

  ]
  const items2 = data.map(item => ({ x: item.tag.name, y: item.amount }))

  const items3 = data.map(item => ({ x: item.tag.name, y: item.tag.sign, z: item.amount }))
  const [x,setX] = useState('expenses')
  return (
 <div>
    <Gradient>
      <TopNav title="账目列表" icon={<BackIcon className="w-24px h-24px" /> }  />
    </Gradient>
    <TimeRangePicker selected={timeRange} onSelect={setTimeRange} timeRanges={[ 
      { key: 'thisMonth', text: '本月' },
      { key: 'lastMonth', text: '上月' },
      { key: 'twoMonthsAgo', text: '两个月前' },
      { key: 'threeMonthsAgo', text: '三个月前' },
    ]}/>
    <div flex px-16px items-center gap-x-16px>
      <span grow-0 shrink-0>类型：</span>
      <div grow-1 shrink-1>
        <Input type="select" 
                options={[
                  {text:'支出',value:'expenses'},
                  {text:'收入',value:'income'}
                ]}
                  value={x}
                  onChange={value => setX(value)}
                  disableError
        />
      </div>

    </div>
    <LineChart className='h-120px' items={items}/>
    <PieChart className='h-320px' items={items2}/>
    <RankChart className='h-40px' items={items3}/>
  </div>)
}
