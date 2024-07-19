import iDesign from "../../public/illustration-design.svg";
import iCoding from "../../public/illustration-coding.svg";
import iHosting from "../../public/illustration-hosting.svg";
import { FadeInAnim } from "../_ui/Animation";

const cardList = [
  {
    id: 1,
    title: "Web Design",
    text: "We transform your online presence with custom-designed websites that are not only visually stunning but also incredibly fast and easy to update. We blend functionality with flair, ensuring your website stands out and performs seamlessly.",
    image: iDesign,
    color: "bg-[#C6B9EE]",
    direction: "left",
  },
  {
    id: 2,
    title: "Coding & Dev",
    text: "At Relyte, we craft custom websites coded to perfection, ensuring that every detail reflects your brand's excellence. Our websites are designed with flexibility and ease of management in mind, making future updates a breeze.",
    image: iCoding,
    color: "bg-[#C1E693]",
    direction: "right",
  },
  {
    id: 3,
    title: "Hosting & Support",
    text: "We provide fast, fully supported, cloud-based hosting and maintenance services in 8 big countries around the world: Lithuania, Australia, Singapore, France, Netherlands, United Kingdom, Indonesia, and United States, making your website accessible around the world.",
    image: iHosting,
    color: "bg-[#F2F2F2]",
    direction: "left",
  },
];

function ServiceSection() {
  return (
    <section className="max-screen max-lg:px-glob-25 my-[3.4rem] flex w-full flex-col items-start gap-5 sm:my-32 sm:gap-[4.5rem]">
      <FadeInAnim direction="" toggleActions="play none restart none">
        <div className="flex flex-col justify-start gap-2 max-sm:gap-0">
          <p className="h8 uppercase max-sm:text-[0.75rem] max-sm:font-light">
            Our Services
          </p>
          <h2 className="uppercase max-sm:text-[1.5rem]">
            What We Can <br /> Do For You?
          </h2>
        </div>
      </FadeInAnim>

      <div className="flex w-full flex-col gap-8">
        {cardList.map(({ id, image, text, title, color, direction }) => {
          return (
            <FadeInAnim
              key={id}
              direction={direction}
              duration={1.5}
              toggleActions="play none none none"
            >
              <Card
                key={id}
                title={title}
                text={text}
                image={image.src}
                id={id}
                bgColor={color}
              />
            </FadeInAnim>
          );
        })}
      </div>
    </section>
  );
}

function Card({ title, text, image, id, bgColor }) {
  return (
    <div className="flex flex-col flex-wrap gap-5 rounded-2xl border border-gray-400 px-5 py-5 sm:gap-9 sm:px-8 sm:py-8 md:flex-row">
      <div className="flex basis-1/3">
        <div className="mx-auto flex items-start max-lg:flex-col">
          <p className="mb-4 mr-8 font-normal sm:mb-6 sm:font-semibold lg:text-xl">
            0{id}
          </p>

          <div className="flex flex-col items-start gap-2 sm:gap-4 lg:gap-8">
            <h3 className="font-h3 uppercase max-lg:text-[20px]">{title}</h3>
            <p className="text-balance max-lg:text-[0.75rem] lg:text-[0.9rem]">
              {text}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`${bgColor} min-h-[14rem] w-auto shrink grow bg-[length:16rem_11rem] bg-no-repeat md:bg-[length:400px_300px] lg:bg-auto ${
          title == "Coding & Dev" ? "bg-[left_bottom]" : "bg-[center_bottom]"
        } rounded-2xl`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  );
}

export default ServiceSection;
