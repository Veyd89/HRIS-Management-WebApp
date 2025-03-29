import React from "react";
// import Screenshot from "../Screenshot.png";

const LoginPages = () => {
  return (
    <section className="bg-gradient-to-tr from-[#DCE5F2] to-[#F1F4F9] relative h-screen w-full flex justify-center items-center overflow-hidden ">
      <img
        src="/img/X.png"
        className="absolute  w-[1000px] h-[400px] rotate-[52.34deg] top-[17rem] "
        alt=""
      />
      <img
        src="/img/Y.png"
        className="absolute  w-[1100px] h-[400px] -rotate-[7deg] top-40"
        alt=""
      />
      <div className="w-[750px] h-[500px] z-50 bg-[#E6EEF8] py-16 pl-[70px] pr-20 shadow-[-16px_-16px_40px_rgba(253,255,255,0.8),16px_16px_40px_rgba(187,195,206,0.6)]">
        <div className="min-w-full min-h-full flex flex-col">
          <header className="flex w-full justify-center items-center">
            <img src="/img/mainLogo.png" alt="" />
            <h1>test</h1>
          </header>
        </div>
      </div>
    </section>
  );
};

export default LoginPages;
