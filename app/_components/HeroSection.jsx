'use client';

import { FlipWords } from '../ui/FlipWords';
import TextTicker from '../ui/TextTicker';
import layersGif from '../../public/wired-outline-12-layers.gif';
import stairsGif from '../../public/wired-outline-stairs.gif';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import { useState } from 'react';
import CarePin from './CarePin';
import MagneticAnim from '../ui/MagneticAnim';

function HeroSection() {
  const textList = ['BUILD', 'GROW', 'LEAD'];
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#hero-1',
        start: 'top+=200 top',
        end: 'bottom+=100% bottom',
        scrub: 1,
        // markers: true,
      },
    });

    tl.to('.hero-line-1', {
      x: '-55%',
      opacity: 0.2,
      duration: 2,
    })
      .to(
        '.hero-line-2',
        {
          x: '55%',
          opacity: 0.2,
          duration: 2,
        },
        0
      )
      .to('.hero-anim-card', { opacity: 0 }, '<=+2');
  }, []);

  return (
    <section
      id='hero-section'
      className='w-[100vw] h-max dot-bg flex flex-col items-center'
    >
      <div
        id='hero-1'
        className='flex flex-col justify-center items-center h-[100vh] mx-auto sticky top-0'
      >
        <div className='flex flex-col dip-1 mt-20'>
          <div className='hero-line-1 flex items-center justify-center gap-8'>
            <p>TOGETHER</p>

            <div className='relative'>
              <div className='hero-anim-card w-[20px] h-[20px] bg-primary rounded-full absolute right-0 bottom-[6rem]' />
              <div
                className='hero-anim-card bg-black rounded-[100px] flex justify-center items-center px-[125px] py-[14px] h-[6rem] bg-cover bg-no-repeat bg-[center_bottom_-4rem]'
                style={{
                  backgroundImage: `url(${layersGif.src})`,
                  backgroundSize: '11rem 11rem',
                }}
              >
                {/* // This img tag function if the flipwords position is not absolute */}
                {/* <img
                src=''
                className='w-[50px] h-[7px] opacity-0'
                alt='layers animation'
                /> */}
              </div>
            </div>
          </div>

          <div className='hero-line-2 flex items-center gap-8'>
            <div
              className='hero-anim-card bg-green rounded-[100px] flex justify-center items-center px-[125px] py-[14px] h-[6rem] bg-cover bg-no-repeat bg-[right_-2.2rem]'
              style={{ backgroundImage: `url(${stairsGif.src})` }}
            ></div>

            <div className='flex gap-6 relative'>
              <p>WE</p>
              <span className='absolute w-max left-44'>
                <FlipWords words={textList} />
              </span>
            </div>
          </div>
        </div>

        <h1 className='hero-anim-card'>Website For Architectural Company</h1>

        <MagneticAnim>
          <a
            // href='#care-section'
            className='uppercase rounded-3xl text-white  h-[100px] w-[100px] font-semibold mt-20 relative'
            onClick={() => {
              gsap.to(window, {
                duration: 1,
                scrollTo: { y: '#care-section' },
                ease: 'power2',
              });
            }}
          >
            <img
              src='./scroll-anim.gif'
              alt='scroll down'
              width={75}
              className='absolute top-0 left-[50%] -translate-x-1/2 cursor-pointer'
            />
          </a>
        </MagneticAnim>

        <div className='relative -bottom-8'>
          <TextTicker>
            <div className='flex gap-8 ml-4'>
              <img src='trending-up.svg' alt='Trending icon' />
              <p>We Create. Not Copy</p>
            </div>
            <div className='flex gap-8 ml-4'>
              <img src='trending-up.svg' alt='Trending icon' />
              <p>We Create. Not Copy</p>
            </div>
            <div className='flex gap-8 ml-4'>
              <img src='trending-up.svg' alt='Trending icon' />
              <p>We Create. Not Copy</p>
            </div>
            <div className='flex gap-8 ml-4'>
              <img src='trending-up.svg' alt='Trending icon' />
              <p>We Create. Not Copy</p>
            </div>
            <div className='flex gap-8 ml-4'>
              <img src='trending-up.svg' alt='Trending icon' />
              <p>We Create. Not Copy</p>
            </div>
            <div className='flex gap-8 ml-4'>
              <img src='trending-up.svg' alt='Trending icon' />
              <p>We Create. Not Copy</p>
            </div>
            <div className='flex gap-8 ml-4'>
              <img src='trending-up.svg' alt='Trending icon' />
              <p>We Create. Not Copy</p>
            </div>
          </TextTicker>
        </div>
      </div>

      <CarePin />
    </section>
  );
}

export default HeroSection;
