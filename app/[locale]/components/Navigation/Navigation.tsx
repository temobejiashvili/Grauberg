"use client";
import { useTranslation } from "react-i18next";
import LocaleSwitcher from "./LocaleSwitcher";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Image from "next/image";

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { t } = useTranslation("common");

  const hoveredStyles = "bg-white text-black";
  const unHoveredStyles = "bg-black bg-opacity-30 text-white";

  const bgColor = isHovered ? hoveredStyles : unHoveredStyles;

  return (
    <nav
      className={` px-6 py-4 fixed top-0 w-full z-50 ${bgColor}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src="/images/Vector.png" alt="Logo" width={23} height={23} />
          <h2 className=" text-xl">GRAUBERG</h2>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home">{t("home")}</a>
          <a href="#about">{t("about")}</a>
          <a href="#products">{t("products")}</a>
          <a href="#contact">{t("contact")}</a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <LocaleSwitcher isHovered={isHovered} />
          <button className="bg-red-600 text-white px-6 py-2 rounded-md">
            {t("contact_us")}
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
        <div className="md:hidden text-white bg-custom-gray mt-4 p-4 space-y-4">
          <a href="#" className="block ">
            {t("home")}
          </a>
          <a href="#" className="block ">
            {t("about")}
          </a>
          <a href="#" className="block ">
            {t("products")}
          </a>
          <a href="#" className="block ">
            {t("contact")}
          </a>
          <button className="bg-gray-700  px-4 py-2 rounded-md flex items-center w-full">
            <span className="mr-2">🇬🇧</span> ENG
          </button>
          <button className="bg-red-600  px-6 py-2 rounded-md w-full">
            {t("contact_us")}
          </button>
        </div>
      )}
    </nav>
  );
}
