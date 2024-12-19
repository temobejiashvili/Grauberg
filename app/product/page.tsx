import React from "react";
import AdvantagesCardComponent from "@/components/advantagesCard/AdvantagesCardComponent";
import CalculatorComponent from "@/components/calculator/CalculatorComponent";
import CarouselComponent from "@/components/carousel/CarouselComponent";

const Product = () => {
  return (
    <div>
      <section className="flex gap-[56px]">
        <div className="h-[724px] flex items-start">
          <div className="h-[75%] w-[537px] bg-primary rounded-r-[40px]"></div>
        </div>
        <div>
          <div>
            <h3 className="font-bold text-44 text-darkPrimary">
              პორტლანდცემენტი
            </h3>
            <p className="font-normal text-[16px] leading-[26px] text-darkPrimary">
              სამშენებლო მასალების ქართულ ბაზარზე გრაუბერგს მრავალი წელია,
              მნიშვნელოვანი მოთამაშის როლი აქვს. ცემენტის ქარხანა, რომელიც ქალაქ
              ზუგდიდში მდებარეობს, უკვე დიდი ხანია, მომხმარებელს უახლესი
              ტექნოლოგიით დამზადებულ უმაღლესი ხარისხის ცემენტსა და ბეტონს
              სთავაზობს, ბოლო პერიოდში განხორციელებუული რებრენდინგის შემდგომ კი
              ის გრაუბერგის სახელით პოზიციონირებს. კონკურენტულ გარემოში თავის
              დამკვიდრების მიზნით, გრაუბერგის პროდუქციას ობიექტურად საუკეთესო
              ფასი აქვს.
            </p>
          </div>
          <div>
            <span></span>
            <div>
              <h4>80-94% კლინკერი</h4>
              <p>
                შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპო
                გრაფ იული ნაწარმის შემქმნელებს, რეალურთან მაქს
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        style={{
          background: "linear-gradient(0deg, #FFFFFF 10%, #F5F5F5 100%)",
        }}
      >
        <div className="flex flex-col items-center w-full gap-7 pt-[45px]">
          <h1 className="max-w-[1002px] font-bold text-44 text-darkPrimary">
            ჩვენი ცემენტის გამოყენება
          </h1>
          <p className="max-w-[975px] font-normal text-[16px] leading-[26px] text-darkPrimary text-center">
            Grauberg CEM II/A-P 42.5 N სერია იდეალურია სამოქალაქო და ინდუსტრიული
            სამშენებლო პროექტებისთვის, როგორიცაა გზები, ხიდები, საცხოვრებელი
            შენობები და ინფრასტრუქტურული ობიექტები, სადაც აუცილებელია ძლიერი და
            გრძელვადიანი მასალები.
          </p>
        </div>

        <CarouselComponent />
      </div>
      <div className="w-full flex justify-center mb-[167px]">
        <CalculatorComponent />
      </div>
      <AdvantagesCardComponent />
      <div className="w-full bg-backgroundGrey h-[86px] rounded-b-60 absolute"></div>
    </div>
  );
};

export default Product;
