import React from 'react';
import { useAuth } from '../../../contexts/auth-context';

const AcceptanceHistory = () => {
  const { user } = useAuth();
  return (
    <div className='flex flex-col w-2/3 space-y-1 justify-center items-center border-2 border-red-300 shadow-lg rounded-lg'>
      <div className=''>
        <h1 className='font-bold text-xl tracking-wide'>Acceptance History</h1>
      </div>
      <div className='w-full p-2'>
        <div className='border-2 flex flex-col  space-x-2 p-2 justify-between sm:items-center'>
          <div className='space-x-4 flex flex-row'>
            <h1>Blood bank name</h1>
            <h1>Blood group</h1>
            <h1>Quantity</h1>
          </div>
          {user?.hospitalRequests
            ?.filter((el) => !el.pending)
            .map((el) => {
              return (
                <div key={el.id} className='space-x-12 flex flex-row'>
                  <h1>{el.bloodBankName}</h1>
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

export default AcceptanceHistory;
