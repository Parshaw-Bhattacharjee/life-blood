import React from 'react';
import { useAuth } from '../../../contexts/auth-context';

const HospitalRequestSection = () => {
  const { user } = useAuth();

  return (
    <div className='flex flex-col space-y-1 justify-center items-center border-2 border-red-300 shadow-lg rounded-lg md:w-1/2'>
      <div className=''>
        <h1 className='font-bold text-xl tracking-wide'>Pending Request</h1>
      </div>
      <div className='w-full flex flex-row p-2 justify-center items-center mx-2'>
        <div className='justify-between border-2 px-2 w-full'>
          <div className='space-x-4 flex flex-row'>
            <h1>Doctor Incharge</h1>
            <h1>Type</h1>
            <h1>Qt.</h1>
          </div>
          {user?.hospitalRequests
            ?.filter((el) => el.pending)
            .map((el) => {
              return (
                <div
                  key={el.id}
                  className='space-x-4 flex flex-row justify-around'
                >
                  <h1>{el.doctorName}</h1>
                  <h1>{el.bloodGroup}</h1>
                  <h1>{el.quantity}</h1>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default HospitalRequestSection;
