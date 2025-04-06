/* eslint-disable no-unused-vars */
import React from "react";

const AuthLayouts = ({ type }) => {
  return (
    <section className="h-screen box-border bg-gradient-to-tr from-[#DCE5F2] to-[#F1F4F9] relative w-full flex flex-col gap-12 justify-center items-center overflow-auto">
      <div className="flex flex-col absolute  w-full justify-center items-center h-full">
        <img
          src="/img/X.png"
          className={`absolute  w-[1000px] h-[400px] ${
            type === "login" ? "rotate-[52.34deg]" : "-rotate-[7deg]"
          }`}
          alt=""
        />
        <img
          src="/img/Y.png"
          className={`absolute  w-[1100px] h-[400px]  ${
            type === "login" ? "-rotate-[7deg]" : "rotate-[52.34deg]"
          }`}
          alt=""
        />
      </div>
    </section>
  );
};

export default AuthLayouts;
