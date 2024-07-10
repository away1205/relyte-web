import Link from 'next/link';
import HoverFlipWords from '../ui/HoverFlipWords';
// import useDeviceType from '../hooks/useDeviceType';
import MagneticAnim from '../ui/MagneticAnim';
import ContactAddress from './ContactAddress';
import LinkSocial from './LinkSocial';

function Footer() {
  // const { isMediumDevice } = useDeviceType();

  return (
    <footer className='bg-black-100 w-screen flex justify-center' id='footer'>
      <div className='max-screen text-[#888888] flex flex-col justify-between w-full mt-16 max-lg:px-glob-25'>
        <div className='flex justify-between max-sm:flex-col max-sm:gap-12'>
          <ContactAddress />

          <nav className='flex gap-24 text-nowrap max-sm:gap-16 max-sm:font-l4'>
            <div className='flex flex-col gap-2'>
              <ul>
                <Link href={'#home'}>
                  <HoverFlipWords inText='Home' />
                </Link>
              </ul>
              <ul>
                <Link href={'#projects'}>
                  <HoverFlipWords inText='Our Projects' />
                </Link>
              </ul>

              <ul className='max-md:hidden'>
                <Link href={'#blog'}>
                  <HoverFlipWords inText='Our Blog' />
                </Link>
              </ul>
            </div>

            <div className='flex flex-col gap-2 text-nowrap'>
              <ul>
                <Link href={'#about'}>
                  <HoverFlipWords inText='About Us' />
                </Link>
              </ul>
              <ul className='text-nowrap'>
                <Link href={'#service'}>
                  <HoverFlipWords inText='Services' />
                </Link>
              </ul>

              <ul className='max-md:hidden text-nowrap'>
                <Link href={'#faq'}>
                  <HoverFlipWords inText='FAQ' />
                </Link>
              </ul>
            </div>

            <div className='flex gap-2 flex-col md:hidden text-nowrap'>
              <ul>
                <Link href={'#blog'}>
                  <HoverFlipWords inText='Our Blog' />
                </Link>
              </ul>
              <ul className='text-nowrap'>
                <Link href={'#faq'}>
                  <HoverFlipWords inText='FAQ' />
                </Link>
              </ul>
            </div>
          </nav>
        </div>

        <LinkSocial />

        <Link href={'#'} className='mt-16 mb-10 text-nowrap max-sm:font-l4'>
          <HoverFlipWords inText='*Privacy & Policy' />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
