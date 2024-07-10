import React, { useState } from 'react';

const Accordion = ({ title, answer, className }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className='bg-white border border-black-100 px-5 py-3 rounded-lg h-min'>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className='flex justify-between w-full items-center'
      >
        <h4
          className={`${
            accordionOpen && 'text-green-700'
          } max-sm:font-b4 text-start font-semibold`}
        >
          {title}
        </h4>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className='fill-indigo-500 shrink-0 ml-8'
          width='16'
          height='16'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            y='7'
            width='16'
            height='2'
            rx='1'
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && '!rotate-180'
            }`}
          />
          <rect
            y='7'
            width='16'
            height='2'
            rx='1'
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && '!rotate-180'
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out  text-md ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100 pt-4'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <p className='overflow-hidden'>{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;
