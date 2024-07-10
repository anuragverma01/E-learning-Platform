import React, { useEffect, useState } from "react";
import Header from "../Header";
import BG_IMAGE from "../../Utils/Assets/Svg/class 1.jpg";
import Star from "../../Utils/Assets/Svg/Star.svg";
import { FaPlay } from "react-icons/fa";
import { HiBookOpen } from "react-icons/hi2";
import { FaBullhorn } from "react-icons/fa6";
import { LuBadgeInfo } from "react-icons/lu";
import { FaGlobe } from "react-icons/fa6";
import { MdSubtitles } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { LuMinusCircle } from "react-icons/lu";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getid } from "../../Redux/Slices/courseSlice";

function CourseDetails() {
  const dispatch = useDispatch();
  const { _id } = useParams();
  const navigate = useNavigate();
  const [courseDetail, setcourseDetail] = useState<any>();
  const [isActive, setisActive] = useState(null);
  const handleClick = (index: any) => {
    setisActive(isActive === index ? null : index);
  };

  const getdetaildata = async () => {
    const fetchdata = await fetch(
      `http://localhost:8080/api/course/${_id}/detail`
    );
    const jsondata = await fetchdata.json();
    setcourseDetail(jsondata?.data);
  };
  const date = new Date(courseDetail?.updatedAt);
  const formattedDate = `${String(date.getUTCMonth() + 1).padStart(
    2,
    "0"
  )}-${date.getUTCFullYear()}`;

  const handleButton = (_id: any) => {
    console.log("event ", _id);
    navigate(`/user/course/${_id}`);
    localStorage.setItem("id", _id);
  };

  useEffect(() => {
    getdetaildata();
  }, []);
  return (
    <div className=" md:w-screen h-screen">
      <Header />
      <div className=" bg-[#f5f5f5] w-screen">
        <div>
          <p className="font-bold text-3xl px-20 py-5">Course Details</p>
        </div>
        <div className=" justify-center flex">
          <div className="flex bg-black w-4/5 h-[550px] justify-center relative rounded-t-2xl">
            <img
              className=" flex object-cover w-full rounded-t-2xl"
              src={BG_IMAGE}
              alt="Background"
            />

            <div className=" absolute size-full ">
              <div className="flex p-20 justify-between items-center">
                <div className=" flex flex-col">
                  <div>
                    <p className=" text-white text-4xl font-bold w-[28rem]  ">
                      {courseDetail?.name}
                    </p>
                  </div>
                  <div className=" flex justify-between my-5 pr-[10rem]">
                    <div className=" flex space-x-1 items-baseline ">
                      <p className=" text-[#F69C08] text-base font-bold">
                        {courseDetail?.rating}
                      </p>
                      <img src={Star} className=" w-16" />
                    </div>
                    <div className=" flex space-x-4">
                      <div>
                        <p className=" w-10 h-10 bg-black rounded-full "></p>
                      </div>
                      <div className=" items-center flex flex-col space-y-0.1 text-white">
                        <p className=" text-base">
                          {courseDetail?.instructor_name}
                        </p>
                        <p className=" text-sm">Instructor</p>
                      </div>
                    </div>
                  </div>
                  <div className=" md:w-[25rem] text-white">
                    <p className=" text-lg">
                      {courseDetail?.short_description}
                    </p>
                  </div>

                  <div className=" flex flex-row text-white space-x-8 my-10">
                    <div className=" flex flex-row items-baseline space-x-2">
                      <div className=" w-12 h-12 rounded-full bg-[#F0F0F0]/10 justify-center flex items-center">
                        <FaPlay size={15} color="#ffa622" />
                      </div>
                      <div>
                        <p className=" text-base font-medium">12 Videos</p>
                      </div>
                    </div>
                    <div className=" flex flex-row items-baseline space-x-2">
                      <div className=" w-12 h-12 rounded-full bg-[#F0F0F0]/10 justify-center flex items-center">
                        <HiBookOpen size={15} color="#ffa622" />
                      </div>
                      <div>
                        <p className=" text-base font-medium">12 Videos</p>
                      </div>
                    </div>

                    <div className=" flex flex-row items-baseline space-x-2">
                      <div className=" w-12 h-12 rounded-full bg-[#F0F0F0]/10 justify-center flex items-center">
                        <FaBullhorn size={15} color="#ffa622" />
                      </div>
                      <div>
                        <p className=" text-base font-medium">12 Videos</p>
                      </div>
                    </div>
                  </div>

                  <div className=" flex-row flex text-white space-x-10">
                    <div className=" flex flex-row space-x-2">
                      <LuBadgeInfo size={20} />
                      <p className=" text-sm"> Last updated {formattedDate}</p>
                    </div>
                    <div className=" flex flex-row space-x-2">
                      <FaGlobe size={20} />
                      <p className=" text-sm">{courseDetail?.Language}</p>
                    </div>
                    <div className=" flex flex-row space-x-2">
                      <MdSubtitles size={20} />
                      <p className=" text-sm">
                        {courseDetail?.Language} [Auto]
                      </p>
                    </div>
                  </div>
                </div>
                <div className=" w-5/12 rounded-2xl h-64 bg-[#D4D4D4]/10 backdrop-blur-md">
                  <div>
                    <p className=" px-8 pt-8 text-white text-base">
                      Key Learning At The End Of Course
                    </p>
                  </div>
                  <div className="px-10 py-4 text-sm font-normal space-y-2">
                    <div>
                      {courseDetail?.key_learning?.map(
                        (learning: any, subIndex: any) => (
                          <div
                            className="flex flex-row space-x-2 py-1.5"
                            key={learning._id}
                          >
                            <FaRegCheckCircle size={20} color="#72efba" />
                            <p className="text-white">{learning}</p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className=" flex justify-center my-10">
            <div className="w-4/5 h-auto   relative flex space-x-8">
              <div className=" flex flex-col w-auto  ">
                <div>
                  <p className=" font-bold text-2xl"> CURRICULUM</p>
                  <p className="  w-20 h-1.5 rounded-full bg-[#FFA62F]"></p>
                </div>
                <div className=" w-full my-4 text-justify text-[#9C9C9C]  text-lg">
                  <p>{courseDetail?.description}</p>
                </div>
                <div>
                  <p className=" font-bold text-xl text-[#FFA722] py-1">
                    Content
                  </p>
                </div>
                <div>
                  {courseDetail?.content?.map((item: any, index: any) => (
                    <div key={item?._id}>
                      <div
                        onClick={() => handleClick(index)}
                        className={` shadow-md  w-auto h-14 ${
                          isActive === index ? "rounded-t-2xl" : "rounded-2xl"
                        }  flex-row flex justify-between items-center px-5 mt-4`}
                      >
                        <div className=" basis-10">
                          {isActive === index ? (
                            <LuMinusCircle color="#FFA722" size={30} />
                          ) : (
                            <FiPlusCircle color="#FFA722" size={30} />
                          )}
                        </div>
                        <div className=" basis-full text-sm font-medium  text-start mx-4 ">
                          {item?.title}
                        </div>
                        <div className=" basis-20  text-end">20 min</div>
                      </div>
                      {isActive === index ? (
                        <div
                          className={` bg-white shadow-md  w-auto h-auto ${
                            isActive === index ? "rounded-b-2xl" : "rounded-2xl"
                          }   mb-2 flex-col flex  px-10 pb-5 pt-5`}
                        >
                          {item?.subTopic?.map((item: any, index: any) => (
                            <div className=" flex py-1 gap-4" key={item?._id}>
                              <div>
                                <FaPlay size={15} color="#FFA722" />
                              </div>
                              <div>
                                <p className=" text-[#9C9C9C] text-sm font-medium">
                                  {item}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
              <div className="  w-full flex justify-end  ">
                <div className=" bg-white rounded-xl w-[25rem] h-[30rem] p-3 shadow-md ">
                  <div className="bg-black w-auto h-2/4 rounded-xl"></div>
                  <div className=" p-2 text-[#8A8A8A] font-normal text-sm ">
                    <p className=" text-lg font-bold text-black">
                      {courseDetail?.price}
                    </p>
                    <p className="  font-bold text-base ">
                      Key Learning At The End Of Course
                    </p>
                    <div className=" my-3">
                      {courseDetail?.key_learning
                        ?.slice(0, 4)
                        ?.map((item: any, index: any) => (
                          <div
                            className="flex flex-row  space-x-2"
                            key={item?._id}
                          >
                            <FaRegCheckCircle size={15} color="#72efba" />
                            <p className=" ">{item}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div className=" flex justify-center items-center">
                    <button
                      onClick={() => handleButton(courseDetail?._id)}
                      className=" w-full h-10 bg-[#FFA722] rounded-full text-white font-bold"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
