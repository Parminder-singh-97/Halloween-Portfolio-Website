import React from "react";
import Circle_menu from "./CircleMenu/Circle_menu";

const Navbar = () => {
  return (
    <nav >
      <Circle_menu/>
      <div className="nav-container  md:block hidden">
      <div className="logo">
        <img src="/logo/Parm.png" alt=""  />
      </div>

      <div className="menu">
       
        <div className="menu_container border-4 border-orange-500">

      
       <div className="home_icon icon">
        <i className="fa-solid fa-house text-orange-500 " ></i>
        <p className="text-orange-500 font-extrabold">Home</p>

       </div>
       <div className="about_icon icon">
       <i className="fa-solid fa-user-tie"></i>
        <p className="text-orange-500 font-extrabold">About</p>

       </div>
       <div className="portfolio_icon icon">
       <i className="fa-solid fa-book"></i>
        <p className="text-orange-500 font-extrabold">Portfolio</p>

       </div>
       <div className="Blog_icon icon">
       <i className="fa-solid fa-blog"></i>
        <p className="text-orange-500 font-extrabold">Blog</p>

       </div>
       <div className="contact_icon icon">
       <i className="fa-solid fa-address-book"></i>
        <p className="text-orange-500 font-extrabold">contact</p>

       </div>


        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
