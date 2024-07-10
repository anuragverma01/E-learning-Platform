import React, { useEffect, useState } from "react";
import Header from "../Header";
import Card from "../../Components/card";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/AppStore";
import CategoryHeader from "../../Components/categoryHeader";
import { useNavigate } from "react-router-dom";
import { COURSE, GET_CATEGORY } from "../../Saga/AuthSaga/sagaAction";
import { getfilterdata } from "../../Redux/Slices/courseSlice";

function CategoriesPage() {
  const dispatch = useDispatch();
  
  const course = useSelector((state: RootState) => state?.course?.courseInfo);
  const data = course?.data;

  const filtercategory = useSelector((state: RootState) => state.course.filtercategory);


  useEffect(() => {
    dispatch(COURSE());
  }, []);



  const navigate = useNavigate();
  const handleNavigate = (_id: any) => {
    navigate(`/details/${_id}`);
  };

  return (
    <div className=" h-screen w-screen ">
      <Header />
      <CategoryHeader />
      <div className=" mt-32 w-screen">
        <div className="justify-center flex flex-col items-center space-y-5">
          <div>
            <p>FEATURED COURSES</p>
          </div>
          <div>
            <p className=" font-bold text-2xl">Find Yours From The Featured</p>
          </div>
          <div className=" md:w-[50rem]  text-center">
            <p>
              When An Unknown Printer Took A Gallery of Types And Scrambled It
              To Make A Type Specimen Book It Has Survived Not Only Five
              Centuries
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-start gap-5 my-10">
          {filtercategory?.map((item: any, index: any) => (
            <div key={item?._id}>
              <Card
                onClick={() => handleNavigate(item._id)}
                name={item?.name}
                lesson="24x Lesson"
                instructor_name={item.instructor_name}
                tag={item.tag}
                instructor_tech={item.instructor_tech}
                button_type="Enroll"
                rating={item.rating}
                className1=" cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoriesPage;
