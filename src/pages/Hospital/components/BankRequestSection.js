import React from "react";

const BankRequestSection = () => {
  return (
    <div className="flex flex-col space-y-1 justify-center items-center border-2 border-red-300 shadow-lg rounded-lg">
      <div className="">
        <h1 className="font-bold text-xl tracking-wide">Hospital Request</h1>
      </div>
      <div className="w-full p-2">
        <div className="border-2 flex flex-col md:flex-row space-x-2 p-2 justify-between sm:items-center">
          <div className="space-x-4 flex flex-row">
            <h1>Hospital</h1>
            <h1>Type</h1>
            <h1>Qt.</h1>
          </div>
          <div className="space-x-4 flex flex-row">
            <button className="bg-red-300 rounded-lg px-2 ">Accept</button>
            <button className="bg-red-300 rounded-lg px-2 ">Reject</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankRequestSection;
