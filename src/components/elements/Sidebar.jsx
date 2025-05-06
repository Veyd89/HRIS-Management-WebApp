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
    <aside className="h-screen w-32">
      <nav className="h-full bg-[#082777] flex flex-col items-center px-4 pt-7 gap-24">
        <img src="/img/mainLogo.png" className="w-7 h-12" alt="" />
        <ul className="flex flex-col gap-7">
          <li className="cursor-pointer flex flex-col  items-center text-[#E6EEF8] ">
            <FaHome className="w-10 h-12" />
            <span className="text-lg -mt-0">home</span>
          </li>
          <li className="cursor-pointer flex flex-col  items-center text-[#E6EEF8] ">
            <FaBagShopping className="w-10 h-12" />
            <span className="text-lg -mt-0">jobs</span>
          </li>
          <li className="cursor-pointer flex flex-col  items-center text-[#E6EEF8] ">
            <FaUserGroup className="w-10 h-12" />
            <span className="text-lg -mt-0">candidates</span>
          </li>
          <li className="cursor-pointer flex flex-col  items-center text-[#E6EEF8] ">
            <FaFile className="w-10 h-12" />
            <span className="text-lg -mt-0">reports</span>
          </li>
          <li className="cursor-pointer flex flex-col  items-center text-[#E6EEF8] ">
            <FaCalendar className="w-10 h-12" />
            <span className="text-lg -mt-0">calendar</span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
