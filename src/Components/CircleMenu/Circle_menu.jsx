import React, { useState } from "react";
import { FaBlog, FaBook, FaHome, FaUserTie } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";

const Circle_menu = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div
      className={`${
        isOpenMenu ? "h-[400px] rounded-xl" : "h-[60px] rounded-full"
      } w-16 overflow-hidden transition-all ease-linear fixed right-5 top-5 z-50 duration-700 bg-black/70  md:hidden  flex flex-col  items-center px-2 shadow-md shadow-red-500 `}
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
      <div className="flex flex-col gap-3 ">
        <div className="w-full h-14 flex flex-col justify-center items-center">
          <FaHome className="text-white w-[100%] h-full cursor-pointer" />
          <p className="text-white">Home</p>
        </div>
        <div className="w-full h-14 flex flex-col justify-center items-center">
          <FaUserTie className="text-white w-[100%] h-full cursor-pointer" />
          <p className="text-white">About</p>
        </div>
        <div className="w-full h-14 flex flex-col justify-center items-center">
          <FaBook className="text-white w-[100%] h-full cursor-pointer" />
          <p className="text-white">Portfolio</p>
        </div>
        <div className="w-full h-14 flex flex-col justify-center items-center">
          <FaBlog className="text-white w-[100%] h-full cursor-pointer" />
          <p className="text-white">Blog</p>
        </div>
        <div className="w-full h-14 flex flex-col justify-center items-center">
          <RiContactsBook2Fill className="text-white w-[100%] h-full cursor-pointer" />
          <p className="text-white">Contact</p>
        </div>
      </div>
    </div>
  );
};

export default Circle_menu;
