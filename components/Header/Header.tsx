"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useScrollContext } from "@/components/context/ScrollContext";
import { LangSwitcher } from "../LangSwitcher/LangSwitcher";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const dynamicImports = {
  HeaderNavList: dynamic(() => import("./components/HeaderNavList"), {
    ssr: true,
  }),

  HeaderProductMobile: dynamic(
    () => import("./components/HeaderProductMobile"),
    {
      ssr: false,
    }
  ),

  HeaderItemMobile: dynamic(() => import("./components/HeaderItemMobile"), {
    ssr: true,
  }),

  HeaderFAQ: dynamic(() => import("./components/HeaderFAQ"), {
    ssr: true,
  }),

  HeaderProduct: dynamic(() => import("./components/HeaderProduct"), {
    ssr: true,
  }),

  HeaderMain: dynamic(() => import("./components/HeaderMain"), {
    ssr: false,
  }),

  HeaderAboutUs: dynamic(() => import("./components/HeaderAboutUs"), {
    ssr: true,
  }),

  HeaderCatalog: dynamic(() => import("./components/HeaderCatalog"), {
    ssr: true,
  }),
};

type NonEmptyArray<T> = [T, ...T[]];

const NAV_LINKS: NonEmptyArray<{ href: string; label: string }> = [
  { href: "/", label: "home" },
  { href: "/about-us", label: "about" },
  { href: "/product/cement", label: "products" },
  {
    href: "/blog/catalog",
    label: "blog",
  },
  { href: "/faq", label: "FAQ" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const [windowWidth, setWindowWidth] = useState(0);
  const pathname = usePathname();
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const is900 = windowWidth <= 900;

  const isMobileOpen = is900 && isOpen;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const AboutUsCover = ["/about-us"].includes(pathname);
  const isWhite = [
    "/contact",
    "/blog/article",
    "/product/cement",
    "/product/concrete",
  ].includes(pathname);
  const whiteOverlay = ["/product/cement", "/product/concrete"].includes(
    pathname
  );
  const cover = ["/faq"].includes(pathname);
  const catalog = ["/blog/catalog"].includes(pathname);

  const { setActiveSection } = useScrollContext();
  const { ref: headerRef, inView: isHeaderInView } = useInView({
    threshold: 0.2,
  });
  const { ref: headerImageRef, inView: isHeaderImageInView } = useInView({
    threshold: 0.2,
  });

  if (isHeaderInView && whiteOverlay) {
    setActiveSection("header");
  }

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <div
        className={`w-full flex justify-between items-center px-[120px] py-[32.14px] z-[100] ${
          isOpen
            ? "bg-[#EE2E24] fixed top-0 left-0 w-full h-screen flex-col items-center max-900:px-0 max-900:py-0 "
            : `${
                !isHeaderImageInView || isWhite
                  ? "bg-[#FFFFFF] fixed top-0 left-0 h-[60px] shadow-[0px_4px_24px_0px_rgba(0,0,0,0.05)"
                  : "bg-transparent absolute"
              } max-1250:px-[25px]`
        } `}
      >
        <div
          className={`flex justify-between max-900:w-full cursor-pointer ${
            isOpen ? "bg-[#FFFFFF] px-[20px] py-[19.4px]" : ""
          }`}
        >
          <div className="flex items-center">
            <Link href={"/"}>
              {!isHeaderImageInView || isWhite || isOpen ? (
                <Image
                  src="/assets/logoBlack.svg"
                  alt="LogoBlack"
                  width={160}
                  height={21.21}
                />
              ) : (
                <Image
                  src="/assets/logo.svg"
                  alt="Logo"
                  width={179}
                  height={23.73}
                />
              )}
            </Link>
          </div>

          {is900 &&
            (!isOpen ? (
              <Image
                src="/assets/burgerMenu.svg"
                alt="burgerMenu"
                width={32}
                height={32}
                onClick={openMenu}
              />
            ) : (
              <Image
                src="/assets/xMark.svg"
                alt="xMar"
                width={24}
                height={24}
                onClick={openMenu}
              />
            ))}
        </div>

        {!is900 && !isOpen && (
          <div>
            <ul className="flex justify-center items-center gap-[36px] whitespace-nowrap max-1250:gap-[22px] px-[20px]">
              {NAV_LINKS.map((link, index) => (
                <dynamicImports.HeaderNavList
                  link={link}
                  index={index}
                  isHeaderImageInView={isHeaderImageInView}
                  isWhite={isWhite}
                  pathname={pathname}
                />
              ))}
            </ul>
          </div>
        )}
        <div
          className={`flex items-center justify-center gap-[22px] ${
            isOpen
              ? "max-900:flex max-900:w-full max-900:h-full max-900:px-[22px] max-900:py-[32px] max-900:justify-start flex-col gap-[87px] "
              : "max-900:hidden"
          }`}
        >
          {isMobileOpen && (
            <ul ref={dropdownRef} className={"w-full flex flex-col gap-[30px]"}>
              {NAV_LINKS.map((link, index) =>
                link.label === "products" ? (
                  <dynamicImports.HeaderProductMobile
                    link={link}
                    index={index}
                    pathname={pathname}
                    closeMenu={closeMenu}
                  />
                ) : (
                  <dynamicImports.HeaderItemMobile
                    link={link}
                    index={index}
                    closeMenu={closeMenu}
                    pathname={pathname}
                  />
                )
              )}
            </ul>
          )}
          <div className="flex items-center justify-center gap-[22px] max-900:flex-col max-900:gap-[87px] max-900:w-full max-1100:gap-[10px]">
            <Link
              href="/contact"
              className={
                "flex items-center justify-center w-[148px] h-[46px] bg-[#ee2e24] rounded-[60px] border-[0px] text-[#ffffff] text-[14px] max-1250:w-[100px] max-900:w-full max-900:bg-[#FFFFFF]  max-900:text-[#100F0F] max-900:h-[54px]"
              }
              onClick={closeMenu}
            >
              {t("contact")}
            </Link>
            <LangSwitcher />
          </div>
        </div>
      </div>
      {cover && (
        <dynamicImports.HeaderFAQ
          is900={is900}
          headerImageRef={headerImageRef}
        />
      )}
      {whiteOverlay && (
        <dynamicImports.HeaderProduct
          is900={is900}
          headerRef={headerRef}
          headerImageRef={headerImageRef}
        />
      )}
      {!cover && !whiteOverlay && !isWhite && !AboutUsCover && !catalog && (
        <dynamicImports.HeaderMain headerImageRef={headerImageRef} />
      )}
      {AboutUsCover && (
        <dynamicImports.HeaderAboutUs
          is900={is900}
          headerImageRef={headerImageRef}
        />
      )}
      {catalog && <dynamicImports.HeaderCatalog is900={is900} />}
    </header>
  );
};

export default Header;
