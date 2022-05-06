import React from "react";

const BloodRequestForm = () => {
  return (
    <div>
      <form action="" method="post" className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <label htmlFor="" className="text-sm">
            Doctor Name
          </label>
          <input
            type={"text"}
            placeholder="Enter Doctor's Name"
            className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300"
          />
          <label htmlFor="" className="text-sm">
            Patient Name
          </label>
          <input
            type={"text"}
            placeholder="Enter Patient's Name"
            className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300"
          />
        </div>
        <div className="flex flex-row space-x-2">
          <select className="w-20">
            <option>-</option>
            <option>A+</option>
            <option>A-</option>
            <option>B+</option>
            <option>B-</option>
            <option>O+</option>
            <option>O-</option>
            <option>AB+</option>
            <option>AB-</option>
          </select>
          <input
            type={"number"}
            placeholder="-"
            className="ring-1 ring-gray-300 w-20 rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300"
          />
          <input
            type={"file"}
            placeholder="-"
            className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300"
          />
        </div>
      </form>
    </div>
  );
};

export default BloodRequestForm;
