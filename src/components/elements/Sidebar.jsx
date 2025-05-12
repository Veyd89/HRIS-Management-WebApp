import React from "react";
import { FaHome } from "react-icons/fa";
import {
  FaBagShopping,
  FaCalendar,
  FaFile,
  FaUserGroup,
} from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { PiBagSimple } from "react-icons/pi";

const Sidebar = () => {
  return (
    <aside className="h-screen w-32 z-50 fixed top-0">
      <nav className="h-full bg-[#082777] flex flex-col items-center px-4 pt-7 gap-24 rounded-r-lg">
        <img src="/img/mainLogo.png" className="w-7 h-12" alt="" />
        <ul className="flex flex-col gap-7">
          <li className="cursor-pointer gap-1 flex flex-col  items-center text-[#E6EEF8] ">
            <FaHome className="text-4xl" />
            <span className="text-lg ">home</span>
          </li>
          <li className="cursor-pointer gap-1 flex flex-col  items-center text-[#E6EEF8] opacity-40 ">
            <FaBagShopping className="text-4xl" />
            <span className="text-lg ">jobs</span>
          </li>
          <li className="cursor-pointer gap-1 flex flex-col  items-center text-[#E6EEF8] opacity-40 ">
            <FaUserGroup className="text-4xl" />
            <span className="text-lg ">candidates</span>
          </li>
          <li className="cursor-pointer gap-1 flex flex-col  items-center text-[#E6EEF8] opacity-40 ">
            <FaFile className="text-4xl" />
            <span className="text-lg ">reports</span>
          </li>
          <li className="cursor-pointer gap-1 flex flex-col  items-center text-[#E6EEF8] opacity-40 ">
            <FaCalendar className="text-4xl" />
            <span className="text-lg ">calendar</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
