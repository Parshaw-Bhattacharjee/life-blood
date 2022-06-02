import { collection, onSnapshot, query } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../contexts/auth-context";
import { db } from "../../firebase";
import DonorRequestSection from "./components/DonorRequestSection";

const Donor = () => {
  const [BloodBankRequests, setBloodBankRequests] = useState([]);
  const { user } = useAuth();
  const [bloodBank, setBloodBank] = useState({});

  useEffect(() => {
    (async () => {
      const q = query(collection(db, "blood_bank"));
      onSnapshot(q, (data) => {
        const dataObj = data.docs[0].data();
        console.log(dataObj);
        if (dataObj.donorRequest.includes(user?.bloodgroup)) {
          setBloodBank(dataObj);
        }
      });
    })();
  }, [user]);

  console.log(bloodBank, "gf");
  return (
    <div>
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col space-y-6 md:space-y-0 w-full max-w-4xl p-8 sm:p-12 rounded-xl overflow-hidden">
          <div className="flex flex-row p-4">
            <h1 className="font-bold text-xl">Hi, {user?.name}</h1>
            <div className="absolute w-20 h-20 bg-rose-400 rounded-full right-80 top-80">
              <h1 className="font-bold text-3xl p-5">{user?.bloodgroup}</h1>
            </div>
          </div>
          <DonorRequestSection
            BloodBankRequests={BloodBankRequests}
            setBloodBankRequests={setBloodBankRequests}
            bloodBank={bloodBank}
          />
        </div>
      </div>
    </div>
  );
};

export default Donor;
