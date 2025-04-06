import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import NavAuth from "./../elements/NavAuth";

const AuthForm = ({ typePage }) => {
  const refForm = useRef(null);
  const [height, setHeight] = useState(0);

  const [visiblePass, setVisiblePass] = useState(false);
  useEffect(() => {
    const observer = new ResizeObserver(([entry]) => {
      setHeight(entry.contentRect.height);
    });

    if (refForm.current) {
      observer.observe(refForm.current);
    }

    return () => observer.disconnect(); // Cleanup saat komponen unmount
  }, []);
  return (
    <div className=" min-w-[750px] min-h-[600px] z-50 bg-[#E6EEF8] py-16 pl-[70px] pr-20 shadow-[-16px_-16px_40px_rgba(253,255,255,0.8),16px_16px_40px_rgba(187,195,206,0.6)] flex flex-col gap-14">
      <header className="flex w-full justify-center items-center gap-3">
        <img src="/img/mainLogo.png" className="w-4 h-7" alt="" />
        <h1 className="font-semibold text-lg text-[#082777]">BlueBird HR</h1>
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
        <div id="" className="flex flex-col w-full">
          <NavAuth authType={typePage} />
          <form action="" className="flex flex-col gap-9">
            <div className="flex flex-col gap-6">
              <div className="input-box relative flex flex-col text-[#082777]">
                <input
                  type="text"
                  name=""
                  id="username"
                  required
                  className="bg-[#DDEAFB] py-3 px-4 w-full rounded-lg border border-[#4B93E7] outline-none peer"
                />{" "}
                <label
                  className="absolute flex justify-center items-center cursor-text top-[50%] -translate-y-[50%] left-4 transition-all duration-300 peer-valid:top-0 peer-valid:text-xs peer-focus:top-0   peer-focus:text-xs before:content-[''] before:bg-[#E6EEF8] before:h-1 before:min-w-full before:absolute before:px-9 before:-z-40 "
                  htmlFor="username"
                >
                  Username
                </label>
              </div>

              <div className="flex flex-col gap-2">
                <div className="input-box relative flex flex-col text-[#082777]">
                  <input
                    type={visiblePass ? "text" : "password"}
                    name=""
                    id="password"
                    required
                    className="bg-[#DDEAFB] py-3 px-4 w-full rounded-lg border border-[#4B93E7] outline-none peer transition-all duration-300 ease-in-out"
                  />{" "}
                  <label
                    className="absolute flex justify-center items-center cursor-text top-[50%] -translate-y-[50%] left-4 transition-all duration-300 peer-valid:top-0 peer-valid:text-xs peer-focus:top-0   peer-focus:text-xs before:content-[''] before:bg-[#E6EEF8] before:h-1 before:min-w-full before:absolute before:px-9 before:-z-40"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <FontAwesomeIcon
                    className="absolute translate-y-[-50%] top-[50%] right-3 cursor-pointer w-6 h-6 text-[#91BDF5]"
                    icon={visiblePass ? faEye : faEyeSlash}
                    onClick={() => setVisiblePass(!visiblePass)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <label className="custom-checkbox flex items-center justify-center relative cursor-pointer">
                      <input type="checkbox" id="remember" />
                      <span></span>
                    </label>
                    <label
                      htmlFor="remember"
                      className="text-base cursor-pointer"
                    >
                      Remember
                    </label>
                  </div>
                  <a href="">Forgot Password?</a>
                </div>
              </div>
            </div>
            <div className="button flex flex-col gap-4 text-[#F3F8FF]">
              <button className="w-full py-3 rounded-lg shadow-[inset_0px_4px_8px_rgba(0,0,0,0.16)] bg-[#F7AC25]">
                Login
              </button>
              <button className="w-full py-3 rounded-lg shadow-[inset_0px_4px_8px_rgba(0,0,0,0.16)] bg-[#4B93E7] flex gap-3 items-center justify-center">
                Login with Google{" "}
                <FontAwesomeIcon className="text-xl" icon={faGoogle} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
