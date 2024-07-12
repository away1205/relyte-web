import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import HoverWords from "../_ui/HoverWords";
import HoverFlipWords from "../_ui/HoverFlipWords";
import MagneticAnim from "../_ui/MagneticAnim";

function CTASection() {
  const [buttonHeight, setButtonHeight] = useState(0);
  const buttonRef = useRef(null);

  useEffect(() => {
    setButtonHeight(buttonRef.current?.offsetHeight / 2);
  }, []);

  return (
    <section
      id="CTA-section"
      className="sm:rounded-tr-[3.125rem flex h-screen w-screen flex-col items-center justify-center rounded-tl-[0.7rem] rounded-tr-[0.7rem] bg-[#111] sm:rounded-tl-[3.125rem]"
    >
      <div className="relative" id="cursor-card">
        <div className="relative h-fit w-fit border border-dashed px-[4rem] py-[8rem] sm:px-[6rem] lg:px-[8rem]">
          <div className="relative flex flex-col items-center justify-center px-4 py-4">
            <h2 className="max-md:font-h5 text-center font-semibold uppercase text-white md:text-[2.25rem] lg:text-[4.5rem]">
              <div className="flex gap-[0.5rem] lg:gap-6">
                <HoverWords words="READY" />
                <HoverWords words="TO" />
                <HoverWords words="BUILD" />
              </div>

              <div className="flex items-center justify-center gap-[0.5rem] lg:gap-6">
                <span>Your</span>
                <HoverFlipWords inText="WEBSITE?" upText="PROJECT?" />
              </div>
            </h2>

            <div className="absolute -right-0 top-0 h-4 w-4 rounded-full bg-primary lg:-right-2 lg:h-6 lg:w-6" />
            <p className="max-sm:font-b5 mt-2 uppercase text-green sm:mt-4">
              3 SLOTS AVAILABLE
            </p>
          </div>
        </div>

        <div className="absolute -left-2 -top-2 h-4 w-4 bg-white"></div>
        <div className="absolute -bottom-2 -left-2 h-4 w-4 bg-white"></div>
        <div className="absolute -right-2 -top-2 h-4 w-4 bg-white"></div>
        <div className="absolute -bottom-2 -right-2 h-4 w-4 bg-white"></div>

        <MagneticAnim>
          <div>
            <button
              ref={buttonRef}
              className={`text-md absolute left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-2 font-normal text-white transition-all duration-500 ease-in-out hover:bg-white hover:text-black-100 max-sm:font-[0.7rem] sm:px-6 sm:py-4 sm:font-semibold lg:px-10 lg:text-lg`}
              style={{ bottom: `-${buttonHeight}px` }}
            >
              Let's make it happen
            </button>
          </div>
        </MagneticAnim>
      </div>
    </section>
  );
}

export default CTASection;
