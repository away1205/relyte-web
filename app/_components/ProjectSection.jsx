import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from '@/components/ui/carousel';

function ProjectSection() {
  return (
    <section className='min-h-screen'>
      <h2>Our Latest Projects</h2>

      <div className='flex'>
        <Card id={1} />
        <Card />
        <Card />
      </div>
    </section>
  );
}

function Card({ id = 0 }) {
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
    // hoverCard.current.addEventListener('mouseleave', hoverAnim);

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
          <h3 className='text-3xl font-medium font'>Project Name</h3>
          <p>2023</p>
        </div>
      </div>

      <div className='flex gap-6 justify-start' ref={hiddenText}>
        <p>
          We decided to go with Relyte as our web designer due to their ability
          to make beautiful things happen
        </p>

        <img src='./arrow.svg' alt='arrow' className='h-fit w-fit' />
      </div>
    </div>
  );
}

export default ProjectSection;
