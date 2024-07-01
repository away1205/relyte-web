import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticAnim from '../ui/MagneticAnim';

function Header() {
  const navList = [
    { label: 'Projects', value: 'projects-section' },
    { label: 'Contact', value: 'footer' },
    { label: 'FAQ', value: 'faq-section' },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'html',
        start: 'top top',
        end: 99999,
        onUpdate: (self) =>
          self.direction === -1 ? showHeader.play() : showHeader.reverse(),
      },
    });

    const showHeader = gsap
      .from('#header', {
        yPercent: -100,
        paused: true,
        duration: 0.3,
      })
      .progress(1);
  }, []);

  return (
    <header
      className='fixed bg-white w-screen border-b border-[#e0e0e0] z-40 md:px-10'
      id='header'
    >
      <div className='flex justify-between items-center max-screen mx-auto py-6'>
        <MagneticAnim>
          <img
            src='relyte-logo.svg'
            alt='Relyte Logo'
            className='cursor-pointer'
            onClick={() => {
              gsap.to(window, {
                duration: 1,
                scrollTo: { y: `#home` },
                ease: 'power2',
              });
            }}
          />
        </MagneticAnim>
        <ul className='flex gap-14'>
          {navList.map((item) => {
            return (
              <MagneticAnim key={item.value}>
                <li className='cursor-pointer'>
                  <a
                    // href={`#${item.value}`}
                    onClick={() => {
                      gsap.to(window, {
                        duration: 1,
                        scrollTo: { y: `#${item.value}` },
                        ease: 'power2',
                      });
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              </MagneticAnim>
            );
          })}
        </ul>

        <MagneticAnim>
          <button
            className=' md:py-1 md:px-4 lg:px-6 lg:py-2 border-black border rounded-3xl'
            onClick={() => {
              gsap.to(window, {
                duration: 1,
                scrollTo: { y: `#CTA-section` },
                ease: 'power2',
              });
            }}
          >
            Start A Project
          </button>
        </MagneticAnim>
      </div>
    </header>
  );
}

export default Header;
