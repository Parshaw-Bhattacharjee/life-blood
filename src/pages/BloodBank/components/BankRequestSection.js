import React from 'react';
import { HospitalRequest } from './HospitalRequest';

const BankRequestSection = ({ hospitalRequests }) => {
  console.log(hospitalRequests, 'sdsd');
  return (
    <div className='flex flex-col space-y-1 justify-center items-center border-2 border-red-300 shadow-lg rounded-lg'>
      <div className=''>
        <h1 className='font-bold text-xl tracking-wide'>Hospital Request</h1>
      </div>
      <div className='w-full p-2 flex-col'>
        {hospitalRequests.map((el) => {
          return <HospitalRequest request={el} />;
        })}
      </div>
    </div>
  );
};

export default BankRequestSection;
