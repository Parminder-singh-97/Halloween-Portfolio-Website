import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="relative pb-6 ">
        <div className="my-aboutBlur-1"></div>
        <div className="my-aboutBlur-2"></div>

      
        {/* Main About Section */}
        <div className="max-w-6xl min-h-[60vh] mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Image Section */}
          <div className="w-[70%] md:w-[40%] relative">
            <img
              className="rounded-full shadow-[0_0_25px_rgba(255,72,0,0.7)] border-4 border-orange-500"
              src="/userimg/user-preview.jpg"
              alt="User"
            />
            <div className="absolute top-[-10px] right-[-10px] w-6 h-6 rounded-full bg-orange-500 animate-ping"></div>
            <div className="absolute top-[50px] right-[10px] w-6 h-6 rounded-full bg-purple-600 animate-ping"></div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-4 w-full md:w-[60%] text-center md:text-left">
            <h1 className="text-4xl font-black text-orange-400 spooky-font">
              🦇 About Me
            </h1>
            <p style={{
    filter: `drop-shadow(0 0 10px black) drop-shadow(0 0 20px black) drop-shadow(0 0 30px black)`,
  }} className="text-[clamp(1rem,1.1vw,1.25rem)]  leading-relaxed">
              Hi there! I'm a Front-end Developer with 2 years of experience in
              building spooky-good, responsive and user-friendly web apps using
              HTML, CSS, JavaScript, ReactJS, Bootstrap, TailwindCSS, and API
              integration. I'm also experienced in version control with Git and
              UI/UX design using Figma. Plus, I've got 2 years of graphic design
              magic — bringing a strong visual spell to every web project!
            </p>

            <a
              href="../../download/resume.pdf"
              target="_blank"
              className="mb-10"
            >
              <button className="bg-orange-600 hover:bg-orange-700 transition duration-300 text-white px-6 py-3 rounded-full font-bold shadow-lg shadow-orange-500/30">
                🎃 Download Resume
              </button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
