import React, { useEffect, useState } from "react";

const BgAuth = ({ type }) => {
  const [rotation, setRotation] = useState({
    x: "rotate(42.3deg)",
    y: "rotate(-7deg)",
  });

  useEffect(() => {
    if (type === "login") {
      setRotation({ x: "rotate(42.3deg)", y: "rotate(-7deg)" });
    } else {
      setRotation({ x: "rotate(155.3deg)", y: "rotate(60deg)" });
    }
  }, [type]);

  return (
    <div className="flex flex-col absolute w-full justify-center items-center h-full">
      <img
        src="/img/X.png"
        style={{
          transform: rotation.x,
          transition: "transform 0.5s ease-in-out",
        }}
        className="absolute w-[1100px] h-[400px]"
        alt=""
      />
      <img
        src="/img/Y.png"
        style={{
          transform: rotation.y,
          transition: "transform 0.5s ease-in-out",
        }}
        className="absolute w-[1200px] h-[400px]"
        alt=""
      />
    </div>
  );
};

export default BgAuth;
