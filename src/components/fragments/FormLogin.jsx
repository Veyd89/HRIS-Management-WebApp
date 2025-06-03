/* eslint-disable no-unused-vars */
// import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
// import React, { useState } from "react";
import InputFormm from "./../elements/InputFormm";
import Button from "../elements/Button/Button";
import ButtonSign from "../elements/Button/ButtonSignIn";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { loginUser } from "../../redux/slice/authSlice";
// import { setCookie } from "../../utils/cookie";

const FormLogin = () => {
  // const [visiblePass, setVisiblePass] = useState(false);
  const errorVal = useSelector((state) => state.auth.error);
  // const [checkRemember, setCheckRemember] = useState(false);
  // useEffect(() => {
  //   console.log(checkRemember);
  // }, [checkRemember]);
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  // jadi sama saja if (e.target.name === "username") maka property username yang akan diinput
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
    // if (checkRemember) {
    //   setCookie(form);
    // }
  };
  // useEffect(() => {
  //   console.log(form);
  // }, [form]);
  // useEffect(() => {
  //   console.log(checkRemember);
  // });
  const ForgotPassword = () => {
    return (
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <label className="flex items-center gap-2 cursor-pointer relative">
            <input
              type="checkbox"
              className="absolute hidden opacity-0 w-0 h-0"
              checked={form.rememberMe}
              onChange={(e) =>
                setForm({ ...form, rememberMe: e.target.checked })
              }
            />
            <span className="w-4 h-4 border border-blue-500 rounded bg-transparent flex items-center justify-center transition-all duration-1000 relative">
              {form.rememberMe && (
                <span className="w-3 h-3 bg-blue-500 rounded absolute"></span>
              )}
            </span>
            <span className="text-base">Remember me</span>
          </label>

          {/* <label htmlFor="remember" className="text-base cursor-pointer">
            Remember me
          </label> */}
        </div>
        <a href="">Forgot Password?</a>
      </div>
    );
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-9">
      <div className="flex flex-col gap-6">
        {errorVal && <p className="text-red-600 italic">{errorVal}</p>}
        <InputFormm
          id={"email"}
          typeInput={"email"}
          name="email"
          action={{ onChange: handleChange }}
        >
          Email
        </InputFormm>

        <div className="flex flex-col gap-2">
          <InputFormm
            id={"password"}
            typeInput={"password"}
            name="password"
            action={{ onChange: handleChange }}
          >
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
