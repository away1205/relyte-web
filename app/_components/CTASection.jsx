import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import HoverWords from '../ui/HoverWords';
import HoverFlipWords from '../ui/HoverFlipWords';
import MagneticAnim from '../ui/MagneticAnim';

function CTASection() {
  const [buttonHeight, setButtonHeight] = useState(0);
  const buttonRef = useRef(null);

  useEffect(() => {
    setButtonHeight(buttonRef.current?.offsetHeight / 2);
  }, []);

  return (
    <section
      id='CTA-section'
      className='w-screen h-screen bg-[#111] flex flex-col items-center justify-center rounded-tl-[3.125rem] rounded-tr-[3.125rem]'
    >
      <div className='relative' id='cursor-card'>
        <div className='relative w-fit h-fit px-[6rem] lg:px-[8rem] py-[8rem] border border-dashed'>
          <div className='relative px-4 py-4 flex flex-col justify-center items-center'>
            <h2 className='text-center text-white font-semibold md:text-[2.25rem] lg:text-[4.5rem] uppercase'>
              <div className='flex gap-[0.5rem] lg:gap-6'>
                <HoverWords words='READY' />
                <HoverWords words='TO' />
                <HoverWords words='BUILD' />
              </div>

              <div className='flex items-center justify-center gap-[0.5rem] lg:gap-6'>
                <span>Your</span>
                <HoverFlipWords inText='WEBSITE?' upText='PROJECT?' />
              </div>
            </h2>

            <div className='w-4 h-4 lg:w-6 lg:h-6 bg-primary absolute top-0 -right-0 lg:-right-2 rounded-full' />
            <p className='uppercase text-green mt-4'>3 SLOTS AVAILABLE</p>
          </div>
        </div>

        <div className='w-4 h-4 bg-white absolute -top-2 -left-2'></div>
        <div className='w-4 h-4 bg-white absolute -bottom-2 -left-2'></div>
        <div className='w-4 h-4 bg-white absolute -top-2 -right-2'></div>
        <div className='w-4 h-4 bg-white absolute -bottom-2 -right-2'></div>

        <MagneticAnim>
          <div>
            <button
              ref={buttonRef}
              className={`py-4 px-6 lg:px-10 text-white bg-primary rounded-full font-semibold text-md lg:text-lg absolute left-1/2 -translate-x-1/2 hover:bg-white hover:text-black-100 transition-all duration-500 ease-in-out`}
              style={{ bottom: `-${buttonHeight}px` }}
            >
              Let's make it happen
            </button>
          </div>
        </MagneticAnim>
      </div>
    </section>
  );
}

export default CTASection;
