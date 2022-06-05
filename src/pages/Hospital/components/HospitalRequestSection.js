import React from "react";
import { useAuth } from "../../../contexts/auth-context";

const HospitalRequestSection = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col space-y-1 justify-center items-center border-2 border-red-300 shadow-lg rounded-lg w-full">
      <div className="">
        <h1 className="font-bold text-xl tracking-wide">Pending Request</h1>
      </div>
      <table className="p-2 m-4 w-3/4 justify-center items-center">
        <thead className="">
          <tr className="justify-between">
            <th className="text-left">Doctor Incharge</th>
            <th className="text-left">Type</th>
            <th className="text-left">Quantity</th>
          </tr>
        </thead>
        {user?.hospitalRequests
          ?.filter((el) => el.pending)
          .map((el) => {
            return (
              <tbody key={el.id} className="w-full p-2 flex-col">
                <tr className="border-2">
                  <td className="items-center">{el.doctorName}</td>
                  <td className="items-center">{el.bloodGroup}</td>
                  <td className="items-center">{el.quantity}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default HospitalRequestSection;
