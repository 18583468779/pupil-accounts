import * as React from 'react'

type Props={
  className?:string
  items:{x: string;y: string;z: number;}[]
}
const colors = ['#5470c6', '#ffbab0', '#ffa750', '#8748d3', '#53a867', '#eba953', '#91cc75', '#fac858', '#ee6666', '#73c0de']
export const RankChart: React.FC<Props> = (props) => {
  const {className,items} = props
  const total = items.reduce( (prev,item) => prev + item.z,0) ?? 0;
  const max = items.reduce((prev,item) => Math.max( prev , item.z),0) ?? 0;
  return (<div>
    {
      items.map((item,index) =>   
      <div key={item.x} className={className} grid grid-cols="[48px_1fr_1fr]" grid-rows="[repeat(2,1fr)]"
      text-12px items-center gap-y-6px gap-x-8px px-16px my-8px
        > 
          <div  row-start-1 col-start-1 row-end-3 col-end-2
            w-48px h-48px rounded-24px bg="#EFEFEF" flex justify-center items-center
            text-24px>{item.y} </div>
          <div row-start-1 col-start-2 row-end-2 col-end-3 self-end>{item.x} - {`${(item.z / total * 100).toFixed(0)}%`}</div>
          <div  row-start-1 col-start-3 row-end-2 col-end-4 text-right self-end>{item.z + '元'}</div>
          <div row-start-2 col-start-2 row-end-3 col-end-4 h-8px self-start
            rounded-4px overflow-hidden bg="#CCC" relative>
            <div absolute h-full rounded-4px
              style={{background:colors[index],width:`${(item.z / max)*100}%`}}
              />
          </div>
        </div>)
    }

  </div>)
}


// <div className={className} grid 
// grid-cols="[repeat(3,1fr)]"
// grid-rows="[repeat(2,1fr)]"
// > 
// <div row-start-1 col-start-1 row-end-3 col-end-2></div>
// <div row-start-1 col-start-2 row-end-2 col-end-3></div>
// <div row-start-1 col-start-3 row-end-2 col-end-4></div>
// <div row-start-2 col-start-2 row-end-3 col-end-4></div>
// </div>