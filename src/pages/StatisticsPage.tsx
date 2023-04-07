
import { Gradient } from '../components/Gradient'
import useSWR from 'swr'
import type { TimeRange } from '../components/TimeRangePicker'
import { TimeRangePicker } from '../components/TimeRangePicker'
import { TopNav } from '../components/TopNav'
import { LineChart } from '../components/LineChart'
import { PieChart } from '../components/PieChart'
import { RankChart } from '../components/RankChart'
import { Input } from '../components/Input'
import { FC, useEffect, useState } from 'react'
import { BackIcon } from '../components/BackIcon'
import { useAjax } from '../lib/ajax'
import { time } from '../lib/time'

export const StatisticsPage: FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('thisMonth');
  const {get} = useAjax({showLoading:false,handleError:true});
  const [x,setX] = useState('expenses');

  const generateStartAndEnd = ()=>{
    if(timeRange === 'thisMonth'){
      const start = time().firstDayOfMonth.format('yyyy-MM-dd');
      const end = time().lastDayOfMonth.add(1,'day').format('yyyy-MM-dd');
      return {start,end}
    }else{
      return {start:"",end:""}
    }
  }
  const {start,end} =generateStartAndEnd();
  const {data:items} = useSWR(`/api/v1/items/summary?happened_after=${start}&happened_before=${end}&kind=${x}&group_by=happen_at`,async (path)=>{
    const response = await get<{groups:{happened_at:string,amount:number}[],total:number}>(path);
    return response.data.groups.map((item,index)=>({x:item.happened_at,y:item.amount}))
  });

  const data = [
    { tag: { name: '衣服', sign: '😍' }, amount: 1500 },
    { tag: { name: '裤子', sign: '😘' }, amount: 500 },
    { tag: { name: '手机', sign: '😚' }, amount: 3500 },
    { tag: { name: '电脑', sign: '😪' }, amount: 4500 },
    { tag: { name: '零食', sign: '😵' }, amount: 150 },

  ]
  const items2 = data.map(item => ({ x: item.tag.name, y: item.amount }))

  const items3 = data.map(item => ({ x: item.tag.name, y: item.tag.sign, z: item.amount }))
 
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
