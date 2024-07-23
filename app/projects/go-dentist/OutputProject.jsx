import Link from "next/link";
import MagneticAnim from "../../_ui/MagneticAnim";
import TextTicker from "../../_ui/TextTicker";

function OutputProject() {
  return (
    <section className="mt-24 sm:mt-32">
      <img
        src="/project-godentist-output.png"
        alt="godentist web in desktop"
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
            Enhances digital presence through strategic initiatives such as
            optimizing SEO, creating article content, and forming partnerships
            with tech unicorns company.{" "}
          </p>

          <p className="font-b3 sm:font-b2 xl:font-b1 text-[#888] sm:w-[50%] xl:w-[30%]">
            Place prominent and compelling download buttons clearly bring a lot
            of benefit to the app.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-[32%] flex w-screen flex-col bg-[#111] pb-[2.8rem] sm:mt-[16rem] sm:pb-20 xl:mt-[26rem] xl:pb-32">
        <div className="max-screen mx-4 sm:mx-8 xl:mx-auto">
          <img
            src="/project-godentist-output2.png"
            alt="godentist web in mobile"
            className="aspect-auto -translate-y-1/2"
          />

          <div className="flex flex-col gap-4 sm:gap-6 xl:mt-[-7rem] xl:flex-row xl:gap-32">
            <h3 className="font-h7 sm:font-h4 xl:font-h3 w-[50%] uppercase text-white">
              TURN UNIQUENESS TO STRENGHTEN
            </h3>

            <p className="font-b2 sm:font-b1 text-white sm:w-[80%]">
              The uniqueness of this product lies in its AI-powered detection of
              oral and dental issues, strategically optimized as a key SEO
              keyword to achieve top-ranking visibility on Google
            </p>
          </div>

          <img
            src="/project-godentist-output3.png"
            alt="godentist web in detail"
            className="mt-12 aspect-auto sm:mt-24 xl:mt-36"
          />
        </div>
      </div>

      <div className="max-screen mx-4 mt-20 sm:mx-8 xl:mx-auto xl:mt-56">
        <div className="flex flex-col gap-4 sm:gap-6 xl:mt-[-7rem] xl:flex-row xl:gap-32">
          <p className="font-b2 text-pretty sm:w-[80%] sm:text-[1.5rem] xl:w-[60%] xl:text-[2rem]">
            Showcase list of partners would build credibility and demonstrates
            industry trust that leads to enhance the company&apos;s value
            proposition.
          </p>

          <p className="font-b3 sm:font-b2 xl:font-b1 text-[#888] sm:w-[70%] xl:w-[30%]">
            Testimonials increased trust & download intentions, especially among
            less experienced users
          </p>
        </div>
      </div>

      <img
        src="/project-godentist-output4.png"
        alt="godentist in mobile version"
        className="mt-10 aspect-auto w-screen sm:mt-24 xl:mt-[8.5rem]"
      />

      <div className="max-screen mx-4 mt-[3.5rem] sm:mx-8 xl:mx-auto">
        <div className="relative mt-[4.3rem] flex flex-col gap-9 border-l border-gray-400 px-4">
          <div className="absolute right-0 top-0 flex -translate-y-full gap-2 sm:gap-4">
            <div className="h-6 w-5 rounded-bl-full bg-green sm:h-[3.1rem] sm:w-[2.3rem]" />
            <div className="h-6 w-5 rounded-bl-full bg-green sm:h-[3.1rem] sm:w-[2.3rem]" />
          </div>
          <p className="font-b2 w-[90%] text-pretty sm:w-[80%] sm:text-[1.5rem] xl:text-[2rem]">
            A recent study shows that 57% of respondents prefer using mobile
            phones over desktops, highlighting the importance of optimizing
            responsive design for mobile users. This is why we have tailored the
            website with meticulous attention to detail, ensuring a seamless and
            engaging experience across all devices.
          </p>

          <MagneticAnim>
            <Link
              href={"https://godentist.co.id/"}
              target="_blank"
              className="w-fit"
            >
              <button className="w-fit rounded-full border border-black bg-black px-6 py-[0.38rem] uppercase text-white transition-colors duration-500 hover:bg-white hover:font-semibold hover:text-black sm:px-16">
                Visit site
              </button>
            </Link>
          </MagneticAnim>
        </div>

        <img
          src="/project-godentist-output5.png"
          alt="overall image of godentist page"
          className="my-16 aspect-auto md:my-36 xl:my-[11rem]"
        />

        <div className="mb-28 border-b-2 border-t-2 border-[#ccc] py-[3.5rem] sm:mb-[8.75rem] sm:py-24 xl:mb-[10.88rem] xl:py-28">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="43"
            viewBox="0 0 46 43"
            fill="none"
            className="h-[21px] w-[23px] sm:h-[43px] sm:w-[46px]"
          >
            <path
              d="M46 43H28.4762V25.4873C28.4762 13.3951 34.3175 4.89939 46 0V10.1636C40.263 13.2909 37.3946 18.3988 37.3946 25.4873H46V43ZM17.5238 43H0V25.4873C0 13.3951 5.84127 4.89939 17.5238 0V10.1636C11.7868 13.2909 8.91837 18.3988 8.91837 25.4873H17.5238V43Z"
              fill="#111111"
            />
          </svg>

          <p className="font-b2 mt-4 sm:mt-6 sm:text-[1.75rem] xl:text-[2.5rem]">
            The Relyte team is thorough and visionary, understanding business,
            user, and developer concepts to create product designs backed by
            data. This data-driven approach ensures that our websites are not
            just visually appealing but also highly effective, making them easy
            to trust and incredibly useful for our company.
          </p>

          <p className="font-b3 sm:font-b1 mt-9 text-[#888] sm:mt-12 xl:mt-[3.75rem]">
            -Abdul Malik Shodiqin, CEO of GoDentist
          </p>
        </div>
      </div>
    </section>
  );
}

export default OutputProject;
