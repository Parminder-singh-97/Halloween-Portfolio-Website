import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import WebProjectData from "../Data/ProjectData/WebProjectData";

import "swiper/css";
import "swiper/css/effect-cards";
import JavaScriptProject from "./Sliders/JavaScriptProject";

const Portfolio = () => {
  return (
    
    <section id="projects" className=" portfolio relative bg-gradient-to-b from-black to-purple-950 pt-30 pb-36 spooky-font text-white overflow-hidden">
      {/* 🎃 Halloween Animated Background Elements */}
      <img
        src="../../icons/bat-icon.png"
        alt="bat"
        className="absolute top-48 left-48 w-56 animate-bounce-slow "
      />
      <img
        src="../../icons/flying-bat.png"
        alt="bat"
        className="absolute top-[30%] right-5 w-64 animate-float-slow "
      />
      <img
        src="../../icons/glowing-eyes.png"
        alt="eyes"
        className="absolute bottom-8 left-6 w-40 animate-pulse opacity-90"
      />
      <img
        src="../../icons/pumpkin.png"
        alt="pumpkin"
        className="absolute bottom-10 right-10 w-40 animate-wiggle opacity-80"
      />

      <h1 className="text-center text-[clamp(2rem,5vw,3.5rem)] mb- text-white">
        <span className="animate-pulse">🎃</span> Haunted Web-Projects
      </h1>

      <div className="w-[70%] md:w-[400px] mx-auto">
        <Swiper
          effect="cards"
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
         
          }}
          loop={true}
        >
          {WebProjectData.map((project) => (
            <SwiperSlide
              key={project.id}
              className="bg-black border-4 border-orange-500 rounded-xl overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col h-full justify-between">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 object-fill w-full"
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl text-orange-400 font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm mb-4">{project.description}</p>
                  <div className="flex justify-center gap-4">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 hover:bg-orange-600 text-black font-semibold px-3 py-1 rounded"
                    >
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-lime-500 hover:bg-lime-600 text-black font-semibold px-3 py-1 rounded"
                    >
                      Live
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-[80%] m-auto">
        <JavaScriptProject />
      </div>
    </section>
  );
};

export default Portfolio;
