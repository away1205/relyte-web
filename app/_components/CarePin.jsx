import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { FlipWords } from '../ui/FlipWords';
import { FlipSentence } from '../ui/FlipSentence';

import bgPeople from '../../public/bg-people.svg';
import handPeople from '../../public/hand-people.svg';
import bgWebsite from '../../public/bg-website.svg';
import handWebsite from '../../public/hand-website.svg';
import bgTrust from '../../public/bg-trust.svg';
import handTrust from '../../public/hand-trust.svg';

const careList = [
  {
    title: 'Drive Traffic',
    isDown: true,
    text: `Standing out in a crowded market is tough, but our data-driven, unique, and creative design, ensures your website captures attention, drives traffic and set you apart`,
    bgColor: 'bg-[#C1E693]',
    bgImg: bgWebsite,
    handImg: handWebsite,
  },
  {
    title: 'Engage Leads',
    isDown: false,
    text: "We closely consider your visitors' needs and preferences, ensuring an engaging and intuitive experience that increases conversion rates",
    bgColor: 'bg-[#9AACEF]',
    bgImg: bgPeople,
    handImg: handPeople,
  },
  {
    title: 'Convert Clients',
    isDown: true,
    text: 'Lastly, we ensure your website builds a reliable brand, showcases your expertise, and converts visitors into loyal customers.',
    bgColor: 'bg-[#E8E2F8]',
    bgImg: bgTrust,
    handImg: handTrust,
  },
];

const infoList = [
  {
    text: 'architectural websites have poor design, hurting conversion.',
    number: '70%',
    source: '- Launch North',
  },
  {
    text: "users will leave a site if they don't find what they need in 5 seconds.",
    number: '61%',
    source: '- Forbes',
  },
  {
    text: 'of online users won’t return to a website after a bad experience',
    number: '88%',
    source: '- Sweor',
  },
];

