export const HospitalRequest = ({ request, onAcceptHandler }) => {
  console.log(request);

  return (
    <tr className="border-2">
      <td className="items-center">
        <a href={request.downloadUrl}>{request.hospitalName}</a>
      </td>
      <td className="items-center">{request.bloodGroup}</td>
      <td className="items-center">{request.quantity}</td>

      <td className="items-center">
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
