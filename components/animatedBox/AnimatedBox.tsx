"use client";

import React, { ReactNode } from "react";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver/useIntersectionObserver";

interface AnimatedBoxProps {
  children: ReactNode;
  isFadeIn: boolean;
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({ children, isFadeIn }) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,

    rootMargin: "300px 0px",
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-400 ease-in-out ${
        isVisible
          ? isFadeIn
            ? "animate-fadeIn"
            : "animate-slideUp"
          : "opacity-0 translate-y-[100%]"
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedBox;
