import React from "react";
import Image from "next/image";
import Arrow from "../../public/assets/arrow.svg";
import { BiBorderRadius } from "react-icons/bi";

const AboutCard: React.FC = () => {
  return (
    <>
      <div className="flex items-end shadow-custom bg-[#FFF] rounded-[30px] absolute top-[-66px] left-1/2 transform -translate-x-1/2 z-[11] w-[1194px] h-[580px]  max-1250:w-[1000px]  max-1100:w-[850px] max-1100:justify-center max-900:flex-col max-900:h-[778px] max-900:w-[370px] max-900:top-[-98px]">
        <section className="bg-[#fff] w-[506px] h-[580px] flex  rounded-[30px] max-900:hidden">
          <Image
            src="/assets/images/factoryImage.png"
            alt="factoryImage"
            width={506}
            height={580}
            layout="responsive"
          />
        </section>
        <section className="flex flex-col gap-[32px] pt-[62px] pb-[84px] pr-[56px] pl-[61px] max-1100:px-[35px] max-900:px-[19px] max-900:py-[27px] max-900:gap-[30px]">
          <h2 className="text-[44px] max-900:text-[28px] max-1100:text-[40px] text-[#100F0F] font-bold">
            რა არის <span className="text-[#EE2E24]">გრაუბერგი?</span>
          </h2>
          <div className="flex flex-col justify-between h-[260px] max-w-[571px] max-900:h-[300px] max-w-900:w-[327px]">
            <p className="text-[#5C5C5C] leading-[26px] max-900:text-[14px] max-900:leading-[20px]">
              სამშენებლო მასალების ქართულ ბაზარზე გრაუბერგს მრავალი წელია,
              მნიშვნელოვანი მოთამაშის როლი აქვს. ცემენტის ქარხანა, რომელიც ქალაქ
              ზუგდიდში მდებარეობს, უკვე დიდი ხანია, მომხმარებელს უახლესი
              ტექნოლოგიით დამზადებულ უმაღლესი ხარისხის ცემენტსა და ბეტონს
              სთავაზობს, ბოლო პერიოდში განხორციელებუული რებრენდინგის შემდგომ კი
              ის გრაუბერგის სახელით პოზიციონირებს.
            </p>

            <p className="text-[#5C5C5C] leading-[26px] max-900:text-[14px] max-900:leading-[20px]">
              კონკურენტულ გარემოში თავის დამკვიდრების მიზნით, გრაუბერგის
              პროდუქციას ობიექტურად საუკეთესო ფასი აქვს.
            </p>
          </div>

          <a
            href="/blog"
            className="flex justify-center items-center rounded-[10px] w-[240px] h-[54px] border-[1px] border-solid border-[#D6D6D6] hover:bg-primary hover:text-white transition-colors text-sm text-darkPrimary max-900:w-full max-1100:mt-[35px]"
          >
            ყველა სიახლე
            <Image
              src={Arrow}
              alt={">"}
              width={22}
              height={22}
              className="w-2 object-cover ml-3"
            />
          </a>
        </section>
        <section className="bg-[#fff] pt-[15px] w-full h-[261px] rounded-[30px] hidden max-900:block">
          <Image
            src="/assets/images/image8.png"
            alt="factoryImage"
            width={370}
            height={261}
            layout="responsive"
            style={{ borderRadius: "30px" }}
          />
        </section>
      </div>
      {/* <div className="gradient-border w-[1270px] h-[111px] absolute top-[-111px] left-1/2 transform -translate-x-1/2 z-[9] backdrop-blur-custom bg-opacity-90 rounded-t-[30px]"> */}
      {/* <div className="gradient-inner w-full h-full"></div> */}
      {/* <div className="bg-gradient-to-b from-[rgba(255,255,255,0.3)] to-[rgba(255,255,255,0)] rounded-t-[30px] rounded-b-noney"></div> */}
      {/* </div> */}
    </>
  );
};

export default AboutCard;
