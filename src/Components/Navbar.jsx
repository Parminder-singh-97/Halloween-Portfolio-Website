import React from "react";
import Circle_menu from "./CircleMenu/Circle_menu";
import { GiWolfHead } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav>
      <Circle_menu />
      <div className="nav-container md:block hidden">
        <div className="logo">
          <img src="/logo/Parm.png" alt="Logo" />
        </div>

        <div className="menu">
          <div className="menu_container border-4 border-orange-500">
            {/* Home */}
            <a href="#home" className="home_icon icon">
              <i className="fa-solid fa-house text-orange-500" />
              <p className="text-orange-500 font-extrabold">Home</p>
            </a>

            {/* About */}
            <a href="#about" className="about_icon icon">
              <i className="fa-solid fa-user-tie text-orange-500" />
              <p className="text-orange-500 font-extrabold">About</p>
            </a>

            {/* Portfolio */}
            <a href="#projects" className="portfolio_icon icon">
              <i className="fa-solid fa-book text-orange-500" />
              <p className="text-orange-500 font-extrabold">Portfolio</p>
            </a>

            {/* Skills */}
            <a href="#skills" className="Blog_icon icon">
              <GiWolfHead className="text-5xl text-orange-500" />
              <p className="text-orange-500 font-extrabold">Skills</p>
            </a>

            {/* Contact */}
            <a href="#contact" className="contact_icon icon">
              <i className="fa-solid fa-address-book text-orange-500" />
              <p className="text-orange-500 font-extrabold">Contact</p>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
