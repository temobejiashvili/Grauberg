"use client";

import { useState } from "react";

type FaqType = {
  question: string;
  answer: string;
};

interface SingleQuestionComponentType {
  faq: FaqType;
  index: number;
}

const SingleQuestionComponent = ({
  faq,
  index,
}: SingleQuestionComponentType) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div key={index} className={`${activeIndex === index && "bg-[#F5F5F5]"}`}>
        <button
          className="py-[30px] px-[40px] flex justify-between items-center w-full text-left text-[#100F0F] focus:outline-none max-900:px-[0px] max-900:py-[14px]"
          onClick={() => toggleAccordion(index)}
        >
          <p className="leading-[26px]">{faq.question}</p>
          <span className="ml-[15px]">
            {activeIndex === index ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#EE2E24"
                className="w-5 h-5 rotate-180 transition-transform duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="#EE2E24"
                className="w-5 h-5 transition-transform duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </span>
        </button>
      </div>
      <div className="w-[100%] border-[1px] border-solid border-[#D6D6D6]"></div>
      {activeIndex === index && (
        <div className="text-[#5C5C5C] py-[20px] px-[40px] bg-[#F5F5F5] min-h-[86px] flex items-center transition-all duration-500 overflow-hidden max-w-[full] leading-[26px] max-900:px-[5px] max-900:py-[12px]">
          <p>{faq.answer}</p>
        </div>
      )}
    </>
  );
};

export default SingleQuestionComponent;
