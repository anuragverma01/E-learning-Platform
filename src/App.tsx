import React from "react";
import MainPage from "./Screens/Dashboard/MainPage";
import SliderPage from "./Screens/Dashboard/SliderPage";
import Categories from "./Screens/Dashboard/Categories";
import { Features } from "./Screens/Dashboard/Features";
import FeatureType2 from "./Screens/Dashboard/FeatureType2";
import { FeatureType3 } from "./Screens/Dashboard/FeatureType3";
import Testimonials from "./Screens/Dashboard/Testimonials";
import Footer from "./Screens/Dashboard/Footer";
import CategoriesPage from "./Screens/Categories/CategoriesPage";
import { Route, Routes } from "react-router-dom";
import CourseDetails from "./Screens/CourseDetail/CourseDetails";
import Overview from "./Screens/UserDashboard/Overview";
import MyCourse from "./Screens/UserDashboard/Courses/MyCourse";
import Tasks from "./Screens/UserDashboard/Tasks/Tasks";
import TaskPage from "./Screens/UserDashboard/Tasks/TaskPage";
import MyCoursePage from "./Screens/UserDashboard/Courses/MyCoursePage";
import Classes from "./Screens/UserDashboard/Classes/classes";
import MyClasses from "./Screens/UserDashboard/Classes/myClasses";
import Admindashboard from "./Screens/AdminDashboard/admindashboard";
import AddCourse from "./Screens/AdminDashboard/adminCourse/addCourse";
import AdminCourseList from "./Screens/AdminDashboard/adminCourse/adminCourseList";
import AddCategory from "./Screens/AdminDashboard/adminCourse/addCategory";
import UserList from "./Screens/AdminDashboard/userList/userList";
import InstructorDashboard from "./Screens/InstructorDashboard/instructorDashboard";
import Task from "./Screens/InstructorDashboard/tasks/task";
import CreateTask from "./Screens/InstructorDashboard/tasks/createTask";
import Sidebar from "./Components/sidebar";
// import Test from "./Screens/test";
import Dashboard from "./Screens/Dashboard/dashboard";
import Login from "./Screens/AdminDashboard/Login";
import PrivateRoute from "./PrivateRoute";
import AdminLayout from "./layouts/admin";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/Slider" element={<SliderPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/features2" element={<FeatureType2 />} />
        <Route path="/features3" element={<FeatureType3 />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/CategoriesPage" element={<CategoriesPage />} />
        <Route path="/details/:_id" element={<CourseDetails />} />
        <Route path="/main" element={<Dashboard />} />

        {/* USERDAHBOARD ROUTES */}

        <Route element={<PrivateRoute />}>
          <Route path="/user/" element={<AdminLayout />}>
            <Route path="dashboard" element={<Overview />} />
            <Route path="course/:_id" element={<MyCourse />} />
            <Route path="task" element={<Tasks />} />
            <Route path="task-page" element={<TaskPage />} />
            <Route path="class" element={<Classes />} />
            <Route path="class/page" element={<MyClasses />} />
            {/* <Route path="/test" element={<Test />} /> */}
          </Route>
          <Route path="user/sub/course" element={<MyCoursePage />} />
        </Route>

        {/* //ADMIN ROUTES */}
        <Route path="/Admin/dashboard" element={<Admindashboard />} />
        <Route path="/Admin/course/add" element={<AddCourse />} />
        <Route path="/Admin/course/list" element={<AdminCourseList />} />
        <Route path="/Admin/add/category" element={<AddCategory />} />
        <Route path="/Admin/userlist" element={<UserList />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/Admin/login" element={<Login />} />

        {/* // INSTRUCTOR ROUTES */}
        <Route path="/instructor/dashboard" element={<InstructorDashboard />} />
        <Route path="/instructor/task" element={<Task />} />
        <Route path="/instructor/task/createtask" element={<CreateTask />} />
      </Routes>
      {/* <MainPage /> */}
      {/* <SliderPage />
      <Categories />
      <Features />
      <FeatureType2 />
      <FeatureType3 />
      <Testimonials />
      <Footer />  */}
      {/* <CourseDetails /> */}
      {/* <CategoriesPage /> */}
      {/* <Overview /> */}
      {/* <MyCourse /> */}
      {/* <Tasks /> */}
      {/* <TaskPage /> */}
      {/* <MyCoursePage /> */}
    </div>
  );
}

// ADMIN PAGES

//DASHBOARD
//ADD NEW COURSE
// PREVIEW
//COURSE LIST
//CATEGORY ADD
// USER LIST

//INSTRUCTOR PAGES
// DASHBOARD
// TASKS PAGE
// CREATE TASK PAGE
// LIVE CLASS
// UPDATE PROFILE

// import React from 'react'
// import {useSelector} from "react-redux"
// import {Navigate, useLocation} from "react-router-dom"

// const ProtectedRoute = ({children}) => {
//     const user = useSelector((state) => state.user);
//     let location = useLocation();

//     if(!user.state.isAuthenticated) {
//         return <Navigate to="/login" state={{ from: location}} replace />
//     }
//  return children

// };

// export default ProtectedRoute;

// hide outlet on specific screen
// grid
// twilio code
// naviagte replace
// style slider
// image style
// counter
// CICD