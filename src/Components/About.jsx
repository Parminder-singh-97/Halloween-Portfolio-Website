import React from "react";

const About = () => {
  return (
    <>
      <section className="about">
        <div className="my-aboutBlur-1"></div>
        <div className="my-aboutBlur-2"></div>

        <div className="about_me md:w-[80%] m-auto w-full min-h-screen flex md:flex-row flex-col justify-center items-center">
          <div className="my_image max-w-[70%]  ">
            <img
              className="rounded-full shadow-lg shadow-red-500"
              src="/userimg/user-preview.jpg"
              alt="logo"
            />
          </div>

          <div className="about_me_content flex flex-col w-[80%] md:w-full">
            <h1 className="font-extrabold md:text-start text-center mb-3 text-4xl">
              About Me
            </h1>
            <p>
              Hi there! I'm a Front-end Developer with 2 years of experience in
              building responsive and user-friendly web applications using HTML,
              CSS, JavaScript, ReactJS, Bootstrap, TaiwindCSS, and API
              integration. Proficient in version control with Git and UI/UX
              design with Figma. Also bring 2 years of experience as a graphic
              designer, adding a strong visual sense to web development
              projects!
            </p>

            <a
              className="md:text-start text-center mb-10  "
              href="/download/resume.pdf"
              target={"_blank"}
            >
              <button className="download_btn about_btn  ">
                Download Resume
              </button>
            </a>

            {/* <div className="about_links">
          <ul>
            <a href="#">Skills</a>
            <a href="#">Experience</a>
            <a href="#">Education</a>
          </ul>
        </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
