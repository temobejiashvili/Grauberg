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
          />
        </section>
        <section className="flex flex-col gap-[32px] pt-[62px] pb-[84px] pr-[56px] pl-[61px] max-1250:px-[30px] max-1250:pb-[60px] max-1100:gap-[25px] max-1100:pb-[30px] max-1100:px-[35px] max-900:px-[19px] max-900:py-[27px] max-900:gap-[30px]">
          <h2 className="text-[44px] max-900:text-[28px] max-1100:text-[37px] text-[#100F0F] font-bold ">
            რა არის <span className="text-[#EE2E24]">გრაუბერგი?</span>
          </h2>
          <div className="flex flex-col justify-between h-[260px] max-w-[571px] max-1250:h-[300px] max-1100:h-[355px] max-900:h-[300px] max-w-900:w-[327px]">
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
            className="group flex justify-center items-center rounded-[10px] w-[240px] h-[54px] border-[1px] border-solid border-[#D6D6D6] hover:bg-primary transition-colors text-sm text-darkPrimary hover:text-white max-900:w-full max-1100:mt-[10px]"
          >
            ყველა სიახლე
            <Arrow className="w-2 object-cover ml-3 group-hover:filter group-hover:brightness-0 group-hover:invert" />
          </a>
        </section>
        <section className="bg-[#fff] pt-[15px] w-full h-[261px] rounded-[30px] hidden max-900:block">
          <Image
            src="/assets/images/image8.png"
            alt="factoryImage"
            width={370}
            height={261}
            style={{ borderRadius: "30px" }}
          />
        </section>
      </div>

      <div
        className="absolute top-[-112px] w-[1270px] h-[112px] left-1/2 transform -translate-x-1/2 rounded-t-[30px] z-[9] max-1300:w-[1250px] max-1250:w-[1080px] max-1100:w-[900px] max-1100:h-[100px]  max-1100:top-[-100px] max-900:hidden "
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      ></div>
    </>
  );
};

export default AboutCard;
