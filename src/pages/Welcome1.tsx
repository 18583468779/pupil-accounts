import p from '../assets/images/welcome1.svg'
export const Welcome1: React.FC = () => {
  return (
    <div text-center>
      <img src={p} />
      <h2 text-center mt-10px>每日提醒 <br /> 不会遗漏每一笔账单</h2>
    </div>
  )
}
