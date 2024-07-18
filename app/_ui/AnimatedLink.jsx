import Link from "next/link";
import { useRouter } from "next/navigation";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function AnimatedLink({ children, href }) {
  const router = useRouter();

  async function handleTransition(e) {
    e.preventDefault();

    const body = document.querySelector("body");

    body?.classList.add("page-transition");

    await sleep(300);

    router.push(href);

    await sleep(300);

    body?.classList.remove("page-transition");
  }

  return (
    <Link onClick={(e) => handleTransition(e)} href={href}>
      {children}
    </Link>
  );
}

export default AnimatedLink;
