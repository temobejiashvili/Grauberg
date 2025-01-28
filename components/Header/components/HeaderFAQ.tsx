import Image from "next/image";

import faqbackground from "@/public/assets/images/faqBackground.webp";
import faqbackground2 from "@/public/assets/images/FaqBackground2.webp";
import { TranslateText } from "@/components/translateText/TranslateText";

interface HeaderFAQProps {
  is900: boolean;
  headerImageRef: any;
}

const HeaderFAQ = ({ is900, headerImageRef }: HeaderFAQProps) => {
  return (
    <section className="top-0 relative w-full flex justify-center bg-[#F5F5F5]">
      <div className="relative w-full h-[438px] max-h-[438px] max-900:h-[334px] max-900:max-h-[334px] ">
        {!is900 ? (
          <Image
            src={faqbackground}
            alt="coverImage"
            fill
            style={{ zIndex: "0", objectFit: "fill" }}
            placeholder="blur"
          />
        ) : (
          <Image
            src={faqbackground2}
            alt="coverImage"
            fill
            style={{ zIndex: "0", objectFit: "fill" }}
            placeholder="blur"
          />
        )}
      </div>
      <h2
        ref={headerImageRef}
        className="text-center text-[44px] absolute font-bold leading-[56px] text-[#FFFFFF] z-[11] max-900:text-[28px] max-900:leading-[34px] max-900:w-[300px] pt-[174px] max-900:pt-[110px]"
      >
        <TranslateText text="frequentlyAskedQuestions" />
      </h2>
    </section>
  );
};

export default HeaderFAQ;
