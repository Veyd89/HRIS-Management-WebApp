import React from "react";

const CardHome = ({ image = "", status, children, coutNotif }) => {
  return (
    <div className="flex-1  min-h-48 relative pt-5 pl-6 group transition-all">
      <div className="bg-[#F3F8FF] rounded-lg relative w-auto h-full group-hover:bg-[#4B93E7] group-hover:bg-opacity-10 transition-all ">
        <img
          src={`/img/assetsHome/Illustrations${image}.png`}
          className="absolute top-6 right-6 w-24 h-20"
          alt=""
        />
        <div className="text-base text-black text-opacity-50 left-4 bottom-6 absolute group-hover:bottom-2 group-hover:font-semibold group-hover:text-opacity-100  transition-all">
          <p>{children}</p>
          <p className="status">{status}</p>
        </div>
      </div>
      <div className=" transition-all group-hover:bg-[#4B93E7] group-hover:w-24 group-hover:h-28 group-hover:rounded-[32px] group-hover:text-white group-hover:font-semibold group-hover:text-4xl group-hover:border group-hover:border-black group-hover:border-opacity-[33%] flex absolute w-20 h-20 border-[#082777] border-opacity-50 rounded-3xl border top-0 left-0 bg-[#F3F8FF] font-semibold text-[#071C50] text-2xl justify-center items-center">
        {coutNotif}
      </div>
    </div>
  );
};

export default CardHome;
