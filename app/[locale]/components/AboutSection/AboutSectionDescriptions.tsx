"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


const progress = [33.33, 66.66, 99.99]

function AboutSectionDescriptions() {
  const { t } = useTranslation("common");
  const [activeIndex, setActiveIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => prev === items.length - 1 ? 0 : prev + 1);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [items.length]);

  return (
    <div className="flex">
      <div className="relative w-[16px] flex flex-col bg-[#D9D9D9] rounded-lg">
        <div
          className={`transition-all duration-1000 rounded-lg bg-primary`}
          style={{ height: `${progress[activeIndex]}%` }}
        />
      </div>
      <div className="flex flex-col gap-5">
        {items.map((item, i) => (
          <div
            key={item.title}
            className={`flex flex-col gap-5 p-5 transition-all cursor-pointer ${
              activeIndex !== i ? "text-[#656565b3]" : ""
            }`}
          >
            <h1 className="font-bold text-[24px]">{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutSectionDescriptions;
