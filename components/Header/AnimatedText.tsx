"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface AnimatedTextInvisibleBorderProps {
  time: number;
  data: string;
}

const AnimatedTextInvisibleBorder: React.FC<
  AnimatedTextInvisibleBorderProps
> = ({ time, data }) => {
  const { t } = useTranslation();
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true); // Trigger the animation
    }, time); // Delay before the animation starts

    return () => clearTimeout(timer);
  }, [time]);

  return (
    <div className="text-border-container">
      <h1
        className={`text-center text-[56px] font-bold leading-[66px] h1 text-[#f5f5f5] z-[2] ${
          showText ? "fade-in-text" : ""
        }`}
      >
        {t(data)}
      </h1>
    </div>
  );
};

export default AnimatedTextInvisibleBorder;
