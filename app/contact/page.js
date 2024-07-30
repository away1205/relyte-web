import FormHero from "./FormHero";
import ContactForm from "./ContactForm";
import Footer from "../_components/Footer";

function page() {
  return (
    <main className="max-screen relative mx-auto flex flex-col items-center max-sm:overflow-x-clip">
      <FormHero />
      <ContactForm />
      <Footer />
    </main>
  );
}

export default page;
