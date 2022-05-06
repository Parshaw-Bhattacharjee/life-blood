import React from "react";
import Chart from "../components/Chart";
import RecentDonationSection from "../components/RecentDonationSection";

const LandingPage = () => {
  return (
    <div className="bg-blood-donation-image w-full h-screen bg-cover bg-center items-center flex px-4">
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 w-full max-w-4xl p-8 sm:p-12 rounded-xl overflow-hidden">
          <RecentDonationSection />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
