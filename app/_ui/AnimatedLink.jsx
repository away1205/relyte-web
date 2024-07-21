"use client";
import gsap from "gsap";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function AnimatedLink({ children, href }) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {}, [pathname]);

  async function handleTransition(e) {
    e.preventDefault();

    if (pathname === href) return;

    // const body = document.querySelector("#transition-page");

    // body?.classList.add("animate-page-out");

    // await sleep(300);

    const body = document.querySelector("#transition-page");
    body?.classList.add("animate-page-out");

    gsap.to(body, { y: 40, opacity: 0 });

    await sleep(300);
    router.push(href);
  }

  return (
    <Link onClick={handleTransition} href={href}>
      {children}
    </Link>
  );
}

export default AnimatedLink;
