'use client';
import { useEffect } from 'react';

import Header from './_components/Header';
import HeroSection from './_components/HeroSection';
import Preloader from './_components/Preloader';
import WhatWeDoSection from './_components/WhatWeDoSection';
import ProjectSection from './_components/ProjectSection';
import BenefitSection from './_components/BenefitSection';
import FaqSection from './_components/FaqSection';
import CTASection from './_components/CTASection';
import Footer from './_components/Footer';

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
      <Header />
      {/* <HeroSection /> */}
      {/* <WhatWeDoSection /> */}
      {/* <ProjectSection /> */}
      <BenefitSection />
      <FaqSection />
      {/* <CTASection />
      <Footer /> */}
    </main>
  );
}

export default Home;
