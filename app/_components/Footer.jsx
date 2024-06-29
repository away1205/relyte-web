import Link from 'next/link';
import HoverFlipWords from '../ui/HoverFlipWords';
import MagneticAnim from '../ui/MagneticAnim';

function Footer() {
  return (
    <footer className='bg-black-100 w-screen flex justify-center' id='footer'>
      <div className='max-screen text-[#888888] flex flex-col justify-between w-full mt-16'>
        <div className='flex justify-between'>
          <div className='flex flex-col gap-2'>
            <a href='tel:6289677900900'>
              <HoverFlipWords inText='+6289677900900' />
            </a>
            <a href='mailto:hello@relyte.space' className='uppercase'>
              <HoverFlipWords inText='hello@relyte.space' />
            </a>
          </div>

          <nav className='flex gap-24'>
            <div className='flex flex-col gap-2'>
              <ul>
                <Link href={'#home'}>
                  <HoverFlipWords inText='Home' />
                </Link>
              </ul>
              <ul>
                <Link href={'#home'}>
                  <HoverFlipWords inText='Our Projects' />
                </Link>
              </ul>
            </div>

            <div className='flex flex-col gap-2'>
              <ul>
                <Link href={'#home'}>
                  <HoverFlipWords inText='About Us' />
                </Link>
              </ul>
              <ul>
                <Link href={'#home'}>
                  <HoverFlipWords inText='Services' />
                </Link>
              </ul>
            </div>

            <div className='flex gap-2 flex-col'>
              <ul>
                <Link href={'#home'}>
                  <HoverFlipWords inText='Our Blog' />
                </Link>
              </ul>
              <ul>
                <Link href={'#home'}>
                  <HoverFlipWords inText='FAQ' />
                </Link>
              </ul>
            </div>
          </nav>
        </div>

        <div
          className='flex gap-10 py-6 mt-6'
          style={{ borderTop: '2px solid #888888' }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
          >
            <path
              d='M29.6471 4.91162H2.35294C2.12673 4.91162 1.90978 5.00148 1.74982 5.16144C1.58986 5.3214 1.5 5.53835 1.5 5.76456V25.0979C1.5 25.6257 1.70968 26.1319 2.08292 26.5052C2.45615 26.8784 2.96236 27.0881 3.4902 27.0881H28.5098C29.0376 27.0881 29.5439 26.8784 29.9171 26.5052C30.2903 26.1319 30.5 25.6257 30.5 25.0979V5.76456C30.5 5.53835 30.4101 5.3214 30.2502 5.16144C30.0902 5.00148 29.8733 4.91162 29.6471 4.91162ZM16 17.1172L4.545 6.6175H27.455L16 17.1172ZM12.257 15.9999L3.20588 24.2961V7.70358L12.257 15.9999ZM13.5194 17.157L15.4314 18.9027C15.5886 19.0465 15.794 19.1263 16.0071 19.1263C16.2202 19.1263 16.4256 19.0465 16.5828 18.9027L18.4877 17.157L27.455 25.3822H4.54642L13.5194 17.157ZM19.743 15.9999L28.7941 7.70358V24.2961L19.743 15.9999Z'
              fill='white'
            />
          </svg>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
          >
            <path
              d='M27 3.25H5C4.53587 3.25 4.09075 3.43437 3.76256 3.76256C3.43437 4.09075 3.25 4.53587 3.25 5V27C3.25 27.4641 3.43437 27.9092 3.76256 28.2374C4.09075 28.5656 4.53587 28.75 5 28.75H27C27.4641 28.75 27.9092 28.5656 28.2374 28.2374C28.5656 27.9092 28.75 27.4641 28.75 27V5C28.75 4.53587 28.5656 4.09075 28.2374 3.76256C27.9092 3.43437 27.4641 3.25 27 3.25ZM27.25 27C27.25 27.0663 27.2237 27.1299 27.1768 27.1768C27.1299 27.2237 27.0663 27.25 27 27.25H5C4.9337 27.25 4.87011 27.2237 4.82322 27.1768C4.77634 27.1299 4.75 27.0663 4.75 27V5C4.75 4.9337 4.77634 4.87011 4.82322 4.82322C4.87011 4.77634 4.9337 4.75 5 4.75H27C27.0663 4.75 27.1299 4.77634 27.1768 4.82322C27.2237 4.87011 27.25 4.9337 27.25 5V27ZM11.75 14V22C11.75 22.1989 11.671 22.3897 11.5303 22.5303C11.3897 22.671 11.1989 22.75 11 22.75C10.8011 22.75 10.6103 22.671 10.4697 22.5303C10.329 22.3897 10.25 22.1989 10.25 22V14C10.25 13.8011 10.329 13.6103 10.4697 13.4697C10.6103 13.329 10.8011 13.25 11 13.25C11.1989 13.25 11.3897 13.329 11.5303 13.4697C11.671 13.6103 11.75 13.8011 11.75 14ZM22.75 17.5V22C22.75 22.1989 22.671 22.3897 22.5303 22.5303C22.3897 22.671 22.1989 22.75 22 22.75C21.8011 22.75 21.6103 22.671 21.4697 22.5303C21.329 22.3897 21.25 22.1989 21.25 22V17.5C21.25 16.7707 20.9603 16.0712 20.4445 15.5555C19.9288 15.0397 19.2293 14.75 18.5 14.75C17.7707 14.75 17.0712 15.0397 16.5555 15.5555C16.0397 16.0712 15.75 16.7707 15.75 17.5V22C15.75 22.1989 15.671 22.3897 15.5303 22.5303C15.3897 22.671 15.1989 22.75 15 22.75C14.8011 22.75 14.6103 22.671 14.4697 22.5303C14.329 22.3897 14.25 22.1989 14.25 22V14C14.25 13.8011 14.329 13.6103 14.4697 13.4697C14.6103 13.329 14.8011 13.25 15 13.25C15.1989 13.25 15.3897 13.329 15.5303 13.4697C15.671 13.6103 15.75 13.8011 15.75 14V14.2638C16.3681 13.7392 17.1233 13.4024 17.9266 13.293C18.7299 13.1836 19.5476 13.3062 20.2835 13.6464C21.0193 13.9866 21.6425 14.5302 22.0796 15.213C22.5166 15.8958 22.7492 16.6893 22.75 17.5ZM12.25 10.5C12.25 10.7472 12.1767 10.9889 12.0393 11.1945C11.902 11.4 11.7068 11.5602 11.4784 11.6548C11.2499 11.7495 10.9986 11.7742 10.7561 11.726C10.5137 11.6778 10.2909 11.5587 10.1161 11.3839C9.9413 11.2091 9.82225 10.9863 9.77402 10.7439C9.72579 10.5014 9.75054 10.2501 9.84515 10.0216C9.93976 9.79324 10.1 9.59801 10.3055 9.46066C10.5111 9.32331 10.7528 9.25 11 9.25C11.3315 9.25 11.6495 9.3817 11.8839 9.61612C12.1183 9.85054 12.25 10.1685 12.25 10.5Z'
              fill='white'
            />
          </svg>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
          >
            <path
              d='M16 10.25C14.8628 10.25 13.7511 10.5872 12.8055 11.219C11.8599 11.8509 11.1229 12.7489 10.6877 13.7996C10.2525 14.8502 10.1386 16.0064 10.3605 17.1218C10.5824 18.2372 11.13 19.2617 11.9341 20.0659C12.7383 20.87 13.7628 21.4177 14.8782 21.6395C15.9936 21.8614 17.1498 21.7475 18.2004 21.3123C19.2511 20.8771 20.1491 20.1401 20.781 19.1945C21.4128 18.2489 21.75 17.1372 21.75 16C21.748 14.4756 21.1416 13.0142 20.0637 11.9363C18.9858 10.8584 17.5244 10.252 16 10.25ZM16 20.25C15.1594 20.25 14.3377 20.0007 13.6388 19.5337C12.9399 19.0668 12.3952 18.403 12.0735 17.6264C11.7518 16.8498 11.6677 15.9953 11.8317 15.1709C11.9956 14.3464 12.4004 13.5892 12.9948 12.9948C13.5892 12.4004 14.3464 11.9956 15.1709 11.8317C15.9953 11.6677 16.8498 11.7518 17.6264 12.0735C18.403 12.3952 19.0668 12.9399 19.5337 13.6388C20.0007 14.3377 20.25 15.1594 20.25 16C20.25 17.1272 19.8022 18.2082 19.0052 19.0052C18.2082 19.8022 17.1272 20.25 16 20.25ZM22 3.25H10C8.2104 3.25199 6.49466 3.96378 5.22922 5.22922C3.96378 6.49466 3.25199 8.2104 3.25 10V22C3.25199 23.7896 3.96378 25.5053 5.22922 26.7708C6.49466 28.0362 8.2104 28.748 10 28.75H22C23.7896 28.748 25.5053 28.0362 26.7708 26.7708C28.0362 25.5053 28.748 23.7896 28.75 22V10C28.748 8.2104 28.0362 6.49466 26.7708 5.22922C25.5053 3.96378 23.7896 3.25199 22 3.25ZM27.25 22C27.25 23.3924 26.6969 24.7277 25.7123 25.7123C24.7277 26.6969 23.3924 27.25 22 27.25H10C8.60761 27.25 7.27225 26.6969 6.28769 25.7123C5.30312 24.7277 4.75 23.3924 4.75 22V10C4.75 8.60761 5.30312 7.27225 6.28769 6.28769C7.27225 5.30312 8.60761 4.75 10 4.75H22C23.3924 4.75 24.7277 5.30312 25.7123 6.28769C26.6969 7.27225 27.25 8.60761 27.25 10V22ZM23.75 9.5C23.75 9.74723 23.6767 9.9889 23.5393 10.1945C23.402 10.4 23.2068 10.5602 22.9784 10.6548C22.7499 10.7495 22.4986 10.7742 22.2561 10.726C22.0137 10.6778 21.7909 10.5587 21.6161 10.3839C21.4413 10.2091 21.3223 9.98634 21.274 9.74386C21.2258 9.50139 21.2505 9.25005 21.3451 9.02165C21.4398 8.79324 21.6 8.59801 21.8055 8.46066C22.0111 8.32331 22.2528 8.25 22.5 8.25C22.8315 8.25 23.1495 8.3817 23.3839 8.61612C23.6183 8.85054 23.75 9.16848 23.75 9.5Z'
              fill='white'
            />
          </svg>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
          >
            <path
              d='M29.6471 4.91162H2.35294C2.12673 4.91162 1.90978 5.00148 1.74982 5.16144C1.58986 5.3214 1.5 5.53835 1.5 5.76456V25.0979C1.5 25.6257 1.70968 26.1319 2.08292 26.5052C2.45615 26.8784 2.96236 27.0881 3.4902 27.0881H28.5098C29.0376 27.0881 29.5439 26.8784 29.9171 26.5052C30.2903 26.1319 30.5 25.6257 30.5 25.0979V5.76456C30.5 5.53835 30.4101 5.3214 30.2502 5.16144C30.0902 5.00148 29.8733 4.91162 29.6471 4.91162ZM16 17.1172L4.545 6.6175H27.455L16 17.1172ZM12.257 15.9999L3.20588 24.2961V7.70358L12.257 15.9999ZM13.5194 17.157L15.4314 18.9027C15.5886 19.0465 15.794 19.1263 16.0071 19.1263C16.2202 19.1263 16.4256 19.0465 16.5828 18.9027L18.4877 17.157L27.455 25.3822H4.54642L13.5194 17.157ZM19.743 15.9999L28.7941 7.70358V24.2961L19.743 15.9999Z'
              fill='white'
            />
          </svg>
        </div>

        <Link href={'#'} className='mt-16 mb-10'>
          <HoverFlipWords inText='*Privacy & Policy' />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
