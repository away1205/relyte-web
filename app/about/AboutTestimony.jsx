"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Testimony from "../_components/Testimony";

function AboutTestimony() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
  ]);

  const testimony = [
    {
      name: "Arma Chaniago",
      position: "Founder of Artajaya",
      image: "/project-artajaya-testimony.png",
      testimony:
        "Relyte transformed our vision into a stunning, elegant website that perfectly conveys our commitment to environmental sustainability. They seamlessly integrated our critical data, making our message clear and compelling. The project was delivered quickly and efficiently, just in time for our investor presentation. Highly recommended!",
    },
    {
      name: "Abdul Malik Shodiqin",
      position: "CEO of GoDentist",
      image: "/project-godentist-testimony.png",
      testimony:
        "The Relyte team is thorough and visionary, understanding business, user, and developer concepts to create product designs backed by data. This data-driven approach ensures that our websites are not just visually appealing but also highly effective, making them easy to trust and incredibly useful for our company.",
    },
  ];

  return (
    <section className="max-screen px-4 pt-28">
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {testimony.map((item) => {
              return (
                <div className="embla__slide px-8" key={item.name}>
                  <Testimony
                    name={item.name}
                    position={item.position}
                    image={item.image}
                    testimony={item.testimony}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* <Testimony /> */}
    </section>
  );
}

export default AboutTestimony;
