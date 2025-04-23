import React from "react";
import Circle_menu from "./CircleMenu/Circle_menu";

const Navbar = () => {
  return (
    <nav >
      <Circle_menu/>
      <div className="nav-container md:block hidden">
      <div className="logo">
        <img src="/logo/Parm.png" alt=""  />
      </div>

      <div className="menu">
       
        <div className="menu_container">

      
       <div className="home_icon icon">
        <i className="fa-solid fa-house" ></i>
        <p>Home</p>

       </div>
       <div className="about_icon icon">
       <i className="fa-solid fa-user-tie"></i>
        <p>About</p>

       </div>
       <div className="portfolio_icon icon">
       <i className="fa-solid fa-book"></i>
        <p>Portfolio</p>

       </div>
       <div className="Blog_icon icon">
       <i className="fa-solid fa-blog"></i>
        <p>Blog</p>

       </div>
       <div className="contact_icon icon">
       <i className="fa-solid fa-address-book"></i>
        <p>contact</p>

       </div>


        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
