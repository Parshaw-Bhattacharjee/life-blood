import { collection, onSnapshot, query } from 'firebase/firestore';
import React from 'react';
import { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/auth-context';
import { db } from '../../firebase';
import AcceptanceHistory from './components/AcceptanceHistory';
import BloodRequestForm from './components/BloodRequestForm';
import HospitalRequestSection from './components/HospitalRequestSection';

const Hospital = () => {
  const [hospitalData, setHospitalData] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      (async () => {
        const q = query(collection(db, 'requests'));
        onSnapshot(q, (data) => {
          setHospitalData(data.docs[0].data()[user.uid]);
        });
      })();
    }
  }, [user]);

  console.log(hospitalData);
  return (
    <div className='flex flex-col p-2 justify-center items-center'>
      <div className='flex w-full min-h-screen justify-center items-center'>
        <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-4xl p-8 sm:p-12 rounded-xl overflow-hidden'>
          <HospitalRequestSection hospitalData={hospitalData} />
          <BloodRequestForm
            hospitalData={hospitalData}
            setHospitalData={setHospitalData}
          />
        </div>
      </div>
      <AcceptanceHistory hospitalData={hospitalData} />
    </div>
  );
};

export default Hospital;
