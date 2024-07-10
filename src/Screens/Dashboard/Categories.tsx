import React, { useEffect, useState } from "react";
import Frame from "../../Utils/Assets/Svg/Frame.png";
import Card from "../../Components/card";
import Hoverbutton from "../../Components/Hoverbutton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Store/AppStore";
import { COURSE } from "../../Saga/AuthSaga/sagaAction";

function Categories() {
  const [coursedata, setcoursedata] = useState([]); //main data
  const [filterdata, setfilterdata] = useState([]); // copy data
  const navigate = useNavigate();
  const handleNavigate = (_id: any) => {
    navigate(`/details/${_id}`);
  };
  const dispatch = useDispatch();
  const fetchdata = useSelector((state: RootState) => state.course.courseInfo);
  useEffect(() => {
    setcoursedata(fetchdata?.data);
    setfilterdata(fetchdata?.data);
    dispatch(COURSE());
  }, []);
  // useEffect(() => {
  //   dispatch(COURSE());
  //   dispatch(GET_CATEGORY());
  // }, []);
  const coursefilter = (value: any) => {
    let data = coursedata.filter(
      (e: any) => e?.categoryType?.categoryType == value
    );
    setfilterdata(data);
  };
  return (
    <div id="course" className=" h-screen w-screen relative flex">
      <img className=" md:w-full md:h-full flex object-cover" src={Frame} />
      <div className=" absolute w-screen h-screen z-20">
        <div className="flex flex-col items-center justify-center">
          <div className=" flex my-4 flex-col md:flex-row items-center ">
            <h1 className=" md:text-5xl text-3xl font-bold text-[#000000] ">
              Our Most{" "}
            </h1>
            <h1 className=" md:text-5xl text-3xl font-bold text-[#2BAC9F] ">
              Popular Course
            </h1>
          </div>
          <div className="text-[#B6B6C3] font-normal md:text-lg text-base ">
            <h1>Click on the categories and explore all courses</h1>
          </div>
        </div>

        <div className="flex items-center justify-center md:space-x-8 md:my-14 md:overflow-hidden overflow-y-scroll w-screen">
          <Hoverbutton
            onClick={() => navigate("/CategoriesPage")}
            name="See All"
          />
          <Hoverbutton
            onClick={() => coursefilter("Web Development")}
            name="Web Development"
          />
          <Hoverbutton
            onClick={() => coursefilter("Graphic Design")}
            name="Graphic Design"
          />
          <Hoverbutton
            onClick={() => coursefilter("Data Science")}
            name="Data Science"
          />
          <Hoverbutton
            onClick={() => coursefilter("Marketing")}
            name="Marketing"
          />
        </div>
        <div className=" flex justify-center space-x-5 md:flex-row flex-col">
          {filterdata?.slice(0, 3)?.map((item: any, index: any) => (
            <Card
              onClick={() => handleNavigate(item?._id)}
              name={item?.name}
              lesson="25x Lesson"
              instructor_name="Kevin Parker"
              instructor_tech="React Developer"
              button_type="Enroll"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;

//Web Development -- JavaScript, React JS, Next Js, Angular
// Graphic Design -- Adobe Illustartor, Figma, Adobe XD, Blender
// Data Science -- Machine Learning, Data Analysis, Python, AI
// Marketing -- Social media Marketing, Google analytics, ChatGpt, Influncer Marketing

//Web Development
// Graphic Design
// Data Science
// Marketing
// Mobile Development -- React Native, Kotlin ,Swift, GOogle FLutter
// Software Engineering -- Data Structure, Alogritm, Software Architecture, Coding Interviews
