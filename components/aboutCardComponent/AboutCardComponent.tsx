"use client";
import LogoMini from "../../public/assets/logoMini.svg";
import { useVisibility } from "@/components/context/VisibilityContext";
import { useTranslation } from "react-i18next";

interface AboutCardComponentType {
  title: string;
  details: string;
  anotherParagraph?: string;
}

const AboutCardComponent: React.FC<AboutCardComponentType> = ({
  title,
  details,
  anotherParagraph,
}) => {
  const { isVisible, ref } = useVisibility();
  const { t } = useTranslation();

  return (
    <div
      ref={ref}
      className={`max-w-6xl mx-auto rounded-lg border border-gray-200 overflow-hidden bg-backgroundGrey transition-all duration-700 delay-200 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-20 translate-y-5"
      }`}
    >
      <div className="flex items-center ">
        <div
          className="relative rounded-br-[34px] p-[1px]"
          style={{
            background: "linear-gradient(142deg, #F5F5F5 60%, #F29893 100%)",
          }}
        >
          <div
            className="w-[203px] h-[101px] 
          flex justify-center
           items-center
           rounded-tl-[23px]
           rounded-br-[34px]
           bg-[#f5efef]
           max-900:w-[78px] max-900:h-[74px]"
          >
            <div className="w-[41px] mt-[9px] h-[40px] flex-shrink-0  text-white flex items-center justify-center rounded-full">
              <LogoMini />
            </div>
          </div>
        </div>
        <div
          className="relative rounded-bl-[34px] w-full p-[1px] ml-2"
          style={{
            background: "linear-gradient(192deg, #F5F5F5 50%, #F29893 100%)",
          }}
        >
          <div
            className="h-[101px] 
            flex justify-start
            items-center
            w-full
            pl-7
            rounded-bl-[34px]
            bg-[#f5efef]
            max-900:h-[74px]"
          >
            <h2
              className="ml-3 w-full text-28 font-bold text-darkPrimary
              max-900:text-[20px] max-900:leading-[30px]"
            >
              {t(title)}
            </h2>
          </div>
        </div>
      </div>

      <div
        className="px-6 py-[47px] text-darkPrimary text-16 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: t(details) }}
      />
      {anotherParagraph && (
        <div
          className="px-6 pb-[47px] text-darkPrimary text-16 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t(anotherParagraph) }}
        />
      )}
    </div>
  );
};

export default AboutCardComponent;
