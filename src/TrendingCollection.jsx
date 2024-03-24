import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import keemun_dog from "/src/image/collection/keemun_dog.png"
import keemun_cat from "/src/image/collection/keemun_cat.png"
import keemun_bear from "/src/image/collection/keemun_bear.png"
import keemun_fox from "/src/image/collection/keemun_fox.png"
import mushroom1 from "/src/image/collection/mushroom1.png"
import mushroom2 from "/src/image/collection/mushroom2.png"
import mushroom3 from "/src/image/collection/mushroom3.png"
import asia_man from "/src/image/collection/asia_man.png"
import robot1 from "/src/image/collection/robot1.png"
import robot2 from "/src/image/collection/robot2.png"
import robot3 from "/src/image/collection/robot3.png"
import robot_avator from "/src/image/collection/robot_avator.png"

export default function TrendingCollection() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 834,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className="flex flex-wrap justify-center px-[30px] py-[40px]">
      <div className="w-[315px] tablet:w-[690px] desktop:w-[1050px] flex flex-wrap justify-center">
        {/*Section Headline*/}
        <div className="w-full">
          <header>
            <h4 className="text-[28px] font-semibold">Trending Collection</h4>
          </header>
          <article className="text-[16px] mt-[10px]">Checkout our weekly updated trending collection.</article>
        </div>
        {/*Collection Slider*/}
        <div className="w-[315px] tablet:w-[690px] desktop:w-[1050px]">
          <Slider {...settings}>
            <Collection_One />
            <Collection_Two />
            <Collection_Three />
          </Slider>
        </div>
      </div>
    </div>
  )
}

const Collection_One = () => {
  return (
    <div className="my-[30px] mr-[30px]">
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
  )
}
const Collection_Two = () => {
  return (
    <div className="my-[30px] mr-[30px]">
      <div className="hover:scale-105 cursor-pointer transition-all">
        <img className="rounded-[20px]" src={mushroom1} alt="" />
      </div>
      <div className="my-[15px] flex justify-between">
        <img className="w-[95px] h-[95px] rounded-[20px] hover:scale-105 cursor-pointer transition-all" src={mushroom2} alt="" />
        <img className="w-[95px] h-[95px] rounded-[20px] hover:scale-105 cursor-pointer transition-all" src={mushroom3} alt="" />
        <button className="flex justify-center items-center w-[95px] h-[95px] rounded-[20px] bg-[#A259FF] hover:bg-purple-900 hover:scale-105 transition-all">
          <span className="font-Space_Mono font-bold text-[16px] h-[22.4px]">1025+</span>
        </button>
      </div>
      <div>
        <h5 className="font-semibold">Magic Mushrooms</h5>
        <div className="flex items-center h-[22.4px] mt-[10px]">
          <img className="w-[24px] h-[24px] rounded-full mr-[12px]" src={asia_man} alt="" />
          <span className="text-[16px] font-light">Shroomie</span>
        </div>
      </div>
    </div>
  )
}
const Collection_Three = () => {
  return (
    <div className="my-[30px] mr-[30px]">
      <div className="hover:scale-105 cursor-pointer transition-all">
        <img className="rounded-[20px]" src={robot1} alt="" />
      </div>
      <div className="my-[15px] flex justify-between">
        <img className="w-[95px] h-[95px] rounded-[20px] hover:scale-105 cursor-pointer transition-all" src={robot2} alt="" />
        <img className="w-[95px] h-[95px] rounded-[20px] hover:scale-105 cursor-pointer transition-all" src={robot3} alt="" />
        <button className="flex justify-center items-center w-[95px] h-[95px] rounded-[20px] bg-[#A259FF] hover:bg-purple-900 hover:scale-105 transition-all">
          <span className="font-Space_Mono font-bold text-[16px] h-[22.4px]">1025+</span>
        </button>
      </div>
      <div>
        <h5 className="font-semibold">Disco Machines</h5>
        <div className="flex items-center h-[22.4px] mt-[10px]">
          <img className="w-[24px] h-[24px] rounded-full mr-[12px]" src={robot_avator} alt="" />
          <span className="text-[16px] font-light">BeKind2Robots</span>
        </div>
      </div>
    </div>
  )
}
