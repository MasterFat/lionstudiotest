import rocketpurple from "/src/image/rocketpurple.svg"
import keemun_woman from "/src/image/keemun_woman.png"
import glassman from "/src/image/glassman.png"
import illustrated from "/src/image/illustrated.png"
import gaming from "/src/image/gaming.png"
import half_human from "/src/image/half_human.png"

const top_creators = [
  {
    id: 1,
    name: "Keepitreal",
    avator: keemun_woman,
    sale: "34.53 ETH",
  },
  {
    id: 2,
    name: "DigiLab",
    avator: glassman,
    sale: "32.13 ETH",
  },
  {
    id: 3,
    name: "GravityOne",
    avator: illustrated,
    sale: "28.93 ETH",
  },
  {
    id: 4,
    name: "Juanie",
    avator: gaming,
    sale: "25.30 ETH",
  },
  {
    id: 5,
    name: "BlueWhale",
    avator: half_human,
    sale: "22.22 ETH",
  },
]

export default function TopRatedArtists() {
  return (
    <div className="flex flex-wrap justify-center px-[30px] py-[40px]">
      {/*Section Headline*/}
      <div className="mb-[40px]">
        <header>
          <h4 className="text-[28px] font-semibold">Top creators</h4>
        </header>
        <article className="text-[16px] mt-[10px]">Checkout Top Rated Creators on the NFT Marketplace</article>
      </div>
      {/*Artist Cards Row*/}
      <div className="flex flex-wrap">
        {top_creators.map((item) => (
          <button
            key={item.id}
            className="w-full h-[100px] bg-[#3B3B3B] flex justify-center items-center rounded-[20px] mb-[20px] hover:bg-zinc-700 hover:scale-105 transition-all"
          >
            <div className="relative mr-[20px]">
              <div className="bg-[#2B2B2B] font-Space_Mono rounded-full w-[30px] h-[30px] absolute -top-2 -left-2 flex justify-center items-center">
                <span className="text-[#858584] text-[16px]">{item.id}</span>
              </div>
              <img className="w-[60px] h-[60px] rounded-full" src={item.avator} alt="" />
            </div>
            <div className="flex flex-wrap w-[195px] ">
              <h5 className="font-semibold text-[22px] h-[30.8px]">{item.name}</h5>
              <p className="text-[16px] h-[22.4px] text-[#858584]">
                Total Sales: <span className="text-white font-Space_Mono">{item.sale}</span>
              </p>
            </div>
          </button>
        ))}
      </div>
      <button className="w-full h-[60px] mt-3 border-2 border-[#A259FF] rounded-[20px] flex justify-center items-center hover:scale-105 transition-all">
        <div className="h-[22.4px] flex justify-center items-center">
          <img className="w-[20px] h-[20px] mr-[12px]" src={rocketpurple} alt="" />
          <span className="text-[16px]">View Rankings</span>
        </div>
      </button>
    </div>
  )
}
