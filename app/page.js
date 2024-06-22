'use client';
import { useEffect } from 'react';

import Header from './_components/Header';
import HeroSection from './_components/HeroSection';
import Preloader from './_components/Preloader';
import CarePin from './_components/CarePin';

function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main
      id='main'
      className='relative flex flex-col items-center max-screen mx-auto cursor-wait'
    >
      {/* <Preloader /> */}
      {/* <Header /> */}
      <HeroSection />
      {/* <CarePin /> */}
    </main>
  );
}

export default Home;
