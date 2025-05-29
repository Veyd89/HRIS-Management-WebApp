import React from "react";
import Sidebar from "./../components/elements/Sidebar";
import HeaderHome from "../components/elements/HeaderHome";

const Home = () => {
  return (
    <section className="min-h-[10000px] ">
      <HeaderHome />
      <Sidebar />
      <div className="pl-[155px] pr-[350px] ">
        <div className="pl-7">
          <div className="flex justify-between">
            <h3>Overview</h3>
            <div className="flex gap-4">
              <button>Add</button>
              <button>Add</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
