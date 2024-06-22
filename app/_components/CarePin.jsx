import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { FlipWords } from '../ui/FlipWords';
import { FlipSentence } from '../ui/FlipSentence';

const careList = [
  {
    title: 'Website',
    isDown: true,
    text: 'It is frustating to stand out in a crowded market. A unique and creative website can sets you apart from the competition.',
  },
  {
    title: 'People',
    isDown: false,
    text: 'Your website serves as more than just a digital presence; it serves as a showcase for your brand and the caliber of the work you provide to people.',
  },
  {
    title: 'Trust',
    isDown: true,
    text: 'Reputation is everything in the architectural world. Our mission is to create a website that not only showcases your projects but also builds a strong, trustworthy brand.',
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
        markers: true,
      },
    });
    tl2.to('.care-card3', { scale: 2.2, duration: 3 });
    tl2.to('.care-card3 h5', { opacity: 0.1, duration: 3 });

    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.care-card2',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    tl3
      .to('.hidden-word', { opacity: 0 })
      .to('.unhidden-word', { opacity: 1 }, '<+1');
  });

  return (
    <section ref={container} id='care-section'>
      <div className='care-container flex flex-col items-center'>
        <div className='h-[100vh] sticky top-0'>
          <div className='flex flex-col card-container care-card1 px-20 pt-12 py-20 bg-black-100 justify-center items-start rounded-2xl gap-8 relative top-[20%] min-w-fit'>
            <img
              src='./illustration-percentage.svg'
              alt='percentage illustration'
              className='relative -left-24'
            />

            <div className='flex items-start gap-4 text-white'>
              {/* <strong className='font-d3 text-center'>70%</strong> */}

              <div className='t w-[10rem] h-[6rem] text-center'>
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

              {/* <h5>
                architecture agency <br /> struggle to presenting <br /> their
                work online
              </h5> */}
            </div>
          </div>
        </div>

        <div className='sticky top-0 h-[100vh]'>
          <div className='care-card2 flex flex-col card-container px-20 py-20 bg-black-100 justify-center items-center rounded-2xl gap-8 z-[2] relative top-[20%] md:w-[36rem]'>
            <div className='relative' id='cursor-card'>
              <h5 className='text-center text-white border border-dashed px-20 py-20 relative'>
                <span className='hidden-word'>
                  Are you ever facing <br /> the{' '}
                </span>
                <span className='text-green mt-[50vh] hidden-word'>
                  same problem?
                </span>

                <span className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 opacity-0 unhidden-word'>
                  Dont worry
                </span>
              </h5>

              <div className='w-4 h-4 bg-white absolute -top-2 -left-2'></div>
              <div className='w-4 h-4 bg-white absolute -bottom-2 -left-2'></div>
              <div className='w-4 h-4 bg-white absolute -top-2 -right-2'></div>
              <div className='w-4 h-4 bg-white absolute -bottom-2 -right-2'></div>
            </div>
          </div>
        </div>

        <div className='sticky top-0 h-[100vh] care-card3'>
          <div className='flex flex-col card-container px-20 py-20 bg-black-100 justify-center items-center rounded-2xl gap-8 z-[3] relative top-[30%] w-[100%]'>
            <h5 className='text-center text-white leading-[125%]'>
              We’re not just building <br /> websites - We’re building your{' '}
              <br /> potential client’s trust
            </h5>
          </div>
        </div>

        <div className='sticky top-0 h-screen'>
          <div className='flex gap-12 w-fit relative top-[20%] wrapper'>
            {careList.map(({ title, isDown, text }, i) => {
              return <Card isDown={isDown} text={text} title={title} key={i} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ isDown = false, text, title }) {
  return (
    <div
      className={`flex flex-col gap-4 w-[19.5rem] h-[25rem] py-12 px-7 rounded-3xl bg-green-300  ${
        isDown && 'justify-end'
      }`}
    >
      <h5 className='fsd font-semibold'>{title}</h5>
      <p className='font-normal'>{text}</p>
    </div>
  );
}

export default CarePin;
