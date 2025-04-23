import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import SocialLogo from "./Components/SocialLogo";
import Portfolio from "./Components/Portfolio";
import Blog from "./Components/Certificate";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <SocialLogo />
      <Portfolio />
      <Blog />
      <Contact />
    </>
  );
};

export default App;
