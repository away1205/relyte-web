import ScrollDown from "../../_ui/ScrollDown";
function HeroProject() {
  return (
    <section className="flex w-full justify-center bg-[#111] pb-16 sm:pb-24 lg:pb-[7.5rem]">
      <div className="max-screen flex flex-col items-center justify-center gap-[4rem] pl-4 sm:pl-10 xl:pl-0">
        <div className="pt-[3rem] text-white sm:pt-[5rem]">
          <span className="font-b3 sm:font-b2">
            /GoDentist - AI Teledentistry App
          </span>
          <h1 className="font-d5 sm:font-d4 sm:w-2/3 xl:w-[80%] xl:text-[5.5rem] xl:font-semibold">
            Elevate Digital Presence of AI-Teledentistry Company
          </h1>
        </div>

        <div className="relative flex w-full flex-col pl-10 sm:pl-[8rem] lg:flex-row-reverse lg:items-end lg:justify-between lg:pl-0 xl:-top-[8rem]">
          <div className="absolute right-4 top-0 h-[4rem] w-[4rem] -translate-y-1/2 rotate-45 sm:right-10 sm:h-[6rem] sm:w-[6rem]">
            <ScrollDown />
          </div>

          <img
            src="/project-godentist.png"
            alt="Go dentist in desktop version"
            className="aspect-[6/4]"
          />

          <div className="mt-8 grid grid-cols-3 text-white lg:max-xl:mb-0 lg:max-xl:flex lg:max-xl:flex-col lg:max-xl:gap-8 xl:mb-8 xl:w-[23rem]">
            <div className="col-span-2">
              <h2 className="font-h9 mb-2 w-9/12 border-b pb-1">Services</h2>
              <p className="font-b3 sm:font-b2 xl:font-b1 uppercase">
                website design
              </p>
              <p className="font-b3 sm:font-b2 xl:font-b1 uppercase">
                copywriting
              </p>
            </div>

            <div>
              <h2 className="font-h9 mb-2 w-9/12 border-b pb-1">Year</h2>
              <p className="font-b3 sm:font-b2 xl:font-b1 uppercase">2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroProject;
