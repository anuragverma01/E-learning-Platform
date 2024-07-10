import React, { useEffect, useState } from "react";
import BrainAce_Logo from "../Utils/Assets/Svg/Logo.svg";
import Auth from "./Authentication/Auth";
import { MdKeyboardArrowDown } from "react-icons/md";
import LOGO_ from "../Utils/Assets/Svg/logo.png";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Redux/Store/AppStore";
import useLoggedin from "../Custom-hooks/useLoggedin";
import {
  GET_CATEGORY,
  COURSE,
  DETAILS_USER,
} from "../Saga/AuthSaga/sagaAction";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [open, setopen] = useState(false);
  const userName = useSelector((state: RootState) => state.userAuth.userInfo);
  console.log(userName?.data?.name, "USER NAME FROM HEADER");
  const isLoggedin = useLoggedin();
  const dispatch = useDispatch();

  const handleClose = () => {
    setopen(false);
  };

  const handleOpen = () => {
    setopen(true);
  };
  const location = useLocation();
  const showitem = location.pathname !== "/CategoriesPage";
  useEffect(() => {
    Details();
    dispatch(COURSE());
    dispatch(GET_CATEGORY());
  }, [isLoggedin]);

  const Details = async () => {
    console.log(isLoggedin, " IS");
    if (isLoggedin) {
      await dispatch(DETAILS_USER());
    }
  };

  const scrollToTarget = (item: any) => {
    const id = document.getElementById(item);
    if (id) {
      id.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
      <header className=" sticky top-0 z-40">
        <nav className="bg-[#FFF3DA] border-gray-200  py-4 w-screen px-10">
          <div className="flex   md:justify-between justify-center">
            <div className="">
              <a href="/main">
                <img
                  src={BrainAce_Logo}
                  className="w-[100px]"
                  alt="Flowbite Logo"
                />
              </a>
            </div>
            <div className="flex items-center lg:order-2 left-0 absolute">
              <button
                type="button"
                className="inline-flex  items-center p-2 ml-1 text-sm rounded-lg lg:hidden "
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
              {showitem && (
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li
                    onClick={() => scrollToTarget("home")}
                    className="text-base font-regular text-black transition-all duration-200 hover:text-[#FFA62F] focus:text-blue-600 cursor-pointer "
                  >
                    Home
                  </li>
                  <li
                    onClick={() => scrollToTarget("course")}
                    className="text-base font-regular text-black transition-all duration-200 hover:text-[#FFA62F] focus:text-blue-600 cursor-pointer "
                  >
                    Course
                  </li>
                  <li
                    onClick={() => scrollToTarget("features")}
                    className="text-base font-regular text-black transition-all duration-200 hover:text-[#FFA62F] focus:text-blue-600 cursor-pointer "
                  >
                    Features
                  </li>
                  <li
                    onClick={() => scrollToTarget("contactus")}
                    className="text-base font-regular text-black transition-all duration-200 hover:text-[#FFA62F] focus:text-blue-600 cursor-pointer "
                  >
                    Contact us
                  </li>
                  <li className="text-base font-regular text-black transition-all duration-200 hover:text-[#FFA62F] focus:text-blue-600 cursor-pointer ">
                    FAQ
                  </li>
                </ul>
              )}

              {isLoggedin ? (
                <div className=" flex  items-center ml-10">
                  <div className=" w-12 h-12 flex">
                    <img className="w-full h-full rounded-full" src={LOGO_} />
                  </div>
                </div>
              ) : (
                <div className="flex ml-10 md:space-x-5">
                  <button
                    onClick={handleOpen}
                    className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-white text-black shadow-xl rounded-full transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#FFA62F] before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56 hover:text-white"
                  >
                    <span className="relative z-10">Login</span>
                  </button>
                  <Auth isOpen={open} onClose={handleClose} />
                  <button
                    onClick={handleOpen}
                    className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-[#FFA62F]  shadow-xl rounded-full transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-white before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56 hover:text-black text-white"
                  >
                    <span className="relative z-10">Sign up</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
