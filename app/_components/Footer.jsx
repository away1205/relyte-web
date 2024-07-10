import Link from "next/link";
import HoverFlipWords from "../ui/HoverFlipWords";
// import useDeviceType from '../hooks/useDeviceType';
import MagneticAnim from "../ui/MagneticAnim";
import ContactAddress from "./ContactAddress";
import LinkSocial from "./LinkSocial";

function Footer() {
  // const { isMediumDevice } = useDeviceType();

  return (
    <footer className="flex w-screen justify-center bg-[#191918]" id="footer">
      <div className="max-screen max-lg:px-glob-25 mt-16 flex w-full flex-col justify-between text-[#888888]">
        <div className="flex justify-between max-sm:flex-col max-sm:gap-12">
          <ContactAddress />

          <nav className="max-sm:font-l4 flex gap-24 text-nowrap max-sm:gap-16">
            <div className="flex flex-col gap-2">
              <ul>
                <Link href={"#home"}>
                  <HoverFlipWords inText="Home" />
                </Link>
              </ul>
              <ul>
                <Link href={"#projects"}>
                  <HoverFlipWords inText="Our Projects" />
                </Link>
              </ul>

              <ul className="max-md:hidden">
                <Link href={"#blog"}>
                  <HoverFlipWords inText="Our Blog" />
                </Link>
              </ul>
            </div>

            <div className="flex flex-col gap-2 text-nowrap">
              <ul>
                <Link href={"#about"}>
                  <HoverFlipWords inText="About Us" />
                </Link>
              </ul>
              <ul className="text-nowrap">
                <Link href={"#service"}>
                  <HoverFlipWords inText="Services" />
                </Link>
              </ul>

              <ul className="text-nowrap max-md:hidden">
                <Link href={"#faq"}>
                  <HoverFlipWords inText="FAQ" />
                </Link>
              </ul>
            </div>

            <div className="flex flex-col gap-2 text-nowrap md:hidden">
              <ul>
                <Link href={"#blog"}>
                  <HoverFlipWords inText="Our Blog" />
                </Link>
              </ul>
              <ul className="text-nowrap">
                <Link href={"#faq"}>
                  <HoverFlipWords inText="FAQ" />
                </Link>
              </ul>
            </div>
          </nav>
        </div>

        <LinkSocial />

        <Link href={"#"} className="max-sm:font-l4 mb-10 mt-16 text-nowrap">
          <HoverFlipWords inText="*Privacy & Policy" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
