import React, { useState } from "react";
import LOGO from "../Utils/Assets/Svg/Logo.svg";
import { GoHome } from "react-icons/go";
import { FaBookBookmark } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const data = [
    {
      id: 0,
      topic: "Dashboard",
      icon: GoHome,
    },
    {
      id: 1,
      topic: "Courses",
      icon: FaBookBookmark,
      sub: [
        { id: 0, sub1: "Add" },
        {
          id: 1,
          sub1: "List",
        },
        {
          id: 2,
          sub1: "Category Add",
        },
      ],
    },
    {
      id: 2,
      topic: "Users",
      icon: FaUserFriends,
      sub: [
        { id: 3, sub1: "List" },
        // {
        //   id: 4,
        //   sub1: "Add Instructor",
        // },
      ],
    },
  ];
  const [isActive, setisActive] = useState(null);

  const handleClick = (index: any) => {
    setisActive(isActive === index ? null : index);
  };
  const navigate = useNavigate();
  const handleNavigate = (i: any) => {
    console.log("ITEM CONSOLE", i);
    if (i.id === 0) {
      navigate("/Admin/course/add");
    } else if (i.id === 1) {
      navigate("/Admin/course/list");
    } else if (i.id === 2) {
      navigate("/Admin/add/category");
    } else if (i.id === 3) {
      navigate("/Admin/userlist");
    }
    // if (i.id === 4) {
    //   navigate("/Admin/course/add");
    // }
  };
  return (
    <div className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
      <div className="h-full px-3 py-4 overflow-y-auto bg-[#F4F5FA]">
        <div className=" flex justify-center items-center">
          <img src={LOGO} />
        </div>
        <div className=" flex flex-col mx-10">
          {data?.map((item: any, index: any) => (
            <div>
              <div
                onClick={() => handleClick(index)}
                className=" flex flex-row items-center space-x-3  cursor-pointer hover:bg-teal-600 my-5 "
              >
                <item.icon size={30} />
                <p className=" font-bold text-2xl ">{item?.topic}</p>
              </div>

              {isActive === index ? (
                <div className=" flex flex-col">
                  {item?.sub?.map((item: any, index: any) => (
                    <div
                      onClick={() => handleNavigate(item)}
                      className=" flex items-center space-x-3 hover:bg-fuchsia-500 cursor-pointer"
                    >
                      <FaRegCircle size={15} />
                      <p className=" font-normal text-lg ">{item?.sub1}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
