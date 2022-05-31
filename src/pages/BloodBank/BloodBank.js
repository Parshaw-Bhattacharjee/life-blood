import React from 'react';
import BankRequestSection from './components/BankRequestSection';
import Chart from '../../components/Chart';
import RequestDonationModal from './components/RequestDonationModal';
import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/auth-context';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../firebase';

const BloodBank = () => {
  const [hospitalRequests, setHospitalRequests] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      (async () => {
        const q = query(collection(db, 'requests'));
        onSnapshot(q, (data) => {
          const dataObj = data.docs[0].data();
          setHospitalRequests(
            Object.keys(dataObj).reduce((acc, curr) => {
              return [...acc, ...dataObj[curr]];
            }, [])
          );
        });
      })();
    }
  }, [user]);

  console.log(hospitalRequests);
  return (
    <div>
      <div className='flex flex-col w-full min-h-screen justify-center items-center'>
        <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-4xl p-8 sm:p-12 rounded-xl overflow-hidden'>
          <BankRequestSection hospitalRequests={hospitalRequests} />
          <Chart />
        </div>
        <RequestDonationModal />
      </div>
    </div>
  );
};

export default BloodBank;
