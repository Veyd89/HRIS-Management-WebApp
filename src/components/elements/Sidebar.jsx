import React from "react";
import { GoHomeFill } from "react-icons/go";

const Sidebar = () => {
  return (
    <aside className="h-screen w-32">
      <nav className="h-full bg-[#082777] flex flex-col items-center">
        <img src="/img/mainLogo.png" className="w-6 h-10" alt="" />
        <ul className="flex flex-col ">
          <li>
            <GoHomeFill className="text-[#E6EEF8]" />
          </li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
