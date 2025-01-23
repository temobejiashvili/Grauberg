"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { TranslateText } from "../translateText/TranslateText";

import graubergTruck from "../../public/assets/graubergTruck.gif";
import cement from "../../public/images/cement.png";

type LinkType = {
  href: string;
  label: string;
};

interface ProductItemPropsType {
  isHeaderImageInView: boolean;
  isWhite: boolean;
  isSamePath: boolean;
  link: LinkType;
}

export const HeaderProductItem = ({
  isHeaderImageInView,
  isWhite,
  isSamePath,
  link,
}: ProductItemPropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement | null>(null);

  // Open the popup on hover
  const openPopup = () => setIsOpen(true);

  // Close the popup when clicking outside
  const handleOutsideClick = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <li className="relative" onMouseEnter={openPopup}>
      <span
        className={`cursor-pointer ${
          !isHeaderImageInView || isWhite ? "text-[#100F0F]" : "text-[#FFFFFF]"
        } ${
          isSamePath
            ? "border-solid border-b-[1px] border-[#D6D6D6] pb-[7px]"
            : "hover:border-solid hover:border-b-[1px] hover:border-[#D6D6D6] hover:pb-[7px]"
        }`}
      >
        <TranslateText text={link.label} />
      </span>
      {/* Popup with ref for detecting outside clicks */}
      {isOpen && (
        <div
          ref={popupRef}
          className="absolute top-[55px] mt-2 left-[-224px]
                    bg-white shadow-lg rounded-lg p-4
                    z-50 gap-4 w-[556px] h-[220px]
                    border border-gray-300 flex"
        >
          <div
            className="absolute top-[-15px] left-1/2
                       transform -translate-x-1/2 w-0 h-0 border-[0,13px,26px,13px]
                       border-triangle border-solid rotate-0"
          />

          <Link
            href="/product/cement"
            replace={true}
            locale={false}
            className="flex flex-col items-center justify-center w-1/2 p-4 border-r border-gray-300"
          >
            <Image
              src={cement}
              alt="Cement"
              width={65}
              height={98}
              className="mb-2"
              placeholder="blur"
            />
            <span className="text-[16px] leading-[26px] font-medium text-darkPrimary">
              <TranslateText text="portlandcement" />
            </span>
          </Link>

          <Link
            href="/product/concrete"
            replace={true}
            locale={false}
            className="flex flex-col items-center justify-center w-1/2 p-4"
          >
            <Image
              src={graubergTruck}
              alt="Concrete"
              width={190}
              height={120}
              className="mb-2"
            />
            <span
              className="text-[16px] leading-[26px]
                         font-medium text-darkPrimary
                         max-w-[226px]"
            >
              <TranslateText text="highFirmness" />
            </span>
          </Link>
        </div>
      )}
    </li>
  );
};
