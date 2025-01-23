"use client";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";

import "./carouselComponentStyles.css";
import AnimatedBox from "../animatedBox/AnimatedBox";
import carouselImage1 from "@/public/assets/images/carouselImage1.png";
import carouselImage2 from "@/public/assets/images/carouselImage2.png";
import carouselImage3 from "@/public/assets/images/carouselImage3.png";
import carouselImage4 from "@/public/assets/images/carouselImage4.png";

const CarouselComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToScroll: 1,
    slidesToShow: 3.5,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const images = [
    {
      src: carouselImage1,
      rotation: "-1.32deg",
      offset: "20px",
    },
    {
      src: carouselImage2,
      rotation: "1.89deg",
      offset: "-15px",
    },
    {
      src: carouselImage3,
      rotation: "0.44deg",
      offset: "10px",
    },
    {
      src: carouselImage4,
      rotation: "-2.99deg",
      offset: "-20px",
    },
  ];

  return (
    <div className="w-full">
      <AnimatedBox isFadeIn={false}>
        <Slider {...settings} className="h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className="!flex justify-center items-center px-2 h-[580px]"
            >
              <div
                className={`rounded-[20px] overflow-hidden relative transition-transform duration-300 hover:rotate-0 hover:scale-105`}
                style={{
                  boxShadow: `
                0px 12px 26px 0px rgba(0, 0, 0, 0.1),
                0px 48px 48px 0px rgba(0, 0, 0, 0.09),
                0px 107px 64px 0px rgba(0, 0, 0, 0.05),
                0px 190px 76px 0px rgba(0, 0, 0, 0.01),
                0px 297px 83px 0px rgba(0, 0, 0, 0)
              `,
                  transform: `rotate(${image.rotation}) translateY(${image.offset})`,
                }}
              >
                <div className="rounded-[20px] h-[454px] w-[338px]">
                  <Image
                    src={image.src}
                    alt={`Image ${index + 1}`}
                    width={200}
                    height={400}
                    placeholder="blur"
                    className="rounded-[16px]  object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </AnimatedBox>
    </div>
  );
};

export default CarouselComponent;
