import ProjectButton from "../ProjectButton";
import TextTicker from "../../_ui/TextTicker";

const businessGoals = [
  "Building Brand trust and Credibility for Business Growth with investors, partners, and customers.",
  "Enhancing User Experience to Increase Engagement and Conversions",
  "Showcasing Innovation and Technology in healthcare solution to Attract Tech-Savvy Investors and Partners",
  "Strengthening Online Presence using The SEO-optimized to Drive Traffic and increasing app downloads",
];

function AboutProject() {
  return (
    <section className="mt-[4.75rem] sm:mt-[12rem]">
      <TextTicker isSkew={false} bgPrimary="transparent">
        {Array(7)
          .fill()
          .map((_, index) => (
            <div className="ml-2 flex gap-2 lg:ml-6 lg:gap-6" key={index}>
              <h2 className="text-[3rem] uppercase sm:text-[5rem]">
                About The Project -
              </h2>
            </div>
          ))}
      </TextTicker>

      <div className="max-screen mx-4 sm:mx-10 xl:mx-auto">
        <div className="relative mt-[4.3rem] flex flex-col gap-9 border-l border-gray-400 px-4">
          <div className="absolute right-0 top-0 flex -translate-y-full gap-2 sm:gap-4">
            <div className="h-6 w-5 rounded-bl-full bg-green sm:h-[3.1rem] sm:w-[2.3rem]" />
            <div className="h-6 w-5 rounded-bl-full bg-green sm:h-[3.1rem] sm:w-[2.3rem]" />
          </div>
          <p className="font-b2 w-[90%] text-pretty sm:w-[80%] sm:text-[1.5rem] xl:text-[2rem]">
            GoDentist is an AI-based teledentistry startup, needs a compelling
            website to build trust, engage users, and attract partnerships with
            industry giant like Google. A strong online presence will highlight
            their innovative approach, improve patient access, and enhance
            practitioner capabilities.
          </p>

          <ProjectButton href={"https://godentist.co.id/"}>
            Visit Site
          </ProjectButton>
        </div>

        <div className="mt-[5rem] flex flex-col gap-8 sm:flex-row-reverse sm:items-end">
          <img
            src="/project-godentist-about.png"
            alt="about godentist"
            className="relative -right-4 w-[80%] place-self-end shadow-lg sm:w-[65%]"
          />
          <p className="font-b3 sm:font-b2 xl:font-b1 w-[90%] text-pretty text-[#888]">
            Under 6 months, GoDentist received awards from Google and Goto, also
            partnership with five unicorn tech companies in Indonesia.{" "}
          </p>
        </div>
      </div>

      <div className="max-screen mx-4 mt-[6.5rem] flex flex-col sm:mx-10 xl:mx-auto xl:flex-row xl:gap-[11.6rem]">
        <div>
          <span className="font-b3 sm:font-b2 uppercase text-[#888]">
            /Business Details
          </span>
          <h2 className="font-h6 sm:font-h4 xl:font-h3 uppercase sm:w-[30rem]">
            WHAT&apos;S OUR CLIENT&apos;S BUSINESS GOAL
          </h2>
        </div>

        <div className="flex flex-col xl:mt-6">
          <p className="font-b2 sm:font-b1 mt-12 sm:w-[85%] xl:mt-0 xl:w-full">
            Struggles with lack of trust, poor website engagement due to
            confusing navigation, and underutilization of its AI-based
            teledentistry features, hindering its market presence and growth
            potential for GoDentist as a startups.
          </p>

          <div className="mt-6 flex flex-col gap-10 place-self-end sm:mt-[5.75rem] sm:w-[65%] xl:mt-12">
            {businessGoals.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex gap-8 border-t border-gray-500 pt-3"
                >
                  <span className="font-b3 uppercase text-[#888] sm:text-[1.5rem]">
                    /0{i + 1}
                  </span>
                  <p className="font-b2 sm:font-b1">{item}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-[7rem]">
        <img
          src="/project-godentist-about2.png"
          alt="godentist in laptop"
          className="aspect-auto w-full"
        />

        <div className="max-screen mx-4 mt-16 flex flex-col gap-10 sm:mx-12 sm:gap-20 xl:mx-auto xl:flex-row xl:gap-[24rem]">
          <h2 className="font-h6 sm:font-h4 xl:font-h3 uppercase">Results</h2>

          <div className="flex w-[80%] flex-col gap-6 place-self-end sm:w-[75%] sm:gap-11">
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-36">
              <div className="flex flex-1 flex-col sm:border-t sm:border-gray-500 sm:pt-7">
                <span className="sm:font-h2 xl:font-h1 text-[2rem] font-semibold leading-none">
                  +140%
                </span>
                <p className="sm:font-b2">Increase in traffic</p>
              </div>

              <div className="flex flex-1 flex-col sm:border-t sm:border-gray-500 sm:pt-7">
                <span className="sm:font-h2 xl:font-h1 text-[2rem] font-semibold leading-none">
                  +22%
                </span>
                <p className="sm:font-b2">Increase in conversion</p>
              </div>
            </div>

            <p className="font-b2 sm:font-b1">
              We are proud to report that our client website experienced a
              remarkable 140% increase in overall traffic, alongside a
              substantial 22% growth in the number of new users in under 3
              months. This significant achievement underscores the effectiveness
              of our strategies and the high level of trust our clients place in
              our expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
