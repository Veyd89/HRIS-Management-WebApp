import React from "react";
import Sidebar from "./../components/elements/Sidebar";
import HeaderHome from "../components/elements/HeaderHome";

const Home = () => {
  return (
    <section className="min-h-[10000px] ">
      <HeaderHome />
      <Sidebar />
    </section>
  );
};

export default Home;
