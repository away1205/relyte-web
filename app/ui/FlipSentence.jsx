'use client';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { cn } from '../utils/cn';

export const FlipSentence = ({ words = [], duration = 3000, className }) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const wordRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAnimating) {
      const timeout = setTimeout(() => {
        startAnimation();
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [isAnimating, duration]);

  const startAnimation = () => {
    const word = words[words.indexOf(currentWord) + 1] || words[0];
    setCurrentWord(word);
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false),
    });

    tl.to(wordRef.current, {
      opacity: 0,
      y: 10,
      duration: 0.4,
      ease: 'easeInOut',
      // onComplete: () => {
      //   gsap.set(wordRef.current, {
      //     y: -40,
      //     x: 40,
      //     scale: 2,
      //     filter: 'blur(8px)',
      //   });
      // },
    })
      .set(wordRef.current, { opacity: 1 })
      .to(wordRef.current, {
        y: 0,
        x: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.4,
        ease: 'easeInOut',
      });
  };

  useGSAP(() => {
    const spans = wordRef.current.querySelectorAll('span');
    gsap.fromTo(
      spans,
      { opacity: 0, y: 10, filter: 'blur(8px)' },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.4,
        stagger: 0.1,
      }
    );
  }, [currentWord]);

  return (
    <div
      ref={wordRef}
      className={cn('inline-block relative text-left text-black', className)}
      key={currentWord}
    >
      <span>{currentWord}</span>
    </div>
  );
};
