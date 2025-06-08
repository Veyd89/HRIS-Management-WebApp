import React from "react";

const Meetings = ({ color = "A0DBF4" }) => {
  return (
    <div
      className={`w-full h-12 rounded-lg bg-[#A0DBF4] bg-opacity-[34%] text-[#1B5CBE] flex items-center overflow-hidden`}
    >
      <span className="border-r border-[#1B5CBE] border-opacity-[44%] px-2.5 h-full text-base flex items-center font-semibold">
        3:15
      </span>
      <div className="h-full w-full flex justify-center items-center">
        <div className="w-full text-sm pl-2">
          <p className="w-full ">
            <span className="font-semibold"> Mini Soman;</span> Mean stack
            developer; 4th phase
          </p>
          <p className="">
            interview <span className="font-semibold">| 3:15 - 3:45</span>
          </p>
        </div>
        <span className="w-[3%] bg-[#1B5CBE] opacity-50 h-full"></span>
      </div>
    </div>
  );
};

export default Meetings;
