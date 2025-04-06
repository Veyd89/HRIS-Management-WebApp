import React from "react";

const LinkAuth = ({ children, classCondition }) => {
  return (
    <a
      href=""
      className={`after:block after:w-[40px] after:bg-[#F7AC25] after:rounded after:h-1 after:-bottom-2 after:absolute after:left-[1px] text-[#4B93E7]  ${classCondition}`}
    >
      {children}
    </a>
  );
};

export default LinkAuth;
