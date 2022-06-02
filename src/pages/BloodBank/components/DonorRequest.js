export const DonorRequest = ({ request, onAcceptHandler }) => {
  console.log(request);

  return (
    <div className="border-2 flex flex-col md:flex-row space-x-2 p-2 justify-between sm:items-center">
      <div className="space-x-4 flex flex-row">
        <h1>{request.name}</h1>
        <h1>{request.bloodGroup}</h1>
      </div>
      <div className="space-x-4 flex flex-row">
        <button
          onClick={() => {
            onAcceptHandler(request);
          }}
          className="bg-red-300 rounded-lg px-2"
        >
          Accept
        </button>
      </div>
    </div>
  );
};
