import React, { useState } from "react";
import Header from "../Header";
import Communication from "../../Utils/Assets/Svg/Communication.svg";
import Bag from "../../Utils/Assets/Svg/Bag.svg";
import Idea from "../../Utils/Assets/Svg/Idea.svg";
import Giri_Book_Image from "../../Utils/Assets/Svg/girl.svg";
import M1 from "../../Utils/Assets/Svg/M1.svg";
import M2 from "../../Utils/Assets/Svg/M2.svg";
import M3 from "../../Utils/Assets/Svg/M3.svg";
import M4 from "../../Utils/Assets/Svg/M4.svg";
import Auth from "../Authentication/Auth";

export default function MainPage() {
  const [open, setopen] = useState(false);
  const handleClose = () => {
    setopen(false);
  };

  const handleOpen = () => {
    setopen(true);
  };
  return (
    <>
      <Header />
      <div id="home" className="flex h-screen bg-[#FFF3DA] w-screen relative">
        <div className=" space-y-5  w-[60%] mx-20 mt-32 relative">
          <div className="text-7xl font-extrabold">
            <div className="flex space-x-5">
              <h1 className="text-[#FFA62F]">Up Your </h1>
              <h1 className="text-[#201658]">Skills</h1>
            </div>
            <div className="flex space-x-5">
              <h1 className="text-[#FFA62F]">To</h1>
              <h1 className="text-[#201658]">Advance</h1>
              <h1 className="text-[#FFA62F]">Your</h1>
            </div>
            <div className="flex space-x-5">
              <h1 className="text-[#201658]">Carrer</h1>
              <h1 className="text-[#FFA62F]">Path</h1>
            </div>
          </div>

          <div className="text-xl text-[#413A3A] text-justify font-normal mt-20">
            <p className="w-[27rem]">
              Brainace is an interesting platform that will teach you in more an
              interactive way
            </p>
          </div>
          <button
            onClick={handleOpen}
            className=" border-none rounded-2xl animate-bounce md:top-10 relative h-[60px] w-40 overflow-hidden border  bg-[#FFA62F] px-3 text-white shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-white  before:transition-all before:duration-500 hover:text-black hover:shadow-white hover:before:left-0 hover:before:w-full"
          >
            <span className="relative z-10 ">Join for free</span>
          </button>
          <Auth isOpen={open} onClose={handleClose} />
          <div className=" flex  w-[70%] absolute bottom-56 flex-row">
            <div className="flex basis-1/3 items-center">
              <img src={Communication} />
              <span>Public Speaking</span>
            </div>
            <div className="flex basis-1/3 items-center">
              <img src={Bag} />
              <span>Carrer-Oriented</span>
            </div>
            <div className="flex basis-1/2 items-center">
              <img src={Idea} />
              <span>Creative Thinking</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center relative w-[40%] ">
          <div className="ml-10 relative right-[100px] ">
            <div>
              <img className=" w-full h-full" src={Giri_Book_Image} />
            </div>
            <div className=" absolute bottom-32 -left-52">
              <img src={M2} />
            </div>
            <div className=" absolute top-0 -left-16">
              <img src={M1} />
            </div>
            <div className=" absolute right-32 -top-16">
              <img src={M3} />
            </div>
            <div className=" absolute bottom-0 -right-20">
              <img className="" src={M4} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
