import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { v4 } from "uuid";
import { userTypes } from "../../../constants/constants";
import { useAuth } from "../../../contexts/auth-context";
import { db, storage } from "../../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const BloodRequestForm = () => {
  const { user, userUID } = useAuth();
  const [bloodReqForm, setBloodReqForm] = useState({
    quantity: "",
    bloodGroup: "",
    doctorName: "",
  });
  const [files, setFiles] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const storageRef = ref(storage, `/HospitalRequests/${files?.name}`);
    const uploadTask = uploadBytesResumable(storageRef, files);
    uploadTask.on(
      "state_changed",
      (err) => console.log(err),
      () => {},
      () => {
        // download url
        const downloadUrl = getDownloadURL(uploadTask.snapshot.ref).then(
          (url) => {
            (async () => {
              await updateDoc(doc(db, userTypes.HOSPITAL, userUID), {
                hospitalRequests: [
                  ...user.hospitalRequests,
                  {
                    bloodBankName: "",
                    pending: true,
                    doctorName: bloodReqForm.doctorName,
                    quantity: Number(bloodReqForm.quantity),
                    bloodGroup: bloodReqForm.bloodGroup,
                    hospitalName: user.name,
                    hospitalId: userUID,
                    hospitalUID: user.uid,
                    downloadUrl: url,
                    id: v4(),
                  },
                ],
              });
            })();
          }
        );
      }
    );
    setBloodReqForm({ quantity: "", bloodGroup: "", doctorName: "" });
  };
  return (
    <div className="border-2 border-red-300 shadow-lg md:w-full rounded-lg">
      <form onSubmit={onSubmitHandler} className="flex flex-col space-y-4 p-2">
        <div className="flex flex-col">
          <label htmlFor="" className="text-sm">
            Doctor Name
          </label>
          <input
            required
            type={"text"}
            value={bloodReqForm.doctorName}
            onChange={(e) =>
              setBloodReqForm({ ...bloodReqForm, doctorName: e.target.value })
            }
            placeholder="Enter Doctor's Name"
            className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300"
          />
          <label htmlFor="" className="text-sm">
            Patient Name
          </label>
          <input
            required
            type={"text"}
            placeholder="Enter Patient's Name"
            className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300"
          />
        </div>
        <div className="flex flex-row space-x-2">
          <select
            required
            value={bloodReqForm.bloodGroup}
            onChange={(e) =>
              setBloodReqForm({ ...bloodReqForm, bloodGroup: e.target.value })
            }
            className="w-20"
          >
            <option value={""} disabled>
              -
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
          <input
            required
            type={"number"}
            min={1}
            max={15}
            value={bloodReqForm.quantity}
            onChange={(e) =>
              setBloodReqForm({ ...bloodReqForm, quantity: e.target.value })
            }
            placeholder="-"
            className="ring-1 ring-gray-300 w-20 rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300"
          />
          <input
            onChange={(e) => {
              console.log(e.target.files);
              setFiles(e?.target?.files[0]);
            }}
            required
            type={"file"}
            accept={".pdf, Image/*"}
            placeholder="-"
            className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-rose-300"
          />
        </div>
        <button
          type="submit"
          className="inline-block self-end bg-red-500 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
        >
          Request
        </button>
      </form>
    </div>
  );
};

export default BloodRequestForm;
