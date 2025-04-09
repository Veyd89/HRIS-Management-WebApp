/* eslint-disable no-unused-vars */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

import InputFormm from "../components/elements/InputFormm";
import FormLogin from "./../components/fragments/FormLogin";
import FormSignUp from "./../components/fragments/FormSignUp";
import { Link } from "react-router-dom";
import Header from "../components/elements/Header";
import Footer from "./../components/elements/Footer";
import AuthLayouts from "../components/layouts/AuthLayouts";

const LoginPages = () => {
  const refForm = useRef(null);

  // useEffect(() => {
  //   const observer = new ResizeObserver(([entry]) => {
  //     setHeight(entry.contentRect.height);
  //   });

  //   if (refForm.current) {
  //     observer.observe(refForm.current);
  //   }

  //   return () => observer.disconnect(); // Cleanup saat komponen unmount
  // }, []);

  return <AuthLayouts type={"login"} />;
};

export default LoginPages;
