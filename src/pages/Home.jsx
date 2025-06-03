import React from "react";
import Sidebar from "./../components/elements/Sidebar";
import HeaderHome from "../components/elements/HeaderHome";
import MainHome from "./../components/fragments/MainHome";
import { useSelector } from "react-redux";

const Home = () => {
  const auth = useSelector((state) => state.auth.isAuthenticated);
  console.log(auth);
  return (
    <section className="pb-6 ">
      <HeaderHome />
      <Sidebar />
      <div className="pt-12 pl-40 pr-4">
        <MainHome />
      </div>
    </section>
  );
};

export default Home;
