import keemun_dog from "/src/image/keemun_dog.png"
import keemun_cat from "/src/image/keemun_cat.png"
import keemun_bear from "/src/image/keemun_bear.png"
import keemun_fox from "/src/image/keemun_fox.png"

export default function TrendingCollection() {
  return (
    <div className="flex flex-wrap justify-center px-[30px] py-[40px]">
      {/*Section Headline*/}
      <div>
        <header>
          <h4 className="text-[28px] font-semibold">Trending Collection</h4>
        </header>
        <article className="text-[16px] mt-[10px]">Checkout our weekly updated trending collection.</article>
      </div>
      {/*Collection Slider*/}
      <div className="my-[30px]">
        <div className="hover:scale-105 cursor-pointer transition-all">
          <img className="rounded-[20px]" src={keemun_dog} alt="" />
        </div>
        <div className="my-[15px] flex justify-between">
          <img className="w-[95px] h-[95px] rounded-[20px] hover:scale-105 cursor-pointer transition-all" src={keemun_cat} alt="" />
          <img className="w-[95px] h-[95px] rounded-[20px] hover:scale-105 cursor-pointer transition-all" src={keemun_bear} alt="" />
          <button className="flex justify-center items-center w-[95px] h-[95px] rounded-[20px] bg-[#A259FF] hover:bg-purple-900 hover:scale-105 transition-all">
            <span className="font-Space_Mono font-bold text-[16px] h-[22.4px]">1025+</span>
          </button>
        </div>
        <div>
          <h5 className="font-semibold">DSGN Animals</h5>
          <div className="flex items-center h-[22.4px] mt-[10px]">
            <img className="w-[24px] h-[24px] rounded-full mr-[12px]" src={keemun_fox} alt="" />
            <span className="text-[16px] font-light">MrFox</span>
          </div>
        </div>
      </div>
    </div>
  )
}
