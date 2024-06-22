'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react';

function TextTicker({ children }) {
  const slider = useRef(null);
  const firstText = useRef(null);
  const secondText = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useGSAP(() => {
    // gsap.to('.text-ticker', {
    //   // The key is using 50% animation
    //   xPercent: 50,
    //   repeat: -1,
    //   duration: 7,
    //   ease: 'none',
    // });
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: (e) => (direction = e.direction * 1),
      },
      x: '+=100px',
    });
  }, []);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    xPercent += 0.03 * direction;
    requestAnimationFrame(animation);
  };

  // VERY IMPORTANT NOTE: GAP SPACING IS MAKING THE POSITION OF THE TEXT ELEMENT MESSED UP
  return (
    <div className='bg-primary py-4 px-8 overflow-x-hidden flex container-ticker -skew-y-1 w-[100vw]'>
      <div className='flex w-max flex-nowrap whitespace-nowrap' ref={slider}>
        <div
          ref={firstText}
          className='font-[text-ticker] font-medium text-white text-2xl flex text-nowrap w-max'
        >
          {children}
        </div>

        <div
          ref={secondText}
          className='font-[text-ticker] font-medium text-white text-2xl flex text-nowrap w-max'
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default TextTicker;
