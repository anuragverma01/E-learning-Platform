import React from "react";
import Frame from "../../Utils/Assets/Svg/frame2.png";
import IMG_1 from "../../Utils/Assets/Svg/Group 48.png";
import IMG_2 from "../../Utils/Assets/Svg/Group 49.png";
import IMG_3 from "../../Utils/Assets/Svg/Group 50.png";
import IMG_4 from "../../Utils/Assets/Svg/Group 51.png";
import Slider from "../../Components/Slider";
import CountUp from "../../Components/counter";

function Testimonials() {
  return (
    <div className=" relative h-screen w-screen flex">
      <img className=" w-full h-full object-cover flex" src={Frame} />
      <div className="absolute w-screen h-screen">
        <div className=" flex items-center justify-center flex-col">
          <h6 className=" font-bold text-6xl mt-8">Why Choose Us ?</h6>
          <p className=" font-normal text-lg w-[30%] text-center mt-8">
            We are dedicated to providing a superior learning experience that
            stands out in the digital education space.
          </p>
        </div>
        <div className=" flex  items-center justify-center space-x-32 mt-20">
          <div className=" flex space-x-5 ">
            <div>
              <img src={IMG_1} />
            </div>
            <div>
              <p className=" font-bold text-black text-3xl">
                <CountUp start={0} end={1000} />
              </p>
              <p className=" font-normal text-[#868693] text-sm">INSTRUCTOR</p>
            </div>
          </div>
          <div className=" flex space-x-5 ">
            <div>
              <img src={IMG_2} />
            </div>
            <div>
              <p className=" font-bold text-black text-3xl">20,000+</p>
              <p className=" font-normal text-[#868693] text-sm">STUDENTS</p>
            </div>
          </div>
          <div className=" flex space-x-5 ">
            <div>
              <img src={IMG_3} />
            </div>
            <div>
              <p className=" font-bold text-black text-3xl">10,000+ </p>
              <p className=" font-normal text-[#868693] text-sm">VIDEOS</p>
            </div>
          </div>
          <div className=" flex space-x-5 ">
            <div>
              <img src={IMG_4} />
            </div>
            <div>
              <p className=" font-bold text-black text-3xl">1,00,000 </p>
              <p className=" font-normal text-[#868693] text-sm">USERS</p>
            </div>
          </div>
        </div>

        <div className="flex justify-around my-[150px]">
          <div className=" space-y-5">
            <p className=" text-[#1DA599] font-semibold text-xl">
              Testimonials
            </p>
            <div className=" font-bold text-4xl   w-[20rem]">
              <p>What are the Scholars saying About us</p>
            </div>
          </div>
          <div className=" flex gap-8">
            <Slider />
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;

{
  /* <div className=" flex justify-around py-[5rem] px-[10rem]">
        <div className=" flex space-x-5 ">
          <div>
            <img src={IMG_1} />
          </div>
          <div>
            <p className=" font-bold text-black text-3xl"><CountUp start={0} end={1000} /></p>
            <p className=" font-normal text-[#868693] text-sm">INSTRUCTOR</p>
          </div>
        </div>
        <div className=" flex space-x-5 ">
          <div>
            <img src={IMG_2} />
          </div>
          <div>
            <p className=" font-bold text-black text-3xl">20,000+</p>
            <p className=" font-normal text-[#868693] text-sm">STUDENTS</p>
          </div>
        </div>
        <div className=" flex space-x-5 ">
          <div>
            <img src={IMG_3} />
          </div>
          <div>
            <p className=" font-bold text-black text-3xl">10,000+ </p>
            <p className=" font-normal text-[#868693] text-sm">VIDEOS</p>
          </div>
        </div>
        <div className=" flex space-x-5 ">
          <div>
            <img src={IMG_4} />
          </div>
          <div>
            <p className=" font-bold text-black text-3xl">1,00,000 </p>
            <p className=" font-normal text-[#868693] text-sm">USERS</p>
          </div>
        </div>
      </div>
      <div className="flex justify-around my-[5rem]">
        <div className=" space-y-5">
          <p className=" text-[#1DA599] font-semibold text-xl">Testimonials</p>
          <div className=" font-bold text-4xl   w-[20rem]">
            <p>What are the Scholars saying About us</p>
          </div>
        </div>
        <div className=" flex gap-8" >
          <Slider />
          <Slider />

        </div>
      </div> */
}
