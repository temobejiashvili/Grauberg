"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

function AboutSectionDescriptions() {
  const { t } = useTranslation("common");

  const items = [
    {
      title: t("ourMission"),
      description: t("aboutSectionSubItemsFirstDesc"),
    },
    {
      title: t("ourVision"),
      description: t("aboutSectionSubItemsSecondDesc"),
    },
    {
      title: t("ourValues"),
      description: t("aboutSectionSubItemsThirdDesc"),
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex">
      <div className="relative w-[16px] flex flex-col bg-[#D9D9D9] rounded-lg">
        {items.map((_, i) => (
          <div
            key={i}
            className={`transition-all duration-300 rounded-lg flex-1 ${
              activeIndex === i ? "bg-primary" : ""
            }`}
          />
        ))}
      </div>
      <div className="flex flex-col gap-5">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={`flex flex-col gap-5 p-5 transition-all cursor-pointer ${
              activeIndex !== i ? "text-[#656565]" : ""
            }`}
            onClick={() => {
              setActiveIndex(i);
            }}
          >
            <h1 className="font-[500] text-[24px]">{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutSectionDescriptions;
