import Link from "next/link";
import MagneticAnim from "../_ui/MagneticAnim";

function ProjectButton({ children, href }) {
  return (
    <MagneticAnim>
      <Link href={href} target="_blank" className="w-fit">
        <button className="w-fit rounded-full border border-black bg-black px-6 py-[0.38rem] uppercase text-white transition-all duration-500 hover:scale-105 hover:bg-white hover:font-semibold hover:text-black sm:px-16">
          {children}
        </button>
      </Link>
    </MagneticAnim>
  );
}

export default ProjectButton;
