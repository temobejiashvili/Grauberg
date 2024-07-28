"use client";
import { useTranslation } from "react-i18next";
import LocaleSwitcher from "./LocaleSwitcher";
import { usePathname } from "next/navigation";
import { RefObject, useEffect, useRef, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const selectRef: RefObject<HTMLDivElement> = useRef(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      selectRef.current &&
      !selectRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { t } = useTranslation("common");

  const isOpenBgColor = isOpen ? "bg-[#1D1D2180]" : "bg-black bg-opacity-30 ";

  const hoveredStyles = `${isOpenBgColor}   text-white bg-opacity-100 md:bg-white md:text-black`;
  const unHoveredStyles = `${isOpenBgColor}  text-white`;

  const bgColor = isHovered ? hoveredStyles : unHoveredStyles;

  return (
    <nav
      className={` md:px-14 py-4 fixed top-0 w-full z-50 ${bgColor}   `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="px-4  mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image
            src={isHovered ? "/images/nav-dark.png" : "/images/nav-logo.png"}
            alt="Logo"
            width={106}
            height={14}
            className="w-[106px] h-[14px] lg:w-[175px] lg:h-[24px]"
          />
          {/* <h2 className=" text-xl">GRAUBERG</h2> */}
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home">{t("home")}</a>
          <a href="#about">{t("about")}</a>
          <a href="#products">{t("products")}</a>
          <a href="#contact">{t("contact")}</a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <LocaleSwitcher isHovered={isHovered} />
          <button className="bg-red-600 hover:bg-[#A9211A] text-white px-6 py-2  rounded-lg w-[148px] h-14">
            <a href="#contact" className="block ">
              {t("contact")}
            </a>
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? (
              <IoMdClose className="h-6 w-6" />
            ) : (
              <IoIosMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          ref={selectRef}
          className="md:hidden  text-white mt-4 p-4 space-y-4 flex flex-col items-center gap-2"
        >
          <a href="#home" className="block ">
            {t("home")}
          </a>
          <a href="#about" className="block ">
            {t("about")}
          </a>
          <a href="#products" className="block ">
            {t("products")}
          </a>
          <a href="#contact" className="block ">
            {t("contact")}
          </a>
          <LocaleSwitcher isHovered={isHovered} />

          <button className="bg-red-600 rounded-lg hover:bg-[#A9211A] w-full h-14">
            <a href="#contact" className="block ">
              {t("contact")}
            </a>
          </button>
        </div>
      )}
    </nav>
  );
}
