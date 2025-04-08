// import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
// import React, { useState } from "react";
import InputFormm from "./../elements/InputFormm";
import Button from "../elements/Button/Button";
import ButtonSign from "../elements/Button/ButtonSignIn";

const FormLogin = () => {
  // const [visiblePass, setVisiblePass] = useState(false);
  const ForgotPassword = () => {
    return (
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
    );
  };
  return (
    <form action="" className="flex flex-col gap-9">
      <div className="flex flex-col gap-6">
        <InputFormm id={"username"} typeInput={"text"} name="username">
          Username
        </InputFormm>

        <div className="flex flex-col gap-2">
          <InputFormm id={"password"} typeInput={"password"} name="password">
            Password
          </InputFormm>
          <ForgotPassword />
        </div>
      </div>
      <ButtonSign />
    </form>
  );
};

export default FormLogin;
