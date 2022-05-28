<<<<<<< HEAD
import React from "react";

const BloodRequestForm = () => {
  return (
    <div className="border-2 border-red-300 shadow-lg md:w-full rounded-lg">
      <form action="" method="post" className="flex flex-col space-y-4 p-2">
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
=======
import React from 'react';

const BloodRequestForm = () => {
  return (
    <div className='border-2 border-red-300 shadow-lg md:w-full rounded-lg'>
      <form action='' method='post' className='flex flex-col space-y-4 p-2'>
        <div className='flex flex-col'>
          <label htmlFor='' className='text-sm'>
            Doctor Name
          </label>
          <input
            type={'text'}
            placeholder="Enter Doctor's Name"
            className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300'
          />
          <label htmlFor='' className='text-sm'>
            Patient Name
          </label>
          <input
            type={'text'}
            placeholder="Enter Patient's Name"
            className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300'
          />
        </div>
        <div className='flex flex-row space-x-2'>
          <select className='w-20'>
>>>>>>> 32d1292460ca9429e7dc546bd1c4ea0f3636ddcb
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
<<<<<<< HEAD
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
        <button className="inline-block self-end bg-red-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
=======
            type={'number'}
            placeholder='-'
            className='ring-1 ring-gray-300 w-20 rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300'
          />
          <input
            type={'file'}
            placeholder='-'
            className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300'
          />
        </div>
        <button className='inline-block self-end bg-red-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'>
>>>>>>> 32d1292460ca9429e7dc546bd1c4ea0f3636ddcb
          Request
        </button>
      </form>
    </div>
  );
};

export default BloodRequestForm;
