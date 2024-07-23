import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { FlipWords } from "../_ui/FlipWords";
import { FlipSentence } from "../_ui/FlipSentence";

import bgPeople from "../../public/bg-people.svg";
import handPeople from "../../public/hand-people.svg";
import bgWebsite from "../../public/bg-website.svg";
import handWebsite from "../../public/hand-website.svg";
import bgTrust from "../../public/bg-trust.svg";
import handTrust from "../../public/hand-trust.svg";
// import trafficGif from "../../public/traffic-gif.gif";
// import leadGif from "../../public/lead-gif.gif";
// import convertGif from "../../public/convert-gif.gif";
import trafficGif from "../../public/traffic-webm.webm";
import leadGif from "../../public/lead-webm.webm";
import convertGif from "../../public/convert-webm.webm";

const careList = [
  {
    title: "Drive Traffic",
    isDown: true,
    text: `Standing out in a crowded market is tough, but our data-driven, unique, and creative design, ensures your website captures attention, drives traffic and set you apart`,
    bgColor: "bg-[#C1E693]",
    bgImg: bgWebsite,
    handImg: handWebsite,
    gif: leadGif,
  },
  {
    title: "Engage Leads",
    isDown: false,
    text: "We closely consider your target audience needs and preferences, ensuring an engaging and intuitive experience that increases conversion rates",
    bgColor: "bg-[#9AACEF]",
    bgImg: bgPeople,
    handImg: handPeople,
    gif: trafficGif,
  },
  {
    title: "Convert Clients",
    isDown: true,
    text: "Lastly, we ensure your website builds a reliable brand, showcases your expertise, and converts visitors into loyal customers.",
    bgColor: "bg-[#E8E2F8]",
    bgImg: bgTrust,
    handImg: handTrust,
    gif: convertGif,
  },
];

const infoList = [
  {
    text: "MSMEs websites have poor design, hurting its conversion.",
    number: "70%",
    source: "- Launch North",
  },
  {
    text: "users will leave a site if they don't find what they need in 5 seconds.",
    number: "61%",
    source: "- Forbes",
  },
  {
    text: "of online users won’t return to a website after a bad experience",
    number: "88%",
    source: "- Sweor",
  },
];

