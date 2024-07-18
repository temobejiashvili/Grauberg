"use client";

import { ContainerDiv } from "@/components";
import { useTranslation } from "react-i18next";

export function HomeHero() {
  const { t } = useTranslation();
  return (
    <div
      className="bg-hero-mobile md:bg-hero-desktop bg-cover bg-center flex items-end h-[100vh] pb-[108px] md:pb-24 "
      id="home"
    >
      <ContainerDiv>
        <div className="w-full max-w-[1084px] text-white  ">
          <h1 className="text-5xl md:text-8xl font-black font-roboto">
            {t("heroTitle")}
            <span className="text-primary">{t("heroTitleSpan")}</span>
          </h1>
          <p className="font-normal text-2xl mt-4">{t("heroDescription")}</p>
        </div>
      </ContainerDiv>
    </div>
  );
}
