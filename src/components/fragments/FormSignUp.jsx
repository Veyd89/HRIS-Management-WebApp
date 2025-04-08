import React from "react";
import ButtonSign from "../elements/Button/ButtonSignIn";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import InputFormm from "../elements/InputFormm";
import Button from "../elements/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FormSignUp = () => {
  return (
    <form action="" className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <InputFormm id={"firstName"} typeInput={"text"} name="firstName">
          First Name
        </InputFormm>
        <InputFormm id={"lastName"} typeInput={"text"} name="lastName">
          Last Name
        </InputFormm>
        <InputFormm id={"email"} typeInput={"email"} name="email">
          Email
        </InputFormm>
        <InputFormm id={"password"} typeInput={"password"} name="password">
          Password
        </InputFormm>
        <InputFormm
          id={"confirmPass"}
          typeInput={"password"}
          name="confirmPass"
        >
          Confirm Password
        </InputFormm>
      </div>
      <div className="flex flex-col gap-4">
        <Button classname={"bg-[#F7AC25]"}>Sign Up</Button>
        <Button
          classname={"bg-[#4B93E7] flex gap-3 items-center justify-center"}
        >
          Sign up with Google{" "}
          <FontAwesomeIcon className="text-xl" icon={faGoogle} />
        </Button>
      </div>
    </form>
  );
};

export default FormSignUp;
