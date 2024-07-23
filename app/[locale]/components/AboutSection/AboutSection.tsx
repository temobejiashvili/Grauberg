/* eslint-disable @next/next/no-img-element */
"use client";

import { useTranslation } from "react-i18next";
import AboutSectionDescriptions from "./AboutSectionDescriptions";
import Image from "next/image";

function AboutSection() {
  const { t } = useTranslation("common");

  return (
    <div
      className="my-10 p-3 items-center flex flex-col md:flex-row md:justify-evenly md:gap-0 gap-4"
      id="about"
    >
      <div className="max-w-[500px] flex flex-col gap-5">
        <h1 className="text-[20px] md:text-2xl text-primary font-bold">
          {t("about")}
        </h1>
        <div className="w-fit">
          <h2 className="text-2xl md:text-[32px] font-bold inline-block">
            {t("aboutSectionTitle")}
          </h2>{" "}
          <h2 className="text-[24px] font-bold text-primary inline-block">
            {t("aboutSectionTitleHighQuality")}
          </h2>{" "}
          <h2 className="text-[24px] font-bold inline-block">
            {t("aboutSectionTitleBuildingMaterials")}
          </h2>
        </div>
        <AboutSectionDescriptions />
      </div>
      <div className="w-[380px] h-[400px] lg:w-[760px] lg:h-[680px] relative ">
        <Image
          alt="worker"
          src="/images/aboutSectionSVG.svg"
          fill={true}
          quality={50}
          sizes="(max-width: 768px) 380px, 760px"
        />
      </div>
    </div>
  );
}

export default AboutSection;
