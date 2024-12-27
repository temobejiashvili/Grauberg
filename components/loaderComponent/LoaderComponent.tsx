"use client";

import Image from "next/image";
import { useEffect, useState, ReactNode } from "react";

interface LoaderComponentProps {
  children: ReactNode;
}

const LoaderComponent: React.FC<LoaderComponentProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingScreen = document.querySelector(".loading-screen");
    const animationElements = document.querySelectorAll(".loading-section");

    let animationsCompleted = 0;
    const maxTimeout = 9000; // Fallback timeout in case animationend doesn't trigger

    const handleAnimationEnd = () => {
      animationsCompleted += 1;
      if (animationsCompleted === animationElements.length) {
        setIsLoading(false); // Hide the loading screen after all animations end
      }
    };

    if (loadingScreen && animationElements.length > 0) {
      // Attach the event listener to all animated elements
      animationElements.forEach((element) => {
        element.addEventListener("animationend", handleAnimationEnd);
      });

      // Fallback: Hide loading screen after maxTimeout
      const fallbackTimer = setTimeout(() => {
        if (isLoading) {
          console.warn("Fallback triggered: Hiding loading screen.");
          setIsLoading(false);
        }
      }, maxTimeout);

      // Clean up the event listeners and fallback timer
      return () => {
        animationElements.forEach((element) =>
          element.removeEventListener("animationend", handleAnimationEnd)
        );
        clearTimeout(fallbackTimer);
      };
    } else {
      console.warn("No loading sections found. Hiding loading screen.");
      setIsLoading(false); // Fallback if no elements are found
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <div className="fixed top-0 left-0 w-full h-full flex z-[9999] loading-screen">
          {/* Logo that shrinks and fades */}
          <div className="loading-logo">
            <Image
              src="/assets/images/Vector.png"
              alt="Logo"
              width={154}
              height={154}
            />
          </div>

          {/* Animated red sections, delayed one after the other */}
          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className="loading-section"
              style={{
                animationDelay: `${(index / 2.1) * 0.183 + 0.65}s`, // Delay each section
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
