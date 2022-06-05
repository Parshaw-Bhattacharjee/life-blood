import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";
import { useAuth } from "../../../contexts/auth-context";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { v4 } from "uuid";

const RequestDonationModal = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [bloodGroup, setBloodGroup] = useState("");
  const { user, userType, userId, userUID } = useAuth();

  const requestClickHandler = async () => {
    if (user && userType && bloodGroup) {
      await updateDoc(doc(db, userType, userUID), {
        donorRequest: [
          ...user.donorRequest,
          {
            username: "",
            id: v4(),
            bloodBankName: user.name,
            userUID,
            bloodGroup,
            pending: true,
          },
        ],
      });
      setShowModal(false);
    }
  };
  return (
    <>
      <button
        className="bg-rose-500 text-white active:bg-rose-600 font-bold uppercase text-sm px-6 py-3 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Request Donation
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Request Blood Donation
                  </h3>
                  <button
                    className="pl-4 py-1 ml-auto bg-transparent border-0  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <AiFillCloseCircle />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form action="" className="flex flex-col space-y-4">
                    <div className="flex">
                      <select
                        required
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                      >
                        <option value={""} disabled>
                          -Blood Group-
                        </option>
                        <option value={"A+"}>A+</option>
                        <option value={"A-"}>A-</option>
                        <option value={"B+"}>B+</option>
                        <option value={"B-"}>B-</option>
                        <option value={"O+"}>O+</option>
                        <option value={"O-"}>O-</option>
                        <option value={"AB+"}>AB+</option>
                        <option value={"AB-"}>AB-</option>
                      </select>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="inline-block self-end bg-red-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
                    type="button"
                    onClick={requestClickHandler}
                  >
                    Request
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default RequestDonationModal;
