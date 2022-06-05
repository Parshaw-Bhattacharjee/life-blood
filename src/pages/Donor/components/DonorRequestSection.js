import React from "react";
import { BloodBankRequest } from "./BloodBankRequest";
import { useAuth } from "../../../contexts/auth-context";
import { db } from "../../../firebase";
import { doc, updateDoc } from "firebase/firestore";

const DonorRequestSection = ({
  setBloodBank,
  bloodBank,
  setAllBloodBankData,
  allBloodBankData,
  bloodgroup,
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
      await updateDoc(doc(db, "BloodBank", request.userUID), {
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
  };

  return (
    <div className="flex flex-col space-y-1 justify-center items-center border-2 border-red-300 shadow-lg rounded-lg relative">
      {bloodgroup ? (
        <div className="absolute w-20 h-20 bg-rose-400 rounded-full -right-4 -top-8">
          <h1 className="font-bold text-3xl p-5">{bloodgroup}</h1>
        </div>
      ) : null}
      <div className="">
        <h1 className="font-bold text-xl tracking-wide">Donation Request</h1>
      </div>
      <table className="p-2 my-4">
        <thead className="border-2 flex flex-row space-x-2 p-2">
          <th>Blood Bank Name</th>
          <th>Blood Bank Location</th>
        </thead>
        <tbody className="w-full p-2 flex-col">
          {console.log(bloodBank)}
          {bloodBank.map((el) => {
            return (
              <BloodBankRequest
                key={el.id}
                request={el}
                onAcceptHandler={onAcceptHandler}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DonorRequestSection;
