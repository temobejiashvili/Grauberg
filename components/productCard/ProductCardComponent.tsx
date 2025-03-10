import Image from "next/image";
import AnimatedBox from "../animatedBox/AnimatedBox";
import Link from "next/link";
import { TranslateText } from "../translateText/TranslateText";

import cementImage from "@/public/images/cement.webp";
import graubergTruck from "@/public/assets/graubergTruck.webp";

type ProductCardProps = {
  isCement?: boolean;
};

const ProductCardComponent = ({ isCement }: ProductCardProps) => {
  const title = isCement ? (
    <TranslateText text="portlandcement" />
  ) : (
    <TranslateText text="Duracon" />
  );
  const info = isCement ? (
    <TranslateText text="UniCem" />
  ) : (
    <TranslateText text="DuraBuild" />
  );

  return (
    <AnimatedBox isFadeIn={true} rootMargin="400px 0px">
      <Link href={isCement ? "/product/cement" : "/product/concrete"}>
        <div
          className="w-[575px] cursor-pointer relative h-[513px] 
        bg-backgroundGrey rounded-[30px] shadow-md border border-gray-200 
        hover:bg-gradient-to-b hover:from-gradientStart hover:to-gradientEnd 
        hover:scale-110 transition-all duration-300 
        max-1100:w-full max-1100:hover:scale-105"
        >
          {/* Image Section */}
          <div className="overflow-hidden rounded-t-30">
            <div className=" w-full h-[284px] px-6">
              {isCement ? (
                <Image
                  width={211}
                  height={320}
                  src={cementImage}
                  alt="Cement"
                  placeholder="blur"
                  className="w-[211px]
               drop-shadow-[-20px_14px_94px_rgba(0,0,0,0.45)] 
               rotate-[-3.76deg] h-[320px] max-h-[320px] absolute
                top-[-40px] left-1/2 -translate-x-[105px]"
                />
              ) : (
                <Image
                  width={100}
                  height={100}
                  src={graubergTruck}
                  placeholder="empty"
                  alt="Concrete Mixer Truck"
                  className="w-full h-auto max-h-284"
                />
              )}
            </div>
          </div>

          {/* Content Section */}
          <div className="pt-12 text-center gap-2 flex flex-col items-center">
            {/* Title */}
            <h2 className="text-28 font-bold w-full">{title}</h2>

            {/* Description */}
            <p className="text-darkSecondary flex text-baseHigh max-w-[421px]">
              {info}
            </p>
            <div className="flex justify-center w-58 h-58 absolute bottom-5 right-5">
              {/* <button className="bg-red-500 w-14 h-14 rounded-full hover:bg-red-600 text-white p-2 rounded-full">
              →
            </button> */}
              <Image
                src={"/assets/productArrow.svg"}
                height={58}
                width={58}
                alt=">"
              />
            </div>

            {/* Button */}
          </div>
        </div>
      </Link>
    </AnimatedBox>
  );
};

export default ProductCardComponent;
