import FormHero from "./FormHero";
import ContactForm from "./ContactForm";

function page() {
  return (
    <main className="max-screen relative mx-auto flex flex-col items-center max-sm:overflow-x-clip">
      <FormHero />
      <ContactForm />
    </main>
  );
}

export default page;