function CarePin() {
  gsap.registerPlugin(ScrollTrigger);

  const container = useRef();

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".care-container",
        start: "top+=200 top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    tl.to(".care-card1", { scale: 0.95, opacity: 0.3, duration: 2 });
    tl.to(".care-card2", {
      scale: 0.95,
      opacity: 0.3,
      duration: 3,
    });
    tl.to(".care-card1", { opacity: 0 }, "<");

    let tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".care-card3",
        start: "top-=200 top",
        end: "bottom+=600 bottom",
        scrub: 1,
        // markers: true,
      },
    });
    tl2.to(".care-card3", { scale: 1, duration: 3 });
    // tl2.to('.care-card3 h5', { opacity: 0.1, duration: 3 });

    let tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".care-card3",
        start: "top top",
        end: "bottom+=200% bottom",
        scrub: 1,
        // markers: true,
        pin: true,
        pinReparent: true,
        pinSpacing: true,
      },
    });

    tl3
      .to(".anim-green2", { color: "#C1E693", duration: 2 }, "<")
      .to(".hidden-word", { opacity: 0, delay: 2, duration: 3 }, "<")
      .to(".unhidden-word", { opacity: 1 }, "<+3")
      .to(".anim-green", { color: "#C1E693", delay: 1, duration: 6 }, "<")
      .to(".unhidden-word", { opacity: 0, delay: 2, duration: 3 }, "<3")
      .to(".unhidden-word2", { opacity: 1 })
      .to(".unhidden-word2", { opacity: 0.3, delay: 2, duration: 3 }, "<3")
      .fromTo(
        ".care-main-card",
        { opacity: 0, y: 200 },
        { opacity: 1, y: 0, duration: 3, stagger: 0.2 },
      );

    // gsap.to('.anim-green', {
    //   scrollTrigger: '.unhidden-word2',
    //   color: '#C1E693',
    //   duration: 10,
    // });
  });

  return (
    <section ref={container} id="care-section">
      <div className="care-container flex flex-col items-center">
        <div className="sticky top-0 h-[100vh]">
          <div className="card-container care-card1 relative top-[20%] flex min-w-fit flex-col items-start justify-center gap-8 overflow-hidden rounded-2xl bg-black-100 px-8 py-6 sm:top-[15%] sm:px-20 sm:py-20 sm:pt-12">
            <img
              src="./illustration-percentage.svg"
              alt="percentage illustration"
              className="relative -left-[3rem] max-sm:w-[5rem] sm:-left-24"
            />

            <div className="flex items-start gap-4 text-white max-md:flex-col">
              <div className="w-fit text-center sm:h-[6rem] sm:w-[10rem]">
                <FlipWords
                  className={
                    "font-d3 text-center text-white max-sm:px-0 max-sm:text-[1.75rem]"
                  }
                  words={infoList.map((item) => item.number)}
                  duration={4000}
                />
              </div>

              <div className="flex w-[12rem] flex-col gap-2 text-wrap sm:w-[20rem]">
                <FlipSentence
                  words={infoList.map((item) => item.text)}
                  className={"font-h5 text-white max-sm:text-[0.875rem]"}
                  duration={4000}
                />
                <FlipWords
                  words={infoList.map((item) => item.source)}
                  duration={4000}
                  className={"px-0 text-gray-300 max-sm:text-[0.65rem]"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="sticky top-0 h-[100vh]">
          <div className="care-card2 card-container relative top-[20%] z-[2] mb-[100vh] flex flex-col items-center justify-center gap-8 rounded-[0.9rem] bg-black-100 px-8 py-8 sm:rounded-2xl sm:px-20 sm:py-20 md:w-[40rem]">
            <div className="relative" id="cursor-card">
              <h2 className="font-h5 relative border border-dashed px-6 py-[5rem] text-center text-white max-sm:text-[0.875rem] sm:px-20 sm:py-20">
                <span>
                  Seeking someone <br />
                  who can steer clear <br />
                </span>
                <span className="mt-[50vh] text-green">this problem?</span>
              </h2>

              <div className="absolute -left-2 -top-2 h-4 w-4 bg-white"></div>
              <div className="absolute -bottom-2 -left-2 h-4 w-4 bg-white"></div>
              <div className="absolute -right-2 -top-2 h-4 w-4 bg-white"></div>
              <div className="absolute -bottom-2 -right-2 h-4 w-4 bg-white"></div>
            </div>
          </div>
        </div>

        <div className="care-card3 relative top-0 min-h-[100vh] bg-black-100 pb-[4rem] sm:pb-[20rem]">
          <div className="card-container relative z-[3] flex min-h-[100vh] w-[100vw] flex-col items-center justify-center rounded-2xl px-20 py-20">
            <h2 className="text-center text-[1.25rem] font-normal leading-[125%] text-white sm:text-[2.5rem] lg:text-[3.5rem]">
              <span className="hidden-word absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2">
                Dont worry, <br /> you just found{" "}
                <span className="anim-green2">one</span>.
              </span>

              <span className="unhidden-word absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 text-nowrap opacity-0">
                We&apos;re not just building <br /> websites - We&apos;re
                crafting your <br />
                <span className="anim-green">digital revenue streams</span>
              </span>

              <span className="unhidden-word2 absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 opacity-0">
                Here are the 3 key steps we take to make it happen.
              </span>
            </h2>

            <div className="z-10 flex w-fit gap-6 max-sm:absolute max-sm:top-32 max-sm:flex-col sm:grid sm:gap-12 md:max-lg:grid-cols-2 md:max-lg:gap-40 lg:mx-8 lg:flex lg:flex-row xl:mx-auto">
              {careList.map(
                ({ title, isDown, text, bgColor, bgImg, handImg, gif }, i) => {
                  return (
                    <NewCard
                      isDown={isDown}
                      text={text}
                      title={title}
                      key={i}
                      bgColor={bgColor}
                      className="care-main-card"
                      bgImg={bgImg}
                      handImg={handImg}
                      id={i + 1}
                      gif={gif}
                    />
                  );
                },
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewCard({ text, title, gif, id }) {
  return (
    <div
      className={`care-main-card relative flex h-[9rem] w-[18rem] flex-col justify-end gap-[0.75rem] overflow-hidden rounded-[0.75rem] bg-[#fff] px-4 py-4 shadow-[-3.538px_3.538px_22.115px_0px_rgba(255,255,255,0.3)] sm:h-[22rem] sm:gap-6 sm:rounded-[2.5rem] sm:px-6 sm:py-12 lg:h-[25rem] lg:w-[19.5rem] ${
        id === 2 && "md:max-lg:row-span-2 md:max-lg:my-auto"
      }`}
    >
      <div className="flex flex-col gap-0 sm:gap-2">
        <span className="leading-none max-sm:text-[0.625rem] sm:font-semibold">
          0{id}
        </span>
        <h2 className="max-sm:h8 sm:font-h5 font-semibold">{title}</h2>
      </div>

      <p className={`max-sm:font-b5 text-pretty font-normal max-sm:opacity-50`}>
        {text}
      </p>

      <div
        className={`absolute -right-[3px] -top-[3px] rounded-full px-2 py-2 sm:-right-[5px] sm:-top-[5px] sm:px-6 sm:py-6 ${
          id === 2 ? "bg-green" : "bg-[#9AACEF]"
        }`}
      >
        {/* <img
          src={gif.src}
          alt={title}
          className="h-[1.4rem] w-[1.4rem] sm:h-[3.5rem] sm:w-[3.5rem]"
        /> */}
        <video
          loop
          autoPlay
          muted
          playsInline
          // preload="auto"
          className="h-[1.4rem] w-[1.4rem] sm:h-[3.5rem] sm:w-[3.5rem]"
        >
          <source src={gif} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default CarePin;
