import React from "react";
import IMAGE_BG from "../../Utils/Assets/Svg/feature.png";
import f1 from "../../Utils/Assets/Svg/f1.png";
import f2 from "../../Utils/Assets/Svg/f2.png";
import f3 from "../../Utils/Assets/Svg/f3.png";

export const Features = () => {
  return (
    <div id="features" className=" w-screen">
      <div className=" flex justify-center flex-col items-center my-10 space-y-3 ">
        <div className="space-x-2 font-bold text-5xl flex">
          <h1 className=" text-[#3E4083]">Our</h1>
          <h1 className=" text-[#F28D10]">Features</h1>
        </div>
        <div>
          <p className=" text-[#B6B6C3] text-base px-10">
            This very extraordinary feature, can make learning activities more
            efficient
          </p>
        </div>
      </div>

      <div className=" flex flex-col justify-between md:mt-32 md:flex-row md:mx-32 mx-5">
        <div className=" flex justify-center ">
          <img className="" src={IMAGE_BG} />
        </div>
        <div className=" flex flex-col md:mt-10 mt-5 ">
          <div className=" flex flex-col font-bold text-xl items-center justify-center md:text-4xl md:items-start w-full ">
            <div className="flex flex-row gap-1 md:mb-4">
              <p className=" text-[#3E4083]">A</p>
              <p className=" text-[#F28D10]">user interface</p>
              <p className="text-[#3E4083]">designed</p>
            </div>
            <div>
              <p className=" text-[#3E4083]">for the classroom</p>
            </div>
          </div>
          <div className=" md:space-y-5 md:mt-14 ">
            <div className=" flex gap-6 ">
              <div className=" w-full h-full" >
                <img className="md:w-full md:h-full md:object-contain w-[100px] h-[100px]" src={f2} />
              </div>
              <div className="text-[#868693] md:font-medium md:text-base mt-3 text-sm">
                <p className=" w-[300px]">
                  Teachers don’t get lost in the grid view and have a dedicated
                  Podium space.{" "}
                </p>
              </div>
            </div>

            <div className=" flex gap-6 ">
              <div>
                <img src={f1} />
              </div>
              <div className="text-[#868693] md:font-medium text-base mt-3">
                <p className=" w-[300px]">
                  Teachers don’t get lost in the grid view and have a dedicated
                  Podium space.{" "}
                </p>
              </div>
            </div>

            <div className=" flex gap-6 ">
              <div>
                <img src={f3} />
              </div>
              <div className="text-[#868693] md:font-medium text-base mt-3">
                <p className=" w-[300px]">
                  Teachers don’t get lost in the grid view and have a dedicated
                  Podium space.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
