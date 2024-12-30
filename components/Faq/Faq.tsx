"use client";
import { useState } from "react";
import LoaderComponent from "../loaderComponent/LoaderComponent";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const faqs = [
    {
      question: "რა განსხვავებაა ცემენტის/ბეტონის სახეობებს შორის?",
      answer:
        "თქვენ შეგიძლიათ ნახოთ მომხმარებლის შეგიძლიათ ნახოთ მომხმარებლისშეგიძლიათ ნახოთ მომხმარებლისშეგიძლიათ ნახოთ მომხმარებლისშეგიძლიათ ნახოთ მომხმარებლისშეგიძლიათ ნახოთ მომხმარებლისპროფილის დეტალები.დეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალებიდეტალები",
    },
    {
      question: "რა განსხვავებაა ცემენტსა და ბეტონს შორის?",
      answer:
        "ცემენტი და ბეტონი განსხვავებული მასალებია. ცემენტი არის ფხვნილი, რომელიც წყლის დამატებით სითხისებრი ხდება და გამაგრების პროცესში შრება. მას ბეტონისა და მოზაიკის ნარევის შემკვრელის სახით მოვიხმართ. ბეტონი კი ცემენტის, წყლის, ქვიშის და ხრეშის ნარევია, რომელიც ნაგებობების მშენებლობაში გამოიყენება. შესაბამისად, ცემენტი ბეტონის ერთ-ერთი კომპონენტია, რომელიც სხვადასხვა მასალას აერთიანებს და სიმტკიცეს უზრუნველყოფს.",
    },
    {
      question: "რა უპირატესობებით გამოირჩევა გრაუბერგის ცემენტი/ბეტონი?",
      answer: "დოკუმენტაცია მოიცავს პირად ინფორმაციასა და დოკუმენტებს.",
    },
    {
      question: "როგორ შევარჩიო ჩემი პროექტის შესაფერისი ცემენტი/ბეტონი?",
      answer: "დოკუმენტაცია მოიცავს პირად ინფორმაციასა და დოკუმენტებს.",
    },
    {
      question: "რომელი ცემენტი/ბეტონი ჯობს სახლის მშენებლობისთვის?",
      answer: "დოკუმენტაცია მოიცავს პირად ინფორმაციასა და დოკუმენტებს.",
    },
    {
      question:
        "როგორ გამოვთვალო, რა რაოდენობის ცემენტი/ბეტონი მჭირდება ჩემი პროექტისთვის?",
      answer: "დოკუმენტაცია მოიცავს პირად ინფორმაციასა და დოკუმენტებს.",
    },
    {
      question:
        "რა უნდა ვიცოდე ცემენტის/ბეტონის შერევის და გამოყენების შესახებ?",
      answer: "დოკუმენტაცია მოიცავს პირად ინფორმაციასა და დოკუმენტებს.",
    },
    {
      question: "რა დრო სჭირდება ცემენტის/ბეტონის გამყარებას?",
      answer: "დოკუმენტაცია მოიცავს პირად ინფორმაციასა და დოკუმენტებს.",
    },
    {
      question:
        "როგორ პირობებში შევინახო ცემენტი/ბეტონი, რომ მათი ხარისხი შევინარჩუნო?",
      answer: "დოკუმენტაცია მოიცავს პირად ინფორმაციასა და დოკუმენტებს.",
    },
    {
      question: "რა არის ცემენტის/ბეტონის სტანდარტული შენახვის ვადა?",
      answer: "დოკუმენტაცია მოიცავს პირად ინფორმაციასა და დოკუმენტებს.",
    },
    {
      question: "როგორ აკმაყოფილებს გრაუბერგი ხარისხის სტანდარტებს?",
      answer: "დოკუმენტაცია მოიცავს პირად ინფორმაციასა და დოკუმენტებს.",
    },
    {
      question:
        "შემიძლია, გრაუბერგის ცემენტი/ბეტონი ეკოლოგიურად სუფთა მშენებლობისთვის გამოვიყენო?",
      answer: "დოკუმენტაცია მოიცავს პირად ინფორმაციასა და დოკუმენტებს.",
    },
    {
      question: "როგორ ხდება გრაუბერგის ცემენტის/ბეტონის შეკვეთა?",
      answer: "დოკუმენტაცია მოიცავს პირად ინფორმაციასა და დოკუმენტებს.",
    },
    {
      question: "რა არის ცემენტის/ბეტონის მინიმალური შეკვეთის რაოდენობა?",
      answer: "დოკუმენტაცია მოიცავს პირად ინფორმაციასა და დოკუმენტებს.",
    },
    {
      question:
        "მთავაზობს გრაუბერგი საბითუმო ან ინდივიდუალურ შეკვეთებს დიდი პროექტებისთვის?",
      answer: "დოკუმენტაცია მოიცავს პირად ინფორმაციასა და დოკუმენტებს.",
    },
    {
      question:
        "ცემენტის/ბეტონის მიწოდების რა სახის სერვისს მთავაზობს გრაუბერგი?",
      answer: "დოკუმენტაცია მოიცავს პირად ინფორმაციასა და დოკუმენტებს.",
    },

    {
      question: "შემიძლია გრაუბერგის ცემენტის/ბეტონის დაბრუნება ან გაცვლა?",
      answer: "დოკუმენტაცია მოიცავს პირად ინფორმაციასა და დოკუმენტებს.",
    },
    {
      question:
        " როგორ მივიღო კონსულტაცია გრაუბერგის პროდუქტებთან დაკავშირებით?",
      answer: "დოკუმენტაცია მოიცავს პირად ინფორმაციასა და დოკუმენტებს.",
    },
  ];

  return (
    <>
      <LoaderComponent>
        <div className="bg-[#F5F5F5] w-full relative h-[1684px]">
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
            ))}
          </div>
        </div>
      </LoaderComponent>
    </>
  );
};

export default FAQAccordion;
