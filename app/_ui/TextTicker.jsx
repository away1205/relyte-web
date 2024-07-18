"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";

function TextTicker({ children }) {
  const slider = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  const thirdText = useRef(null);
  let xPercent = 0;
  let direction = -1;
  let animationFrameId;

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // gsap.to('.text-ticker', {
    //   // The key is using 50% animation
    //   xPercent: 50,
    //   repeat: -1,
    //   duration: 7,
    //   ease: 'none',
    // });

    const animation = () => {
      if (xPercent <= -100) {
        xPercent = 0;
      }
      if (xPercent > 0) {
        xPercent = -100;
      }
      gsap.set(firstText.current, { xPercent: xPercent });
      gsap.set(secondText.current, { xPercent: xPercent });
      gsap.set(thirdText.current, { xPercent: xPercent });
      xPercent += 0.03 * direction;
      animationFrameId = requestAnimationFrame(animation);
    };

    animation();

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * 1),
      },
      x: "+=100px",
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // VERY IMPORTANT NOTE: GAP SPACING IS MAKING THE POSITION OF THE TEXT ELEMENT MESSED UP
  return (
    <div className="container-ticker flex w-[100vw] -skew-y-1 overflow-x-clip bg-primary py-2 sm:px-8 sm:py-4">
      <div
        className="relative left-[-50%] flex w-max flex-nowrap whitespace-nowrap"
        ref={slider}
      >
        <div
          ref={firstText}
          className="flex w-max text-nowrap text-xl font-medium text-white"
        >
          {children}
        </div>

        <div
          ref={secondText}
          className="flex w-max text-nowrap text-xl font-medium text-white"
        >
          {children}
        </div>

        <div
          ref={thirdText}
          className="flex w-max text-nowrap text-xl font-medium text-white"
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default TextTicker;
