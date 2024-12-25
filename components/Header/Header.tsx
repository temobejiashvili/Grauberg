"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { LangSwitcher } from "../LangSwitcher/LangSwitcher";

const NAV_LINKS = [
  { href: "/", label: "მთავარი" },
  { href: "/about-us", label: "ჩვენს შესახებ" },
  { href: "/product", label: "პროდუქტები" },
  { href: "/blog", label: "ბლოგი" },
  { href: "/faq", label: "FAQ" },
];

interface FaqHeaderProps {
  cover?: boolean;
  isWhite?: boolean;
  factoryBackground?: boolean;
}

const FaqHeader: React.FC<FaqHeaderProps> = ({
  cover,
  isWhite,
  factoryBackground,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
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
              layout="fill"
              style={{ zIndex: "0", objectFit: "fill" }}
              className="max-900:hidden"
            />
            <Image
              src="/assets/images/faqBackground2.png"
              alt="coverImage"
              layout="fill"
              style={{ zIndex: "0", objectFit: "fill" }}
              className="hidden max-900:block"
            />
          </div>
          <h2 className="text-center text-[44px] absolute font-bold leading-[56px] text-[#FFFFFF] z-[11] max-900:text-[28px] max-900:leading-[34px] max-900:w-[300px] pt-[174px] max-900:pt-[110px]">
            ხშირად დასმული კითხვები
          </h2>
        </section>
      )}
      {factoryBackground && (
        <section className="top-0 relative w-full h-[784px] overflow-hidden  flex justify-center items-center max-1250:h-[700px] max-900:h-[568px]  ">
          <div className=" absolute top-0 left-0 w-full h-full bg-black-opacity-60 z-[1]"></div>
          <Image
            src="/assets/images/backgroundImage.png"
            alt="coverImage"
            layout="fill"
            objectFit="cover"
            style={{ zIndex: "0" }}
          />
          <h2 className="relative w-[804px] text-center text-[56px] font-bold leading-[66px] text-[#f5f5f5] z-[2] -translate-y-[31px] max-900:w-[382px] max-900:text-[36px] max-900:leading-[44px] max-900:-translate-y-[44px]">
            სიმტკიცე რომელზეც შეგიძლია დააშენო
          </h2>
        </section>
      )}
    </>
  );
};

export default FaqHeader;
