import market from "/src/image/market.svg"
import marketwords from "/src/image/marketwords.svg"
import select from "/src/image/select.svg"

export const Navigation = () => {
  return (
    <div className="flex justify-between px-[30px] py-[15px]">
      <div className="flex hover:bg-zinc-700 border-0 rounded-sm cursor-pointer">
        <img className="mr-1" src={market} alt="" />
        <img src={marketwords} alt="" />
      </div>
      <div className="hover:bg-zinc-700 border-0 rounded-sm cursor-pointer">
        <img src={select} alt="" />
      </div>
    </div>
  )
}
