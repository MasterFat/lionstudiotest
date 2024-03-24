import market from "/src/image/market.svg"
import marketwords from "/src/image/marketwords.svg"
import discord from "/src/image/icons/discord.svg"
import youtube from "/src/image/icons/youtube.svg"
import twitter from "/src/image/icons/twitter.svg"
import instagram from "/src/image/icons/instagram.svg"
import mail from "/src/image/icons/mail.svg"

const icons = [
  {
    id: 1,
    icon: discord,
  },
  {
    id: 2,
    icon: youtube,
  },
  {
    id: 3,
    icon: twitter,
  },
  {
    id: 4,
    icon: instagram,
  },
]

export default function Footer() {
  return (
    <div className="flex flex-wrap px-[30px] py-[40px] bg-[#3B3B3B]">
      <div className="flex flex-wrap mb-[30px]">
        <div className="flex items-center w-full mb-[20px]">
          <img className="mr-1 w-[32px] h-[32px]" src={market} alt="" />
          <img className="w-[199.41px] h-[19.8px]" src={marketwords} alt="" />
        </div>
        <div className="text-[#CCCCCC] text-[16px]">
          <p className="mb-[20px]">NFT marketplace UI created with Anima for Figma.</p>
          <p className="mb-[20px]">Join our community</p>
        </div>
        <div className="w-[158px] h-[32px] flex">
          {icons.map((item) => (
            <img key={item.id} src={item.icon} alt="" className={`${item.id === 3 ? "w-[25.32px] h-[22px] top-[6px] left-[4.68px]" : ""} relative mr-[10px]`} />
          ))}
        </div>
      </div>

      <div className="w-full mb-[30px]">
        <h5 className="font-Space_Mono font-bold text-[22px] h-[35.2px] mb-[20px]">Explore</h5>
        <div className="text-[#CCCCCC] text-[16px]">
          <p className="mb-[20px]">Marketplace</p>
          <p className="mb-[20px]">Rankings</p>
          <p className="mb-[20px]">Connect a wallet</p>
        </div>
      </div>

      <div className="mb-[30px]">
        <h5 className="font-Space_Mono font-bold text-[22px] h-[35.2px] mb-[20px]">Join our weekly digest</h5>
        <div className="text-[#CCCCCC] text-[16px]">
          <p className="mb-[20px]">Get exclusive promotions & updates straight to your inbox.</p>
          <input
            type="email"
            name="otp"
            id="input"
            className="w-full h-[46px] mb-[20px] border-1 border-[#858584] rounded-[20px] placeholder:text-[#2B2B2B]"
            placeholder="    Enter Your Email Address"
          />
          <button className="bg-[#A259FF] w-full h-[46px] rounded-[20px] text-[16px] font-semibold flex justify-center items-center hover:bg-purple-900 hover:scale-105 transition-all">
            <div className="flex justify-center items-center h-[22.4px]">
              <img className="w-[20px] h-[20px] mr-2" src={mail} alt="" />
              <span className="text-white">Subscribe</span>
            </div>
          </button>
        </div>
      </div>

      <div className="w-full border-t border-[#858584] ">
        <p className="pt-[20px] text-[12px] text-[#CCCCCC]">Ⓒ NFT Market. Use this template freely.</p>
      </div>
    </div>
  )
}
