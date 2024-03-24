import rocket from "/src/image/rocket.svg"
import spacewalking from "/src/image/spacewalking.png"
import keemun_man from "/src/image/keemun_man.png"

const additional_info = [
  {
    id: 1,
    name: "Total Sale",
    quality: "240k+",
  },
  {
    id: 2,
    name: "Auctions",
    quality: "100k+",
  },
  {
    id: 3,
    name: "Artists",
    quality: "240k+",
  },
]

export const HeroSection = () => {
  return (
    <div className="flex flex-wrap justify-center px-[30px] py-[40px]">
      {/*Headline & Subhead*/}
      <div className="">
        <header>
          <h4 className="text-[28px] font-semibold">Discover digital art & Collect NFTs</h4>
        </header>
        <article className="text-[16px] mt-[10px]">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
        </article>
      </div>

      {/*Highlighted NFT*/}
      <div className="my-[30px] hover:scale-105 cursor-pointer transition-all">
        <div>
          <img className="rounded-t-lg object-cover w-[315px] h-[206px]" src={spacewalking} alt="" />
        </div>
        <div className="bg-[#3b3b3b] p-[20px] rounded-b-lg">
          <h5 className="font-semibold text-[22px]">Space Walking</h5>
          <div className="flex py-2">
            <img className="w-[24px] h-[24px] border-0 rounded-full mr-[12px]" src={keemun_man} alt="" />
            <span className="font-light text-[16px]">Animakid</span>
          </div>
        </div>
      </div>
      {/*button*/}
      <button className="bg-[#A259FF] w-full h-[60px] rounded-[20px] text-[16px] font-semibold flex justify-center items-center hover:bg-purple-900 hover:scale-105 transition-all">
        <div className="flex justify-center items-center h-[22.4px]">
          <img className="w-[20px] h-[20px] mr-2" src={rocket} alt="" />
          <span>Get Started</span>
        </div>
      </button>
      {/*Additional Info*/}
      <div className="flex w-full justify-between mt-[30px]">
        {additional_info.map((item) => (
          <div key={item.id}>
            <h5 className="flex items-center font-Space_Mono font-bold text-22[px] h-[35.2px]">{item.quality}</h5>
            <p className="flex items-center text-[16px] h-[22.4px]">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
