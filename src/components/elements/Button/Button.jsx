import React from "react";

const Button = ({ classname, children }) => {
  return (
    <button
      className={`w-full py-3 rounded-lg shadow-[inset_0px_4px_8px_rgba(0,0,0,0.16)] ${classname}`}
    >
      {children}
    </button>
  );
};

export default Button;
