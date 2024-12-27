"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useScrollContext } from "@/app/context/ScrollContext";
import { LangSwitcher } from "../LangSwitcher/LangSwitcher";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver/useIntersectionObserver";
import AnimatedText from "./AnimatedText";

const NAV_LINKS = [
  { href: "/", label: "მთავარი" },
  { href: "/about-us", label: "ჩვენს შესახებ" },
  { href: "/product", label: "პროდუქტები" },
  { href: "/blog", label: "ბლოგი" },
  { href: "/faq", label: "FAQ" },
];

interface FaqHeaderProps {
  cover?: boolean;
  isProduct?: boolean;
  isWhite?: boolean;
  factoryBackground?: boolean;
  whiteOverlay?: boolean;
}

const Header: React.FC<FaqHeaderProps> = ({
  cover,
  isWhite,
  isProduct,
  factoryBackground,
  whiteOverlay,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const { setActiveSection } = useScrollContext();
  const { ref: headerRef, inView: isHeaderInView } = useInView({
    threshold: 0.2,
  });

  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,

    rootMargin: "300px 0px",
  });

  console.log(isProduct, "here 1");
  if (isHeaderInView && isProduct) {
    setActiveSection("header");
  }

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(isHeaderInView, "isHeaderInView");

  return (
    <header>
      <div
        ref={headerRef}
        className={`w-full flex justify-between items-center px-[120px] py-[32.14px] z-[100] ${
          isOpen
            ? "bg-[#EE2E24] fixed top-0 left-0 w-full h-screen flex-col items-center max-900:px-0 max-900:py-0 "
            : `${
                isWhite
                  ? "bg-[#FFFFFF] h-[60px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.05)"
                  : "bg-transparent"
              } max-1250:px-[25px] absolute ]`
        } `}
      >
        <div
          className={`flex justify-between max-900:w-full ${
            isOpen ? "bg-[#FFFFFF] px-[20px] py-[19.4px]" : ""
          }`}
        >
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={179}
            height={23.73}
            // className={`${isOpen ? "hidden" : "block"} `}
            className={`${isWhite ? "hidden" : "block"}`}
          />
          <Image
            src="/assets/logoBlack.svg"
            alt="Logo"
            width={160}
            height={21.21}
            // className={`${isOpen ? "max-900:block" : ""} hidden`}
            className={`${!isWhite ? "hidden" : "block"}`}
          />
          <Image
            src="/assets/burgerMenu.svg"
            alt="Logo"
            width={32}
            height={32}
            className={`${isOpen ? "" : "max-900:block"} hidden`}
            onClick={openMenu}
          />
          <Image
            src="/assets/xMark.svg"
            alt="Logo"
            width={24}
            height={24}
            className={`${isOpen ? "max-900:block" : ""} hidden`}
            onClick={openMenu}
          />
        </div>

        <div className={`max-900:hidden ${isOpen ? "hidden" : ""}`}>
          <ul className="flex justify-center items-center gap-[36px] whitespace-nowrap max-1250:gap-[22px] px-[20px]">
            {NAV_LINKS.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className={`${isWhite ? "text-[#100F0F]" : "text-[#FFFFFF]"}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`flex items-center justify-center gap-[22px] ${
            isOpen
              ? "max-900:flex max-900:w-full max-900:h-full max-900:px-[22px] max-900:py-[32px] max-900:justify-start flex-col gap-[87px] "
              : "max-900:hidden"
          }`}
        >
          <ul
            className={`w-full flex flex-col gap-[40px]  ${
              isOpen ? "max-900:flex" : "hidden"
            }`}
          >
            {NAV_LINKS.map((link, index) => (
              <li key={index} className="flex justify-between items-center">
                <Link
                  href={link.href}
                  className="text-[#FFFFFF] text-[20px] font-medium leading-[30px]"
                >
                  {link.label}
                </Link>
                <Image
                  src="/assets/arrowRight.svg"
                  alt="Logo"
                  width={17}
                  height={1}
                  className={`${isOpen ? "block" : "hidden"}`}
                />
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-center gap-[22px] max-900:flex-col max-900:gap-[87px] max-900:w-full max-1100:gap-[10px]">
            <Link
              href="/contact"
              className={
                "flex items-center justify-center w-[148px] h-[46px] bg-[#ee2e24] rounded-[60px] border-[0px] text-[#ffffff] text-[14px] max-1250:w-[100px] max-900:w-full max-900:bg-[#FFFFFF]  max-900:text-[#100F0F] max-900:h-[54px]"
              }
            >
              კონტაქტი
            </Link>
            <LangSwitcher noWhite={isWhite} />
          </div>
        </div>
      </div>
      {cover && (
        <section className="top-0 relative w-full flex justify-center bg-[#F5F5F5]">
          <div className="relative w-full h-[438px] max-h-[438px] max-900:h-[334px] max-900:max-h-[334px] ">
            <Image
              src="/assets/images/faqBackground.png"
              alt="coverImage"
              fill
              style={{ zIndex: "0", objectFit: "fill" }}
              className="max-900:hidden"
            />
            <Image
              src="/assets/images/faqBackground2.png"
              alt="coverImage"
              fill
              style={{ zIndex: "0", objectFit: "fill" }}
              className="hidden max-900:block"
            />
          </div>
          <h2 className="text-center text-[44px] absolute font-bold leading-[56px] text-[#FFFFFF] z-[11] max-900:text-[28px] max-900:leading-[34px] max-900:w-[300px] pt-[174px] max-900:pt-[110px]">
            ხშირად დასმული კითხვები
          </h2>
        </section>
      )}
      {whiteOverlay && (
        <section className="flex flex-col items-center">
          <div className="w-[calc(100%-66px)] h-[752px] flex justify-center max-1250:h-[700px] max-900:w-full  max-900:h-[568px]">
            <div className="top-0 relative w-[calc(100%-3px)] h-[751px] overflow-hidden flex justify-center  max-1250:h-[700px] max-900:h-[568px] ">
              <Image
                src="/assets/images/Subtract.png"
                alt="coverImage"
                layout="fill"
                style={{ zIndex: "0", objectFit: "fill" }}
                className="max-900:hidden"
              />
              <Image
                src="/assets/images/Subtract2.png"
                alt="coverImage"
                layout="fill"
                style={{ zIndex: "0", objectFit: "fill" }}
                className="hidden max-900:block"
              />
              <h2 className="w-[804px] text-center text-[70.56px] font-bold leading-[88px]  text-[#100F0F] z-[2] pt-[166px] max-1100:text-[56px] max-900:w-[382px] max-900:text-[36px] max-900:leading-[44px]">
                სიმტკიცე რომელზეც შეგიძლია დააშენო
              </h2>
            </div>
          </div>
          <div className="w-full relative">
            <div className="flex items-center justify-center absolute tra top-[-20px] left-1/2 transform -translate-x-1/2 w-[54px] h-[54px] rounded-[50%] bg-[#EE2E24] max-900:top-[-10px]">
              <Image
                src="/assets/icons/Arrow1.svg"
                alt="coverImage"
                width={16}
                height={16}
                style={{ zIndex: "0" }}
              />
            </div>
          </div>
        </section>
      )}
      {factoryBackground && (
        <section className="top-0 relative w-full h-[784px] overflow-hidden  flex justify-center items-center max-1250:h-[700px] max-900:h-[568px]  ">
          <div className="absolute top-0 left-0 w-full h-full bg-black-opacity-60 z-[1]"></div>
          <Image
            src="/assets/images/backgroundImage.png"
            alt="coverImage"
            fill
            objectFit="cover"
            style={{ zIndex: "0" }}
          />
          <h2
            ref={ref}
            className={`relative w-[804px] text-center text-[56px] font-bold
              leading-[66px] text-[#f5f5f5] z-[2] -translate-y-[31px]
              max-900:w-[382px] max-900:text-[36px] max-900:leading-[44px] max-900:-translate-y-[44px]
              transition-all duration-400 ease-in-out ${
                isVisible
                  ? "animate-slideUpHalf"
                  : "opacity-0 translate-y-[100%]"
              }`}
          >
            <AnimatedText time={700} data="სიმტკიცე რომელზეც" />
            <AnimatedText time={950} data="შეგიძლია დააშენო" />
          </h2>
        </section>
      )}
    </header>
  );
};

export default Header;
