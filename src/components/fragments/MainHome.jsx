import React from "react";
import Button from "../elements/Button/Button";
import CardHome from "./../elements/CardHome";
import { IoBag } from "react-icons/io5";
import Meetings from "./../elements/Meetings";

const MainHome = () => {
  return (
    <div className="flex gap-4 border border-black h-full">
      <div className="flex-[3]">
        <div className="flex flex-col  gap-6 h-auto">
          <header className="pl-7 flex justify-between items-center">
            <h2 className="font-semibold">Overview</h2>
            <div className="flex gap-4">
              <button className="bg-[#4B93E7] py-2 px-4 text-white rounded-xl">
                Add Candidate
              </button>
              <button className="bg-[#4B93E7] py-2 px-4 text-white rounded-xl">
                Add Job
              </button>
            </div>
          </header>
          <div className="grid grid-cols-1 gap-4">
            <div className="grid grid-cols-2 2xl:grid-cols-4 gap-4">
              <CardHome coutNotif={56} status={"Scheduled"} image="">
                Interview
              </CardHome>
              <CardHome coutNotif={26} status={"Pending"} image="-1">
                Interview Feedback
              </CardHome>
              <CardHome coutNotif={80} status={"Pending"} image="-2">
                Approval
              </CardHome>
              <CardHome coutNotif={10} status={"Pending"} image="-3">
                Offer Acceptance
              </CardHome>
            </div>
            <div className="grid grid-cols-2 2xl:grid-cols-4 gap-4">
              <CardHome coutNotif={16} status={"Pending"} image="-4">
                Documentations
              </CardHome>
              <CardHome coutNotif={18} status={"Pending"} image="-5">
                Training
              </CardHome>
              <CardHome coutNotif={39} status={"Pending"} image="-6">
                Supervisor Allocation
              </CardHome>
              <CardHome coutNotif={40} status={"Pending"} image="-7">
                Project Allocation
              </CardHome>
            </div>
          </div>
        </div>
        <div className="mt-7 flex flex-col gap-5">
          <h2 className="w-full pl-7 text-2xl font-semibold text-[#071C50]">
            Require Attention
          </h2>
          <nav className="w-full pl-7 text-[#071C50] text-base flex gap-9">
            <a className="font-semibold" href="">
              Jobs
            </a>
            <a href="" className="opacity-50">
              Candidate
            </a>
            <a href="" className="opacity-50">
              Onboardings
            </a>
          </nav>
          <table className="w-full text-[#475569] text-xs sm:text-sm rounded-xl">
            <thead className="">
              <tr className=" border-[#E2E8F0] bg-[#F1F5F9]">
                <th className="py-3  text-center pl-4  font-normal"></th>
                <th className="py-3  text-center font-normal">
                  Positions Left
                </th>
                <th className="py-3  text-center font-normal">Applications</th>
                <th className="py-3  text-center font-normal">Interviewed</th>
                <th className="py-3  text-center font-normal">Rejected</th>
                <th className="py-3 text-center font-normal">
                  Feedback Pending
                </th>
                <th className="py-3 pr-4 text-center font-normal">Offered</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E2E8F0] bg-[#F1F5F9]">
                <td className=" py-3 pl-4 flex items-center space-x-3">
                  <div className="bg-[#B3C6ED] rounded-full w-10 h-10 flex justify-center items-center">
                    <IoBag className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A] text-sm sm:text-base leading-tight">
                      Senior Data Analyst
                    </p>
                    <p className="text-[#94A3B8] text-xs leading-tight">
                      100 days ago
                    </p>
                  </div>
                </td>
                <td className=" py-3 font-semibold text-[#0F172A] text-center">
                  3
                </td>
                <td className=" py-3 text-center">123</td>
                <td className=" py-3 text-center">40</td>
                <td className=" py-3 text-center">33</td>
                <td className=" py-3 text-center">7</td>
                <td className=" py-3 font-semibold text-[#0F172A] text-center pr-4">
                  2
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col flex-1 min-h-full  bg-[#F3F8FF] gap-4">
        <div className="w-full pl-4 pt-4">
          <h3
            className="font-semibold text-base flex items-center gap-2
          "
          >
            Upcoming Meetings{" "}
            <span className="border border-[#4B93E7] text-[#4B93E7] w-6 h-6 text-2xl font-extralight flex items-center justify-center rounded-full">
              +
            </span>
          </h3>
        </div>
        <div className="flex flex-col gap-4">
          {" "}
          <div className="w-full px-2">
            <h2 className="w-full font-semibold text-xs pl-2 pb-2 text-[#071C50] opacity-50">
              Today
            </h2>
            <div className="flex flex-col gap-1">
              <Meetings />
              <Meetings />
              <Meetings />
              <Meetings />
              <Meetings />
              <Meetings />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          {" "}
          <div className="w-full px-2">
            <h2 className="w-full font-semibold text-xs pl-2 pb-2 text-[#071C50] opacity-50">
              Tomorrow
            </h2>
            <div className="flex flex-col gap-1">
              <Meetings />
              <Meetings />
              <Meetings />
              <Meetings />
              <Meetings />
              <Meetings />
              <Meetings />
              <Meetings />
              <Meetings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHome;

{
  /* <div className="flex-1  min-h-52 relative pt-5 pl-6">
            <div className="bg-[#F3F8FF] rounded-lg relative w-auto h-full">
              <img
                src="/img/assetsHome/Illustrations.png"
                className="absolute top-6 right-6 w-24 h-20"
                alt=""
              />
              <div className="text-base text-black text-opacity-50 left-4 bottom-6 absolute">
                <p>Interview</p>
                <p className="status">Scheduled</p>
              </div>
            </div>
            <div className="flex absolute w-20 h-20 border-[#082777] border-opacity-50 rounded-3xl border top-0 left-0 bg-[#F3F8FF] font-semibold text-[#071C50] text-2xl justify-center items-center">
              56
            </div>
          </div> */
}
