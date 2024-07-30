"use client";
import React, { useState } from "react";

const AboutAccordion = ({ title, answer, className }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="h-min border-t border-black-100 bg-white px-5 py-3 sm:py-12">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex w-full items-center justify-between"
      >
        <h3
          className={`${
            accordionOpen && "text-green-700"
          } sm:font-d4-reg xl:font-d3 text-start text-[1rem] font-semibold`}
        >
          {title}
        </h3>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="35"
          viewBox="0 0 34 35"
          className={`h-8 w-8 transition-all sm:h-[3.375rem] sm:w-[3.375rem] ${accordionOpen && "rotate-[135deg]"}`}
          fill="none"
        >
          <path
            d="M17.0363 9.00914C16.7718 9.00884 16.518 9.11379 16.331 9.30083C16.1439 9.48787 16.039 9.74164 16.0393 10.0062L16.0322 16.9146L9.11672 16.9146C8.8522 16.9143 8.59844 17.0192 8.41139 17.2063C8.22435 17.3933 8.1194 17.6471 8.1197 17.9116C8.1197 18.4632 8.56518 18.9086 9.11672 18.9086L16.0322 18.9086L16.0322 25.8241C16.0322 26.3757 16.4777 26.8212 17.0292 26.8212C17.5808 26.8212 18.0263 26.3757 18.0263 25.8241L18.0263 18.9086L24.9418 18.9086C25.4933 18.9086 25.9388 18.4632 25.9388 17.9116C25.9388 17.3601 25.4933 16.9146 24.9418 16.9146H18.0263L18.0263 9.99909C18.0263 9.46169 17.5737 9.00914 17.0363 9.00914Z"
            fill="#888888"
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
        <p className="font-b4-bold sm:font-b2 w-[12rem] overflow-hidden sm:w-[80%]">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default AboutAccordion;
