import React from "react";
import dynamic from "next/dynamic";
import AdvantagesCardComponent from "@/components/advantagesCard/AdvantagesCardComponent";
import AnimatedBox from "@/components/animatedBox/AnimatedBox";
import ScrollBox from "@/components/scrollBox/ScrollBox";
import RedBoxComponent from "./RedBoxComponent";

// Dynamic imports to reduce initial JavaScript payload
const CarouselComponent = dynamic(
  () => import("@/components/carousel/CarouselComponent"),
  {
    ssr: false,
  }
);
const CalculatorComponent = dynamic(
  () => import("@/components/calculator/CalculatorComponent"),
  {
    ssr: false,
  }
);
const LoaderComponent = dynamic(
  () => import("@/components/loaderComponent/LoaderComponent"),
  {
    ssr: false,
  }
);

import ShopIcon from "@/public/assets/icons/shopIcon.svg";

const Product = () => {
  return (
    <div className="pt-[147px]">
      {/* Header Section */}
      <section className="flex gap-14 max-1100:flex-col-reverse max-1100:gap-40">
        <ScrollBox />
        <RedBoxComponent />
        <div className="flex flex-col gap-12 max-w-[724px] max-1100:px-6">
          {/* Animated Header Content */}
          <AnimatedBox isFadeIn={false}>
            <div>
              <h3 className="font-bold text-44 text-darkPrimary pb-6 break-words max-1100:text-28">
                პორტლანდცემენტი
              </h3>
              <p className="font-normal text-[16px] leading-[26px] text-darkPrimary text-justify max-1100:text-sm">
                სამშენებლო მასალების ქართულ ბაზარზე გრაუბერგს მრავალი წელია,
                მნიშვნელოვანი მოთამაშის როლი აქვს. ცემენტის ქარხანა, რომელიც
                ქალაქ ზუგდიდში მდებარეობს, უკვე დიდი ხანია, მომხმარებელს უახლესი
                ტექნოლოგიით დამზადებულ უმაღლესი ხარისხის ცემენტსა და ბეტონს
                სთავაზობს. ბოლო პერიოდში განხორციელებული რებრენდინგის შემდეგ, ის
                პოზიციონირებს გრაუბერგის სახელით. კონკურენტულ გარემოში თავის
                დამკვიდრების მიზნით, გრაუბერგის პროდუქციას ობიექტურად საუკეთესო
                ფასი აქვს.
              </p>
            </div>
          </AnimatedBox>

          {/* Highlight Box */}
          <AnimatedBox isFadeIn={false}>
            <div className="flex flex-col gap-12 border border-stroke h-[237px] rounded-3xl py-5 px-8 max-1100:h-auto">
              <span className="bg-black flex items-center justify-center w-[58px] h-[58px] rounded-full">
                <ShopIcon />
              </span>
              <div>
                <h4 className="font-bold text-2xl text-darkPrimary">
                  80-94% კლინკერი
                </h4>
                <p className="font-normal text-[16px] leading-[26px] text-darkPrimary">
                  შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპო
                  გრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქს.
                </p>
              </div>
            </div>
          </AnimatedBox>
        </div>
      </section>

      {/* Usage Section */}
      <LoaderComponent>
        <div className="bg-gradient-to-t from-white to-gray-100">
          <div className="flex flex-col items-center w-full gap-7 pt-11">
            <AnimatedBox isFadeIn={false}>
              <h1 className="max-w-[1002px] font-bold text-44 text-darkPrimary text-center">
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
      </LoaderComponent>

      {/* Calculator Section */}
      <div className="w-full flex justify-center mb-40 max-1100:px-6">
        <CalculatorComponent />
      </div>

      {/* Advantages Section */}
      <AdvantagesCardComponent />

      {/* Footer Section */}
      <div className="w-full bg-backgroundGrey h-[140px] rounded-b-60 absolute"></div>
    </div>
  );
};

export default Product;
