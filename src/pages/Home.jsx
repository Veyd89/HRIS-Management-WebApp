import React from "react";
import Sidebar from "./../components/elements/Sidebar";
import HeaderHome from "../components/elements/HeaderHome";
import MainHome from "./../components/elements/MainHome";

const Home = () => {
  return (
    <section className="min-h-[10000px] ">
      <HeaderHome />
      <Sidebar />
      <div className="pt-12 pl-40 pr-4">
        <MainHome />
      </div>
    </section>
  );
};

export default Home;
