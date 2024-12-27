"use client";

import React, { useEffect, useState } from "react";
import BlogSection from "@/components/blogSection/BlogComponent";
import ProductCardComponent from "@/components/productCard/ProductCardComponent";
import "./globals.css";
import AboutCard from "@/components/aboutCard/AboutCard";

const MainPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingScreen = document.querySelector(".loading-screen");
    const animationElements = document.querySelectorAll(".loading-section");

    if (loadingScreen && animationElements.length > 0) {
      let animationsCompleted = 0;

      const handleAnimationEnd = () => {
        animationsCompleted += 1;
        if (animationsCompleted === animationElements.length) {
          setIsLoading(false); // Hide the loading screen after all animations end
        }
      };

      // Attach the event listener to all animated elements
      animationElements.forEach((element) =>
        element.addEventListener("animationend", handleAnimationEnd)
      );

      // Clean up the event listeners
      return () => {
        animationElements.forEach((element) =>
          element.removeEventListener("animationend", handleAnimationEnd)
        );
      };
    }
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-full flex z-[9999] loading-screen">
          {/* Logo that shrinks and fades */}
          <div className="loading-logo">
            <img src="/assets/images/Vector.png" alt="Logo" />
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
      )}

      <div className="relative">
        <AboutCard />
      </div>
      <div className="mt-[632px] flex flex-col gap-[125px] max-900:mt-[860px]">
        <h2 className="text-[44px] font-bold leading-[56px] text-center text-[#100F0F] ">
          ჩვენი პროდუქტი
        </h2>
        <div className="flex justify-center items-center gap-[46px] max-900:flex-col max-900:gap-[42px]">
          <ProductCardComponent isCement />
          <ProductCardComponent />
        </div>
      </div>
      <div className="h-24 w-full"></div>
      <BlogSection />
    </>
  );
};

export default MainPage;
