// import React from "react";
// import BlogSection from "@/components/blogSection/BlogComponent";
// import ProductCardComponent from "@/components/productCard/ProductCardComponent";
// import "./globals.css";
// import AboutCard from "@/components/aboutCard/AboutCard";

// const AxaliPage = () => {
//   return (
//     <>
//       <div className="relative">
//         <AboutCard />
//       </div>
//       <h2 className="w-full uppercase flex font-bold  justify-center text-44">
//         ჩვენი პროდუქტი
//       </h2>
//       <ProductCardComponent isCement />
//       <ProductCardComponent />
//       <div className="h-24 w-full"></div>
//       <BlogSection />
//     </>
//   );
// };

// export default AxaliPage;

"use client";

import React, { useEffect, useState } from "react";
import BlogSection from "@/components/blogSection/BlogComponent";
import ProductCardComponent from "@/components/productCard/ProductCardComponent";
import "./globals.css";
import AboutCard from "@/components/aboutCard/AboutCard";

const AxaliPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 850); // Reduced the time to match the 2x faster animation duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
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
              animationDelay: `${
                // index == 0 ? (index + 1) * 0.7 : (index + 1) * 0.7 - index * 0.2
                (index / 2.1) * 0.183 + 0.65
              }s`, // Delay each section by 0.4s after the logo
            }}
          ></div>
        ))}
      </div>

      <div>
        <div className="relative">
          <AboutCard />
        </div>
        <h2 className="w-full uppercase flex font-bold justify-center text-44">
          ჩვენი პროდუქტი
        </h2>
        <ProductCardComponent isCement />
        <ProductCardComponent />
        <div className="h-24 w-full"></div>
        <BlogSection />
      </div>
    </>
  );
};

export default AxaliPage;
