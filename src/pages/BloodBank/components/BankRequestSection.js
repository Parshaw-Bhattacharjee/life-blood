import { doc, updateDoc } from 'firebase/firestore';
import React from 'react';
import { ToastHandler } from '../../../constants/constants';
import { useAuth } from '../../../contexts/auth-context';
import { db } from '../../../firebase';
import { HospitalRequest } from './HospitalRequest';

const BankRequestSection = ({
  hospitalRequests,
  setHospitalRequests,
  isBloodDataChanged,
}) => {
  const { userUID, user } = useAuth();

  const onAcceptHandler = (request) => {
    const updatedReq = hospitalRequests.map((el) => {
      if (el.id === request.id) return { ...el, isAccepted: true };
      return el;
    });

    if (Number(user.bloodData[request.bloodGroup]) < Number(request.quantity)) {
      ToastHandler('warn', 'Require more blood in storage');
      return;
    }
    (async () => {
      await updateDoc(doc(db, 'requests', '6B5EW5l9P0sIA260gwxN'), {
        [request.uid]: updatedReq,
      });
      await updateDoc(doc(db, 'blood_bank', userUID), {
        bloodData: {
          ...user.bloodData,
          [request.bloodGroup]:
            Number(user.bloodData[request.bloodGroup]) -
            Number(request.quantity),
        },
      });
    })();
    isBloodDataChanged((tr) => !tr);
    setHospitalRequests(updatedReq);
  };
  return (
    <div className='flex flex-col space-y-1 justify-center items-center border-2 border-red-300 shadow-lg rounded-lg'>
      <div className=''>
        <h1 className='font-bold text-xl tracking-wide'>Hospital Request</h1>
      </div>
      <div className='border-2 flex flex-col md:flex-row space-x-2 p-2 justify-between sm:items-center'>
        <div className='space-x-4 flex flex-row'>
          <h1>Hospital name</h1>
          <h1>Blood group</h1>
          <h1>Quantity</h1>
        </div>
      </div>
      <div className='w-full p-2 flex-col'>
        {hospitalRequests.map((el) => {
          if (!el.isAccepted)
            return (
              <HospitalRequest request={el} onAcceptHandler={onAcceptHandler} />
            );
          else return null;
        })}
      </div>
    </div>
  );
};

export default BankRequestSection;
