import React from 'react';
import { BloodBankRequest } from './BloodBankRequest';
import { useAuth } from '../../../contexts/auth-context';
import { db } from '../../../firebase';
import {
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
} from 'firebase/firestore';

const DonorRequestSection = ({
  setBloodBank,
  bloodBank,
  setAllBloodBankData,
  allBloodBankData,
}) => {
  const { user } = useAuth();

  const onAcceptHandler = (request) => {
    (async () => {
      const updatedReq = allBloodBankData
        .filter((el) => el.userUID === request.userUID)
        .map((el) => {
          if (el.id === request.id) return { ...el, username: user.name };
          return el;
        });
      console.log(updatedReq);
      await updateDoc(doc(db, 'blood_bank', request.userUID), {
        donorRequest: updatedReq,
      });
    })();
    setBloodBank(
      bloodBank.map((el) => {
        if (el.id === request.id) return { ...el, username: user.name };
        return el;
      })
    );
    setAllBloodBankData(
      allBloodBankData.map((el) => {
        if (el.id === request.id) return { ...el, username: user.name };
        return el;
      })
    );
    // (async () => {
    //   await updateDoc(doc(db, 'requests', '6B5EW5l9P0sIA260gwxN'), {
    //     [request.uid]: updatedReq,
    //   });
    //   await updateDoc(doc(db, 'blood_bank', userUID), {
    //     bloodData: {
    //       ...user.bloodData,
    //       [request.bloodGroup]:
    //         Number(user.bloodData[request.bloodGroup]) -
    //         Number(request.quantity),
    //     },
    //   });
    // })();
    // setBloodBankRequests(updatedReq);
  };

  return (
    <div className='flex flex-col space-y-1 justify-center items-center border-2 border-red-300 shadow-lg rounded-lg'>
      <div className=''>
        <h1 className='font-bold text-xl tracking-wide'>Donation Request</h1>
      </div>
      <div className='p-2'>
        <div className='border-2 flex flex-row space-x-2 p-2'>
          <h1>Blood Bank Name</h1>
          <h1>Blood Bank Location</h1>
        </div>
        <div className='w-full p-2 flex-col'>
          {bloodBank.map((el) => {
            return (
              <BloodBankRequest
                key={el.id}
                request={el}
                onAcceptHandler={onAcceptHandler}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DonorRequestSection;
