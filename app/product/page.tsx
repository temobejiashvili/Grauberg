"use client";
import React from "react";
import AdvantagesCardComponent from "@/components/advantagesCard/AdvantagesCardComponent";
import CalculatorComponent from "@/components/calculator/CalculatorComponent";
import CarouselComponent from "@/components/carousel/CarouselComponent";
import AnimatedBox from "@/components/animatedBox/AnimatedBox";

import ShopIcon from "@/public/assets/icons/shopIcon.svg";
import ScrollBox from "@/components/scrollBox/ScrollBox";
import { useScrollContext } from "../context/ScrollContext";
import { useInView } from "react-intersection-observer";

const Product = () => {
  const { setActiveSection } = useScrollContext();
  const { ref: targetRef, inView: isTargetInView } = useInView({
    threshold: 0.4,
  });

  if (isTargetInView) {
    setActiveSection("target");
  }

  return (
    <div className="pt-[147px]">
      <section
        className={`flex gap-[56px] max-1100:flex-col-reverse max-1100:gap-[162px]`}
      >
        <ScrollBox />
        <div className="h-[724px] flex items-start max-1100:h-[414px]">
          <div
            className="h-[60%] w-[537px] bg-primary 
          rounded-r-[40px]
          max-1100:w-full
          max-1100:rounded-r-none
          max-1100:h-[414px]
          "
            ref={targetRef}
          />
        </div>
        <div className="flex flex-col gap-[47px] max-w-[724px] max-1100:px-[22px]">
          <AnimatedBox isFadeIn={false}>
            <div>
              <h3
                className="font-bold text-44 max-1100:text-28
               text-darkPrimary pb-6
               break-words"
              >
                პორტლანდცემენტი
              </h3>
              <p
                className="font-normal text-[16px] leading-[26px]
               text-darkPrimary text-justify
               max-1100:text-sm"
              >
                <span style={{ wordSpacing: "22px" }}>
                  სამშენებლო მასალების ქართულ ბაზარზე გრაუბერგს მრავალი წელია,{" "}
                </span>
                <br className="max-1100:hidden" />
                <span>
                  მნიშვნელოვანი მოთამაშის როლი აქვს. ცემენტის ქარხანა, რომელიც
                  ქალაქ ზუგდიდში{" "}
                </span>
                <br className="max-1100:hidden" />
                <span style={{ wordSpacing: "1px" }}>
                  მდებარეობს, უკვე დიდი ხანია, მომხმარებელს უახლესი ტექნოლოგიით
                  დამზადებულ{" "}
                </span>
                <br className="max-1100:hidden" />
                <span style={{ wordSpacing: "18px" }}>
                  უმაღლესი ხარისხის ცემენტსა და ბეტონს სთავაზობს, ბოლო პერიოდში{" "}
                </span>
                <br className="max-1100:hidden" />
                <span style={{ wordSpacing: "18px" }}>
                  განხორციელებუული რებრენდინგის შემდგომ კი ის გრაუბერგის სახელით{" "}
                </span>
                <br className="max-1100:hidden" />
                <span style={{ wordSpacing: "2px" }}>
                  პოზიციონირებს. კონკურენტულ გარემოში თავის დამკვიდრების მიზნით,
                  გრაუბერგის{" "}
                </span>
                <br className="max-1100:hidden" />
                <span>პროდუქციას ობიექტურად საუკეთესო ფასი აქვს.</span>
              </p>
            </div>
          </AnimatedBox>
          <AnimatedBox isFadeIn={false}>
            <div
              className="flex flex-col gap-[47px] border-stroke border border-solid 
            h-[237px] rounded-3xl py-5 px-[30px]
            max-1100:h-[unset]"
            >
              <span className="bg-black flex items-center justify-center w-[58px] h-[58px] rounded-full">
                <ShopIcon />
              </span>
              <div>
                <h4 className="font-bold text-2xl text-darkPrimary">
                  80-94% კლინკერი
                </h4>
                <p className="font-normal text-[16px] leading-[26px] text-darkPrimary">
                  შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპო
                  გრაფ იული ნაწარმის შემქმნელებს, რეალურთან მაქს
                </p>
              </div>
            </div>
          </AnimatedBox>
        </div>
      </section>
      <div
        style={{
          background: "linear-gradient(0deg, #FFFFFF 10%, #F5F5F5 100%)",
        }}
      >
        <div className="flex flex-col items-center w-full gap-7 pt-[45px]">
          <AnimatedBox isFadeIn={false}>
            <h1 className="max-w-[1002px] font-bold text-44 text-darkPrimary">
              ჩვენი ცემენტის გამოყენება
            </h1>
          </AnimatedBox>
          <AnimatedBox isFadeIn={false}>
            <p className="max-w-[975px] font-normal text-[16px] leading-[26px] text-darkPrimary text-center">
              Grauberg CEM II/A-P 42.5 N სერია იდეალურია სამოქალაქო და
              ინდუსტრიული სამშენებლო პროექტებისთვის, როგორიცაა გზები, ხიდები,
              საცხოვრებელი შენობები და ინფრასტრუქტურული ობიექტები, სადაც
              აუცილებელია ძლიერი და გრძელვადიანი მასალები.
            </p>
          </AnimatedBox>
        </div>
        <CarouselComponent />
      </div>
      <div
        className="w-full flex justify-center mb-[167px]
      max-1100:px-[22px]"
      >
        <CalculatorComponent />
      </div>
      <AdvantagesCardComponent />
      <div className="w-full bg-backgroundGrey h-[86px] rounded-b-60 absolute"></div>
    </div>
  );
};

export default Product;
