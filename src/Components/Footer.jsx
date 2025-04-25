import React from "react";

const Footer = () => {
  return (
    <footer className=" text-orange-300 min-h-[400px] bg-black py-10 relative overflow-hidden">
      <div className="blur"></div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-0 left-40 w-60 h-60 bg-purple-500 opacity-20 rounded-full blur-2xl animate-ping"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500 opacity-20 rounded-full blur-2xl animate-pulse"></div>

      {/* Spider Icon (Optional) */}
      <div className="text-center mb-4 text-3xl animate-bounce">
        🕷️
      </div>

      <div className="text-center spooky-font text-[clamp(1rem,2.5vw,2rem)] font-bold mb-2">
        Crafted With 💀 By Parminder Singh
      </div>

      <div className="text-center text-sm text-orange-400">
        &copy; {new Date().getFullYear()} Parminder Singh | Frontend Developer | All rights reserved 🧛‍♂️
      </div>

      {/* Footer Links (optional) */}
      <div className="mt-6 hidden md:flex justify-center gap-6 text-xl">
       
        <a
         href="mailto:s.pammi.22g@gmail.com"
          target="_blank"
          className="hover:text-orange-500 transition duration-300"
        >
          🎃 Email
        </a>
        <a
          href="../../download/resume.pdf"
          target="_blank"
          className="hover:text-orange-500 transition duration-300"
        >
          📜 Resume
        </a>
      </div>
    </footer>
  );
};

export default Footer;


// import React, { useEffect } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Footer = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // animation duration
//       once: true,     // animation triggers once
//     });
//   }, []);

//   return (
//     <footer className="text-orange-300 min-h-[400px] bg-black py-10 relative overflow-hidden" data-aos="fade-up">
//       <div className="blur"></div>

//       {/* Glowing Orbs */}
//       <div
//         className="absolute top-0 left-40 w-60 h-60 bg-purple-500 opacity-20 rounded-full blur-2xl animate-ping"
//         data-aos="fade-in"
//         data-aos-delay="200"
//       ></div>
//       <div
//         className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500 opacity-20 rounded-full blur-2xl animate-pulse"
//         data-aos="fade-in"
//         data-aos-delay="400"
//       ></div>

//       {/* Spider Icon (Optional) */}
//       <div className="text-center mb-4 text-3xl animate-bounce" data-aos="zoom-in" data-aos-delay="600">
//         🕷️
//       </div>

//       <div
//         className="text-center spooky-font text-[clamp(1rem,2.5vw,2rem)] font-bold mb-2"
//         data-aos="fade-up"
//         data-aos-delay="800"
//       >
//         Crafted With 💀 By Parminder Singh
//       </div>

//       <div
//         className="text-center text-sm text-orange-400"
//         data-aos="fade-up"
//         data-aos-delay="1000"
//       >
//         &copy; {new Date().getFullYear()} Parminder Singh | Frontend Developer | All rights reserved 🧛‍♂️
//       </div>

//       {/* Footer Links (optional) */}
//       <div className="mt-6 hidden md:flex justify-center gap-6 text-xl">
//         <a
//           href="mailto:s.pammi.22g@gmail.com"
//           target="_blank"
//           className="hover:text-orange-500 transition duration-300"
//           data-aos="fade-up"
//           data-aos-delay="1200"
//         >
//           🎃 Email
//         </a>
//         <a
//           href="../../download/resume.pdf"
//           target="_blank"
//           className="hover:text-orange-500 transition duration-300"
//           data-aos="fade-up"
//           data-aos-delay="1400"
//         >
//           📜 Resume
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
