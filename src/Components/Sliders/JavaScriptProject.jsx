

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade   , Autoplay, Pagination, EffectCoverflow  } from "swiper/modules";
import JavaProjectData from "../../Data/JavaProjectData/JavaProjectData"; // adjust path as needed

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";

const JavaProjectsSlider = () => {
    return (
      <section className="py-20  text-white">
        <h1 className="text-center text-[clamp(2rem,5vw,3.5rem)] mb-12 text-white">
          <span className="animate-pulse">👻</span> JavaScript Projects
        </h1>

        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1.5,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectCoverflow]}
          className="max-w-4xl mx-auto"
        >
          {JavaProjectData.map((project) => (
            <SwiperSlide
              key={project.id}
              className="w-72 bg-black/70 border-4 border-orange-500 rounded-xl shadow-lg backdrop-blur-md"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-44 w-full object-cover rounded-t-xl"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-orange-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {project.description}
                </p>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  };
  
  export default JavaProjectsSlider;
  