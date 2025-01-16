import React from "react";
import BlogSection from "@/components/blogSection/BlogComponent";
import ProductCardComponent from "@/components/productCard/ProductCardComponent";
import "./globals.css";
import AboutCard from "@/components/aboutCard/AboutCard";
import LoaderComponent from "@/components/loaderComponent/LoaderComponent";
import { TranslateText } from "@/components/translateText/TranslateText";

const Home = () => {
  return (
    <>
      <div className="relative">
        <AboutCard />
      </div>

      <section className="mt-[40rem] flex flex-col gap-[8rem] max-900:mt-[53.75rem]">
        <h2 className="text-4xl font-bold leading-[1.3] text-center text-primary">
          <TranslateText text="ourProduct" />
        </h2>

        <LoaderComponent>
          <div className="flex justify-center items-center gap-12 max-900:flex-col max-900:gap-10">
            <ProductCardComponent isCement />
            <ProductCardComponent />
          </div>
        </LoaderComponent>
      </section>

      <div className="h-24"></div>

      <BlogSection />
    </>
  );
};

export default Home;
