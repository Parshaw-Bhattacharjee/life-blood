import React from "react";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Title, Tooltip, Legend);

const labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];

export const data = {
  labels,
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(230, 230, 230, 0.2)",
        "rgba(255, 2, 255, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
        "rgba(230, 230, 230, 1)",
        "rgba(255, 2, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const ShowChart = ({ bloodData }) => {
  return (
    <div className="w-1/2">
      {bloodData?.labels?.length > 0 ? (
        <Doughnut data={bloodData} />
      ) : (
        <div>Data is loading</div>
      )}
    </div>
  );
};

export default ShowChart;
