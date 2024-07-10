import React from "react";
import test from "../Utils/Assets/Svg/course1.png";
import { CompomentProps } from "./@types";
import { FaStar } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { Line } from "rc-progress";
const Card: React.FC<CompomentProps> = ({
  image,
  lesson,
  rating,
  name,
  instructor_photo,
  instructor_name,
  instructor_tech,
  button_type,
  className1,
  tag,
  onClick,
  identify,
  showStyle,
}) => {
  return (
    <div
      onClick={onClick}
      key={identify}
      className="flex transition ease-in-out delay-165 hover:-translate-y-0 hover:scale-110 duration-300 border-none cursor-pointer "
    >
      <div
        className={`flex flex-col border-2 h-auto w-[20rem] rounded-xl p-3 bg-white ${className1}`}
      >
        <div className=" border-2 object-cover  w-auto h-auto  rounded-xl ">
          <img className="rounded-xl" src={test} />
        </div>
        <div className=" justify-between flex mt-2   ">
          <div className="flex space-x-2 items-center justify-center ">
            <FaCirclePlay size={20} color="#24D494" />
            <p className="  font-medium text-sm">{lesson}</p>
          </div>
          <div className=" flex items-center gap-1">
            <FaStar size={15} color="#FFA62F" />
            <p className=" font-normal text-sm">{rating}</p>
          </div>
        </div>

        <div className=" text-black font-bold text-base py-1">{name}</div>
        <div>
          <button className="relative border-2 rounded-md flex px-2 py-0 text-black text-xs items-center justify-center ">
            <p className="relative z-10">{tag}</p>
          </button>
        </div>

        {showStyle ? (
          <>
            <div className=" my-2">
              <Line
                percent={50}
                strokeWidth={2}
                trailWidth={2}
                strokeColor="#000000"
              />
            </div>
            <div className=" flex justify-between font-normal text-sm">
              <p>Course Completed</p>
              <p>86%</p>
            </div>
            <div className=" flex justify-center mt-4">
              <button className="relative border-2 rounded-lg flex w-[80%] py-2 text-white text-lg font-bold border-[#FFA722] items-center justify-center bg-[#FFA722] ">
                <span className="relative z-10">{button_type}</span>
              </button>
            </div>
          </>
        ) : (
          <>
            <div className=" bg-[#24D494] w-auto h-0.5 mt-2"></div>
            <div className=" flex justify-between py-2 ">
              <div className=" flex space-x-3">
                <div className=" w-10 h-10 bg-indigo-600 rounded-full"> </div>
                <div className=" items-center flex flex-col justify-center">
                  <p className=" font-medium text-sm">{instructor_name}</p>
                  <p className=" font-normal text-xs">{instructor_tech}</p>
                </div>
              </div>
              <div>
                <button className="relative border-2 rounded-md flex px-4 py-0 text-[#24D494] border-[#24D494] items-center justify-center overflow-hidden bg-white  shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#24D494] before:duration-500 before:ease-out hover:shadow-[#24D494] hover:text-white hover:before:h-56 hover:before:w-56">
                  <span className="relative z-10">{button_type}</span>
                </button>
              </div>
            </div>
          </>
        )}

        {/* //PROGRESS BAR START // */}
      </div>
    </div>
  );
};
export default Card;
