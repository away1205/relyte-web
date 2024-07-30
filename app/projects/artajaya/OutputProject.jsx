import TextTicker from "../../_ui/TextTicker";
import ProjectButton from "../ProjectButton";
import Testimony from "../../_components/Testimony";

const testimony = {
  name: "Arma Chaniago",
  position: "Founder of Artajaya",
  image: "/project-artajaya-testimony.png",
  testimony:
    "Relyte transformed our vision into a stunning, elegant website that perfectly conveys our commitment to environmental sustainability. They seamlessly integrated our critical data, making our message clear and compelling. The project was delivered quickly and efficiently, just in time for our investor presentation. Highly recommended!",
};

function OutputProject() {
  return (
    <section className="mt-24 sm:mt-32">
      <img
        src="/project-artajaya-output.png"
        alt="artajaya web in desktop"
        className="aspect-auto w-full"
      />

      <div className="mt-28 sm:mt-40">
        <TextTicker isSkew={false} bgPrimary="transparent">
          {Array(7)
            .fill()
            .map((_, index) => (
              <div className="ml-2 flex gap-2 lg:ml-6 lg:gap-6" key={index}>
                <h2 className="text-[3rem] uppercase sm:text-[5rem]">
                  Project Output -
                </h2>
              </div>
            ))}
        </TextTicker>
      </div>

      <div className="max-screen mx-4 mt-[3.5rem] sm:mx-8 xl:mx-auto">
        <div className="flex flex-col gap-3 xl:flex-row xl:justify-between">
          <p className="font-b2 text-pretty sm:w-[70%] sm:text-[1.5rem] xl:w-[60%] xl:text-[2rem]">
            Artajaya’s design merges green tones to evoke a connection to nature
            with a dark background that introduces a modern, sophisticated edge.
          </p>

          <p className="font-b3 sm:font-b2 xl:font-b1 text-[#888] sm:w-[50%] xl:w-[30%]">
            Use visual representation of the brand’s visions: bring
            environmental sustainability & solutions
          </p>
        </div>
      </div>

      <div className="mx-auto mt-[32%] flex w-screen flex-col bg-[#111] pb-[2.8rem] sm:mt-[16rem] sm:pb-20 xl:mt-[26rem] xl:pb-32">
        <div className="max-screen mx-4 sm:mx-8 xl:mx-auto">
          <img
            src="/project-artajaya-output2.png"
            alt="artajaya web in mobile"
            className="aspect-auto -translate-y-1/2 lg:max-xl:-translate-y-40"
          />

          <div className="flex flex-col gap-4 sm:gap-6 xl:mt-[-7rem] xl:flex-row xl:gap-32">
            <h3 className="font-h7 sm:font-h4 xl:font-h3 w-[100%] uppercase text-white">
              A Visual Symphony of Plastic Bottle Waste
            </h3>

            <p className="font-b2 sm:font-b1 text-white sm:w-[80%]">
              Discover the intricate details of Trap typeface, where every curve
              and line resembles the organic, twisted forms of wrapped plastic
              bottle waste. This design encapsulates both creativity and
              environmental consciousness.
            </p>
          </div>

          <img
            src="/project-artajaya-output3.png"
            alt="artajaya web in detail"
            className="mt-12 aspect-auto sm:mt-24 xl:mt-36"
          />
        </div>
      </div>

      <div className="max-screen mx-4 mt-20 sm:mx-8 xl:mx-auto xl:mt-56">
        <div className="flex flex-col gap-4 sm:gap-6 xl:mt-[-7rem] xl:flex-row xl:gap-32">
          <p className="font-b2 text-pretty sm:w-[80%] sm:text-[1.5rem] xl:w-[60%] xl:text-[2rem]">
            Transformed months of PowerPoint presentations into pinpoint card
            designs to reducing information overload, enhancing clarity and
            accessibility.
          </p>

          <p className="font-b3 sm:font-b2 xl:font-b1 text-[#888] sm:w-[70%] xl:w-[30%]">
            This upgrade improved Artajaya’s ability to share activities and
            promotion more effectively.
          </p>
        </div>
      </div>

      <img
        src="/project-artajaya-output4.png"
        alt="artajaya in mobile version"
        className="mt-10 aspect-auto w-screen sm:mt-24 xl:mt-[8.5rem]"
      />

      <div className="max-screen mx-4 mt-[3.5rem] sm:mx-8 xl:mx-auto">
        <div className="relative mt-[11rem] flex flex-col gap-9 border-l border-gray-400 px-4">
          <div className="absolute right-0 top-0 flex -translate-y-full gap-2 sm:gap-4">
            <div className="h-6 w-5 rounded-bl-full bg-green sm:h-[3.1rem] sm:w-[2.3rem]" />
            <div className="h-6 w-5 rounded-bl-full bg-green sm:h-[3.1rem] sm:w-[2.3rem]" />
          </div>
          <p className="font-b2 w-[90%] text-pretty sm:w-[80%] sm:text-[1.5rem] xl:text-[2rem]">
            The accordion slider in the &apos;Our Latest Activity&apos; section
            streamlines information by reducing visual clutter, enhancing user
            experience, and efficiently organizes content.
          </p>

          <ProjectButton href={"https://artajaya.id/"}>
            Visit Site
          </ProjectButton>
        </div>

        <img
          src="/project-artajaya-output5.png"
          alt="overall image of artajaya page"
          className="my-16 aspect-auto md:my-36 xl:my-[11rem]"
        />

        <Testimony
          name={testimony.name}
          position={testimony.position}
          image={testimony.image}
          testimony={testimony.testimony}
        />
      </div>
    </section>
  );
}

export default OutputProject;
