import AboutHero from "./AboutHero";
import AboutExpertise from "./AboutExpertise";
import AboutTeam from "./AboutTeam";
import AboutTestimony from "./AboutTestimony";
import CTASection from "../_components/CTASection";
import Footer from "../_components/Footer";

export const metadata = {
  title: "Relyte - About",
  description:
    "Relyte Space is a digital agency that create data-driven website that visually stunning, innovative and drive results. Experience the future of design with Relyte, where data meets art to create visual experiences and brand that speak directly to your audience.",

  openGraph: {
    images: "/about-hero.png",
    title: "About Relyte",
    description:
      "Relyte Space is a digital agency that create data-driven website that visually stunning, innovative and drive results. Experience the future of design with Relyte, where data meets art to create visual experiences and brand that speak directly to your audience.",
    url: "https://relyte.space",
    siteName: "Relyte Space",
    locale: "en_US",
    type: "website",
  },
};

function Page() {
  return (
    <main className="relative mx-auto flex min-h-screen flex-col items-center max-sm:overflow-x-clip">
      <AboutHero />
      <AboutExpertise />
      <AboutTeam />
      <AboutTestimony />
      <CTASection />
      <Footer />
    </main>
  );
}

export default Page;
