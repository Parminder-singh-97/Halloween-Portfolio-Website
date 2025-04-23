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
  
    <div className="spiders left-28">
      <img src="/icons/spider-1.png" alt="spider" />
      <img src="/icons/spider-2.png" alt="spider" />
    </div>
    <>
  <div className="bg_img relative md:bg-center bg-right-bottom ">
    <div className='w-full h-screen blur-xl absolute top-0  left-0'></div>


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
    
    
  </div>
  </div>
  {/* <div className="right_side">
    <div className="hero">
      <img src="/hero.webp" alt="User" />
    </div>
  </div> */}
</>

    </section>
      
    </>
  )
}

export default Hero
