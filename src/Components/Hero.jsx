import React, { useCallback, useEffect } from 'react'
import Typed from 'typed.js';





const Hero = () => {

  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['FrontEnd Developer.', 'Graphics designer.'],
      typeSpeed: 150,
            backSpeed: 50,
            backDelay: 1000,
            startDelay: 1000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
    });

    
    return () => {
      
      typed.destroy();
    };

  }, []);
  



  return (
    <>
      <section className="hero">
        <div className="absolute top-5 left-36 w-16 animate-bounce">
          <img src="/icons/spider-1.png" alt="spider" />
        </div>
        <div className="absolute top-5 right-36 w-16 animate-bounce delay-1000">
          <img src="/icons/spider-2.png" alt="spider" />
        </div>

        <div className="bg_img relative md:bg-center bg-right-bottom ">
          <div className="w-full h-screen blur-xl absolute top-0  left-0"></div>

          {/* 
  <div className="left_side md:p-16 p-8 bg-black md:bg-opacity-0 bg-opacity-55 min-h-screen md:w-[80%] w-full flex justify-center items-start " data-scroll data-scroll-speed="0.1" lerp='0.1'>
    <h3 className="left_1 ">WELCOME TO MY WORLD</h3>
    <h1 className="left_1">
      Hi I’m <span className='text-[clamp(1.8rem,5vw,3rem)] '  >Parminder Singh</span>{" "}
    </h1>
    <h2 className="left_1">
      a <span className='text-[clamp(1.5rem,5vw,3rem)]'  ref={el}> </span>
    </h2>
    <div className='w-full'>

    <p className="left_1 md:w-[40%] w-full font-extrabold text-white  ">
      Crafting user-friendly websites. Turning ideas into reality with simple
      yet elegant designs. Let's create something amazing!
    </p>
    </div>

    <div className="hero_btn md:flex-row flex-col">

      <a href="/download/resume.pdf" target={'_blank'} >
    <button className='download_btn'>Download Resume</button>

      </a>
      <a className='text-start' href="https://github.com/Parminder-singh-97" target={'_blank'}>
    <button className='github_btn'>Visit GitHub</button>

      </a>
    </div>
    
    
  </div> */}
          <div
            className="left_side md:p-16 p-8 bg-black md:bg-opacity-0 bg-opacity-55 min-h-screen md:w-[80%] w-full flex justify-center items-start "
            data-scroll
            data-scroll-speed="0.1"
            lerp="0.1"
          >
            <h3 className="uppercase tracking-widest text-purple-400 font-bold text-sm">
              Welcome to my spooky web Portfolio 🕸️
            </h3>

            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              Hi, I’m{" "}
              <span className="text-orange-500 text-[clamp(1.8rem,5vw,3rem)] ">
                Parminder Singh
              </span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-bold">
              a <span className="text-purple-400 text-[clamp(1.8rem,5vw,3rem)]" ref={el}></span>
            </h2>

            <p className="text-white/90 md:w-3/4 font-medium">
              Crafting user-friendly websites. Turning ideas into reality with
              simple yet elegant designs. Let’s create something amazing!
            </p>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              <a href="/download/resume.pdf" target="_blank">
                <button className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-full text-white font-bold shadow-md transition-all duration-300">
                  🎃 Download Resume
                </button>
              </a>
              <a href="https://github.com/Parminder-singh-97" target="_blank">
                <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white font-bold shadow-md transition-all duration-300">
                  👻 Visit GitHub
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero


// import React, { useEffect, useRef } from 'react';
// import Typed from 'typed.js';

// const Hero = () => {
//   const el = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: ['Front-End Developer.', 'Graphic Designer.'],
//       typeSpeed: 150,
//       backSpeed: 50,
//       backDelay: 1000,
//       startDelay: 1000,
//       loop: true,
//       showCursor: true,
//       cursorChar: '|',
//     });

//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <section className="hero bg-black text-orange-300 min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      
//       {/* Spooky spider decorations */}
//       <div className="absolute top-5 left-14 w-16 animate-bounce">
//         <img src="/icons/spider-1.png" alt="spider" />
//       </div>
//       <div className="absolute top-5 right-19 w-16 animate-bounce delay-1000">
//         <img src="/icons/spider-2.png" alt="spider" />
//       </div>

//       {/* Hero Content */}
//       <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between w-full gap-10 py-20">
        
//         {/* Text Content */}
//         <div className="md:w-[60%] w-full space-y-5">
//           <h3 className="uppercase tracking-widest text-purple-400 font-bold text-sm">
//             Welcome to my spooky web Portfolio 🕸️
//           </h3>

//           <h1 className="text-4xl md:text-6xl font-extrabold text-white">
//             Hi, I’m <span className="text-orange-500">Parminder Singh</span>
//           </h1>

//           <h2 className="text-2xl md:text-4xl font-bold">
//             a <span className="text-purple-400" ref={el}></span>
//           </h2>

//           <p className="text-white/90 md:w-3/4 font-medium">
//             Crafting user-friendly websites. Turning ideas into reality with
//             simple yet elegant designs. Let’s create something amazing!
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col md:flex-row gap-4 mt-6">
//             <a href="/download/resume.pdf" target="_blank">
//               <button className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-full text-white font-bold shadow-md transition-all duration-300">
//                 🎃 Download Resume
//               </button>
//             </a>
//             <a href="https://github.com/Parminder-singh-97" target="_blank">
//               <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full text-white font-bold shadow-md transition-all duration-300">
//                 👻 Visit GitHub
//               </button>
//             </a>
//           </div>
//         </div>

//         {/* Optional Avatar or Illustration */}
//         <div className="md:w-[40%] w-full flex justify-center">
//           <img
//             src="/userimg/user-preview.jpg"
//             alt="Hero"
//             className="rounded-full border-4 border-orange-400 shadow-[0_0_40px_rgba(255,165,0,0.5)] w-64 h-64 object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
