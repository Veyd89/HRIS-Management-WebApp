/* eslint-disable no-unused-vars */
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
// import Screenshot from "../Screenshot.png";
import InputFormm from "../components/elements/InputFormm";
import FormLogin from "./../components/fragments/FormLogin";
import FormSignUp from "./../components/fragments/FormSignUp";

const LoginPages = () => {
  const refForm = useRef(null);
  const [height, setHeight] = useState(0);

  const [visiblePass, setVisiblePass] = useState(false);
  useEffect(() => {
    if (refForm.current) {
      setHeight(refForm.current.getBoundingClientRect().height);
    }
  }, []);
  useEffect(() => {
    console.log(height);
  }, [height]);
  // useEffect(() => {
  //   const observer = new ResizeObserver(([entry]) => {
  //     setHeight(entry.contentRect.height);
  //   });

  //   if (refForm.current) {
  //     observer.observe(refForm.current);
  //   }

  //   return () => observer.disconnect(); // Cleanup saat komponen unmount
  // }, []);
  useEffect(() => {
    console.log(height);
  }, [height]);
  return (
    <section className="min-h-screen py-8 box-border -z-50 bg-gradient-to-tr from-[#DCE5F2] to-[#F1F4F9] relative w-full flex flex-col gap-12 justify-center items-center overflow-hidden">
      <div className="flex flex-col absolute  w-full justify-center items-center h-full">
        <img
          src="/img/X.png"
          className="absolute -z-40 w-[1000px] h-[400px] rotate-[52.34deg]"
          alt=""
        />
        <img
          src="/img/Y.png"
          className="absolute -z-40  w-[1100px] h-[400px] -rotate-[7deg] "
          alt=""
        />
      </div>

      <div className=" w-[750px] min-h-[600px] max-h-full  bg-[#E6EEF8] py-16 pl-[70px] pr-20 shadow-[-16px_-16px_40px_rgba(253,255,255,0.8),16px_16px_40px_rgba(187,195,206,0.6)] ">
        <div className="min-w-full min-h-full flex flex-col gap-14">
          <header className="flex w-full justify-center items-center gap-3">
            <img src="/img/mainLogo.png" className="w-4 h-7" alt="" />
            <h1 className="font-semibold text-lg text-[#082777]">
              BlueBird HR
            </h1>
          </header>
          <div id="form" ref={refForm} className="flex gap-9  flex-1">
            <img
              style={{ height: `187px` }}
              src="/img/logoLog.png"
              className="self-center"
              alt=""
            />

            <div className="w-[2px] bg-[#D3E2F4] min-h-full  "></div>
            <div id="" className="flex flex-col w-full">
              <nav className="flex pr-20 items-center gap-4 mb-9">
                <a
                  href=""
                  className="relative after:content-[''] after:block after:w-[40px] after:bg-[#F7AC25] after:rounded after:h-1 after:-bottom-2 after:absolute  after:left-[1px] font-semibold text-3xl text-[#4B93E7]"
                >
                  Login
                </a>
                <span className="h-[80%] w-[2px] bg-[#D3E2F4]"></span>
                {/* <a
                  href=""
                  className="text-lg pl-1 border-b border-black opacity-[50%] text-[#4B93E7]"
                >
                  Sign Up
                </a> */}
                <a href="" className="text-lg opacity-[50%] text-[#4B93E7]">
                  Sign Up
                </a>
              </nav>
              <FormLogin />
            </div>
          </div>
        </div>
      </div>
      <footer className=" flex flex-col gap-1.5 justify-center items-center text-xs  text-[#4B93E7]">
        <p className="font-semibold">Release Notes</p>
        <p>version 20.22.11</p>
        <p>Copyright © 2023-24 BlueBird HR and services</p>
      </footer>
    </section>
  );
};

export default LoginPages;
