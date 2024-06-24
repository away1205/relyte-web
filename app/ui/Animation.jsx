// FadeInAnim.js
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const FadeInAnim = ({
  children,
  duration = 1,
  delay = 0,
  direction = 'left',
  toggleActions = 'play none none none',
}) => {
  const elementRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  let dirObj;
  let posObj;

  switch (direction) {
    case 'up':
      dirObj = { y: 50 };
      posObj = { y: 0 };
      break;
    case 'down':
      dirObj = { y: -50 };
      posObj = { y: 0 };
      break;
    case 'left':
      dirObj = { x: -50 };
      posObj = { x: 0 };
      break;
    case 'right':
      dirObj = { x: 50 };
      posObj = { x: 0 };
      break;
    default:
      dirObj = 0;
  }

  console.log(dirObj);

  useEffect(() => {
    const element = elementRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: elementRef.current,
        toggleActions: toggleActions,
      },
    });

    tl.fromTo(
      element,
      { opacity: 0, ...dirObj },
      {
        opacity: 1,
        ...posObj,
        duration: duration,
        delay: delay,
        ease: 'power1.out',
      }
    );
  }, [duration, delay]);

  return <div ref={elementRef}>{children}</div>;
};

export { FadeInAnim };
