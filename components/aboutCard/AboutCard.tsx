import React from "react";
import Image from "next/image";
import Arrow from "../../public/assets/arrow.svg";
import { TranslateText } from "../translateText/TranslateText";
import Link from "next/link";

const AboutCard: React.FC = () => {
  return (
    <div className="relative z-[11] flex items-end shadow-custom bg-white rounded-[30px] w-[1194px] h-[580px] mx-auto max-1250:w-[1000px] max-1100:w-[850px] max-1100:justify-center max-900:flex-col max-900:h-[778px] max-900:w-[370px]">
      {/* Left Section with Image */}
      <div className="w-[506px] h-[580px] rounded-[30px] max-900:hidden">
        <Image
          src="/assets/images/factoryImage.png"
          alt="factoryImage"
          width={506}
          height={580}
          className="rounded-[30px]"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-8 p-8 max-900:p-5 max-900:gap-6">
        <h2 className="text-[44px] max-900:text-[28px] max-1100:text-[37px] text-black font-bold">
          <TranslateText text="what" />
          <span className="text-primary">
            <TranslateText text="grauberg" />
          </span>
        </h2>
        <div className="flex flex-col gap-4 text-gray-600 leading-6 max-900:text-sm max-900:leading-5">
          <TranslateText text="graubergStory" />
          <TranslateText text="aboutPrice" />
        </div>

        {/* View All Button */}
        <Link
          href="/about-us"
          className="group flex justify-center items-center rounded-lg w-[240px] h-[54px] border border-gray-300 hover:bg-primary transition-colors text-sm text-darkPrimary hover:text-white max-900:w-full max-1100:mt-2"
        >
          <TranslateText text="viewAll" />
          <Arrow className="w-2 ml-3 group-hover:invert" />
        </Link>
      </div>

      {/* Mobile Image Section */}
      <div className="w-full h-[261px] rounded-[30px] bg-white pt-4 hidden max-900:block">
        <Image
          src="/assets/images/image8.png"
          alt="factoryImage"
          width={370}
          height={261}
          className="rounded-[30px]"
        />
      </div>
    </div>
  );
};

export default AboutCard;
