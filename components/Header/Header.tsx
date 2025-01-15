"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useScrollContext } from "@/components/context/ScrollContext";
import { LangSwitcher } from "../LangSwitcher/LangSwitcher";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver/useIntersectionObserver";
import AnimatedText from "./AnimatedText";
import { usePathname } from "next/navigation";
import Arrow from "../../public/assets/arrow.svg";
import { useTranslation } from "react-i18next";

const NAV_LINKS = [
  { href: "/", label: "home" },
  { href: "/about-us", label: "about" },
  { href: "/product/cement", label: "products" },
  {
    href: "#",
    label: "blog",
    subLinks: [
      { href: "/blog", label: "blog" },
      { href: "/blog/catalog", label: "catalog" },
    ],
  },
  { href: "/faq", label: "FAQ" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLUListElement>(null); // Reference for the dropdown
  const [isProductPopupOpen, setIsProductPopupOpen] = useState(false);
  const [isProductDropDownOpen, setIsProductDropDownOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const AboutUsCover = ["/about-us"].includes(pathname);
  const isWhite = [
    "/contact",
    "/blog",
    "/product/cement",
    "/product/concrete",
  ].includes(pathname);
  const whiteOverlay = ["/product/cement", "/product/concrete"].includes(
    pathname
  );
  const cover = ["/faq"].includes(pathname);
  const catalog = ["/blog/catalog"].includes(pathname);

  const handleProductMouseEnter = () => setIsProductPopupOpen(true);

  const handleClickOutside = () => {
    setIsProductPopupOpen(false);
  };

  const handleProductDropDown = () => {
    setIsProductDropDownOpen((prev) => !prev);
  };

  const { setActiveSection } = useScrollContext();
  const { ref: headerRef, inView: isHeaderInView } = useInView({
    threshold: 0.2,
  });
  const { ref: headerImageRef, inView: isHeaderImageInView } = useInView({
    threshold: 0.2,
  });

  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,

    rootMargin: "300px 0px",
  });

  if (isHeaderInView && whiteOverlay) {
    setActiveSection("header");
  }

  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null); // Close the dropdown on outside click
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <header onClick={handleClickOutside}>
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
              <Image
                src="/assets/logo.svg"
                alt="Logo"
                width={179}
                height={23.73}
                className={`${
                  !isHeaderImageInView || isWhite || isOpen ? "hidden" : "block"
                }`}
              />
              <Image
                src="/assets/logoBlack.svg"
                alt="Logo"
                width={160}
                height={21.21}
                className={`${
                  !isHeaderImageInView || isWhite || isOpen ? "block" : "hidden"
                }`}
              />
            </Link>
          </div>

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
            {NAV_LINKS.map((link, index) =>
              link.label === "products" ? (
                <li key={index} className="relative group">
                  <span
                    className={`cursor-pointer ${
                      !isHeaderImageInView || isWhite
                        ? "text-[#100F0F]"
                        : "text-[#FFFFFF]"
                    } ${
                      pathname === link.href
                        ? "border-solid border-b-[1px] border-[#D6D6D6] pb-[7px]"
                        : "hover:border-solid hover:border-b-[1px] hover:border-[#D6D6D6] hover:pb-[7px]"
                    }`}
                  >
                    {t(link.label)}
                  </span>
                  <div
                    className="absolute top-[55px] mt-2 left-[-224px]
                    bg-white shadow-lg rounded-lg p-4
                      z-50 flex gap-4 w-[556px] h-[220px]
                      border border-gray-300 opacity-0 group-hover:opacity-100
                      group-hover:visible"
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
                        src="/images/cement.png"
                        alt="Cement"
                        width={65}
                        height={98}
                        className="mb-2"
                      />
                      <span className="text-[16px] leading-[26px] font-medium text-darkPrimary">
                        {t("portlandcement")}
                      </span>
                    </Link>

                    <Link
                      href="/product/concrete"
                      replace={true}
                      locale={false}
                      className="flex flex-col items-center justify-center w-1/2 p-4"
                    >
                      <Image
                        src="/assets/graubergTruck.gif"
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
                        {t("highFirmness")}
                      </span>
                    </Link>
                  </div>
                </li>
              ) : (
                <li key={index} className="relative group">
                  <Link
                    href={link.href}
                    replace={true}
                    locale={false}
                    className={`${
                      !isHeaderImageInView || isWhite
                        ? "text-[#100F0F]"
                        : "text-[#FFFFFF]"
                    } ${
                      pathname === link.href
                        ? "border-solid border-b-[1px] border-[#D6D6D6] pb-[7px]"
                        : "hover:border-solid hover:border-b-[1px] hover:border-[#ee2e24] hover:pb-[7px]"
                    }`}
                  >
                    {t(link.label)}
                  </Link>

                  {link.subLinks && (
                    <ul
                      className="absolute top-[40px] left-0 w-[200px] py-[5px] bg-[#FFF] rounded-[10px]
                     shadow-md opacity-0 group-hover:opacity-100
                      group-hover:visible transition-opacity duration-200 z-[100]"
                    >
                      {link.subLinks.map((subLink, subIndex) => (
                        <li
                          key={subIndex}
                          className="border-b border-gray-200 last:border-0"
                        >
                          <Link
                            href={subLink.href}
                            className="block px-[10px] py-1 hover:font-semibold text-black-opacity"
                            onClick={closeMenu}
                          >
                            {t(subLink.label)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            )}
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
            ref={dropdownRef}
            className={`w-full flex flex-col gap-[30px]  ${
              isOpen ? "max-900:flex" : "hidden"
            }`}
          >
            {NAV_LINKS.map((link, index) =>
              link.label === "products" ? (
                <li
                  key={index}
                  onClick={handleProductDropDown}
                  className="relative"
                >
                  <span
                    className={`text-[#FFFFFF] text-[20px] font-medium leading-[37px]`}
                  >
                    {t(link.label)}
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
                      >
                        {t("cement")}
                      </Link>
                      <Link
                        href={"/product/concrete"}
                        className={`text-[#FFFFFF] text-[20px] font-medium leading-[37px] ${
                          pathname === "/product/concrete"
                            ? "border-solid border-b-[1px] border-[#D6D6D6] "
                            : ""
                        }`}
                      >
                        {t("concrete")}
                      </Link>
                    </div>
                  )}
                </li>
              ) : link.subLinks ? (
                <>
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === link.label ? null : link.label
                      )
                    }
                  >
                    <span
                      className={`text-[#FFFFFF] text-[20px] font-medium leading-[37px] ${
                        pathname === link.href
                          ? "border-solid border-b-[1px] border-[#D6D6D6]"
                          : ""
                      }`}
                    >
                      {t(link.label)}
                    </span>
                    <Image
                      src="/assets/arrowRight.svg"
                      alt="Expand"
                      width={17}
                      height={1}
                      className={`${
                        activeDropdown === link.label ? "rotate-90" : ""
                      } transition-transform`}
                    />
                  </div>
                  {activeDropdown === link.label && (
                    <ul className="mt-2 pl-4">
                      {link.subLinks.map((subLink, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subLink.href}
                            className="text-[#D6D6D6] text-[18px] font-medium leading-[30px]"
                            onClick={closeMenu}
                          >
                            {t(subLink.label)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <li key={index} className="flex justify-between items-center">
                  <Link
                    href={link.href}
                    className={`text-[#FFFFFF] text-[20px] font-medium leading-[37px] ${
                      pathname === link.href
                        ? "border-solid border-b-[1px] border-[#D6D6D6] "
                        : ""
                    }`}
                    onClick={closeMenu}
                  >
                    {t(link.label)}
                  </Link>
                  <Image
                    src="/assets/arrowRight.svg"
                    alt="Logo"
                    width={17}
                    height={1}
                    className={`${isOpen ? "block" : "hidden"}`}
                  />
                </li>
              )
            )}
          </ul>
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
          <h2
            ref={headerImageRef}
            className="text-center text-[44px] absolute font-bold leading-[56px] text-[#FFFFFF] z-[11] max-900:text-[28px] max-900:leading-[34px] max-900:w-[300px] pt-[174px] max-900:pt-[110px]"
          >
            {t("frequentlyAskedQuestions")}
          </h2>
        </section>
      )}
      {whiteOverlay && (
        <section className="flex flex-col items-center">
          <div className="w-[calc(100%-66px)] h-[752px] flex justify-center max-1250:h-[700px] max-900:w-full  max-900:h-[568px]">
            <div className="top-0 relative w-[calc(100%-3px)] h-[751px] overflow-hidden flex justify-center  max-1250:h-[700px] max-900:h-[568px] ">
              <span className="w-[1px] h-[1px]" ref={headerRef}></span>
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
              <h2
                ref={headerImageRef}
                className="w-[804px] text-center text-[70.56px] font-bold leading-[88px]  text-[#100F0F] z-[2] pt-[166px] max-1100:text-[56px] max-900:w-[382px] max-900:text-[36px] max-900:leading-[44px]"
              >
                {t("strengthYou")} {t("canBuildOn")}
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
      {!cover && !whiteOverlay && !isWhite && !AboutUsCover && !catalog && (
        <section className="top-0 relative w-full h-[784px] overflow-hidden  flex justify-center items-center max-1250:h-[700px] max-900:h-[568px]  ">
          <video
            ref={headerImageRef}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/assets/backgroundVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute top-0 left-0 w-full h-full bg-black-opacity-60 z-[1]"></div>
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
            <AnimatedText time={700} data="strengthYou" />
            <AnimatedText time={950} data="canBuildOn" />
          </h2>
        </section>
      )}
      {AboutUsCover && (
        <section className="w-full h-[703px]">
          <div className="top-0 relative w-full h-full overflow-hidden flex justify-center items-center">
            <Image
              src="/assets/images/Subtttract.png"
              alt="coverImage"
              layout="fill"
              style={{ zIndex: "0", objectFit: "fill" }}
              className="max-900:hidden"
            />
            <Image
              src="/assets/images/Subbbbtract.png"
              alt="coverImage"
              layout="fill"
              style={{ zIndex: "0", objectFit: "fill" }}
              className="hidden max-900:block"
            />
            <h2
              ref={headerImageRef}
              className="text-[56px] font-bold leading-[66px] text-[#F5F5F5] z-[2] max-900:text-[36px] max-900:leading-[44px] -translate-y-[31px] max-900:-translate-y-[44px]"
            >
              {t("about")}
            </h2>
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
      {catalog && (
        <section className="w-full h-[764px] overflow-hidden max-1300:h-[745px] max-1100:h-[700px] max-900:h-[802px]">
          <div className="w-full h-full relative overflow-hidden">
            <Image
              src="/assets/images/Rectangle334.png"
              alt="coverImage"
              layout="fill"
              style={{ zIndex: "0" }}
              className="max-900:hidden"
            />
            <Image
              src="/assets/images/Rectangle3463531.png"
              alt="coverImage"
              layout="fill"
              style={{ zIndex: "0" }}
              className="hidden max-900:block"
            />
          </div>
          <div className="w-full absolute top-[88px] flex justify-between max-900:flex-col max-900:items-center max-900:gap-[33px]">
            <aside className="pt-[110px] pl-[107px] flex flex-col  max-w-[500px] mr-[30px] max-1100:pl-[80px] max-1100:max-w-[400px] max-900:pt-[0px] max-900:pl-[0px] max-900:max-w-[370px] max-900:mr-[0px]">
              <Link
                href="#"
                className="text-[12px] text-[#FFFFFF] leading-[20px] px-[22px] py-[6px] rounded-[60px] bg-[#5C5C5C] w-fit "
              >
                {t("popularBlog")}
              </Link>
              <article className="mt-[32px] mb-[40px] max-900:my-[19px]">
                <h2 className="text-[#F5F5F5] text-[28px] font-bold leading-[34px] max-900:text-[24px] max-900:leading-[32px]">
                  {t("betonTypes")}
                </h2>
                <p className="text-[#FFFFFF] leading-[26px] mt-[21px] max-900:text-[14px] max-900:leading-[20px]">
                  შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
                  ემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს დტიპო
                  გრაფ იული ნაწარმის შემქმნელებს...
                </p>
              </article>
              <Link
                href="/blog"
                className="group bg-[#D6D6D6] flex justify-center items-center rounded-[10px] w-[240px] h-[54px] border-[1px] border-solid border-[#D6D6D6] hover:bg-primary transition-colors text-sm text-darkPrimary hover:text-white max-900:w-full max-1100:mt-[10px] max-900:mt-[0px]"
              >
                {t("viewAll")}
                <Arrow className="w-2 object-cover ml-3 group-hover:filter group-hover:brightness-0 group-hover:invert" />
              </Link>
            </aside>
            <aside>
              <Image
                src="/assets/images/MaskGroup.png"
                alt="coverImage"
                width={752}
                height={676}
                style={{ zIndex: "0" }}
                className="max-900:hidden max-1300:h-[657px] max-1300:w-[640px] max-1100:w-[560px] max-1100:h-[610px]"
              />
              <Image
                src="/assets/images/MaskGroup1.png"
                alt="coverImage"
                width={371}
                height={327}
                style={{ zIndex: "0" }}
                className="hidden max-900:block"
              />
            </aside>
          </div>
        </section>
      )}
    </header>
  );
};

export default Header;
