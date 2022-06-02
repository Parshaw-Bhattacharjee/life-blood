import React from 'react';
import BankRequestSection from './components/BankRequestSection';

import RequestDonationModal from './components/RequestDonationModal';
import { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/auth-context';
import {
  collection,
  doc,
  onSnapshot,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { db } from '../../firebase';
import ShowChart from '../../components/Chart';
import PendingRequests from './components/PendingRequests';
import { useRef } from 'react';
import { DonorRequest } from './components/DonorRequest';

const BloodBank = () => {
  const [hospitalRequests, setHospitalRequests] = useState([]);
  const { user, userId, userUID } = useAuth();
  const [bloodData, setBloodData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Blood Storage Data',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  });
  const [bloodDataDecrease, isBloodDataDecrease] = useState(false);

  useEffect(() => {
    (async () => {
      const q = query(collection(db, 'hospital'));
      onSnapshot(q, (data) => {
        let hospitalData = [];
        data.docs.forEach((el) => {
          hospitalData = [...hospitalData, ...el.data().hospitalRequests];

          console.log(el.data(), 'data');
        });
        setHospitalRequests(hospitalData);
      });
    })();
  }, []);

  console.log(hospitalRequests);

  useEffect(() => {
    (async () => {
      const q = query(collection(db, 'blood_bank'), where('uid', '==', userId));
      onSnapshot(q, (data) => {
        const dataObj = data.docs[0].data();

        setBloodData({
          labels: Object.keys(dataObj.bloodData).sort((a, b) => a - b),
          datasets: [
            {
              label: 'Blood Storage Data',
              data: Object.keys(dataObj.bloodData)
                .sort((a, b) => a - b)
                .map((el) => dataObj.bloodData[el]),
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
          ],
        });
      });
    })();
  }, [bloodDataDecrease]);

  const onAcceptHandler = async (request) => {
    const updatedData = user.donorRequest.map((el) => {
      if (request.id === el.id) return { ...el, pending: false };
      else return el;
    });
    await updateDoc(doc(db, 'blood_bank', userUID), {
      donorRequest: updatedData,
      bloodData: {
        ...user.bloodData,
        [request.bloodGroup]: Number(user.bloodData[request.bloodGroup]) + 1,
      },
    });
  };

  return (
    <div>
      <div className='flex flex-col w-full min-h-screen justify-center items-center'>
        <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-4xl p-8 sm:p-12 rounded-xl overflow-hidden'>
          <BankRequestSection
            hospitalRequests={hospitalRequests}
            setHospitalRequests={setHospitalRequests}
            isBloodDataChanged={isBloodDataDecrease}
          />
          <ShowChart bloodData={bloodData} />
        </div>
        {user?.donorRequest
          ?.filter((el) => el.pending && el.username)
          ?.map((el) => {
            return (
              <DonorRequest
                request={el}
                onAcceptHandler={onAcceptHandler}
                isBloodDataChanged={isBloodDataDecrease}
              />
            );
          })}
        <RequestDonationModal />
      </div>
    </div>
  );
};

export default BloodBank;
