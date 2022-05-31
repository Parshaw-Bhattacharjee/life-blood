import { doc, updateDoc } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { v4 } from 'uuid';
import { useAuth } from '../../../contexts/auth-context';
import { db } from '../../../firebase';

const BloodRequestForm = ({ hospitalData, setHospitalData }) => {
  const { user } = useAuth();
  const [bloodReqForm, setBloodReqForm] = useState({
    quantity: '',
    bloodGroup: '',
  });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(bloodReqForm);
    (async () => {
      await updateDoc(doc(db, 'requests', '6B5EW5l9P0sIA260gwxN'), {
        [user?.uid]: [
          ...hospitalData,
          {
            isAccepted: false,
            quantity: bloodReqForm.quantity,
            bloodGroup: bloodReqForm.bloodGroup,
            name: user.name,
            uid: user.uid,
            id: v4(),
          },
        ],
      });
    })();
    setHospitalData([
      ...hospitalData,
      {
        isAccepted: false,
        quantity: bloodReqForm.quantity,
        bloodGroup: bloodReqForm.bloodGroup,
      },
    ]);
    setBloodReqForm({ quantity: '', bloodGroup: '' });
  };
  return (
    <div className='border-2 border-red-300 shadow-lg md:w-full rounded-lg'>
      <form onSubmit={onSubmitHandler} className='flex flex-col space-y-4 p-2'>
        <div className='flex flex-col'>
          <label htmlFor='' className='text-sm'>
            Doctor Name
          </label>
          <input
            type={'text'}
            placeholder="Enter Doctor's Name"
            className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300'
          />
          <label htmlFor='' className='text-sm'>
            Patient Name
          </label>
          <input
            type={'text'}
            placeholder="Enter Patient's Name"
            className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300'
          />
        </div>
        <div className='flex flex-row space-x-2'>
          <select
            value={bloodReqForm.bloodGroup}
            onChange={(e) => setBloodReqForm({ bloodGroup: e.target.value })}
            className='w-20'
          >
            <option value={''} disabled>
              -
            </option>
            <option value={'A+'}>A+</option>
            <option value={'A-'}>A-</option>
            <option value={'B+'}>B+</option>
            <option value={'B-'}>B-</option>
            <option value={'O+'}>O+</option>
            <option value={'O-'}>O-</option>
            <option value={'AB+'}>AB+</option>
            <option value={'AB-'}>AB-</option>
          </select>
          <input
            type={'number'}
            value={bloodReqForm.quantity}
            onChange={(e) =>
              setBloodReqForm({ ...bloodReqForm, quantity: e.target.value })
            }
            placeholder='-'
            className='ring-1 ring-gray-300 w-20 rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300'
          />
          <input
            type={'file'}
            placeholder='-'
            className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300'
          />
        </div>
        <button
          type='submit'
          className='inline-block self-end bg-red-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm'
        >
          Request
        </button>
      </form>
    </div>
  );
};

export default BloodRequestForm;
