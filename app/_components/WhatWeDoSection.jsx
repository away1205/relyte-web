import iDesign from '../../public/Illustration-design.svg';
import iCoding from '../../public/Illustration-coding.svg';
import iHosting from '../../public/Illustration-hosting.svg';

const cardList = [
  {
    id: 1,
    title: 'Web Design',
    text: 'We transform your online presence with custom-designed websites that are not only visually stunning but also incredibly fast and easy to update. We blend functionality with flair, ensuring your website stands out and performs seamlessly.',
    image: iDesign,
  },
  {
    id: 2,
    title: 'Coding & Dev',
    text: "At Relyte, we craft custom websites coded to perfection, ensuring that every detail reflects your brand's excellence. Our websites are designed with flexibility and ease of management in mind, making future updates a breeze.",
    image: iCoding,
  },
  {
    id: 3,
    title: 'Web Design',
    text: 'We transform your online presence with custom-designed websites that are not only visually stunning but also incredibly fast and easy to update. We blend functionality with flair, ensuring your website stands out and performs seamlessly.',
    image: iHosting,
  },
];

function WhatWeDoSection() {
  return (
    <section className='min-h-screen flex flex-col items-center'>
      <h2 className='uppercase'>What we do</h2>

      <div className='flex'>
        {cardList.map(({ id, image, text, title }) => {
          return (
            <Card
              key={id}
              title={title}
              text={text}
              image={image.src}
              id={id}
            />
          );
        })}
      </div>
    </section>
  );
}

function Card({ title, text, image, id }) {
  return (
    <div className='flex flex-col px-6 py-8 gap-9 md:w-[30rem] rounded-2xl border border-gray-400'>
      <div className='mx-auto flex'>
        <div className='flex flex-col justify-between items-start gap-14'>
          <h3 className='uppercase'>{title}</h3>
          <p className='text-balance'>{text}</p>
        </div>

        <p className='font-semibold text-xl'>0{id}</p>
      </div>

      <img src={image} alt='Ilustrasi' />
    </div>
  );
}

export default WhatWeDoSection;
