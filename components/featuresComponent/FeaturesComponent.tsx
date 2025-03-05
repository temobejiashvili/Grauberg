import { TranslateText } from "../translateText/TranslateText";

import TickIcon from "@/public/assets/icons/tickIcon.svg";
import ArrowsIcon from "@/public/assets/icons/arrowsIcon.svg";
import PiggyBankIcon from "@/public/assets/icons/piggyBankIcon.svg";
import TimerIcon from "@/public/assets/icons/timerIcon.svg";

const features = [
  { Icon: TickIcon, text: "strengthDurability" },
  { Icon: ArrowsIcon, text: "versatileUse" },
  { Icon: PiggyBankIcon, text: "offered" },
  { Icon: TimerIcon, text: "fastSolidity" },
];

export default function FeaturesComponent() {
  return (
    <section>
      <h4
        className="font-bold text-36 flex flex-col
       justify-center items-center
       max-600:text-28"
      >
        <TranslateText text="portlandcements" />
        <span className="text-primary">
          <TranslateText text="features" />
        </span>
      </h4>
      <div className="flex justify-center mt-[65px] mb-[110px] px-[22px]">
        <ul className="flex justify-center gap-7 flex-wrap max-w-[1200px]">
          {features.map(({ Icon, text }) => (
            <div
              className="w-[278px] px-[22px] py-[26px] h-[257px]
              flex flex-col
              bg-backgroundGrey border border-stroke rounded-[18px]"
            >
              <span className="bg-primary flex justify-center items-center w-[56px] h-[56px] rounded-full">
                <Icon />
              </span>
              <p className="mt-[89px] font-normal text-[20px] leading-[30px] text-darkPrimary">
                <TranslateText text={text} />
              </p>
            </div>
          ))}
        </ul>
      </div>
    </section>
  );
}
