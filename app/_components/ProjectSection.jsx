import bgProject from "../../public/bg-projects.svg";
import CircleShape from "../_ui/CircleShape";
import AnimatedLink from "../_ui/AnimatedLink";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { FadeInAnim } from "../_ui/Animation";
import goDentistImg from "../../public/project-godentist.png";

const projectList = [
  {
    title: "GoDentist",
    year: 2024,
    text: "The Relyte team is thorough and visionary, understanding our business, user, and developer concepts to create product designs backed by data. This data-driven approach ensures that our websites are not just visually appealing but also highly effective, making them easy to trust and incredibly useful for our company.",
    link: "/projects/go-dentist",
    image: goDentistImg.src,
  },
  {
    title: "Managerial Company",
    year: 2000,
    text: "We decided to go with Relyte as our web designer due to their ability to make beautiful things happen",
  },
  {
    title: "Managerial Company",
    year: 2000,
    text: "We decided to go with Relyte as our web designer due to their ability to make beautiful things happen",
  },
  {
    title: "Managerial Company",
    year: 2000,
    text: "We decided to go with Relyte as our web designer due to their ability to make beautiful things happen",
  },
];

function ProjectSection() {
  gsap.registerPlugin(ScrollToPlugin);
  return (
    <section
      className="relative flex min-h-screen w-screen justify-center pt-6"
      id="projects-section"
    >
      <div
        className="absolute left-0 top-0 -z-10 h-[15rem] w-screen bg-[#111111] bg-cover bg-[left] bg-no-repeat sm:h-[22rem] lg:h-[35rem]"
        style={{
          backgroundImage: `url(${bgProject.src})`,
          backgroundSize: "105rem",
        }}
      ></div>

      <div className="max-screen mx-4 my-[4rem] flex h-full flex-col items-center sm:mx-[3.75rem] xl:mx-0 xl:my-[4.75rem]">
        <FadeInAnim direction="" toggleActions="play none restart none">
          <h2 className="font-h6 sm:font-h5 lg:font-h1 relative uppercase text-white">
            Our Latest Projects
            <CircleShape />
          </h2>
        </FadeInAnim>

        <div className="my-10 flex flex-col items-start justify-start gap-8 sm:my-[6.5rem] sm:grid sm:grid-cols-2 sm:gap-[3.75rem] xl:gap-[5rem]">
          <div className="flex flex-col gap-8">
            <Card
              id={0}
              title={projectList[0].title}
              text={projectList[0].text}
              year={projectList[0].year}
              link={projectList[0].link}
              image={projectList[0].image}
            />
            <Card id={1} />
          </div>

          <div className="flex w-full flex-col gap-8 sm:mt-[15%]">
            <Card id={2} />
            <Card id={3} />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ id = 0, title, text, year, link, image }) {
  return (
    <div className="flex w-full flex-col gap-4">
      {text ? (
        <AnimatedLink
          href={link}

          // style={{ top: `${hiddenTextHeight}px` }} // it might be for mobile ver
        >
          <div
            className={`relative z-10 flex flex-col transition-transform duration-500 hover:-translate-y-4`}
          >
            <div
              className="aspect-[4/3] rounded-xl bg-cover bg-center bg-no-repeat shadow-lg"
              style={{ backgroundImage: `url(${image})` }}
            ></div>

            <div className="flex flex-col px-2 py-6">
              <div className="flex justify-between gap-3">
                <h3 className="font-h8 xl:font-h5 font-semibold uppercase">
                  {title}
                </h3>
                <p className="max-lg:font-b4 flex items-center rounded-[100px] bg-black px-4 text-center font-semibold text-white">
                  {year}
                </p>
              </div>

              <p className="max-lg:font-b4 mt-2 line-clamp-2 w-2/3 text-[#888888]">
                {text}
              </p>
            </div>
          </div>
        </AnimatedLink>
      ) : (
        <div
          onClick={() => gsap.to(window, { scrollTo: "#CTA-section" })}
          className="relative z-10 my-6 flex aspect-[4/3] h-full w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-md bg-white outline-dashed outline-4 outline-[#888] transition-colors duration-300 hover:text-blue-400 hover:outline-blue-500 sm:gap-4 xl:gap-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
          >
            <path
              d="M17.8124 8.72576C17.5424 8.72545 17.2834 8.83257 17.0925 9.02349C16.9016 9.2144 16.7945 9.47342 16.7948 9.74341L16.7876 16.7948L9.72893 16.7948C9.45894 16.7945 9.19991 16.9016 9.009 17.0926C8.81809 17.2835 8.71097 17.5425 8.71127 17.8125C8.71127 18.3754 9.16597 18.8301 9.72893 18.8301L16.7876 18.8301L16.7876 25.8888C16.7876 26.4517 17.2423 26.9064 17.8052 26.9064C18.3682 26.9064 18.8229 26.4517 18.8229 25.8888L18.8229 18.8301L25.8815 18.8301C26.4445 18.8301 26.8992 18.3754 26.8992 17.8125C26.8992 17.2495 26.4445 16.7948 25.8815 16.7948H18.8229L18.8229 9.7362C18.8229 9.18767 18.361 8.72576 17.8124 8.72576Z"
              fill="#111111"
            />
          </svg>

          <p className="font-h9 sm:font-h8 lg:font-h5"> Your Project</p>
        </div>
      )}
    </div>
  );
}

export default ProjectSection;
