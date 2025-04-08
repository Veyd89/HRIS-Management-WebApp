import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ButtonSign = () => {
  return (
    <div className="button flex flex-col gap-4 text-[#F3F8FF]">
      <Button classname={"bg-[#F7AC25]"}>Login</Button>
      <Button classname={"bg-[#4B93E7] flex gap-3 items-center justify-center"}>
        Login with Google{" "}
        <FontAwesomeIcon className="text-xl" icon={faGoogle} />
      </Button>
    </div>
  );
};

export default ButtonSign;
