import { collection, onSnapshot, query } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../../contexts/auth-context";
import { db } from "../../firebase";
import DonorRequestSection from "./components/DonorRequestSection";

const Donor = () => {
  const { user } = useAuth();
  const [bloodBank, setBloodBank] = useState([]);
  const [allBloodBankData, setAllBloodBankData] = useState([]);

  useEffect(() => {
    (async () => {
      const q = query(collection(db, "blood_bank"));
      onSnapshot(q, (data) => {
        let bloodRequestData = [];
        let allBloodBank = [];
        data.docs.forEach((el) => {
          console.log(el.data());
          bloodRequestData = [
            ...bloodRequestData,

            ...el
              .data()
              .donorRequest.filter(
                (el) => el.bloodGroup === user?.bloodgroup && !el.username
              )
              .map((innerEl) => {
                return { ...innerEl, location: el.data().location };
              }),
          ];
          allBloodBank = [...allBloodBank, ...el.data().donorRequest];
        });
        setBloodBank(bloodRequestData);
        setAllBloodBankData(allBloodBank);
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
          </div>
          <DonorRequestSection
            setBloodBank={setBloodBank}
            bloodBank={bloodBank}
            setAllBloodBankData={setAllBloodBankData}
            allBloodBankData={allBloodBankData}
            bloodgroup={user?.bloodgroup}
          />
        </div>
      </div>
    </div>
  );
};

export default Donor;
