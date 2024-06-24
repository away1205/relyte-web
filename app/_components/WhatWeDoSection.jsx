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
    text: 'We provide fast, fully supported, cloud-based hosting services in 8 big countries around the world: Lithuania, Brazil ,Singapore, France, Netherlands, United Kingdom, Indonesia, and United States',
    image: iHosting,
    color: 'bg-[#F2F2F2]',
    direction: 'left',
  },
];

function WhatWeDoSection() {
  return (
    <section className='max-screen w-full flex flex-col items-start gap-[4.5rem] my-32'>
      <FadeInAnim direction='' toggleActions='play none restart none'>
        <div className='flex flex-col justify-start gap-2'>
          <p className='uppercase h8'>Our Services</p>
          <h2 className='uppercase'>
            What We Can <br /> Do For You?
          </h2>
        </div>
      </FadeInAnim>

      <div className='flex flex-col w-full gap-8'>
        {cardList.map(({ id, image, text, title, color, direction }) => {
          return (
            <FadeInAnim key={id} direction={direction}>
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
        <div className='flex items-start mx-auto'>
          <p className='font-semibold text-xl mr-8'>0{id}</p>

          <div className='flex flex-col items-start gap-8'>
            <h3 className='uppercase'>{title}</h3>
            <p className='text-balance text-[0.9rem]'>{text}</p>
          </div>
        </div>

        {/* <p className='font-semibold text-xl'>0{id}</p> */}
      </div>

      {/* <img src={image} alt='Ilustrasi' className='' /> */}
      <div
        className={`${bgColor} w-auto min-h-[14rem] grow shrink bg-auto bg-no-repeat ${
          title == 'Coding & Dev' ? 'bg-[left]' : 'bg-[center]'
        } rounded-2xl`}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
    </div>
  );
}

export default WhatWeDoSection;
