import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

function HoverWords({ words = '' }) {
  const wordRef = useRef([]);
  const containerRef = useRef([]);

  useGSAP(() => {
    wordRef.current.forEach((word, i) => {
      const tl = gsap.timeline({ paused: true });

      tl.fromTo(
        word,
        { y: 0 },
        {
          y: -30,
          duration: 0.5,
          ease: 'back.out',
          color: '#5F7FF8',
        }
      );

      word.addEventListener('mouseenter', () => tl.play());
      word.addEventListener('mouseout', () => tl.reverse());
    });
  }, []);

  return (
    <div className='flex '>
      {words.split('').map((item, i) => {
        return (
          <span
            key={i}
            className='block'
            ref={(el) => (wordRef.current[i] = el)}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}

export default HoverWords;