function CarePin() {
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef();

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.care-container',
        start: 'top+=200 top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });
    tl.to('.care-card1', { scale: 0.95, opacity: 0.3, duration: 2 });
    tl.to('.care-card2', {
      scale: 0.95,
      opacity: 0.3,
      duration: 3,
    });
    tl.to('.care-card1', { opacity: 0 }, '<');

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.care-card3',
        start: 'top-=200 top',
        end: 'bottom+=600 bottom',
        scrub: 1,
        // markers: true,
      },
    });
    tl2.to('.care-card3', { scale: 1, duration: 3 });
    // tl2.to('.care-card3 h5', { opacity: 0.1, duration: 3 });

    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.care-card3',
        start: 'top top',
        end: 'bottom+=200% bottom',
        scrub: 1,
        // markers: true,
        pin: true,
        pinReparent: true,
        pinSpacing: true,
      },
    });

    tl3
      .to('.anim-green2', { color: '#C1E693', duration: 2 }, '<')
      .to('.hidden-word', { opacity: 0, delay: 2, duration: 3 }, '<')
      .to('.unhidden-word', { opacity: 1 }, '<+3')
      .to('.anim-green', { color: '#C1E693', delay: 1, duration: 6 }, '<')
      .to('.unhidden-word', { opacity: 0, delay: 2, duration: 3 }, '<3')
      .to('.unhidden-word2', { opacity: 1 })
      .to('.unhidden-word2', { opacity: 0.3, delay: 2, duration: 3 }, '<3')
      .fromTo(
        '.care-main-card',
        { opacity: 0, y: 200 },
        { opacity: 1, y: 0, duration: 3, stagger: 0.2 }
      );

    // gsap.to('.anim-green', {
    //   scrollTrigger: '.unhidden-word2',
    //   color: '#C1E693',
    //   duration: 10,
    // });
  });

  return (
    <section ref={container} id='care-section'>
      <div className='care-container flex flex-col items-center'>
        <div className='h-[100vh] sticky top-0'>
          <div className='flex flex-col card-container care-card1 px-20 pt-12 py-20 bg-black-100 justify-center items-start rounded-2xl gap-8 relative top-[15%] min-w-fit'>
            <img
              src='./illustration-percentage.svg'
              alt='percentage illustration'
              className='relative -left-24'
            />

            <div className='flex items-start gap-4 text-white'>
              <div className='w-[10rem] h-[6rem] text-center'>
                <FlipWords
                  className={'font-d3 text-center text-white'}
                  words={infoList.map((item) => item.number)}
                  duration={4000}
                />
              </div>

              <div className='w-[20rem] text-wrap flex flex-col gap-2'>
                <FlipSentence
                  words={infoList.map((item) => item.text)}
                  className={'font-h5 text-white'}
                  duration={4000}
                />
                <FlipWords
                  words={infoList.map((item) => item.source)}
                  duration={4000}
                  className={'text text-gray-300 px-0'}
                />
              </div>
            </div>
          </div>
        </div>

        <div className='sticky top-0 h-[100vh]'>
          <div className='care-card2 flex flex-col card-container px-20 py-20 bg-black-100 justify-center items-center rounded-2xl gap-8 z-[2] relative top-[20%] md:w-[40rem] mb-[100vh]'>
            <div className='relative' id='cursor-card'>
              <h5 className='text-center text-white border border-dashed px-20 py-20 relative'>
                <span>
                  Seeking someone <br />
                  who can steer clear <br />
                </span>
                <span className='text-green mt-[50vh]'>this problem?</span>
              </h5>

              <div className='w-4 h-4 bg-white absolute -top-2 -left-2'></div>
              <div className='w-4 h-4 bg-white absolute -bottom-2 -left-2'></div>
              <div className='w-4 h-4 bg-white absolute -top-2 -right-2'></div>
              <div className='w-4 h-4 bg-white absolute -bottom-2 -right-2'></div>
            </div>
          </div>
        </div>

        <div className='relative top-0 min-h-[100vh] care-card3 pb-96 bg-black-100'>
          <div className='card-container px-20 py-20 rounded-2xl z-[3] relative w-[100vw] min-h-[100vh] flex flex-col items-center justify-center'>
            <h1 className='text-center text-white leading-[125%] md:text-[2.5rem] lg:text-[3.5rem]'>
              <span className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 hidden-word'>
                Dont worry, <br /> you just found{' '}
                <span className='anim-green2'>one</span>.
              </span>

              <span className='opacity-0 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 unhidden-word text-nowrap'>
                We're not just building <br /> websites - We're crafting your{' '}
                <br />
                <span className='anim-green'>digital revenue streams</span>
              </span>

              <span className='opacity-0 absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 unhidden-word2'>
                here are the 3 steps we take to make it happen.
              </span>
            </h1>

            <div className='flex gap-12 w-fit z-10'>
              {careList.map(
                ({ title, isDown, text, bgColor, bgImg, handImg }, i) => {
                  return (
                    <Card
                      isDown={isDown}
                      text={text}
                      title={title}
                      key={i}
                      bgColor={bgColor}
                      className='care-main-card'
                      bgImg={bgImg}
                      handImg={handImg}
                    />
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  isDown = false,
  text,
  title,
  className = '',
  bgColor = 'bg-[#9AACEF]',
  bgImg,
  handImg,
}) {
  return (
    <div
      className={`flex flex-col gap-4 w-[19.5rem] h-[25rem] py-12 px-6 rounded-3xl ${bgColor}  ${
        isDown && 'justify-end'
      } ${className} bg-cover bg-no-repeat relative`}
      style={{
        backgroundImage: `url(${bgImg.src})`,
        // backgroundSize: '24.5rem',
      }}
    >
      <h5 className='fsd font-semibold'>{title}</h5>
      <p className={`font-normal text-wrap`}>{text}</p>
      <img
        src={handImg.src}
        alt='hand image'
        className={`absolute right-0 ${!isDown ? 'bottom-0' : 'top-0'}`}
      />
    </div>
  );
}

export default CarePin;
