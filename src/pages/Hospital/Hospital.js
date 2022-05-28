<<<<<<< HEAD
import React from "react";
import AcceptanceHistory from "./components/AcceptanceHistory";
import BloodRequestForm from "./components/BloodRequestForm";
import HospitalRequestSection from "./components/HospitalRequestSection";

const Hospital = () => {
  return (
    <div className="flex flex-col p-2 justify-center items-center">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-4xl p-8 sm:p-12 rounded-xl overflow-hidden">
=======
import React from 'react';
import HospitalRequestSection from './components/HospitalRequestSection';
import BloodRequestForm from './components/BloodRequestForm';
import AcceptanceHistory from './components/AcceptanceHistory';

const Hospital = () => {
  return (
    <div className='flex flex-col p-2 justify-center items-center'>
      <div className='flex w-full min-h-screen justify-center items-center'>
        <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-4xl p-8 sm:p-12 rounded-xl overflow-hidden'>
>>>>>>> 32d1292460ca9429e7dc546bd1c4ea0f3636ddcb
          <HospitalRequestSection />
          <BloodRequestForm />
        </div>
      </div>
      <AcceptanceHistory />
    </div>
  );
};

export default Hospital;
