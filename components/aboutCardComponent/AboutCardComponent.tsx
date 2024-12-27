import React from "react";
import LogoMini from "../../public/assets/logoMini.svg";

interface AboutCardComponentType {
  title: string;
  details: string;
}

const AboutCardComponent: React.FC<AboutCardComponentType> = ({
  title,
  details,
}) => {
  return (
    <div className="max-w-3xl mx-auto rounded-lg shadow-md border border-gray-200 overflow-hidden bg-backgroundGrey">
      {/* Header Section */}
      <div className="flex items-center ">
        {/* Icon */}
        <div
          className="relative rounded-br-[34px] p-[1px]  "
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
         bg-[#f5efef]"
          >
            <div className="w-[41px] mt-[9px] h-[40px] flex-shrink-0  text-white flex items-center justify-center rounded-full">
              {/* Add the actual SVG or Icon */}
              <LogoMini />
            </div>
          </div>
        </div>
        {/* Title */}
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
          "
          >
            <h2 className="ml-3 w-full text-28 font-bold text-darkPrimary">
              {title}
            </h2>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div
        className="px-6 py-4 text-darkPrimary text-16 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: details }}
      />
    </div>
  );
};

export default AboutCardComponent;
