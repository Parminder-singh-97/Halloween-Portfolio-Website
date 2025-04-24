import React from 'react'
import CustomSlider from './Sliders/CustomSlider'
import SkillSlider from "./Sliders/SkillSlider";

const Certificate = () => {
  return (
    <>
      <section className="blog ">
        <div className="blur"></div>

       
<h1 className="text-center text-[clamp(1.5rem,5vw,3rem)] font-extrabold text-orange-400 mb-16 spooky-font drop-shadow-md">
My Certificate & Skills 🎃
</h1>
        <div className="w-[80%] m-auto">
          <CustomSlider />
        </div>

        <hr className="fullscreen mt-10 mb-10 border-[#fff] border-opacity-20 border-2 " />

        <div className="w-[80%] m-auto">
          <SkillSlider/>
        </div>

      </section>
    </>
  );
}

export default Certificate



