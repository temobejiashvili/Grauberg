/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
type TArgs = {
  id: string;
  title: string;
  description: string;
  image: string;
  flexDir: "md:flex-row" | "md:flex-row-reverse";
};

function SingleProduct({ image, title, description, flexDir }: TArgs) {
  const { t } = useTranslation();
  return (
    <div
      className={`md:mx-14 bg-[#1D1D21] flex flex-col ${flexDir} rounded-3xl`}
    >
      <div className="flex-1 pt-6 md:pt-0 pb-8 md:pb-0 text-left flex flex-col gap-8 md:justify-center px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          {t(title)}
        </h1>
        <p className="text-base md:text-2xl font-normal text-[#A3A3A3] ">
          {t(description)}
        </p>
      </div>
      <div className="flex-1 h-[428px] ">
        <img src={image} className="w-full h-full" alt="product image" />
      </div>
    </div>
  );
}

export default SingleProduct;
