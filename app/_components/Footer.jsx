"use client";
import Link from "next/link";
import HoverFlipWords from "../_ui/HoverFlipWords";
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
            <ul className="flex flex-col gap-2">
              <li>
                <Link href={"#home"}>
                  <HoverFlipWords inText="Home" />
                </Link>
              </li>
              <li>
                <Link href={"#projects"}>
                  <HoverFlipWords inText="Our Projects" />
                </Link>
              </li>

              <li className="md:hidden">
                <Link href={"#blog"}>
                  <HoverFlipWords inText="Our Blog" />
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col gap-2 text-nowrap">
              <li>
                <Link href={"#about"}>
                  <HoverFlipWords inText="About Us" />
                </Link>
              </li>
              <li className="text-nowrap">
                <Link href={"#service"}>
                  <HoverFlipWords inText="Services" />
                </Link>
              </li>

              <li className="text-nowrap md:hidden">
                <Link href={"#faq"}>
                  <HoverFlipWords inText="FAQ" />
                </Link>
              </li>
            </ul>

            <ul className="flex flex-col gap-2 text-nowrap max-md:hidden">
              <li>
                <Link href={"#blog"}>
                  <HoverFlipWords inText="Our Blog" />
                </Link>
              </li>
              <li className="text-nowrap">
                <Link href={"#faq"}>
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
