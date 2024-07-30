"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";

import CarePin from "./CarePin";
import ScrollDown from "../_ui/ScrollDown";
import { FlipWords } from "../_ui/FlipWords";
import TextTicker from "../_ui/TextTicker";
import layersGif from "../../public/wired-outline-12-layers.gif";
import stairsGif from "../../public/wired-outline-stairs.gif";

function HeroSection() {
  const textList = ["BUILD", "GROW", "LEAD"];
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-1",
        start: "top+=200 top",
        end: "bottom+=100% bottom",
        scrub: 1,
        // markers: true,
      },
    });

    tl.to(".hero-line-1", {
      x: "-55%",
      opacity: 0.2,
      duration: 2,
    })
      .to(
        ".hero-line-2",
        {
          x: "55%",
          opacity: 0.2,
          duration: 2,
        },
        0,
      )
      .to(".hero-anim-card", { opacity: 0 }, "<=+2");
  }, []);

  return (
    <section
      id="hero-section"
      className="dot-bg flex h-max w-[100vw] flex-col items-center overflow-x-clip"
    >
      <div
        id="hero-1"
        className="sticky top-0 mx-auto flex h-[100vh] flex-col items-center justify-center max-sm:gap-2"
      >
        <div className={`dip-3 xl:dip-1 mt-20 flex flex-col max-sm:gap-2`}>
          <div className="hero-line-1 flex items-center justify-center gap-2 sm:gap-6 lg:gap-8">
            <p className="max-sm:text-[2.25rem] max-sm:leading-none">
              TOGETHER
            </p>

            <div className="relative">
              {/* Circle top right */}
              <div className="hero-anim-card absolute bottom-[2rem] right-0 h-[10px] w-[10px] rounded-full bg-primary sm:bottom-[4.8rem] sm:h-[20px] sm:w-[20px] xl:bottom-[6rem]" />

              <div
                className="hero-anim-card flex h-[1.88rem] items-center justify-center rounded-[100px] bg-black bg-[length:3.5rem_3.5rem] bg-[center_bottom_-1.2rem] bg-no-repeat max-sm:w-[5.75rem] sm:h-[4.6rem] sm:bg-[length:8.5rem_8.5rem] sm:bg-[center_bottom_-3rem] sm:px-[125px] sm:py-[14px] xl:h-[6rem] xl:bg-[length:11rem_11rem] xl:bg-[center_bottom_-4rem]"
                style={{
                  backgroundImage: `url(${layersGif.src})`,
                }}
              />
            </div>
          </div>

          <div className="hero-line-2 flex items-center gap-2 sm:gap-8">
            <div
              className="hero-anim-card flex h-[1.85rem] items-center justify-center rounded-[100px] bg-green bg-[length:5.5rem_5.5rem] bg-[right_-2.2rem] bg-no-repeat max-sm:w-[7rem] sm:h-[4.6rem] sm:bg-[length:12rem_12rem] sm:px-[125px] sm:py-[14px] xl:h-[6rem] xl:bg-cover"
              style={{ backgroundImage: `url(${stairsGif.src})` }}
            ></div>

            <div className="relative flex">
              <p className="max-sm:text-[2.25rem] max-sm:leading-none">WE</p>
              <span className="absolute left-[3.2rem] w-max max-sm:text-[2.25rem] max-sm:leading-none sm:left-[8.6rem] xl:left-44">
                <FlipWords words={textList} />
              </span>
            </div>
          </div>
        </div>

        <h1 className="hero-anim-card max-sm:font-b4">
          Digital Presence For Your Company
        </h1>
        {/* <h1 className="hero-anim-card max-sm:font-b4">
          Digital Presence For Architectural Company
        </h1> */}

        <div
          className="relative mt-20 h-[4rem] w-[4rem] sm:h-[4.5rem] sm:w-[4.5rem]"
          onClick={() =>
            gsap.to(window, { scrollTo: ".care-card1", duration: 1 })
          }
        >
          <ScrollDown transparent={true} />
        </div>

        <div className="relative -bottom-8">
          <TextTicker>
            {Array(7)
              .fill()
              .map((_, index) => (
                <div className="ml-2 flex gap-2 lg:ml-6 lg:gap-6" key={index}>
                  <img
                    src="trending-up.svg"
                    alt="Trending icon"
                    className="max-sm:w-[0.75rem] sm:w-[1.5rem]"
                  />
                  <p className="max-sm:text-[0.75rem]">We Create. Not Copy</p>
                </div>
              ))}
          </TextTicker>
        </div>
      </div>

      <CarePin />
    </section>
  );
}

export default HeroSection;
