import * as React from 'react'
import { Gradient } from '../components/Gradient'
import { Icon } from '../components/Icon'
import type { TimeRange } from '../components/TimeRangePicker'
import { TimeRangePicker } from '../components/TimeRangePicker'
import { TopNav } from '../components/TopNav'
import { LineChart } from '../components/LineChart'
import { PieChart } from '../components/PieChart'
import { RankChart } from '../components/RankChart'

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

  const items2 = [
    { data: '衣服', name: 1500 },
    { data: '裤子', name: 500 },
    { data: '手机', name: 3500 },
    { data: '电脑', name: 4500 },
    { data: '零食', name: 150 },

  ].map(item => ({ x: item.data, y: item.name }))
  return (
 <div>
    <Gradient>
      <TopNav title="账目列表" icon={
        <Icon name="back" className="w-24px h-24px" />
      } />
    </Gradient>
    <TimeRangePicker selected={timeRange} onSelect={setTimeRange} />
    <LineChart className='h-120px' items={items}/>
    <PieChart className='h-320px' items={items2}/>
    <RankChart />
  </div>)
}
