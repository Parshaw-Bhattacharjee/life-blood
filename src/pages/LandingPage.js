import React from 'react';
import { useEffect } from 'react';
import CarouselSection from '../components/CarouselSection';
import Chart from '../components/Chart';
import RecentDonationSection from '../components/RecentDonationSection';
import { useAuth } from '../contexts/auth-context';

const LandingPage = () => {
  const { logoutHandler } = useAuth();
  useEffect(() => {
    logoutHandler();
  }, []);

  return (
    <div className='flex flex-col w-full h-screen justify-center items-center'>
      <CarouselSection />
      <div className=''>
        <div className='flex flex-col md:flex-row md:space-x-40 space-y-6 md:space-y-0 w-full max-w-4xl p-8 sm:p-12 rounded-xl overflow-hidden'>
          <RecentDonationSection />
          <Chart />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
