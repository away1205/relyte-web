import CircleShape from "../_ui/CircleShape";
import ScrollDown from "../_ui/ScrollDown";
import TextTicker from "../_ui/TextTicker";

function AboutHero() {
  return (
    <section className="dot-bg relative min-h-[42rem] w-full sm:min-h-[66rem]">
      <div className="max-screen pt-36 sm:pt-[17rem] lg:pt-[10rem] xl:mx-auto">
        <div className="flex flex-col gap-4 px-4 sm:px-8 lg:gap-12">
          <img
            src="/about-hero.png"
            alt="cubicle image"
            className="h-[3.2rem] w-[9.6rem] rounded-full object-cover sm:h-[5.25rem] sm:w-[17.3rem] xl:h-auto xl:w-full"
          />
          <h1 className="xl:font-d4 relative w-[17rem] text-[2rem] font-semibold leading-[120%] tracking-[-0.02rem] sm:w-[42rem] sm:text-[3.5rem] sm:tracking-[-0.035rem] xl:w-[62rem]">
            <span className="text-[#888]">We create</span> data-driven website
            that visually stunning, innovative and drive results
            <div
              className={`absolute bottom-6 right-[5.5rem] h-3 w-3 rounded-full bg-primary sm:bottom-[2.3rem] sm:left-[19rem] sm:h-4 sm:w-4 xl:bottom-[3rem] xl:left-[29rem]`}
            />
          </h1>
        </div>

        <div className="absolute bottom-20 right-4 h-[4.5rem] w-[4.5rem] -translate-y-1/2 sm:right-10 sm:h-[6rem] sm:w-[6rem] xl:mr-[3.5rem]">
          <ScrollDown />
        </div>
      </div>

      <div className="absolute bottom-0">
        <TextTicker bgPrimary="black">
          {Array(7)
            .fill()
            .map((_, index) => (
              <div className="ml-2 flex gap-2 lg:ml-6 lg:gap-6" key={index}>
                <img
                  src="/trending-up.svg"
                  alt="Trending icon"
                  className="max-sm:w-[0.75rem] sm:w-[1.5rem]"
                />

                <p className="max-sm:text-[0.75rem]">We Create. Not Copy</p>
              </div>
            ))}
        </TextTicker>
      </div>
    </section>
  );
}

export default AboutHero;
