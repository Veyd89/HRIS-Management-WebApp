import React from "react";
import { IoIosSearch } from "react-icons/io";

const HeaderHome = () => {
  return (
    <header className=" top-0 h-24 sticky bg-white pl-40 pr-4 py-6">
      <div className="flex ">
        <div className="relative opacity-40 w-[400px]">
          <input
            placeholder="Search"
            type="text"
            className="w-full text-lg rounded-lg py-2 pl-12 pr-2 outline-none border border-[#082777] border-opacity-[24%] bg-[#E5EDF9] bg-opacity-40"
          />
          <IoIosSearch className="absolute top-[25%] text-2xl left-4" />
        </div>
      </div>
    </header>
  );
};

export default HeaderHome;
