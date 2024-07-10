import React from "react";
import MainPage from "./MainPage";
import SliderPage from "./SliderPage";
import Categories from "./Categories";
import { Features } from "./Features";
import FeatureType2 from "./FeatureType2";
import { FeatureType3 } from "./FeatureType3";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Header from "../Header";

function Dashboard() {
  return (
    <div>
      <MainPage />
      <SliderPage />
      <Categories />
      <Features />
      <FeatureType2 />
      <FeatureType3 />
      <Testimonials />
      <Footer />
      {/* <Header /> */}
    </div>
  );
}

export default Dashboard;
