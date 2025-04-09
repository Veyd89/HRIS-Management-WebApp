/* eslint-disable no-unused-vars */
import React from "react";
import BgAuth from "./../fragments/BgAuth";
import Footer from "../elements/Footer";
import FormLogin from "../fragments/FormLogin";
import FormSignUp from "../fragments/FormSignUp";
import Header from "../elements/Header";
import NavAuth from "./../elements/NavAuth";

const AuthLayouts = ({ type }) => {
  return (
    <section className="h-screen box-border bg-gradient-to-tr from-[#DCE5F2] to-[#F1F4F9] relative w-full flex flex-col gap-12 justify-center items-center overflow-hidden">
      <BgAuth type={type} />
      <div className=" w-[750px] min-h-[600px] max-h-full z-50 bg-[#E6EEF8] py-16 pl-[70px] pr-20 shadow-[-16px_-16px_40px_rgba(253,255,255,0.8),16px_16px_40px_rgba(187,195,206,0.6)] ">
        <div className="min-w-full min-h-full flex flex-col gap-14">
          <Header />
          <div id="form" className="flex gap-9  flex-1">
            <img
              style={{ height: `187px` }}
              src="/img/logoLog.png"
              className="self-center"
              alt=""
            />

            <div className="w-[2px] bg-[#D3E2F4] min-h-full"></div>
            <div id="" className="flex flex-col w-full">
              <NavAuth authType={type} />
              {type === "login" ? <FormLogin /> : <FormSignUp />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default AuthLayouts;
