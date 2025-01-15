"use client";
import { useState } from "react";
import LoaderComponent from "../loaderComponent/LoaderComponent";
import { useTranslation } from "react-i18next";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useTranslation("common");

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "quest1",
      answer: "answ1",
    },
    {
      question: "quest2",
      answer: "answ2",
    },
    {
      question: "quest3",
      answer: "answ3",
    },
    {
      question: "quest4",
      answer: "answ4",
    },
    {
      question: "quest5",
      answer: "answ5",
    },
    {
      question: "quest6",
      answer: "answ6",
    },
    {
      question: "quest7",
      answer: "answ7",
    },
    {
      question: "quest8",
      answer: "answ8",
    },
    {
      question: "quest9",
      answer: "answ9",
    },
    {
      question: "quest10",
      answer: "answ10",
    },
    {
      question: "quest11",
      answer: "answ11",
    },
    {
      question: "quest12",
      answer: "answ12",
    },
    {
      question: "quest13",
      answer: "answ13",
    },
    {
      question: "quest14",
      answer: "answ14",
    },
    {
      question: "quest15",
      answer: "answ15",
    },
    {
      question: "quest16",
      answer: "answ16",
    },

    {
      question: "quest17",
      answer: "answ17",
    },
    {
      question: "quest18",
      answer: "answ18",
    },
    {
      question: "quest19",
      answer: "answ19",
    },
  ];

  return (
    <>
      <LoaderComponent>
        <div className="bg-[#F5F5F5] w-full relative h-[1784px]">
          <div className="absolute w-[1072px] left-1/2 top-[-111px] transform -translate-x-1/2 bg-[#FFF] rounded-[20px] py-[16px] px-[40px] shadow-lg max-900:px-[20px] max-1250:w-[900px] max-1100:w-[800px] max-900:w-[370px]">
            {faqs.map((faq, index) => (
              <>
                <div
                  key={index}
                  className={`${activeIndex === index && "bg-[#F5F5F5]"}`}
                >
                  <button
                    className="py-[30px] px-[40px] flex justify-between items-center w-full text-left text-[#100F0F] focus:outline-none max-900:px-[0px] max-900:py-[14px]"
                    onClick={() => toggleAccordion(index)}
                  >
                    <p className="leading-[26px]">{t(faq.question)}</p>
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
                    <p>{t(faq.answer)}</p>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </LoaderComponent>
    </>
  );
};

export default FAQAccordion;
