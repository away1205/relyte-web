"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Squeeze } from "hamburger-react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import MagneticAnim from "../_ui/MagneticAnim";
import LinkSocial from "./LinkSocial";
import ContactAddress from "./ContactAddress";
import AnimatedLink from "../_ui/AnimatedLink";
import { usePathname } from "next/navigation";

function Header() {
  gsap.registerPlugin(ScrollTrigger);

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef();
  const buttonRef = useRef();
  const navRef = useRef();
  const projectRef = useRef();

  let isMobile;

  useEffect(() => {
    isMobile = window.innerWidth > 640;
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "html",
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          if (isMobile) {
            self.direction === -1 ? showHeader.play() : showHeader.reverse();
          }
          // console.log(velocity);
        },
      },
    });

    const showHeader = gsap
      .from("#header", {
        yPercent: -100,
        paused: true,
        delay: 3,
        duration: 0.3,
      })
      .progress(1);
  }, []);

  useGSAP(() => {
    const tl2 = gsap.timeline({ reversed: true });

    tl2.fromTo(
      ".header-anim",
      { opacity: 0, xPercent: 100 },
      {
        xPercent: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: "power2.out",
      },
    );

    buttonRef.current.addEventListener("click", () =>
      tl2.reversed(!tl2.reversed()),
    );

    navRef.current.addEventListener("click", () => {
      tl2.reversed(!tl2.reversed());
      setIsOpen(false);
    });

    projectRef.current.addEventListener("click", () => {
      tl2.reversed(!tl2.reversed());
      setIsOpen(false);
    });

    return () => {
      buttonRef.current.addEventListener("click", () =>
        tl2.reversed(!tl2.reversed()),
      );

      navRef.current.addEventListener("click", () => {
        tl2.reversed(!tl2.reversed());
        setIsOpen(false);
      });

      projectRef.current.addEventListener("click", () => {
        tl2.reversed(!tl2.reversed());
        setIsOpen(false);
      });
    };

    // { dependencies: [isOpen], scope: containerRef }
  }, []);

  return (
    <header
      className="fixed z-40 w-screen border-b border-[#e0e0e0] bg-white px-4 sm:px-10"
      id="header"
      ref={containerRef}
    >
      <div className="max-screen mx-auto flex items-center justify-between py-4 sm:py-6">
        <MagneticAnim>
          <div>
            <AnimatedLink href={"/"}>
              <img
                src="/relyte-logo.svg"
                alt="Relyte Logo"
                className="h-[2.5rem] w-[6rem] cursor-pointer"
                onClick={() => {
                  gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: `#home` },
                    ease: "power2",
                  });
                }}
              />
            </AnimatedLink>
          </div>
        </MagneticAnim>

        <NavList />

        <MagneticAnim>
          <div>
            <AnimatedLink href={"/contact"}>
              <button className="rounded-3xl border border-black max-md:hidden md:px-4 md:py-1 lg:px-6 lg:py-2">
                Start A Project
              </button>
            </AnimatedLink>
          </div>
        </MagneticAnim>

        <div className="relative md:hidden">
          <div className="relative z-50" ref={buttonRef}>
            <Squeeze
              toggled={isOpen}
              toggle={setIsOpen}
              color={isOpen ? "#C1E693" : "black"}
              label="navigation menu"
            />
          </div>

          <div className="header-anim absolute -right-8 top-0 flex h-[35rem] w-[100vw] flex-col rounded-xl bg-black-100 px-4 py-4 opacity-5 md:hidden">
            <span className="text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="179"
                height="40"
                viewBox="0 0 179 40"
                fill="none"
              >
                <path
                  d="M89.9557 34.4152H94.0715C93.822 33.5145 93.0044 32.8493 92.0205 32.8493C91.0366 32.8493 90.2052 33.5145 89.9557 34.4152ZM94.0299 35.704H90.0111C90.3022 36.5355 91.092 37.1314 92.0205 37.1314C92.7273 37.1314 93.3509 36.7849 93.7389 36.2583H95.1939C94.6951 37.5194 93.4617 38.4201 92.0205 38.4201C90.122 38.4201 88.5977 36.8819 88.5977 34.9973C88.5977 33.0988 90.122 31.5605 92.0205 31.5605C93.9052 31.5605 95.4434 33.0988 95.4434 34.9973C95.4434 35.2329 95.4157 35.4823 95.3602 35.704H94.0299Z"
                  fill="#fff"
                />
                <path
                  d="M88.4639 37.312C87.1752 38.6008 85.0965 38.6008 83.8077 37.312C82.5328 36.0371 82.5328 33.9446 83.8077 32.6697C85.0965 31.3809 87.1752 31.3809 88.4639 32.6697L87.5493 33.5843C85.6924 31.7135 82.8654 34.5405 84.7224 36.4113C85.4984 37.1873 86.7733 37.1873 87.5493 36.4113L88.4639 37.312Z"
                  fill="#fff"
                />
                <path
                  d="M82.0178 34.9974V38.2817H80.729V37.6026V34.9974C80.729 33.8887 79.8421 32.988 78.7335 32.988C77.6249 32.988 76.738 33.8887 76.738 34.9974C76.738 36.0921 77.6249 36.9929 78.7335 36.9929V38.2817C76.9181 38.2817 75.4492 36.8127 75.4492 34.9974C75.4492 33.182 76.9181 31.6992 78.7335 31.6992C80.5489 31.6992 82.0178 33.182 82.0178 34.9974Z"
                  fill="#fff"
                />
                <path
                  d="M71.3312 37.0064C72.4398 37.0064 73.3267 36.1195 73.3267 35.0108C73.3267 33.9022 72.4398 33.0153 71.3312 33.0153C70.2364 33.0153 69.3356 33.9022 69.3356 34.997V35.0108V37.6161V39.182V39.9996H68.0469V35.0108C68.0469 33.1955 69.5158 31.7266 71.3312 31.7266C73.1465 31.7266 74.6154 33.1955 74.6154 35.0108C74.6154 36.8262 73.1465 38.2951 71.3312 38.2951V37.0064Z"
                  fill="#fff"
                />
                <path
                  d="M63.07 36.1617V36.2864C63.07 36.619 63.5689 37.2565 64.4974 37.2565C65.4951 37.2565 65.9247 36.6883 65.9247 36.2864C65.9247 35.8014 63.9708 35.649 63.5966 35.5658C62.6681 35.3718 61.7812 34.9145 61.7812 33.7782C61.7812 32.3508 63.167 31.5332 64.4974 31.5332C65.7446 31.5332 67.2135 32.4894 67.2135 33.7782V33.9167H65.9247V33.7782C65.9247 33.4733 65.3565 32.822 64.4974 32.822C63.5412 32.822 63.07 33.3624 63.07 33.7782C63.07 34.374 64.9685 34.4849 65.3843 34.5681C66.2989 34.7621 67.2135 35.1778 67.2135 36.2864C67.2135 37.6722 65.897 38.5452 64.4974 38.5452C63.1393 38.5452 61.7812 37.5752 61.7812 36.2864V36.1617H63.07Z"
                  fill="#fff"
                />
                <path
                  d="M56.5859 37.0607C56.5859 36.063 57.3989 35.25 58.3967 35.25C59.4314 35.25 60.2444 36.063 60.2444 37.0607C60.2444 38.0955 59.4314 38.9084 58.3967 38.9084C57.3989 38.9084 56.5859 38.0955 56.5859 37.0607Z"
                  fill="#fff"
                />
                <path
                  d="M0.00390625 11.4006C0.00390625 10.4028 0.816895 9.58984 1.81465 9.58984C2.84936 9.58984 3.66235 10.4028 3.66235 11.4006C3.66235 12.4353 2.84936 13.2483 1.81465 13.2483C0.816895 13.2483 0.00390625 12.4353 0.00390625 11.4006Z"
                  fill="#fff"
                />
                <path
                  d="M78.3168 18.3352H89.2921C88.627 15.9332 86.4467 14.1594 83.8229 14.1594C81.1992 14.1594 78.982 15.9332 78.3168 18.3352ZM89.1813 21.7719H78.4646C79.2407 23.9891 81.347 25.5782 83.8229 25.5782C85.7076 25.5782 87.3705 24.6543 88.4052 23.2501H92.2854C90.9551 26.6129 87.6662 29.0149 83.8229 29.0149C78.7603 29.0149 74.6953 24.913 74.6953 19.8872C74.6953 14.8246 78.7603 10.7227 83.8229 10.7227C88.8487 10.7227 92.9506 14.8246 92.9506 19.8872C92.9506 20.5155 92.8767 21.1806 92.7289 21.7719H89.1813Z"
                  fill="#fff"
                />
                <path
                  d="M58.1499 25.4313V20.6643V11.4258H61.5867V20.7382V25.4313C61.5867 30.2723 57.6326 34.1894 52.7916 34.1894H47.4702V30.7527H52.7916C55.0089 30.7527 58.1499 28.5724 58.1499 25.4313ZM48.6528 11.4258V20.4795C48.5789 23.3989 50.6113 24.9879 52.7916 25.2466V28.7572C48.5049 28.4616 45.1421 24.8401 45.216 20.4795V11.4258H48.6528Z"
                  fill="#fff"
                />
                <path
                  d="M36.3845 8.14956L37.718 9.30437V21.5893C37.718 23.5848 39.307 25.2108 41.3025 25.2108H42.9654V28.6475H41.3025C37.4223 28.6475 34.2812 25.4694 34.2812 21.5893V6.58594L36.3845 8.14956Z"
                  fill="#fff"
                />
                <path
                  d="M17.434 18.3352H28.4093C27.7442 15.9332 25.5639 14.1594 22.9401 14.1594C20.3164 14.1594 18.0992 15.9332 17.434 18.3352ZM28.2985 21.7719H17.5818C18.3578 23.9891 20.4642 25.5782 22.9401 25.5782C24.8248 25.5782 26.4877 24.6543 27.5224 23.2501H31.4026C30.0723 26.6129 26.7834 29.0149 22.9401 29.0149C17.8774 29.0149 13.8125 24.913 13.8125 19.8872C13.8125 14.8246 17.8774 10.7227 22.9401 10.7227C27.9659 10.7227 32.0678 14.8246 32.0678 19.8872C32.0678 20.5155 31.9939 21.1806 31.8461 21.7719H28.2985Z"
                  fill="#fff"
                />
                <path
                  d="M2.26953 28.7211V18.8174C2.26953 14.6047 5.6693 11.168 9.91901 11.168H13.4296V14.6047H9.91901C7.59091 14.6047 5.70625 16.4893 5.70625 18.8174V28.7211H2.26953Z"
                  fill="#fff"
                />
                <path
                  d="M63.8945 6.64062V12.5313L64.1138 12.2024C64.8284 11.1306 65.9803 10.4295 67.2606 10.2872V7.76266V6.64062H63.8945Z"
                  fill="#fff"
                />
                <path
                  d="M72.5318 14.6047H67.2844V21.6629C67.2844 23.6584 68.8734 25.2474 70.8689 25.2474H72.5318V28.6842H70.8689C66.9887 28.6842 63.8477 25.5431 63.8477 21.6629V15.9451C63.8477 14.4047 64.6008 12.9605 65.8673 12.0837C66.0171 11.98 66.1927 11.8803 66.3771 11.7873C67.3718 11.2857 68.5037 11.168 69.6177 11.168H72.5318V14.6047Z"
                  fill="#fff"
                />
              </svg>
            </span>

            <div className="mt-10" ref={navRef}>
              <NavList isSmallScreen={true} />
            </div>

            <div className="!mb-0 mt-auto">
              <div className="text-white">
                <ContactAddress />
              </div>

              <div className="relative flex">
                <div className="w-full">
                  <LinkSocial />
                </div>

                <div className="absolute bottom-1 right-4">
                  <AnimatedLink href={"/contact"}>
                    <button
                      className="rounded-3xl border border-white px-4 py-1 text-white"
                      onClick={() => setIsOpen(false)}
                      ref={projectRef}
                    >
                      Start A Project
                    </button>
                  </AnimatedLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavList({ isSmallScreen = false }) {
  const pathname = usePathname();
  // console.log(pathname);

  const navList = [
    { label: "Home", value: "/" },
    { label: "About", value: "/about" },
    { label: "Blog", value: "/blog" },
  ];

  return (
    <ul
      className={`md:flex ${
        !isSmallScreen
          ? "hidden gap-14"
          : "flex flex-col gap-4 text-[2.5rem] font-light uppercase leading-none text-[white] sm:text-[3.75rem]"
      }`}
    >
      {navList.map((item) => {
        return (
          <MagneticAnim key={item.value}>
            <li
              className={`h-fit cursor-pointer ${item.value === pathname && "max-sm:text-green"} transition-all duration-300`}
            >
              <AnimatedLink href={`${item.value}`}>{item.label}</AnimatedLink>
            </li>
          </MagneticAnim>
        );
      })}
    </ul>
  );
}

export default Header;
