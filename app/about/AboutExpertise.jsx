import AboutAccordion from "./AboutAccordion";

const expertiseList = [
  {
    title: "SEO",
    text: "Keyword Research / On-Page SEO / Off-Page SEO / Technical SEO / Content Optimization / Link Building / SEO Audits / Analytics & Reporting",
  },
  {
    title: "DESIGN",
    text: "Visual Identity /   User Interface / User Experience /  Design System /  Motion Design /  Website Design /  Prototyping / Interactive Design /  Responsive Design /",
  },
  {
    title: "DEVELOPMENT",
    text: "Front-End Development / Back-End Development / Full-Stack Development / CMS Integration / Custom Web Applications / API Development / Mobile Optimization",
  },
  {
    title: "HOSTING & SUPPORT",
    text: "Reliable Hosting in 8 Countries / Domain Management / SSL Certificates / Site Backups / Security Monitoring / Performance Optimization / Technical Support / Regular Updates",
  },
];

function AboutExpertise() {
  return (
    <section className="max-screen my-20 flex flex-col px-4 sm:mt-40 sm:px-8">
      <div className="flex flex-col gap-4 sm:gap-[3.5rem]">
        <span className="font-b3 xl:font-h5 sm:text-[1.25rem]">
          /Brand & Clients
        </span>
        <p className="font-b1 xl:font-h2 sm:text-right sm:text-[1.875rem] xl:w-[100%] xl:text-[3rem]">
          <span>“Experience the future of design with us, </span>
          <span>
            where data meets art to create visual experiences and brand that
            speak directly to your audience
          </span>
        </p>
      </div>

      <div className="flex flex-col sm:w-[85%] sm:place-self-end">
        <img
          src="/about-expertise.png"
          alt="illustration of building a website"
          className="my-12 aspect-auto sm:mt-16"
        />

        <div className="mb-12 flex flex-col max-sm:gap-4 sm:flex-row sm:justify-between">
          <h2 className="font-h7 sm:font-h6 xl:font-h4 w-[10rem] sm:w-[20%]">
            Our main expertise
          </h2>

          <p className="font-b2 xl:font-b1 sm:w-[21rem] xl:w-[31rem]">
            We cover all your digital needs, from crafting stunning and
            user-friendly websites to ensuring robust hosting, SEO optimization,
            and exceptional support.
          </p>
        </div>

        <div className="flex w-[80%] flex-col place-self-end sm:w-full">
          {expertiseList.map((item, index) => {
            return (
              <AboutAccordion
                title={item.title}
                answer={item.text}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AboutExpertise;
