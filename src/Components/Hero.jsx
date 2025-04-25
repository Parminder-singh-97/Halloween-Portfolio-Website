
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import Circle_menu from "./CircleMenu/Circle_menu";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["FrontEnd Developer.", "Graphics designer."],
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 1000,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <section id="hero" className="hero">
        {/* Animated Circle Menu */}
          <Circle_menu />
        {/* <div data-aos="fade-down" data-aos-delay="100">
        </div> */}

        {/* Spiders with Zoom Animation */}
        <div className="absolute top-5 left-36 w-16 z-50 animate-bounce" data-aos="zoom-in" data-aos-delay="200">
          <img src="/icons/spider-1.png" alt="spider" />
        </div>
        <div className="absolute top-5 right-36 w-16 z-50 animate-bounce delay-1000" data-aos="zoom-in" data-aos-delay="300">
          <img src="/icons/spider-2.png" alt="spider" />
        </div>

        <div className="bg_img md:bg-center bg-right-bottom">
          <div
            className="left_side md:p-16 p-8 bg-black md:bg-opacity-0 bg-opacity-55 min-h-screen md:w-[80%] w-full flex flex-col justify-center items-start"
            data-scroll
            data-scroll-speed="0.1"
            lerp="0.1"
          >
            <h3 className="uppercase tracking-widest text-purple-400 font-bold text-sm" data-aos="fade-up">
              Welcome to my spooky web Portfolio 🕸️
            </h3>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white" data-aos="fade-up" data-aos-delay="100">
              Hi, I’m{" "}
              <span className="text-orange-500 text-[clamp(1.8rem,5vw,3rem)]">Parminder Singh</span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-bold" data-aos="fade-up" data-aos-delay="200">
              a{" "}
              <span
                className="text-purple-400 text-[clamp(1.8rem,5vw,3rem)]"
                ref={el}
              ></span>
            </h2>

            <p className="text-white/90 md:w-3/4 font-medium" data-aos="fade-up" data-aos-delay="300">
              Crafting user-friendly websites. Turning ideas into reality with simple yet elegant designs. Let’s create something amazing!
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-6" data-aos="fade-up" data-aos-delay="400">
              <a href="../../download/resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="cursor-pointer bg-orange-600 hover:bg-orange-800 px-6 py-3 rounded-full text-white font-bold shadow-md transition-all duration-300">
                  🎃 Download Resume
                </button>
              </a>
              <a href="https://github.com/Parminder-singh-97" target="_blank" rel="noopener noreferrer">
                <button className="cursor-pointer bg-purple-600 hover:bg-purple-800 px-6 py-3 rounded-full text-white font-bold shadow-md transition-all duration-300">
                  👻 Visit GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

