import React from "react";
import { Link } from "react-router-dom";

const LinkAuth = ({ children, destination, classCondition }) => {
  return (
    <Link
      to={destination}
      className={`after:block after:w-[40px] after:bg-[#F7AC25] after:rounded after:h-1 after:-bottom-2 after:absolute after:left-[1px] text-[#4B93E7]  ${classCondition}`}
    >
      {children}
    </Link>
  );
};

export default LinkAuth;
