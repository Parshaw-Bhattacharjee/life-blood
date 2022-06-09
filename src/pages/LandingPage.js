import { collection, onSnapshot, query } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CarouselSection from "../components/CarouselSection";
import Chart from "../components/Chart";
import { useAuth } from "../contexts/auth-context";
import { db } from "../firebase";

const LandingPage = () => {
  const { logoutHandler } = useAuth();
  const [bloodData, setBloodData] = useState({
    labels: [],
    datasets: [
      {
        label: "Dataset 1",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  });

  useEffect(() => {
    logoutHandler();
  }, []);
  useEffect(() => {
    (async () => {
      const q = query(collection(db, "BloodBank"));
      onSnapshot(q, (data) => {
        const dataObj = data.docs[0].data();

        setBloodData({
          labels: Object.keys(dataObj.bloodData).sort((a, b) => a - b),
          datasets: [
            {
              label: "Blood Storage Data",
              data: Object.keys(dataObj.bloodData)
                .sort((a, b) => a - b)
                .map((el) => dataObj.bloodData[el]),
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(230, 2, 2, 0.2)",
                "rgba(255, 2, 255, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                "rgba(230, 2, 2, 1)",
                "rgba(255, 2, 255, 1)",
              ],
              borderWidth: 1,
            },
          ],
        });
      });
    })();
  }, []);

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <CarouselSection />

      <div className="flex w-full md:w-1/2 justify-center items-center">
        <Chart bloodData={bloodData} />
      </div>
    </div>
  );
};

export default LandingPage;
