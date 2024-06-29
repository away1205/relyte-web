import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MagneticAnim from '../ui/MagneticAnim';

function Header() {
  const navList = [
    { label: 'Projects', value: 'projects' },
    { label: 'Contact', value: 'contact' },
    { label: 'FAQ', value: 'faq' },
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
      className='fixed bg-white w-full border-b border-[#e0e0e0] z-40'
      id='header'
    >
      <div className='flex justify-between items-center max-screen mx-auto py-6'>
        <img src='relyte-logo.svg' alt='Relyte Logo' />

        <ul className='flex gap-14'>
          {navList.map((item) => {
            return (
              <MagneticAnim>
                <li key={item.value} className='cursor-pointer'>
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
          <button className='px-6 py-2 border-black border rounded-3xl'>
            Start A Project
          </button>
        </MagneticAnim>
      </div>
    </header>
  );
}

export default Header;
