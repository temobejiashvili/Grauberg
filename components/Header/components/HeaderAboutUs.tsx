import Image from "next/image";

import { TranslateText } from "@/components/translateText/TranslateText";

import subtract1 from "@/public/assets/images/Subtttract.webp";
import subtract2 from "@/public/assets/images/Subbbbtract.webp";

interface HeaderAboutUsProps {
  is900: boolean;
  headerImageRef: any;
}

const HeaderAboutUs = ({ is900, headerImageRef }: HeaderAboutUsProps) => {
  return (
    <section className="w-full h-[703px]">
      <div className="top-0 relative w-full h-full overflow-hidden flex justify-center items-center">
        {!is900 ? (
          <Image
            src={subtract1}
            alt="coverImage"
            layout="fill"
            loading="eager"
            placeholder="empty"
          />
        ) : (
          <Image
            src={subtract2}
            alt="coverImage"
            layout="fill"
            loading="eager"
            placeholder="empty"
          />
        )}
        <span
          ref={headerImageRef}
          className="text-[56px] font-bold leading-[66px]
           text-[#F5F5F5] z-[2] max-900:text-[36px]
            max-900:leading-[44px] -translate-y-[31px]
             max-900:-translate-y-[44px]"
        >
          <TranslateText text="about" />
        </span>
      </div>
      <div className="w-full relative">
        <div className="flex items-center justify-center absolute tra top-[-20px] left-1/2 transform -translate-x-1/2 w-[54px] h-[54px] rounded-[50%] bg-[#EE2E24] max-900:top-[-10px]">
          <Image
            src="/assets/icons/Arrow1.svg"
            alt="arrow"
            width={16}
            height={16}
            style={{ zIndex: "0" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeaderAboutUs;
