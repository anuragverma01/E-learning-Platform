import React from "react";
import BG_IMG from "../../Utils/Assets/Svg/featrue3.png";
export const FeatureType3 = () => {
  return (
    <div className=" flex justify-around my-[10rem] mx-[5rem]" >
      <div>
        <img src={BG_IMG} />
      </div>
      <div className=" space-y-5 my-[5rem]" >
        <div className="md:text-5xl font-bold gap-2">
          <p className=" text-[#282C7C]">One-on-One</p>
          <p className=" text-[#F18A07]">Discussions</p>
        </div>
        <div className=" md:w-[30rem] text-[#868693] font-medium text-xl">
          <p>
            Teachers and teacher assistants can talk with students privately
            without leaving the Zoom environment.
          </p>
        </div>
      </div>
    </div>
  );
};
