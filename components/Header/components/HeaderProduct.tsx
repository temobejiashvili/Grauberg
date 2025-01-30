import Image from "next/image";

import subtract from "@/public/assets/images/Subtract.webp";
import subtract3 from "@/public/assets/images/Subtract2.webp";
import { TranslateText } from "@/components/translateText/TranslateText";

interface HeaderProductProps {
  is900: boolean;
  headerRef: any;
  headerImageRef: any;
  i18n: any;
}

const HeaderProduct = ({
  is900,
  headerRef,
  headerImageRef,
  i18n,
}: HeaderProductProps) => {
  return (
    <section className="flex flex-col items-center">
      <div className="w-[calc(100%-66px)] h-[752px] flex justify-center max-1250:h-[700px] max-900:w-full  max-900:h-[568px]">
        <div className="top-0 relative w-[calc(100%-3px)] h-[751px] overflow-hidden flex justify-center  max-1250:h-[700px] max-900:h-[568px] ">
          <span className="w-[1px] h-[1px]" ref={headerRef}></span>
          <Image
            src={is900 ? subtract3 : subtract}
            alt="coverImage"
            fill
            style={{ zIndex: "0", objectFit: "fill" }}
            placeholder="blur"
          />
          <h2
            ref={headerImageRef}
            className={`w-[804px] text-center text-[70.56px]
             font-bold leading-[88px]  text-[#100F0F]
              z-[2] pt-[220px] max-1100:text-[56px]
               max-900:w-[382px] max-900:text-[36px]
                max-900:leading-[44px]
                ${
                  i18n.language === "en"
                    ? "text-[78px]"
                    : "text-[70.56px] leading-[88px]"
                }
                `}
          >
            <TranslateText text="strengthYou" />{" "}
            <TranslateText text="canBuildOn" />
          </h2>
        </div>
      </div>
      <div className="w-full relative">
        <div className="flex items-center justify-center absolute tra top-[-20px] left-1/2 transform -translate-x-1/2 w-[54px] h-[54px] rounded-[50%] bg-[#EE2E24] max-900:top-[-10px]">
          <Image
            src="/assets/icons/Arrow1.svg"
            alt="arrowImage"
            width={16}
            height={16}
            style={{ zIndex: "0" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderProduct;
