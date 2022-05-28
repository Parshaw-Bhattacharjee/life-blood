import React from "react";
import BankRequestSection from "./components/BankRequestSection";
import Chart from "../../components/Chart";
import RequestDonationModal from "./components/RequestDonationModal";

const BloodBank = () => {
  return (
    <div>
      <div className="flex flex-col w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-4xl p-8 sm:p-12 rounded-xl overflow-hidden">
          <BankRequestSection />
          <Chart />
        </div>
        <RequestDonationModal />
      </div>
    </div>
  );
};

export default BloodBank;
