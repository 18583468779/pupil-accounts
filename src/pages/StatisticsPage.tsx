import * as React from 'react';
import { Gradient } from '../components/Gradient';
import { Icon } from '../components/Icon';
import { TimeRange, TimeRangePicker } from '../components/TimeRangePicker';
import { TopNav } from '../components/TopNav';
export const StatisticsPage: React.FC =() =>{
    const [timeRange, setTimeRange] = React.useState<TimeRange>('thisMonth')
return (  
 <div>
    <Gradient>
      <TopNav title="账目列表" icon={
        <Icon name="menu" className="w-24px h-24px" />
      } />
    </Gradient>
    <TimeRangePicker selected={timeRange} onSelect={setTimeRange} />
  </div>)
} 