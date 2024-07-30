import HeroProject from "./HeroProject";
import AboutProject from "./AboutProject";
import OutputProject from "./OutputProject";
import CTASection from "../../_components/CTASection";
import Footer from "../../_components/Footer";

export const metadata = {
  title: "Relyte x GoDentist",
  description:
    "The Relyte team is thorough and visionary, understanding business, user, and developer concepts to create product designs backed by data. This data-driven approach ensures that our websites are not just visually appealing but also highly effective, making them easy to trust and incredibly useful for our company.",

  openGraph: {
    images: "https://relyte.space/project-godentist.png",
    title: "Relyte x GoDentist",
    description:
      "The Relyte team is thorough and visionary, understanding business, user, and developer concepts to create product designs backed by data. This data-driven approach ensures that our websites are not just visually appealing but also highly effective, making them easy to trust and incredibly useful for our company.",
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
