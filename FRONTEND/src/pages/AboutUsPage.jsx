import React from "react";
import Navigator from "../components/Navigator";
import Footer from "../components/Footer";
import BannerAboutUs from "../components/BannerAboutUs";

const AboutUsPage = () => {
  return (
    
    <div className="products-page bg-black-950">
      <Navigator />

      <BannerAboutUs />
       <section className="flex flex-row justify-center imtes-center  w-[100%] p-20">
        <div className=" w-[50%]">
            <img src="../src/assets/section2bg.jpg" alt="About Us" />
        </div>

        <div className=" w-[50%] flex flex-col justify-center items-center">
            <h1 className="text-3xl text-center text-white font-bold mt-4">
              ¿QUIENES SOMOS SMARTFLORA?
            </h1>
            <p className="text-white text-center mt-4 px-4">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
            </p>         
        </div>
       </section>
      <Footer />
    </div>
  );
};

export default AboutUsPage;