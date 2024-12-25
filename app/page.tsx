import React from "react";
import BlogSection from "@/components/blogSection/BlogComponent";
import ProductCardComponent from "@/components/productCard/ProductCardComponent";
import "./globals.css";
import AboutCard from "@/components/AboutCard/AboutCard";

const MainPage = () => {
  return (
    <>
      <div className="relative">
        <AboutCard />
      </div>
      <h2 className="w-full uppercase flex font-bold  justify-center text-44">
        ჩვენი პროდუქტი
      </h2>
      <ProductCardComponent isCement />
      <ProductCardComponent />
      <div className="h-24 w-full"></div>
      <BlogSection />
    </>
  );
};

export default MainPage;
