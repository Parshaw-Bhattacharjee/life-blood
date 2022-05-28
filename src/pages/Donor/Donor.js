<<<<<<< HEAD
import React from "react";
import DonorRequestSection from "./components/DonorRequestSection";
=======
import React from 'react';
import DonorRequestSection from './components/DonorRequestSection';
>>>>>>> 32d1292460ca9429e7dc546bd1c4ea0f3636ddcb

const Donor = () => {
  return (
    <div>
<<<<<<< HEAD
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col space-y-6 md:space-y-0 w-full max-w-4xl p-8 sm:p-12 rounded-xl overflow-hidden">
          <div className="flex flex-row p-4">
            <h1 className="font-bold text-xl">Hi, UserName</h1>
            <div className="absolute w-20 h-20 bg-rose-400 rounded-full right-80 top-80">
              <h1 className="font-bold text-3xl p-5">
=======
      <div className='flex w-full min-h-screen justify-center items-center'>
        <div className='flex flex-col space-y-6 md:space-y-0 w-full max-w-4xl p-8 sm:p-12 rounded-xl overflow-hidden'>
          <div className='flex flex-row p-4'>
            <h1 className='font-bold text-xl'>Hi, UserName</h1>
            <div className='absolute w-20 h-20 bg-rose-400 rounded-full right-80 top-80'>
              <h1 className='font-bold text-3xl p-5'>
>>>>>>> 32d1292460ca9429e7dc546bd1c4ea0f3636ddcb
                A<sup>+</sup>
              </h1>
            </div>
          </div>
          <DonorRequestSection />
        </div>
      </div>
    </div>
  );
};

export default Donor;
