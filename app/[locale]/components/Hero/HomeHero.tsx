"use client";

import { ContainerDiv } from "@/components";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export function HomeHero() {
  const { t } = useTranslation();
  return (
    <div
      className="flex items-end h-[100vh] pb-[108px] md:pb-24 rounded-b-[24px] md:rounded-b-[40px]"
      id="home"
    >
      <div className="absolute top-0 left-0 w-full h-[100vh] z-0 border-2">
        <div className="relative md:hidden w-full h-full">
          <Image
            src="/images/home-b-mobile-1.png"
            alt="background-image"
            fill={true}
            quality={60}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <Image
          className="hidden md:block object-cover"
          src="/images/home-bg.png"
          alt="background-image"
          fill={true}
          quality={60}
        />
      </div>
      <ContainerDiv>
        <div className="w-full max-w-[1084px] text-white  ">
          <h1 className="text-5xl md:text-[88px] font-black font-roboto">
            {t("heroTitle")}
            <span className="text-primary">{t("heroTitleSpan")}</span>
          </h1>
          <p className="font-normal text-2xl mt-6">{t("heroDescription")}</p>
        </div>
      </ContainerDiv>
    </div>
  );
}
