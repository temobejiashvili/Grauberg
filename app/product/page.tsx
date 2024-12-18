import React from "react";
import AdvantagesCardComponent from "@/components/advantagesCard/AdvantagesCardComponent";
import CalculatorComponent from "@/components/calculator/CalculatorComponent";
import CarouselComponent from "@/components/carousel/CarouselComponent";

const Product = () => {
  return (
    <div>
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
