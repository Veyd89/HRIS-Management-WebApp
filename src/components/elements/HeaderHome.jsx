import React from "react";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";

const HeaderHome = () => {
  return (
    <header className=" top-0 h-20 sticky bg-white pl-40 pr-9 flex items-center z-50">
      <div className="flex justify-between items-center w-full">
        <div className="relative flex justify-between opacity-40 w-[400px]">
          <input
            placeholder="Search"
            type="text"
            className="w-full text-base rounded-lg py-2 pl-12 pr-2 outline-none border border-[#082777] border-opacity-[24%] bg-[#E5EDF9] bg-opacity-40"
          />
          <IoIosSearch className="absolute top-[20%] text-2xl left-4" />
        </div>
        <div className="flex items-center gap-4 font-semibold">
          <img
            src="/img/naruto.jpg"
            alt=""
            className="w-11 h-11 object-cover rounded-full border-2 border-[#000000] cursor-pointer"
          />
          <span className="flex items-center gap-2 cursor-pointer">
            Naruto{" "}
            <IoIosArrowDown className="text-lg text-[#071C50] opacity-50" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
