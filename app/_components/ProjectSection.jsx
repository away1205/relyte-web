import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef, useState } from "react";

import bgProject from "../../public/bg-projects.svg";
import CircleShape from "../_ui/CircleShape";

const projectList = [
  {
    title: "Managerial Company",
    year: 2000,
    text: "We decided to go with Relyte as our web designer due to their ability to make beautiful things happen",
  },
  {
    title: "Managerial Company",
    year: 2000,
    text: "We decided to go with Relyte as our web designer due to their ability to make beautiful things happen",
  },
  {
    title: "Managerial Company",
    year: 2000,
    text: "We decided to go with Relyte as our web designer due to their ability to make beautiful things happen",
  },
  {
    title: "Managerial Company",
    year: 2000,
    text: "We decided to go with Relyte as our web designer due to their ability to make beautiful things happen",
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
    <section
      className="relative flex min-h-screen w-screen justify-center pt-6"
      id="projects-section"
    >
      <div
        className="absolute left-0 top-0 -z-10 h-[15rem] w-screen bg-[#111111] bg-cover bg-[left] bg-no-repeat sm:h-[22rem] xl:h-[35rem]"
        style={{
          backgroundImage: `url(${bgProject.src})`,
          backgroundSize: "105rem",
        }}
      ></div>

      <div className="max-screen mx-4 my-[4rem] flex h-full flex-col items-center sm:mx-[3.75rem] xl:mx-0 xl:my-[4.75rem]">
        <h2 className="font-h6 sm:font-h5 lg:font-h1 relative uppercase text-white">
          Our Latest Projects
          <CircleShape />
        </h2>

        {/* Carousel Version */}
        {/* <div className='embla flex flex-col'>
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
        </div> */}

        <div className="my-10 flex flex-col items-start justify-start gap-8 sm:my-[6.5rem] sm:flex-row sm:gap-[3.75rem] xl:gap-[5rem]">
          <div className="flex flex-col gap-8">
            <Card id={0} title={"Managerial Company"} />
            <Card id={1} title={"Managerial Company"} />
          </div>

          <div className="flex flex-col gap-8 sm:mt-[15%]">
            <Card id={2} title={"Managerial Company"} />
            <Card id={3} title={"Managerial Company"} />
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

  useEffect(() => {
    setHiddenTextHeight(hiddenText.current?.offsetHeight + 16);
  }, [hiddenText]);

  useGSAP(() => {
    const hoverAnim = () =>
      gsap.to(`.hover-anim${id}`, {
        y: -hiddenTextHeight,
        ease: "power2.inOut",
      });
    const hoverAnimOut = () =>
      gsap.to(`.hover-anim${id}`, {
        y: 0,
        ease: "power2.inOut",
      });

    hoverCard.current.addEventListener("mouseenter", hoverAnim);
    hoverCard.current.addEventListener("mouseleave", hoverAnimOut);

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
    <div className="flex w-full flex-col gap-4" ref={hoverCard}>
      <div
        className={`relative z-10 flex flex-col hover-anim${id}`}
        // style={{ top: `${hiddenTextHeight}px` }} // it might be for mobile ver
      >
        <img
          src="/projects-placeholder.png"
          alt="projects image"
          className="aspect-[4/3] rounded-xl shadow-lg"
        />

        <div className="flex flex-col px-2 py-6">
          <div className="flex justify-between gap-3">
            <h3 className="font-h8 xl:font-h5 font-semibold uppercase">
              {title}
            </h3>
            <p className="max-lg:font-b4 flex items-center rounded-[100px] bg-black px-4 text-center font-semibold text-white">
              2023
            </p>
          </div>

          <p className="max-lg:font-b4 line-clamp-1 w-2/3 text-[#888888]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            natus voluptatum quae, culpa quaerat magnam expedita amet iure
            totam, fugiat soluta temporibus aliquam nemo voluptate nam iste quo,
            est facilis!
          </p>
        </div>
      </div>

      {/* <div className='flex gap-6 justify-start' ref={hiddenText}>
        <p>{text}</p>

        <img src='./arrow.svg' alt='arrow' className='h-fit w-fit' />
      </div> */}
    </div>
  );
}

export default ProjectSection;
