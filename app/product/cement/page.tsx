import React from "react";
import dynamic from "next/dynamic";
import RedBoxComponent from "../RedBoxComponent";
import { TranslateText } from "@/components/translateText/TranslateText";
import Image from "next/image";

import ShopIcon from "@/public/assets/icons/shopIcon.svg";
import loaderBackground from "@/public/assets/images/loaderBackground.webp";

const dynamicImports = {
  ScrollBox: dynamic(() => import("@/components/scrollBox/ScrollBox"), {
    ssr: false,
    loading: () => (
      <Image
        src={loaderBackground}
        alt="Loading"
        width={1000}
        height={1000}
        placeholder="blur"
        priority
        className="fixed object-cover w-[100vw] h-[100vh] top-0 left-0 z-50"
      />
    ),
  }),
  CarouselComponent: dynamic(
    () => import("@/components/carousel/CarouselComponent"),
    {
      ssr: false,
    }
  ),
  AnimatedBox: dynamic(() => import("@/components/animatedBox/AnimatedBox"), {
    ssr: true,
    loading: () => (
      <Image
        src={loaderBackground}
        alt="Loading"
        width={1000}
        height={1000}
        placeholder="blur"
        priority
        className="fixed w-[100vw] object-cover h-[100vh] top-0 left-0 z-50"
      />
    ),
  }),
  AdvantagesCardComponent: dynamic(
    () => import("@/components/advantagesCard/AdvantagesCardComponent"),
    {
      ssr: false,
    }
  ),
  CalculatorComponent: dynamic(
    () => import("@/components/calculator/CalculatorComponent"),
    {
      ssr: false,
    }
  ),
  LoaderComponent: dynamic(
    () => import("@/components/loaderComponent/LoaderComponent"),
    {
      ssr: false,
    }
  ),
};

const Product = () => {
  return (
    <div className="pt-[147px]">
      <section className="flex gap-14 max-1100:flex-col-reverse max-1100:gap-40">
        <dynamicImports.ScrollBox />
        <RedBoxComponent />
        <div className="flex flex-col gap-12 mx-auto pr-5 max-w-[900px] max-1100:px-6">
          <dynamicImports.AnimatedBox isFadeIn={false}>
            <div>
              <h3 className="font-bold text-44 text-darkPrimary pb-6 break-words max-1100:text-28">
                <TranslateText text="portlandcement" />
              </h3>
              <p className="font-normal text-[16px] leading-[26px] text-darkPrimary text-justify max-1100:text-sm">
                <TranslateText text="portlandText" />
              </p>
            </div>
          </dynamicImports.AnimatedBox>
          <dynamicImports.AnimatedBox isFadeIn={false}>
            <div className="flex flex-col gap-12 border border-solid border-stroke h-[237px] rounded-3xl py-5 px-8 max-1100:h-auto">
              <span className="bg-black flex items-center justify-center w-[58px] h-[58px] rounded-full">
                <ShopIcon />
              </span>
              <div>
                <h4 className="font-bold text-2xl text-darkPrimary">
                  80-94%
                  <TranslateText text="clinker" />
                </h4>
                <p className="font-normal text-[16px] leading-[26px] text-darkPrimary">
                  შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპო
                  გრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქს.
                </p>
              </div>
            </div>
          </dynamicImports.AnimatedBox>
        </div>
      </section>

      <dynamicImports.LoaderComponent>
        <div className="bg-gradient-to-t from-white to-gray-100 flex flex-col items-center w-full gap-7 pt-11">
          <dynamicImports.AnimatedBox isFadeIn={false}>
            <h1 className="max-w-[1002px] font-bold text-44 text-darkPrimary text-center">
              <TranslateText text="ourCementUsage" />
            </h1>
          </dynamicImports.AnimatedBox>
          <dynamicImports.AnimatedBox isFadeIn={false}>
            <p className="max-w-[975px] font-normal text-[16px] leading-[26px] text-darkPrimary text-center">
              <TranslateText text="cementUsageInfo" />
            </p>
          </dynamicImports.AnimatedBox>
          <dynamicImports.CarouselComponent />
        </div>
      </dynamicImports.LoaderComponent>

      <div className="w-full flex justify-center mb-40 max-1100:px-6">
        <dynamicImports.CalculatorComponent cement />
      </div>

      <dynamicImports.AdvantagesCardComponent />

      <div
        className="w-full bg-backgroundGrey h-[140px]
       rounded-b-60 absolute max-900:h-[100px]"
      ></div>
    </div>
  );
};

export default Product;
