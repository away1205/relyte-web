import iDesign from '../../public/illustration-design.svg';
import iCoding from '../../public/illustration-coding.svg';
import iHosting from '../../public/illustration-hosting.svg';
import { FadeInAnim } from '../ui/Animation';

const cardList = [
  {
    id: 1,
    title: 'Web Design',
    text: 'We transform your online presence with custom-designed websites that are not only visually stunning but also incredibly fast and easy to update. We blend functionality with flair, ensuring your website stands out and performs seamlessly.',
    image: iDesign,
    color: 'bg-[#C6B9EE]',
    direction: 'left',
  },
  {
    id: 2,
    title: 'Coding & Dev',
    text: "At Relyte, we craft custom websites coded to perfection, ensuring that every detail reflects your brand's excellence. Our websites are designed with flexibility and ease of management in mind, making future updates a breeze.",
    image: iCoding,
    color: 'bg-[#C1E693]',
    direction: 'right',
  },
  {
    id: 3,
    title: 'Hosting & Support',
    text: 'We provide fast, fully supported, cloud-based hosting and maintenance services in 8 big countries around the world: Lithuania, Australia, Singapore, France, Netherlands, United Kingdom, Indonesia, and United States',
    image: iHosting,
    color: 'bg-[#F2F2F2]',
    direction: 'left',
  },
];

function WhatWeDoSection() {
  return (
    <section className='max-screen w-full flex flex-col items-start gap-[4.5rem] my-[3.4rem] sm:my-32 max-lg:px-glob-25'>
      <FadeInAnim direction='' toggleActions='play none restart none'>
        <div className='flex flex-col justify-start gap-2'>
          <p className='uppercase h8 max-sm:font-normal'>Our Services</p>
          <h2 className='uppercase max-sm:text-[1.25rem]'>
            What We Can <br /> Do For You?
          </h2>
        </div>
      </FadeInAnim>

      <div className='flex flex-col w-full gap-8'>
        {cardList.map(({ id, image, text, title, color, direction }) => {
          return (
            <FadeInAnim
              key={id}
              direction={direction}
              duration={1.5}
              toggleActions='play none none none'
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
    <div className='flex px-8 py-8 gap-9 rounded-2xl border border-gray-400 flex-wrap flex-col md:flex-row'>
      <div className='flex basis-1/3'>
        <div className='flex items-start mx-auto max-lg:flex-col'>
          <p className='font-semibold lg:text-xl mr-8 max-lg:mb-6'>0{id}</p>

          <div className='flex flex-col items-start gap-2 sm:gap-4 lg:gap-8'>
            <h3 className='uppercase max-lg:text-[20px]'>{title}</h3>
            <p className='text-balance max-lg:text-[0.75rem] lg:text-[0.9rem]'>
              {text}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`${bgColor} w-auto min-h-[14rem] grow shrink md:bg-[length:400px_300px] lg:bg-auto bg-no-repeat  ${
          title == 'Coding & Dev' ? 'bg-[left]' : 'bg-[center]'
        } rounded-2xl`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  );
}

export default WhatWeDoSection;
