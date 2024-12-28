"use client";

import Image from "next/image";
import { useEffect, useState, useRef, ReactNode } from "react";

interface LoaderComponentProps {
  children: ReactNode;
}

const LoaderComponent: React.FC<LoaderComponentProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const loadingRef = useRef<HTMLDivElement | null>(null);
  const animationRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    let animationsCompleted = 0;
    const maxTimeout = 3000; // Fallback timeout in case animationend doesn't trigger

    const handleAnimationEnd = () => {
      animationsCompleted += 1;
      if (animationsCompleted === animationRefs.current.length) {
        setIsLoading(false);
      }
    };

    const fallbackTimer = setTimeout(() => {
      console.warn("Fallback triggered: Hiding loading screen.");
      setIsLoading(false);
    }, maxTimeout);

    if (animationRefs.current.length > 0) {
      animationRefs.current.forEach((element) =>
        element.addEventListener("animationend", handleAnimationEnd)
      );
    } else {
      console.warn("No loading sections found. Hiding loading screen.");
      setIsLoading(false);
    }

    return () => {
      animationRefs.current.forEach((element) =>
        element.removeEventListener("animationend", handleAnimationEnd)
      );
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          ref={loadingRef}
          className="fixed top-0 left-0 w-full h-full flex z-[9999] loading-screen"
        >
          <div className="loading-logo">
            <Image
              src="/assets/images/Vector.png"
              alt="Logo"
              width={154}
              height={154}
            />
          </div>

          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) animationRefs.current[index] = el;
              }}
              className="loading-section"
              style={{
                animationDelay: `${(index / 2.1) * 0.183 + 0.65}s`,
              }}
            ></div>
          ))}
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default LoaderComponent;
