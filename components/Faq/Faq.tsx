"use client";
import { useState } from "react";
import LoaderComponent from "../loaderComponent/LoaderComponent";
import { useTranslation } from "react-i18next";
import { faqs } from "@/content/faqs";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { t } = useTranslation("common");

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <LoaderComponent>
      <section className="bg-gray-100 w-full relative py-20">
        <div className="absolute w-full max-w-[1072px] left-1/2 transform -translate-x-1/2 bg-white rounded-xl py-6 px-10 shadow-lg max-900:px-5 max-1250:max-w-[900px] max-1100:max-w-[800px] max-900:max-w-[370px]">
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <div key={index} className="border-b border-gray-300">
                <button
                  className="py-6 px-5 flex justify-between items-center w-full text-left text-black font-medium focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isActive}
                >
                  <p className="leading-7">{t(faq.question)}</p>
                  {AccordionIcon(isActive)}
                </button>
                {isActive && (
                  <div className="px-5 py-4 bg-gray-100 text-gray-700 transition-all duration-500 overflow-hidden">
                    <p className="leading-7">{t(faq.answer)}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </LoaderComponent>
  );
};

const AccordionIcon = (isActive: boolean) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="#EE2E24"
    className={`w-5 h-5 transition-transform duration-300 ${
      isActive ? "rotate-180" : ""
    }`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export default FAQAccordion;
