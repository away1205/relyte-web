'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import CarePin from './CarePin';
import MagneticAnim from '../ui/MagneticAnim';
import { FlipWords } from '../ui/FlipWords';
import TextTicker from '../ui/TextTicker';
import layersGif from '../../public/wired-outline-12-layers.gif';
import stairsGif from '../../public/wired-outline-stairs.gif';

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
        className='flex flex-col justify-center items-center h-[100vh] mx-auto sticky top-0 max-sm:gap-2'
      >
        <div className={`flex flex-col mt-20 dip-3 xl:dip-1 max-sm:gap-2`}>
          <div className='hero-line-1 flex items-center justify-center gap-2 sm:gap-6 lg:gap-8'>
            <p className='max-sm:text-[2.25rem] max-sm:leading-none'>
              TOGETHER
            </p>

            <div className='relative'>
              {/* Circle top right */}
              <div className='hero-anim-card w-[10px] h-[10px] sm:w-[20px] sm:h-[20px] bg-primary rounded-full absolute right-0 bottom-[2rem] sm:bottom-[4.8rem] xl:bottom-[6rem]' />

              <div
                className='hero-anim-card max-sm:w-[5.75rem] h-[1.88rem] sm:h-[4.6rem] xl:h-[6rem] bg-black rounded-[100px] flex justify-center items-center sm:px-[125px] sm:py-[14px] bg-no-repeat bg-[center_bottom_-1.2rem] sm:bg-[center_bottom_-3rem] xl:bg-[center_bottom_-4rem] bg-[length:3.5rem_3.5rem] sm:bg-[length:8.5rem_8.5rem] xl:bg-[length:11rem_11rem]'
                style={{
                  backgroundImage: `url(${layersGif.src})`,
                }}
              />
            </div>
          </div>

          <div className='hero-line-2 flex items-center gap-2 sm:gap-8'>
            <div
              className='hero-anim-card h-[1.85rem] max-sm:w-[7rem] sm:h-[4.6rem] xl:h-[6rem] bg-green rounded-[100px] flex justify-center items-center sm:px-[125px] sm:py-[14px] bg-no-repeat bg-[right_-2.2rem] bg-[length:5.5rem_5.5rem] sm:bg-[length:12rem_12rem] xl:bg-cover'
              style={{ backgroundImage: `url(${stairsGif.src})` }}
            ></div>

            <div className='flex relative'>
              <p className='max-sm:text-[2.25rem] max-sm:leading-none'>WE</p>
              <span className='absolute w-max left-[3.2rem] sm:left-[8.6rem] xl:left-44 max-sm:text-[2.25rem] max-sm:leading-none'>
                <FlipWords words={textList} />
              </span>
            </div>
          </div>
        </div>

        <h1 className='hero-anim-card'>Website For Architectural Company</h1>

        <MagneticAnim>
          <a
            className='uppercase rounded-3xl text-white h-[50px] w-[50px] md:h-[60px] md:w-[60px] xl:h-[80px] xl:w-[80px] font-semibold mt-20 relative'
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
            {Array(7)
              .fill()
              .map((_, index) => (
                <div className='flex gap-2 sm:gap-8 ml-2 sm:ml-4' key={index}>
                  <img
                    src='trending-up.svg'
                    alt='Trending icon'
                    className='max-sm:w-[0.75rem]'
                  />
                  <p className='max-sm:text-[0.75rem]'>We Create. Not Copy</p>
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
