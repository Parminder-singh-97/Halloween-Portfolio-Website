import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCube } from "swiper/modules";
import blogData from "../../Data/BlogData/BlogData";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const BlogSwiper = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <Swiper
        modules={[Autoplay, EffectCube]}
        effect={"cube"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {blogData.map((blog) => (
          <SwiperSlide
            key={blog.id}
            className="max-w-sm bg-black bg-opacity-70 text-orange-300 rounded-xl overflow-hidden shadow-xl shadow-orange-500 backdrop-blur-md"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-orange-400 mb-2">{blog.title}</h3>
              <p className="text-sm">{blog.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BlogSwiper;
