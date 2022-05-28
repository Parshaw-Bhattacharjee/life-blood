<<<<<<< HEAD
import React from "react";
import BankRequestSection from "./components/BankRequestSection";
import Chart from "../../components/Chart";
import RequestDonationModal from "./components/RequestDonationModal";
=======
import React from 'react';

import Chart from '../../components/Chart';
import BankRequestSection from '../Hospital/components/BankRequestSection';
import RequestDonationModal from './components/RequestDonationModal';
>>>>>>> 32d1292460ca9429e7dc546bd1c4ea0f3636ddcb

const BloodBank = () => {
  return (
    <div>
<<<<<<< HEAD
      <div className="flex flex-col w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-4xl p-8 sm:p-12 rounded-xl overflow-hidden">
=======
      <div className='flex flex-col w-full min-h-screen justify-center items-center'>
        <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-4xl p-8 sm:p-12 rounded-xl overflow-hidden'>
>>>>>>> 32d1292460ca9429e7dc546bd1c4ea0f3636ddcb
          <BankRequestSection />
          <Chart />
        </div>
        <RequestDonationModal />
      </div>
    </div>
  );
};

export default BloodBank;
