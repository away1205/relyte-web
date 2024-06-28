import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

function HoverFlipWords({ inText = 'Intext', upText = 'Uptext' }) {
  const initialText = useRef(null);
  const upcomingText = useRef(null);
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(initialText.current, { yPercent: -100, duration: 0.4 });
    tl.fromTo(
      upcomingText.current,
      {},
      { yPercent: -100, color: '#C1E693', duration: 0.4 },
      '<'
    );

    container.current.addEventListener('mouseenter', () => tl.play());
    container.current.addEventListener('mouseleave', () => tl.reverse());
  }, []);
  return (
    <div ref={container} className='relative w-min overflow-hidden'>
      <span className='inline-block leading-none' ref={initialText}>
        {inText}
      </span>
      <span className='block absolute top-full' ref={upcomingText}>
        {upText}
      </span>
    </div>
  );
}

export default HoverFlipWords;
