import React from "react";
import Navigator from "../components/Navigator";
import CarContainer from "../components/CarContainer";
import Footer from "../components/Footer";
import "../components/CestaSlider";
import CestaSlider from "../components/CestaSlider";
const CarPage = () => {
  return (
    
    <div className=" bg-stone-950 ">
      <Navigator />
      <CarContainer />
      <CestaSlider />
      <Footer/>
    </div>
  );
};

export default CarPage;