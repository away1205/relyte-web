import HeroProject from "./HeroProject";
import AboutProject from "./AboutProject";
import OutputProject from "./OutputProject";
import CTASection from "../../_components/CTASection";

function Page() {
  return (
    <main className="pt-[5rem]">
      <HeroProject />
      <AboutProject />
      <OutputProject />
      <CTASection />
    </main>
  );
}

export default Page;
