import React from "react";
import BlogSwiper from "../Components/Sliders/BlogSwiper";

const Blog = () => {
  return (
    <>
      <section id="blog" className="relative w-full min-h-screen ">
        <div className="blur"></div>
        {/* Optional blur overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-[2px] z-1" />

        {/* Responsive video background */}
        <video
          className=" fixed top-0 left-0 w-full h-full object-cover -z-10"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/bg-horror.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Foreground Content */}
        <div className="relative   h-full text-white">
          <h1 className=" text-center text-[clamp(1.5rem,5vw,3rem)] mt-10 text-orange-500 font-bold drop-shadow-xl">🧛‍♂️ Welcome to My Spooky Blog</h1>
          <div className="pt-10">
            <BlogSwiper/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
