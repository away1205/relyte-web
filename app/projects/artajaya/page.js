import HeroProject from "./HeroProject";
import AboutProject from "./AboutProject";
import OutputProject from "./OutputProject";
import CTASection from "../../_components/CTASection";

export const metadata = {
  title: "Relyte x Artajaya",
  description:
    "Relyte transformed our vision into a stunning, elegant website that perfectly conveys our commitment to environmental sustainability. They seamlessly integrated our critical data, making our message clear and compelling. The project was delivered quickly and efficiently, just in time for our investor presentation. Highly recommended!",

  openGraph: {
    images: "https://relyte.space/project-artajaya.png",
    title: "Relyte x Artajaya",
    description:
      "Relyte transformed our vision into a stunning, elegant website that perfectly conveys our commitment to environmental sustainability. They seamlessly integrated our critical data, making our message clear and compelling. The project was delivered quickly and efficiently, just in time for our investor presentation. Highly recommended!",
    url: "https://relyte.space/projects/artajaya",
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
    </main>
  );
}

export default Page;
