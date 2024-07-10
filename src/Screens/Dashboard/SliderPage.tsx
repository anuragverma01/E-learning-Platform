import ECLIPE_ICON from "../../Utils/Assets/Svg/Group 16.svg";
import ECLIPE_ICON_2 from "../../Utils/Assets/Svg/Group 17.svg";
import React from "react";
import { Slider_Data } from "../../Utils/Assets/Constants/slider";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";
// import 'swiper/css';
import "swiper/css/pagination";
import MySwiperComponent from "../../Components/MySwiperComponent";
function SliderPage() {
  const data = [
    {
      id: 0,
      name: "UIUX",
    },
    {
      id: 1,
      name: "Development",
    },
    {
      id: 2,
      name: "Trading",
    },
    {
      id: 3,
      name: "Marketing",
    },
  ];
  return (
    <>
      <div className=" w-screen relative h-screen">
        <div className=" text-center text-[#b6b6c3] text-xl mt-20">
          <h1> Trusted by 5,000+ Companies Worlwide</h1>
        </div>
        <div className="pointer-events-none relative  flex gap-10 overflow-hidden mx-28 my-0 bg-custom-gradient ">
          <div className="fader"></div>
          <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10   ">
            {Slider_Data.map((item, index) => (
              <img className="w-32" src={item.img} />
            ))}
          </div>
          <div
            aria-hidden="true"
            className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10"
          >
            {Slider_Data.map((item, index) => (
              <img className="w-32" src={item.img} />
            ))}
          </div>
        </div>
        <div className=" relative my-20 ">
          <div className=" items-center flex flex-col space-y-2">
            <div className=" flex space-x-2 font-medium md:text-5xl">
              <p className=" text-[#000000]">Explore</p>
              <p className=" text-[#2BAC9F]">Top</p>
              <p className=" text-[#2BAC9F]">Categories</p>
            </div>
            <div>
              <p className=" text-[#98ABBE]">
                Click on the categories and explore all courses
              </p>
            </div>
          </div>
          <div className=" md:absolute md:top-[1rem] md:left-[5rem]">
            <img src={ECLIPE_ICON} />
          </div>
          <div className=" md:absolute md:flex md:right-[5rem] ">
            <img src={ECLIPE_ICON_2} />
          </div>
        </div>
        <MySwiperComponent />
      </div>
    </>
  );
}
export default SliderPage;
