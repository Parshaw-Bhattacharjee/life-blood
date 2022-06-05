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
      const q = query(collection(db, "blood_bank"));
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
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
          ],
        });
      });
    })();
  }, []);

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center">
      <CarouselSection />

      <div className="w-full md:w-1/2">
        <Chart bloodData={bloodData} />
      </div>
    </div>
  );
};

export default LandingPage;
