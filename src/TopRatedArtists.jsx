import rocketpurple from "/src/image/rocketpurple.svg"
import keemun_woman from "/src/image/keemun_woman.png"
import glassman from "/src/image/glassman.png"
import illustrated from "/src/image/illustrated.png"
import gaming from "/src/image/gaming.png"
import half_human from "/src/image/half_human.png"
import keemun_fox from "/src/image/collection/keemun_fox.png"
import asia_man from "/src/image/collection/asia_man.png"
import robotica from "/src/image/robotica.png"
import rustyrobot from "/src/image/rustyrobot.png"
import keemun_man from "/src/image/keemun_man.png"
import dotgu from "/src/image/dotgu.png"
import ghiblier from "/src/image/ghiblier.png"

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
  {
    id: 6,
    name: "Mr Fox",
    avator: keemun_fox,
    sale: "19.28 ETH",
  },
  {
    id: 7,
    name: "Shroomie",
    avator: asia_man,
    sale: "18.22 ETH",
  },
  {
    id: 8,
    name: "Robotica",
    avator: robotica,
    sale: "17.22 ETH",
  },
  {
    id: 9,
    name: "RustyRobot",
    avator: rustyrobot,
    sale: "16.22 ETH",
  },
  {
    id: 10,
    name: "Animakid",
    avator: keemun_man,
    sale: "15.22 ETH",
  },
  {
    id: 11,
    name: "Dotgu",
    avator: dotgu,
    sale: "14.22 ETH",
  },
  {
    id: 12,
    name: "Ghiblier",
    avator: ghiblier,
    sale: "13.22 ETH",
  },
]

export default function TopRatedArtists() {
  return (
    <div className="flex flex-wrap justify-center px-[30px] py-[40px]">
      <div className="w-[315px] tablet:w-[690px] desktop:w-[1050px] flex flex-wrap justify-center">
        {/*Section Headline*/}
        <div className="relative mb-[40px] tablet:w-[690px] desktop:w-[1050px] tablet:h-[93px]">
          <header>
            <h4 className="text-[28px] font-semibold">Top creators</h4>
          </header>
          <article className="text-[16px] mt-[10px]">Checkout Top Rated Creators on the NFT Marketplace</article>
          <ViewRankingButton_Tablet />
        </div>
        {/*Artist Cards Row*/}
        <div
          className="flex flex-wrap justify-center h-[580px] overflow-hidden 
        tablet:w-[690px] tablet:h-[360px]
        desktop:w-[1050px] desktop:h-[774px]"
        >
          {top_creators.map((item) => (
            <button
              key={item.id}
              className={`w-full h-[100px] bg-[#3B3B3B] flex justify-center items-center rounded-[20px] mb-[20px] hover:bg-zinc-700 transition-all
              tablet:w-[330px] tablet:mr-[15px]
            desktop:w-[240px] desktop:h-[238px] desktop:flex-wrap`}
            >
              <div className="relative mr-[20px] desktop:mr-0">
                <div
                  className="bg-[#2B2B2B] font-Space_Mono rounded-full w-[30px] h-[30px] absolute -top-2 -left-2 flex justify-center items-center 
                desktop:-top-1  desktop:-left-8"
                >
                  <span className="text-[#858584] text-[16px]">{item.id}</span>
                </div>
                <img className="w-[60px] h-[60px] desktop:w-[120px] desktop:h-[120px] rounded-full" src={item.avator} alt="" />
              </div>
              <div className="flex flex-wrap w-[195px] desktop: justify-center">
                <h5 className="font-semibold text-[22px] h-[30.8px]">{item.name}</h5>
                <p className="text-[16px] h-[22.4px] text-[#858584]">
                  Total Sales: <span className="text-white font-Space_Mono">{item.sale}</span>
                </p>
              </div>
            </button>
          ))}
        </div>
        <ViewRankingButton_mobile />
      </div>
    </div>
  )
}

const ViewRankingButton_mobile = () => {
  return (
    <button className="tablet:hidden w-full h-[60px] mt-[40px] border-2 border-[#A259FF] rounded-[20px] flex justify-center items-center hover:scale-105 transition-all">
      <div className="h-[22.4px] flex justify-center items-center">
        <img className="w-[20px] h-[20px] mr-[12px]" src={rocketpurple} alt="" />
        <span className="text-[16px]">View Rankings</span>
      </div>
    </button>
  )
}
const ViewRankingButton_Tablet = () => {
  return (
    <button className="hidden  absolute bottom-0 right-0 w-[247px] h-[60px] mt-3 border-2 border-[#A259FF] rounded-[20px] tablet:flex justify-center items-center hover:scale-105 transition-all">
      <div className="h-[22.4px] flex justify-center items-center">
        <img className="w-[20px] h-[20px] mr-[12px]" src={rocketpurple} alt="" />
        <span className="text-[16px]">View Rankings</span>
      </div>
    </button>
  )
}
