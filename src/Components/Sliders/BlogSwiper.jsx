import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import blogData from "../../Data/BlogData/BlogData";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const BlogSwiper = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2.5,
        }}
        
        modules={[EffectCoverflow, Autoplay]}
        className="w-full"
      >
        {blogData.map((fact) => (
          <SwiperSlide
            key={fact.id}
            className="bg-gray-900 border border-orange-500 rounded-xl shadow-lg h-56 p-8 w-[350px] md:w-[400px] lg:w-[450px] text-center text-white"
          >
            <h3 className="text-2xl text-orange-400 font-bold mb-4">
              {fact.title}
            </h3>
            <p className="text-base">{fact.description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogSwiper;
