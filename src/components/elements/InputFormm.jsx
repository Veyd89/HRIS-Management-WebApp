import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

const InputFormm = ({ typeInput, name = "", id, children }) => {
  const [visiblePass, setVisiblePass] = useState(false);
  const passwordType = visiblePass ? "text" : "password";
  return (
    <div className="input-box relative flex flex-col text-[#082777]">
      <input  
        type={id.toLowerCase().includes("password") ? passwordType : typeInput}
        name={name}
        id={id}
        required
        className="bg-[#DDEAFB] py-3 px-4 w-full rounded-lg border border-[#4B93E7] outline-none peer"
      />
      <label
        className="absolute flex justify-center items-center cursor-text top-[50%] -translate-y-[50%] left-4 transition-all duration-300 peer-valid:top-0 peer-valid:text-xs peer-focus:top-0   peer-focus:text-xs before:content-[''] before:bg-[#E6EEF8] before:h-1 before:min-w-full before:absolute before:px-9 before:-z-40 "
        htmlFor={id}
      >
        {children}
      </label>
      <FontAwesomeIcon
        icon={visiblePass ? faEye : faEyeSlash}
        className={`absolute translate-y-[-50%] top-[50%] right-3 cursor-pointer w-6 h-6 text-[#91BDF5] ${
          id.toLowerCase().includes("password") ? "block" : "hidden"
        }`}
        onClick={() => setVisiblePass(!visiblePass)}
      />
    </div>
  );
};

export default InputFormm;
