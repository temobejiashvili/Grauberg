import Image from "next/image";
import dynamic from "next/dynamic";

import AdvantagesInfo from "./AdvantagesInfo";

import adventagesImage from "@/public/images/advantagesImage.png";
import { TranslateText } from "../translateText/TranslateText";

const AnimatedBox = dynamic(() => import("../animatedBox/AnimatedBox"), {
  ssr: true,
});

const AdvantagesCardComponent = () => {
  return (
    <div
      className="rounded-t-[50px] w-full flex bg-backgroundGrey
    max-600:flex-col"
    >
      <div className="w-[634px] h-[634px] max-600:w-full max-600:h-[465px]">
        <Image
          height={634}
          width={634}
          src={adventagesImage}
          alt="adv"
          placeholder="blur"
          className="rounded-tl-[50px] max-600:rounded-tl-[0px] max-600:w-full max-600:h-[465px]"
        />
      </div>
      <div
        className="pt-[47px] pl-[54px] max-600:pl-[22px]
       max-600:pr-[22px] m-auto"
      >
        <AnimatedBox isFadeIn>
          <h1 className="font-bold max-w-[672px] text-36 mb-[35px] text-darkPrimary opacity-0 animate-fadeIn">
            <TranslateText text="cementAdventages" />
          </h1>
        </AnimatedBox>
        <AnimatedBox isFadeIn={false}>
          <div className="bg-white rounded-30 max-w-[621px] w-full p-[30px]">
            <AdvantagesInfo
              title={"highQuality"}
              info={"internationalStandards"}
            />
            <div className="w-full bg-stroke h-[1px] my-[25px]" />
            <AdvantagesInfo title={"endurance"} info={"extremeClimatic"} />
            <div className="w-full bg-stroke h-[1px] my-[25px]" />
            <AdvantagesInfo
              title={"ecologicStandards"}
              info={"ecologicStandardsInfo"}
            />
          </div>
        </AnimatedBox>
      </div>
    </div>
  );
};

export default AdvantagesCardComponent;
