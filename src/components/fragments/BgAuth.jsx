import React from "react";

const BgAuth = ({ type }) => {
  return (
    <div className="flex flex-col absolute w-full justify-center items-center h-full">
      <img
        src="/img/X.png"
        className={`absolute transition-all duration-500 w-[1100px] h-[400px]  ${
          type === "login" ? "rotate-[42.3deg]" : "rotate-[155.3deg]"
        }`}
        alt=""
      />
      <img
        src="/img/Y.png"
        className={`absolute transition-all duration-500 w-[1200px] h-[400px] -rotate-[-57deg] ${
          type === "login" ? "rotate-[-7deg]" : "rotate-[60deg]"
        }`}
        alt=""
      />
    </div>
  );
};

export default BgAuth;
