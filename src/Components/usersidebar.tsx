import React, { useEffect } from "react";
import { CiStreamOn } from "react-icons/ci";
import { FiBook } from "react-icons/fi";
import { GrTasks } from "react-icons/gr";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoMdChatbubbles, IoMdSettings } from "react-icons/io";
import { TiThLargeOutline } from "react-icons/ti";
import LOGO from "../Utils/Assets/Svg/Dashboard_logo.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { COURSE } from "../Saga/AuthSaga/sagaAction";

function Usersidebar() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(COURSE());
  }, []);
  const navigate = useNavigate();
  const logo = [
    {
      id: 0,
      Icon_name: TiThLargeOutline,
      name: "Overview",
    },
    {
      id: 1,
      Icon_name: FiBook,
      name: "My Course",
    },
    {
      id: 2,
      Icon_name: GrTasks,
      name: "Tasks",
    },
    {
      id: 3,
      Icon_name: HiOutlineUsers,
      name: "Mentors",
    },
    {
      id: 4,
      Icon_name: CiStreamOn,
      name: "My Classes",
    },
    {
      id: 5,
      Icon_name: IoMdChatbubbles,
      name: "Chat",
    },
    {
      id: 6,
      Icon_name: IoMdSettings,
      name: "Setting",
    },
  ];
  const _id = localStorage.getItem("id");
  const HandleClick = (e: any) => {
    if (e == logo[0].id) {
      navigate("dashboard");
    } else if (e == logo[1].id) {
      navigate(`course/${_id}`);
    } else if (e == logo[2].id) {
      navigate("task");
    } else if (e == logo[3].id) {
      // navigate("/");
    } else if (e == logo[4].id) {
      navigate("class");
    } else if (e == logo[5].id) {
      // navigate("/");
    } else if (e == logo[6].id) {
      // navigate("/");
    }
  };
  return (
    <div className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 ">
      <div className="h-auto rounded-xl py-20 overflow-y-auto bg-black my-10 mx-5 w-[260px]  ">
        <div className=" flex justify-center items-center">
          <img src={LOGO} />
        </div>
        {logo.map((item, index) => (
          <div
            onClick={() => HandleClick(item.id)}
            className=" flex flex-row px-10 items-center gap-2 py-5 hover:bg-teal-600 hover:rounded-lg my-5 cursor-pointer"
          >
            <item.Icon_name color="#ffff" size={30} />
            <p className=" text-white text-lg font-normal">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Usersidebar;
