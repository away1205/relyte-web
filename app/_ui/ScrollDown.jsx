"use client";
import MagneticAnim from "../_ui/MagneticAnim";

function ScrollDown({ transparent = false }) {
  return (
    <MagneticAnim>
      <div
        className={`h-full w-full rounded-full ${transparent ? null : "bg-white"}`}
      >
        <img
          src="/scroll-anim.gif"
          alt="scroll down"
          className="absolute left-[50%] top-0 h-fit w-fit -translate-x-1/2 cursor-pointer px-1 py-1"
        />
      </div>
    </MagneticAnim>
  );
}

export default ScrollDown;
