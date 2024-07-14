import React, { useState } from "react";

const Accordion = ({ title, answer, className }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="h-min rounded-lg border border-black-100 bg-white px-5 py-3">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex w-full items-center justify-between"
      >
        <h3
          className={`${
            accordionOpen && "text-green-700"
          } text-start font-normal max-sm:text-[0.875rem] lg:font-semibold`}
        >
          {title}
        </h3>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="ml-8 shrink-0 fill-indigo-500"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center transform transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center rotate-90 transform transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`text-md grid overflow-hidden transition-all duration-300 ease-in-out ${
          accordionOpen
            ? "grid-rows-[1fr] pt-4 opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden max-sm:text-[0.875rem] lg:font-semibold">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Accordion;
