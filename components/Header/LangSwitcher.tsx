"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

interface LangSwitcherProps {
  options: { name: string; value: string; imageUrl: string; alt: string }[];
}

export const LangSwitcher: React.FC<LangSwitcherProps> = ({ options }) => {
  const [activeLang, setActiveLang] = useState<string | null>(null);

  const handleButtonClick = (value: string) => {
    setActiveLang(value);
  };
  return (
    <div className={styles.langSwitcherWrapper} role="menu">
      {options.map((option) => (
        <button
          key={option.value}
          className={`${styles.langSwitcherButton} ${
            activeLang === option.value ? styles.active : ""
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
