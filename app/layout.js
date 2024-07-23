import { Plus_Jakarta_Sans, Urbanist } from "next/font/google";
import GoogleAnalytics from "./_components/GoogleAnalytics";
import "./globals.css";
import Preloader from "./_components/Preloader";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});
const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata = {
  title: "Relyte Space",
  description:
    "Relyte Space is a digital agency that specializes in website design and development, as well as search engine optimization services for the architectural and construction industries.",

  metadataBase: new URL("https://relyte.space"),
  alternates: {
    canonical: "/",
  },

  openGraph: {
    images: "/relyte-og.png",
    title: "Relyte Space",
    description:
      "Relyte Space is a digital agency that specializes in website design and development, as well as search engine optimization services for the architectural and construction industries.",
    url: "https://relyte.space",
    siteName: "Relyte Space",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={urbanist.className}>
        <Preloader />
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics />
    </html>
  );
}
