"use client";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function Preloader() {
  const [index, setIndex] = useState(0);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const pathRef = useRef();

  gsap.registerPlugin(ScrollToPlugin);

  const words = [
    "Hello",
    "Ciao",
    "Guten tag",
    "안녕",
    "Bonjour",
    "你好",
    "こんにちは",
    "Hola",
    "Hello",
  ];
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
    dimension.height
  } L0 0`;

  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;

    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 500 : 150,
    );
  }, [index, words.length]);

  useEffect(() => {
    const pathElement = pathRef.current;

    setTimeout(
      () => {
        // Animation on exit
        const timeline = gsap.timeline();
        timeline.to("#preloader", {
          duration: 2,
          yPercent: -100,
          ease: "power4.out",
          backgroundColor: "transparent",
          // opacity: 0,
        });
        timeline.to(
          pathElement,
          {
            attr: { d: targetPath },
            duration: 1,
          },
          "<",
        );
        timeline.to("#preloader", { display: "none" });

        if (isHome) {
          gsap.to(window, { scrollTo: { y: 0, x: 0 } });
        }

        // document.getElementById("main").style.cursor = "default";
        // window.scrollTo(0, 0);
      },
      isHome ? 2000 : 1,
    );
  }, [initialPath, targetPath, isHome]);

  return (
    <div
      id="preloader"
      className={`fixed left-0 top-0 z-50 flex h-[100vh] w-[100vw] items-center justify-center bg-black text-2xl text-white ${pathname !== "/" && "hidden"}`}
    >
      {dimension.height > 0 && (
        <>
          <p className="z-50">{words[index]}</p>
          <svg className="absolute left-0 top-0 h-[120%] w-[100%]">
            <path ref={pathRef} id="svg" d={initialPath} fill="black"></path>
          </svg>
        </>
      )}
    </div>
  );
}

export default Preloader;
