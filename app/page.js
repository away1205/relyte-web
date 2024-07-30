"use client";
import { useEffect } from "react";

import HeroSection from "./_components/HeroSection";
import ProjectSection from "./_components/ProjectSection";
import BenefitSection from "./_components/BenefitSection";
import FaqSection from "./_components/FaqSection";
import CTASection from "./_components/CTASection";
import ServiceSection from "./_components/ServiceSection";
import Footer from "./_components/Footer";

function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <main
      id="main"
      className="max-screen relative mx-auto flex flex-col items-center max-lg:overflow-x-clip"
    >
      <HeroSection />
      <ServiceSection />
      <ProjectSection />
      <BenefitSection />
      <FaqSection />
      <CTASection />
      <Footer />
    </main>
  );
}

export default Home;
