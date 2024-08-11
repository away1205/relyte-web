import HeroProject from "./HeroProject";
import AboutProject from "./AboutProject";
import OutputProject from "./OutputProject";
import CTASection from "../../_components/CTASection";
import Footer from "../../_components/Footer";

export const metadata = {
  title: "Relyte x GoDentist",
  description:
    "GoDentist is an AI-based teledentistry startup, needs a compelling website to build trust, engage users, and attract partnerships with industry giant like Google. A strong online presence will highlight their innovative approach, improve patient access, and enhance practitioner capabilities.",

  openGraph: {
    images: "https://relyte.space/project-godentist.png",
    title: "Relyte x GoDentist",
    description:
      "GoDentist is an AI-based teledentistry startup, needs a compelling website to build trust, engage users, and attract partnerships with industry giant like Google. A strong online presence will highlight their innovative approach, improve patient access, and enhance practitioner capabilities.",
    url: "https://relyte.space/projects/go-dentist",
    locale: "en_US",
    type: "article",
  },
};

function Page() {
  return (
    <main className="overflow-x-clip pt-[5rem]">
      <HeroProject />
      <AboutProject />
      <OutputProject />
      <CTASection />
      <Footer />
    </main>
  );
}

export default Page;
