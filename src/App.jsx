import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import SocialLogo from "./Components/SocialLogo";
import Portfolio from "./Components/Portfolio";
import Certificate from "./Components/Certificate";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import BackgroundAudio from "./Components/Bg-sound/BackgroundAudio";
import Blog from "./Components/Blog";
import MobileMsg from "./Components/MobileMgs/MobileMsg";

const App = () => {
  return (
    <>
       <BackgroundAudio /> 
      <MobileMsg /> 
      <Navbar />

      <Hero />
      <About />
      <SocialLogo />
      <Portfolio />
      <Certificate />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
