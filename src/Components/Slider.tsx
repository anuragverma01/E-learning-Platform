import React from "react";
import star from "../Utils/Assets/Svg/Group 44.png";

const Slider = () => {
  return (
    <div className=" w-[25rem] h-[15rem] rounded-2xl  bg-slate-200 py-5 ">
      <div className=" flex gap-5 px-5 ">
        <div className=" w-[50px] h-[50px] bg-lime-600 rounded-full"></div>
        <div>
          <p className=" text-black font-bold text-lg">Kevin Parker</p>
          <p className=" text-sm text-[#868693]">12 reviews at yelp</p>
        </div>
        <div className="">
          <img src={star} />
        </div>
      </div>
      <div className=" w-[25rem] px-6 text-sm text-[#868693] py-5" >
        <p>
          “Thank you so much for you help.its exactly what I’v Thank you so much
          for you help.its exactly what I’v Thank you so much for you help.its
          exactly what I’v Thank you so much for you help.its exactly what I’v”
        </p>
      </div>
    </div>
  );
};

export default Slider;
