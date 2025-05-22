import React from "react";
import Button from "./Button/Button";

const MainHome = () => {
  return (
    <div className=" h-auto">
      <header className="pl-7 flex justify-between items-center">
        <h2 className="font-semibold">Overview</h2>
        <div className="flex gap-4">
          <button className="bg-[#4B93E7] py-2 px-4 text-white rounded-xl">
            Add Candidate
          </button>
          <button className="bg-[#4B93E7] py-2 px-4 text-white rounded-xl">
            Add Job
          </button>
        </div>
      </header>
    </div>
  );
};

export default MainHome;
