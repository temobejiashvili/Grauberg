/* eslint-disable @next/next/no-img-element */
"use client";

import { useTranslation } from "react-i18next";
import AboutSectionDescriptions from "./AboutSectionDescriptions";

function AboutSection() {
  const { t } = useTranslation("common");

  return (
    <div className="my-10 p-3 items-center flex flex-col md:flex-row md:justify-evenly md:gap-0 gap-5">
      <div className="max-w-[500px] flex flex-col gap-5">
        <h1 className="text-[20px] text-primary font-bold">{t("about")}</h1>
        <div className="w-fit">
          <h2 className="text-[24px] font-bold inline-block">
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
      <div className="w-[380px] h-[400px] lg:w-[760px] lg:h-[680px]">
        <img
          alt="worker"
          src="/images/aboutSectionSVG.svg"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}

export default AboutSection;
