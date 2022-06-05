export const HospitalRequest = ({ request, onAcceptHandler }) => {
  console.log(request);

  return (
    <tr className="border-2">
      <td>
        <a href={request.downloadUrl}>{request.hospitalName}</a>
      </td>
      <td>{request.bloodGroup}</td>
      <td>{request.quantity}</td>

      <td className="">
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
