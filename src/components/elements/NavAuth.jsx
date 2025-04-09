import React from "react";
import LinkAuth from "./LinkAuth";

const NavAuth = ({ authType }) => {
  return (
    <nav className="flex pr-20 items-center gap-4 mb-9">
      <LinkAuth
        destination={"/login"}
        classCondition={
          authType === "login"
            ? "text-3xl font-semibold relative after:content-['']"
            : "after:content-none text-lg opacity-[50%] font-normal"
        }
      >
        Login
      </LinkAuth>
      <span className="h-[80%] w-[2px] bg-[#D3E2F4]"></span>
      <LinkAuth
        destination={"/signup"}
        classCondition={
          authType === "login"
            ? "after:content-none text-lg opacity-[50%] font-normal"
            : "text-3xl font-semibold relative after:content-['']"
        }
      >
        Sign Up
      </LinkAuth>
    </nav>
  );
};

export default NavAuth;
