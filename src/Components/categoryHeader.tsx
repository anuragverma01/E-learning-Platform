import React from "react";
import { RootState } from "../Redux/Store/AppStore";
import { useDispatch, useSelector } from "react-redux";
import { FaArtstation } from "react-icons/fa";
import { setFilterCategory } from "../Redux/Slices/courseSlice";
function CategoryHeader() {
  const dispatch = useDispatch();
  const category = useSelector((state: RootState) => state.course.category);
  const data = category?.data;
  const coursedata = useSelector((state: RootState) => state.course.courseInfo);
  // console.log("FETCH ADATA", coursedata?.data);
  const handleClick = (e: any) => {
    console.log(e);
    dispatch(setFilterCategory(e));
  };

  return (
    <div className=" w-screen h-[8rem] bg-[#FFA62F] relative justify-center flex">
      <div className="absolute w-screen h-[150px] mt-14">
        <div className=" flex w-full h-full justify-center">
          <div className="bg-white rounded-lg shadow-lg w-[80%] flex items-center px-1  overflow-y-scroll md:overflow-hidden ">
            {data?.slice(0, 6).map((item: any, index: any) => (
              <div
                onClick={() => handleClick(item?._id)}
                key={item?._id}
                className=" bg-slate-200 shadow-lg w-[15%] h-[90px] cursor-pointer rounded-lg flex justify-between items-center px-5 mx-5 relative transition ease-in-out delay-165 hover:-translate-y-0 hover:scale-110 duration-300 border-none "
              >
                <FaArtstation size={30} />
                <div className=" flex flex-col">
                  <h1 className=" font-bold">{item?.categoryType}</h1>
                  <h1>1 Course</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryHeader;
