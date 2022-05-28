import React from "react";

const DonorRequestSection = () => {
  return (
    <div className="flex flex-col space-y-1 justify-center items-center border-2 border-red-300 shadow-lg rounded-lg">
      <div className="">
        <h1 className="font-bold text-xl tracking-wide">Donation Request</h1>
      </div>
      <div className="p-2">
        <div className="border-2 flex flex-row space-x-2 p-2">
          <h1>Blood Bank Name</h1>
          <h1>Blood Bank Location</h1>
        </div>
      </div>
    </div>
  );
};

export default DonorRequestSection;
