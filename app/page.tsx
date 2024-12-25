import React from "react";
import BlogSection from "@/components/blogSection/BlogComponent";
import ProductCardComponent from "@/components/productCard/ProductCardComponent";
import "./globals.css";
import AboutCard from "@/components/aboutCard/AboutCard";

const AxaliPage = () => {
  return (
    <>
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

export default AxaliPage;
