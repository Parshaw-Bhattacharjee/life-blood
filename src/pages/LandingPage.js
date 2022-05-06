import React from "react";
import CarouselSection from "../components/Carousel";
import Chart from "../components/Chart";
import RecentDonationSection from "../components/RecentDonationSection";

const LandingPage = () => {
  return (
    <div className="">
      <CarouselSection />
      <div className="flex w-full h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-40 space-y-6 md:space-y-0 w-full max-w-4xl p-8 sm:p-12 rounded-xl overflow-hidden">
          <RecentDonationSection />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
