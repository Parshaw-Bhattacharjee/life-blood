import React from "react";
import DonorRequestSection from "./components/DonorRequestSection";

const Donor = () => {
  return (
    <div>
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col space-y-6 md:space-y-0 w-full max-w-4xl p-8 sm:p-12 rounded-xl overflow-hidden">
          <div className="flex flex-row p-4">
            <h1 className="font-bold text-xl">Hi, UserName</h1>
            <div className="absolute w-20 h-20 bg-rose-400 rounded-full right-80 top-80">
              <h1 className="font-bold text-3xl p-5">
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
