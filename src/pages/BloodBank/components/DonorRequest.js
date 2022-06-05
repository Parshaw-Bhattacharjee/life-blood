export const DonorRequest = ({ request, onAcceptHandler }) => {
  console.log(request);

  return (
    <tr className="border-2">
      <th className="text-left">{request.username}</th>
      <th className="text-left">{request.bloodGroup}</th>
      <th className="text-left">
        <button
          onClick={() => {
            onAcceptHandler(request);
          }}
          className="bg-red-300 rounded-lg px-2"
        >
          Accept
        </button>
      </th>
    </tr>
  );
};
