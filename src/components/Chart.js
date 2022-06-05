// import React from 'react';

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Bar } from 'react-chartjs-2';

// const ShowChart = ({ bloodData }) => {
//   console.log(bloodData);
//   return (
//     <div className='flex w-80 shadow-lg'>
//       {bloodData.labels.length > 0 ? <Bar data={bloodData} /> : null}
//     </div>
//   );
// };

// export default ShowChart;

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [2, 3, 4, 5, 6, 2],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const ShowChart = ({ bloodData }) => {
  return (
    <div className="w-full">
      {bloodData?.labels?.length > 0 ? (
        <Bar data={bloodData} />
      ) : (
        <div>Data is loading</div>
      )}
    </div>
  );
};

export default ShowChart;
