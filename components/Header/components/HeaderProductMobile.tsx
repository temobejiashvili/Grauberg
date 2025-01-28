"use client";

import { TranslateText } from "@/components/translateText/TranslateText";
import Link from "next/link";
import { useState } from "react";
import { LinkType } from "./HeaderTypes";

interface ProductMobileProps {
  link: LinkType;
  index: number;
  pathname: string;
  closeMenu: () => void;
}

const HeaderProductMobile = ({
  link,
  index,
  pathname,
  closeMenu,
}: ProductMobileProps) => {
  const [isProductDropDownOpen, setIsProductDropDownOpen] = useState(false);

  const handleProductDropDown = () => {
    setIsProductDropDownOpen((prev) => !prev);
  };

  return (
    <li
      key={index}
      onClick={handleProductDropDown}
      className="relative cursor-pointer"
    >
      <span className={`text-[#FFFFFF] text-[20px] font-medium leading-[37px]`}>
        <TranslateText text={link.label} />
      </span>
      {isProductDropDownOpen && (
        <div className="flex flex-col">
          <Link
            href={"/product/cement"}
            className={`text-[#FFFFFF] text-[20px] font-medium leading-[37px] ${
              pathname === "/product/cement"
                ? "border-solid border-b-[1px] border-[#D6D6D6] "
                : ""
            }`}
            onClick={closeMenu}
          >
            <TranslateText text="cement" />
          </Link>
          <Link
            href={"/product/concrete"}
            className={`text-[#FFFFFF] text-[20px] font-medium leading-[37px] ${
              pathname === "/product/concrete"
                ? "border-solid border-b-[1px] border-[#D6D6D6] "
                : ""
            }`}
            onClick={closeMenu}
          >
            <TranslateText text="concrete" />
          </Link>
        </div>
      )}
    </li>
  );
};

export default HeaderProductMobile;
