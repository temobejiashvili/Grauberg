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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { t } = useTranslation("common");

  return (
    <nav className="bg-black bg-opacity-30 px-6 py-4 fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Image src="/images/Vector.png" alt="Logo" width={23} height={23} />
          <h2 className="text-white text-xl">GRAUBERG</h2>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white">
            {t("home")}
          </a>
          <a href="#" className="text-white">
            {t("about")}
          </a>
          <a href="#" className="text-white">
            {t("products")}
          </a>
          <a href="#" className="text-white">
            {t("contact")}
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <LocaleSwitcher />
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
        <div className="md:hidden bg-custom-gray mt-4 p-4 space-y-4">
          <a href="#" className="block text-white">
            {t("home")}
          </a>
          <a href="#" className="block text-white">
            {t("about")}
          </a>
          <a href="#" className="block text-white">
            {t("products")}
          </a>
          <a href="#" className="block text-white">
            {t("contact")}
          </a>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-md flex items-center w-full">
            <span className="mr-2">🇬🇧</span> ENG
          </button>
          <button className="bg-red-600 text-white px-6 py-2 rounded-md w-full">
            {t("contact_us")}
          </button>
        </div>
      )}
    </nav>
  );
}
