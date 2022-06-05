export const BloodBankRequest = ({ request, onAcceptHandler }) => {
  console.log(request);

  return (
    <tr className="border-2 flex flex-col md:flex-row space-x-2 p-2 justify-between sm:items-center">
      <td>{request?.bloodBankName}</td>
      <td>{request?.location}</td>

      <td className="space-x-4 flex flex-row">
        <button
          onClick={() => {
            onAcceptHandler(request);
          }}
          className="bg-red-300 rounded-lg px-2"
        >
          Accept
        </button>
      </td>
    </tr>
  );
};
