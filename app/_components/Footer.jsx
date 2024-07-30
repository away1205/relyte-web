"use client";
import Link from "next/link";
import HoverFlipWords from "../_ui/HoverFlipWords";
import ContactAddress from "./ContactAddress";
import LinkSocial from "./LinkSocial";
import gsap from "gsap";
import AnimatedLink from "../_ui/AnimatedLink";

function Footer() {
  // const { isMediumDevice } = useDeviceType();

  return (
    <footer className="flex w-screen justify-center bg-[#191918]" id="footer">
      <div className="max-screen max-lg:px-glob-25 mt-16 flex w-full flex-col justify-between text-[#888888]">
        <div className="flex justify-between max-sm:flex-col max-sm:gap-12">
          <ContactAddress />

          <nav className="max-sm:font-l4 flex gap-24 text-nowrap max-sm:gap-16">
            <ul className="flex flex-col gap-2">
              <li>
                <Link href={"/"}>
                  <HoverFlipWords inText="Home" />
                </Link>
              </li>
              <li>
                <Link
                  href={"#projects-section"}
                  onClick={(e) => {
                    e.preventDefault();
                    gsap.to(window, { scrollTo: "#projects-section" });
                  }}
                >
                  <HoverFlipWords inText="Our Projects" />
                </Link>
              </li>

              <li className="md:hidden">
                <AnimatedLink href={"/blog"}>
                  <HoverFlipWords inText="Our Blog" />
                </AnimatedLink>
              </li>
            </ul>

            <ul className="flex flex-col gap-2 text-nowrap">
              <li>
                <AnimatedLink href={"/about"}>
                  <HoverFlipWords inText="About Us" />
                </AnimatedLink>
              </li>
              <li className="text-nowrap">
                <Link
                  href={"#service-section"}
                  onClick={(e) => {
                    e.preventDefault();
                    gsap.to(window, { scrollTo: "#service-section" });
                  }}
                >
                  <HoverFlipWords inText="Services" />
                </Link>
              </li>

              {/* MOBILE */}
              <li className="text-nowrap md:hidden">
                <Link
                  href={"/#faq-section"}
                  onClick={(e) => {
                    e.preventDefault();
                    gsap.to(window, { scrollTo: "#faq-section" });
                  }}
                >
                  <HoverFlipWords inText="FAQ" />
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col gap-2 text-nowrap max-md:hidden">
              <li>
                <AnimatedLink href={"/blog"}>
                  <HoverFlipWords inText="Our Blog" />
                </AnimatedLink>
              </li>

              <li className="text-nowrap">
                <Link
                  href={"/#faq-section"}
                  onClick={(e) => {
                    // e.preventDefault();
                    gsap.to(window, { scrollTo: "#faq-section" });
                  }}
                  // scroll={false}
                >
                  <HoverFlipWords inText="FAQ" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-6 py-6">
          <LinkSocial />
        </div>

        <Link
          href={"/terms-conditions"}
          className="max-sm:font-l4 mb-10 mt-16 text-nowrap"
        >
          <HoverFlipWords inText="*Terms & Conditions" />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
