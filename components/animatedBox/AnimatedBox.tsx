"use client";
import { ReactNode } from "react";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver/useIntersectionObserver";

interface AnimatedBoxProps {
  children: ReactNode;
  isFadeIn: boolean;
  rootMargin?: string;
}

const AnimatedBox = ({ children, isFadeIn, rootMargin }: AnimatedBoxProps) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,

    rootMargin: rootMargin || "300px 0px",
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-400 ease-in-out ${
        isVisible
          ? isFadeIn
            ? "animate-fadeIn"
            : "animate-slideUpFull"
          : "opacity-0 translate-y-[100%]"
      }`}
    >
      {children}
    </div>
  );
};

export default AnimatedBox;
