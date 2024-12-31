"use client";
import React, { useState } from "react";
import Image from "next/image";

const LANG_OPTIONS = [
  {
    name: "Geo",
    value: "ge",
    imageUrl: "/assets/flagOfGeorgia.svg",
    alt: "Georgia Logo",
  },
];

interface LangSwitcherProps {
  noWhite?: boolean;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ noWhite }) => {
  const [activeLang, setActiveLang] = useState<string>(LANG_OPTIONS[0].value);

  const handleButtonClick = (value: string) => {
    setActiveLang(value);
  };
  return (
    <div
      className={`relative w-[131px] h-[48px] flex justify-center items-center border-[0.5px] border-solid border-[#f5f5f5] rounded-[50px] max-1250:w-[100px] max-900:bg-transparent max-900:w-[131px]  ${
        noWhite ? "bg-[#F5F5F5]" : ""
      }`}
      role="menu"
    >
      {LANG_OPTIONS.map((option) => (
        <button
          key={option.value}
          className={`w-[58px] h-[38px] flex justify-center items-center rounded-[50px] bg-transparent outline-none border-0 cursor-pointer transition-all duration-300 ease-in-out max-1250:w-[45px] max-900:w-[58px] ${
            activeLang === option.value
              ? "bg-white shadow-[0_4px_6px_rgba(128,128,128,0.4)]"
              : ""
          }`}
          role="menuitem"
          onClick={() => handleButtonClick(option.value)}
        >
          <Image
            src={option.imageUrl}
            alt={option.alt}
            width={26}
            height={26}
            className="rounded-full"
          />
        </button>
      ))}
    </div>
  );
};
