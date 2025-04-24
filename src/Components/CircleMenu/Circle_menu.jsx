import React, { useState } from "react";
import { FaBlog, FaBook, FaHome, FaUserTie } from "react-icons/fa";
import { GiWolfHead } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const Circle_menu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div
      className={`${
        isOpenMenu ? "h-[490px] rounded-xl" : "h-[65px] rounded-full"
      } w-[70px] overflow-hidden transition-all ease-linear fixed right-5 top-5 z-[999] duration-700 bg-black/70  md:hidden  flex flex-col  items-center px-2  shadow-md shadow-orange-500 `}
    >
      <div>
        <button
          className="text-white text-3xl"
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          {isOpenMenu ? (
  
            <RxCross1 className=" fill-white m-4  " />
          ) : (
            
            <IoMenu className=" fill-white m-4 " />
          )}
        </button>
      </div>
      <div className="flex flex-col px-2 gap-3 ">
        <div className="w-full h-14 flex flex-col justify-center items-center">
          <FaHome className="text-white w-[100%] h-full cursor-pointer" />
          <a href="#home" className=" text-orange-500">Home</a>
        </div>
        <div className="w-full h-14 flex flex-col justify-center items-center">
          <FaUserTie className="text-white w-[100%] h-full cursor-pointer" />
          <a href="#about" className=" text-orange-500">About</a>
        </div>
        <div className="w-full h-14 flex flex-col justify-center items-center">
          <FaBook onClick={()=>{setIsOpenMenu(false);}} className="text-white w-[100%] h-full cursor-pointer" />
          <a href="#projects" className=" text-orange-500">Portfolio</a>
        </div>
        <div className="w-full h-14 flex flex-col justify-center items-center">
          <GiWolfHead className="text-white w-[100%] h-full cursor-pointer" />
          <a href="#skills" className=" text-orange-500">Skills</a>
        </div>
        <div className="w-full h-14 flex flex-col justify-center items-center">
          <FaBlog className="text-white w-[100%] h-full cursor-pointer" />
          <a href="#blog" className=" text-orange-500">Blog</a>
        </div>
        <div className="w-full h-14 flex flex-col justify-center items-center">
          <RiContactsBook2Fill className="text-white w-[100%] h-full cursor-pointer" />
          <a href="#contact" className=" text-orange-500">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Circle_menu;
