
import React from "react";
import CustomSlider from "./Sliders/CustomSlider";
import SkillSlider from "./Sliders/SkillSlider";

const Certificate = () => {
  return (
    <>
      <section id="skills" className="blog" >
        <div className="blur"></div>

        <h1
          className="text-center text-[clamp(1.5rem,5vw,3rem)] font-extrabold text-orange-400 mb-16 spooky-font drop-shadow-md"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          My Certificate & Skills 🎃
        </h1>
        <div className="w-[80%] m-auto" data-aos="fade-right" data-aos-delay="400">
          <CustomSlider />
        </div>

        <hr
          className="fullscreen mt-10 mb-10 border-[#fff] border-opacity-20 border-2"
          data-aos="fade-up"
          data-aos-delay="600"
        />

        <div className="w-[80%] m-auto" data-aos="fade-left" data-aos-delay="800">
          <SkillSlider />
        </div>
      </section>
    </>
  );
};

export default Certificate;
