import HeroProject from "./HeroProject";
import AboutProject from "./AboutProject";
import OutputProject from "./OutputProject";

function Page() {
  return (
    <main className="pt-[5rem]">
      <HeroProject />
      <AboutProject />
      <OutputProject />
    </main>
  );
}

export default Page;
