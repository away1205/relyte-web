import HeroProject from "./HeroProject";
import AboutProject from "./AboutProject";
import OutputProject from "./OutputProject";
import CTASection from "../../_components/CTASection";

export const metadata = {
  title: "Relyte x GoDentist",
  description:
    "GoDentist is an AI-based teledentistry startup, needs a compelling website to build trust, engage users, and attract partnerships with industry giant like Google. A strong online presence will highlighttheir innovative approach, improve patient access, and enhance practitioner capabilities.",
};

function Page() {
  return (
    <main className="overflow-x-clip pt-[5rem]">
      <HeroProject />
      <AboutProject />
      <OutputProject />
      <CTASection />
    </main>
  );
}

export default Page;
