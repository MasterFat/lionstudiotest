import market from "/src/image/market.svg"
import marketwords from "/src/image/marketwords.svg"
import select from "/src/image/select.svg"
import person from "/src/image/icons/person.svg"

export const Navigation = () => {
  return (
    <div className="flex justify-between px-[30px] py-[15px] tablet:px-[50px]">
      {/*nav logo*/}
      <div className="flex hover:bg-zinc-700 border-0 rounded-sm cursor-pointer">
        <img className="mr-1" src={market} alt="" />
        <img src={marketwords} alt="" />
      </div>
      <div className="hover:bg-zinc-700 border-0 rounded-sm cursor-pointer desktop:hidden">
        <img src={select} alt="" />
      </div>
      {/*nav menu*/}
      <Menu />
    </div>
  )
}

const Menu = () => {
  const menu = [
    { id: 1, name: "Marketplace" },
    { id: 2, name: "Rankings" },
    { id: 3, name: "Connect a wallet" },
  ]
  return (
    <ul className="hidden desktop:flex flex-wrap justify-between items-center text-[16px] px-[50px] py-[20px]">
      {menu.map((item) => (
        <li className="h-[46px] px-[20px] mr-[10px] flex items-center hover:bg-zinc-700 hover:scale-105 rounded-xl transition-all" key={item.id}>
          {item.name}
        </li>
      ))}
      <button className="bg-[#A259FF] h-[60px] px-[30px] rounded-[20px] font-semibold flex justify-center items-center hover:bg-purple-900 hover:scale-105 transition-all">
        <div className="flex justify-center items-center h-[22.4px]">
          <img className="w-[20px] h-[20px] mr-2" src={person} alt="" />
          <span>Sign Up</span>
        </div>
      </button>
    </ul>
  )
}
