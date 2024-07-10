import React from "react";
import featrure2 from "../../Utils/Assets/Svg/feature2.png";
const FeatureType2 = () => {
  return (
    <div className=" flex justify-center my-[10rem] space-x-[10rem] w-screen">
      <div className="  my-[5rem]">
        <p className=" text-5xl font-bold text-[#282C7C] my-2">
          Assessments ,
        </p>
        <div className=" flex text-5xl font-bold gap-2">
          <p className="  text-[#F18A07]">Quizzes,</p>
          <p className="  text-[#282C7C]">Tests</p>
        </div>
        <div className=" text-[#868693] font-medium text-xl  w-[26rem] flex flex-nowrap my-10">
          Easily launch live assignments, quizzes, and tests. Students results
          are automatically entered in the online gradebook.
        </div>
      </div>

      <div>
        <img src={featrure2} />
      </div>
    </div>
  );
};

export default FeatureType2;
