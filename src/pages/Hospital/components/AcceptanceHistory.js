import React from "react";

const AcceptanceHistory = () => {
  return (
    <div className="flex flex-col w-2/3 space-y-1 justify-center items-center border-2 border-red-300 shadow-lg rounded-lg">
      <div className="">
        <h1 className="font-bold text-xl tracking-wide">Acceptance History</h1>
      </div>
      <div className="w-full p-2">
        <div className="border-2 flex flex-col md:flex-row space-x-2 p-2 justify-between sm:items-center">
          <div className="space-x-4 flex flex-row">
            <h1>Blood Bank</h1>
            <h1>Type</h1>
            <h1>Qt.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcceptanceHistory;
