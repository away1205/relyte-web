import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useRef, useState } from 'react';

const projectList = [
  {
    title: 'Project 1',
    year: 2000,
    text: 'We decided to go with Relyte as our web designer due to their ability to make beautiful things happen',
  },
  {
    title: 'Project 2',
    year: 2000,
    text: 'We decided to go with Relyte as our web designer due to their ability to make beautiful things happen',
  },
  {
    title: 'Project 3',
    year: 2000,
    text: 'We decided to go with Relyte as our web designer due to their ability to make beautiful things happen',
  },
  {
    title: 'Project 4',
    year: 2000,
    text: 'We decided to go with Relyte as our web designer due to their ability to make beautiful things happen',
  },
];

function ProjectSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className='min-h-screen max-screen pt-6'>
      <h2>
        Our Latest <br />
        Projects
      </h2>

      <div className='embla flex flex-col'>
        <div className='flex gap-10 ml-auto mb-4'>
          <button
            className='embla__prev bg-slate-200 rounded-full px-2 py-2'
            onClick={scrollPrev}
          >
            <img src='./arrow-back-24px.svg' alt='arrow left' />
          </button>

          <button
            className='embla__next bg-slate-200 rounded-full px-2 py-2 rotate-180'
            onClick={scrollNext}
          >
            <img src='./arrow-back-24px.svg' alt='arrow right' />
          </button>
        </div>

        <div className='embla__viewport' ref={emblaRef}>
          <div className='embla__container gap-7'>
            {projectList.map(({ title, text, year }, i) => {
              return (
                <div className='embla__slide'>
                  <Card key={i} id={i} title={title} text={text} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ id = 0, title, text }) {
  const [hiddenTextHeight, setHiddenTextHeight] = useState(0);
  const hiddenText = useRef(null);
  const hoverCard = useRef(null);

  console.log(hiddenTextHeight);

  useEffect(() => {
    setHiddenTextHeight(hiddenText.current?.offsetHeight + 16);
  }, []);

  useGSAP(() => {
    const hoverAnim = () =>
      gsap.to(`.hover-anim${id}`, {
        y: -hiddenTextHeight,
        ease: 'power2.inOut',
      });
    const hoverAnimOut = () =>
      gsap.to(`.hover-anim${id}`, {
        y: 0,
        ease: 'power2.inOut',
      });

    hoverCard.current.addEventListener('mouseenter', hoverAnim);
    hoverCard.current.addEventListener('mouseleave', hoverAnimOut);

    // return () => {
    //   hoverCard.current.removeEventListener('mouseenter', () =>
    //     hoverAnim.play()
    //   );
    //   hoverCard.current.removeEventListener('mouseleave', () =>
    //     hoverAnim.reverse()
    //   );
    // };
  }, [hiddenTextHeight]);

  return (
    <div className='flex flex-col gap-4 w-[22rem]' ref={hoverCard}>
      <div
        className={`flex flex-col border-2 border-gray-300 rounded-xl relative top-[${hiddenTextHeight}px] z-10 bg-white hover-anim${id}`}
      >
        <img
          src='./illustration-coding.svg'
          alt='projects image'
          className='rounded-tl-xl rounded-tr-xl'
        />

        <div className='flex flex-col py-6 px-6 gap-3'>
          <h3 className='text-3xl font-medium font'>{title}</h3>
          <p>2023</p>
        </div>
      </div>

      <div className='flex gap-6 justify-start' ref={hiddenText}>
        <p>{text}</p>

        <img src='./arrow.svg' alt='arrow' className='h-fit w-fit' />
      </div>
    </div>
  );
}

export default ProjectSection;
