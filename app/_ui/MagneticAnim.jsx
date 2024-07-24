"use client";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

function MagneticAnim({ children }) {
  const magnetic = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        const xTo = gsap.quickTo(magnetic.current, "x", {
          duration: 1,
          ease: "elastic.out(1, 0.3)",
        });
        const yTo = gsap.quickTo(magnetic.current, "y", {
          duration: 1,
          ease: "elastic.out(1, 0.3)",
        });

        magnetic.current.addEventListener("mousemove", handleMouseMove);
        magnetic.current.addEventListener("mouseleave", handleMouseLeave);

        function handleMouseMove(e) {
          const { clientX, clientY } = e;
          const { width, height, left, top } =
            magnetic.current.getBoundingClientRect();
          const x = clientX - (left + width / 2);
          const y = clientY - (top + height / 2);
          xTo(x * 0.5);
          yTo(y * 0.5);
        }

        function handleMouseLeave() {
          xTo(0);
          yTo(0);
        }

        // Clean up
        return () => {
          magnetic.current.removeEventListener("mousemove", handleMouseMove);
          magnetic.current.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    };

    // Initial check
    handleResize();
    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Clean up on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return React.cloneElement(children, { ref: magnetic });
}

export default MagneticAnim;
