import TextTicker from "../_ui/TextTicker";

const teamMember = [
  {
    name: "Agwam",
    position: "Web Developer",
    description:
      "Meet Agwam, our night-owl developer who codes under the moonlight and seeks inspiration at dawn. With six years in drafting and graphic design before switching to web development in 2021, Agwam blends creativity and technical skill to craft exceptional digital experiences.",
    image: "/about-agwam.png",
  },
  {
    name: "Charlene",
    position: "Product Designer",
    description:
      "Artajaya struggled with effectively communicating their activities in a digital format, which hindered their digital presence and",
    image: "/about-charlene.png",
  },
  {
    name: "Chelsea",
    position: "SEO & Content Strategist",
    description:
      "Meet Chelsea, our SEO and Content Strategist. Starting as a content strategist for an esports team in 2020, Chelsea has since optimized digital presences and created engaging content. Her expertise drives traffic and boosts online visibility, ensuring we shine.",
    image: "/about-chelsea.png",
  },
];

function AboutTeam() {
  return (
    <section className="w-screen bg-[#111] py-20 sm:py-[6.25rem] xl:py-[10rem]">
      <TextTicker isSkew={false} bgPrimary="transparent">
        {Array(7)
          .fill()
          .map((_, index) => (
            <div className="ml-2 flex gap-2 lg:ml-6 lg:gap-6" key={index}>
              <h2 className="text-[3rem] uppercase text-[#888] sm:text-[5rem]">
                Meet our team -
              </h2>
            </div>
          ))}
      </TextTicker>

      <div className="max-screen mt-[3.5rem] flex flex-col gap-6 px-4 sm:mt-[4.75rem] sm:gap-12 sm:px-8 xl:mx-auto xl:mt-4 xl:gap-4">
        {teamMember.map((member, index) => {
          return (
            <MemberCard
              key={index}
              name={member.name}
              position={member.position}
              description={member.description}
              image={member.image}
              num={index + 1}
            />
          );
        })}
      </div>
    </section>
  );
}

function MemberCard({ name, position, image, description, num }) {
  return (
    <div
      className={`flex flex-col xl:w-[85%] xl:flex-row ${num === 2 && "place-self-end"}`}
    >
      <div className="dot-bg flex flex-col gap-3 rounded-2xl px-4 py-4 sm:gap-5 sm:rounded-[2rem] sm:px-8 sm:py-8 xl:col-span-2 xl:rounded-[3.125rem] xl:px-10 xl:py-10">
        <img
          src={image}
          alt="agwam picture"
          className="aspect-auto object-cover"
        />

        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-[1.55rem] font-semibold uppercase leading-none sm:text-[3rem] sm:tracking-[0.06rem]">
              {name}
            </span>

            <span className="font-b2 uppercase text-[#888]">{position}</span>
          </div>

          <div className="font-h7">0{num}/03</div>
        </div>
      </div>

      <div className="flex flex-col place-content-end rounded-2xl border-t-2 border-dashed border-black bg-white px-4 py-4 sm:rounded-[2rem] sm:px-8 sm:py-8 xl:w-[24rem] xl:rounded-[3.125rem] xl:border-l-4 xl:border-t-0">
        <p className="font-b2 xl:font-b1 text-balance">{description}</p>
      </div>
    </div>
  );
}

export default AboutTeam;
