"use client";
import { ContainerDiv } from "@/components";
import React from "react";
import { useTranslation } from "react-i18next";
import { productsMock } from "./mock";
import SingleProduct from "./SingleProduct";

export function Products() {
  const { t } = useTranslation("common");

  return (
    <div
      id="products"
      className="  bg-black rounded-tl-[32px] md:rounded-tl-[60px] rounded-tr-[32px] md:rounded-tr-[60px]  w-full text-white"
    >
      <ContainerDiv>
        <div className="mt-[70px] md:mt-[120px] flex flex-col gap-4 text-center ">
          <h2 className="text-[#EE2E24] text-xl font-black ">
            {t("products")}
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold">
            {t("productTitle")}
          </h1>
          <p className="text-sm color-[#CBCBCB]">{t("productDescription")}</p>
        </div>
        <div className="mt-8 md:mt-32 flex flex-col gap-8 md:gap-32">
          {productsMock.map((item, index) => (
            <SingleProduct
              key={item.id}
              {...item}
              flexDir={index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
            />
          ))}
        </div>
      </ContainerDiv>
    </div>
  );
}
