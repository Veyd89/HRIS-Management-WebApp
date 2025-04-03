// import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
// import Screenshot from "../Screenshot.png";

const LoginPages = () => {
  const refForm = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height);
    });

    if (refForm.current) {
      observer.observe(refForm.current);
    }

    return () => observer.disconnect(); // Cleanup saat komponen unmount
  }, []);
  useEffect(() => {
    console.log(height);
  }, [height]);
  return (
    <section className="bg-gradient-to-tr from-[#DCE5F2] to-[#F1F4F9] relative h-screen w-full flex justify-center items-center overflow-hidden ">
      <img
        src="/img/X.png"
        className="absolute  w-[1000px] h-[400px] rotate-[52.34deg] top-[17rem] "
        alt=""
      />
      <img
        src="/img/Y.png"
        className="absolute  w-[1100px] h-[400px] -rotate-[7deg] top-40"
        alt=""
      />
      <div className="w-[750px] h-[600px] z-50 bg-[#E6EEF8] py-16 pl-[70px] pr-20 shadow-[-16px_-16px_40px_rgba(253,255,255,0.8),16px_16px_40px_rgba(187,195,206,0.6)]">
        <div className="min-w-full min-h-full flex flex-col gap-14">
          <header className="flex w-full justify-center items-center gap-3">
            <img src="/img/mainLogo.png" className="w-4 h-7" alt="" />
            <h1 className="font-semibold text-lg text-[#082777]">
              BlueBird HR
            </h1>
          </header>
          <div id="form" ref={refForm} className="flex gap-9  flex-1">
            <img
              style={{ height: `${height / 2}px` }}
              src="/img/logoLog.png"
              className="self-center"
              alt=""
            />

            <div
              style={{ height: `${(height * 3) / 4}px` }}
              className="w-[2px] bg-[#D3E2F4] self-center "
            ></div>
            <div id="" className="flex flex-col">
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
              <form action="" className="flex flex-col">
                <input
                  type="text"
                  placeholder="username"
                  name=""
                  id=""
                  className="bg-[#DDEAFB] py-3 px-4 w-full rounded-lg border border-[#4B93E7] outline-none"
                />
                <div className="flex flex-col">
                  <input
                    type="password"
                    placeholder="password"
                    name=""
                    id=""
                    className="bg-[#DDEAFB] py-3 px-4 w-full rounded-lg border border-[#4B93E7] outline-none"
                  />
                  <div className="flex">
                    <input type="radio" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPages;
