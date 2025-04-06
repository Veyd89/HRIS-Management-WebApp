import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import React, { useState } from "react";

const FormLogin = () => {
  const [visiblePass, setVisiblePass] = useState(false);
  return (
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
              <label htmlFor="remember" className="text-base cursor-pointer">
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
  );
};

export default FormLogin;
