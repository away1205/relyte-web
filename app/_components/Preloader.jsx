'use client';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';

function Preloader() {
  const [index, setIndex] = useState(0);
  const words = [
    'Hello',
    'Ciao',
    'Guten tag',
    '안녕',
    'Bonjour',
    '你好',
    'こんにちは',
    'Hola',
    'Hello',
  ];
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const pathRef = useRef(null);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  } L0 0`;

  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;

    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 500 : 150
    );
  }, [index]);

  useEffect(() => {
    const pathElement = pathRef.current;

    setTimeout(() => {
      // Animation on exit
      const timeline = gsap.timeline();
      timeline.to('#preloader', {
        duration: 2,
        yPercent: -100,
        ease: 'power4.out',
        // opacity: 0,
      });
      timeline.to(
        pathElement,
        {
          attr: { d: targetPath },
          duration: 1,
        },
        '<'
      );
      timeline.to('#preloader', { display: 'none' });

      document.getElementById('main').style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 2000);
  }, [initialPath, targetPath]);

  useEffect(() => {}, []);

  return (
    <div
      id='preloader'
      className='h-[100vh] w-[100vw] bg-black fixed top-0 left-0 text-white text-2xl flex items-center justify-center z-50'
    >
      {dimension.height > 0 && (
        <>
          <p className='z-50'>{words[index]}</p>
          <svg className='absolute top-0 left-0 w-[100%] h-[120%]'>
            <path ref={pathRef} id='svg' d={initialPath} fill='black'></path>
          </svg>
        </>
      )}
    </div>
  );
}

export default Preloader;
