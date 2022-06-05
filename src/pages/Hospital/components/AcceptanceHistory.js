import React from "react";
import { useAuth } from "../../../contexts/auth-context";

const AcceptanceHistory = () => {
  const { user } = useAuth();
  return (
    <div className="flex flex-col w-2/3 space-y-1 justify-center items-center border-2 border-red-300 shadow-lg rounded-lg">
      <div className="">
        <h1 className="font-bold text-xl tracking-wide">Acceptance History</h1>
      </div>
      <table className="p-2 m-4 w-3/4 justify-center items-center">
        <thead>
          <tr>
            <th className="text-left">Blood bank name</th>
            <th className="text-left">Blood group</th>
            <th className="text-left">Quantity</th>
          </tr>
        </thead>
        {user?.hospitalRequests
          ?.filter((el) => !el.pending)
          .map((el) => {
            return (
              <tbody key={el.id} className="w-full p-2 flex-col">
                <td className="items-center">{el.bloodBankName}</td>
                <td className="items-center">{el.bloodGroup}</td>
                <td className="items-center">{el.quantity}</td>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default AcceptanceHistory;
