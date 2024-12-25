"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { LangSwitcher } from "./LangSwitcher";
import { useScrollContext } from "@/app/context/ScrollContext";
import { useInView } from "react-intersection-observer";

const NAV_LINKS = [
  { href: "/#", label: "მთავარი" },
  { href: "/#", label: "ჩვენს შესახებ" },
  { href: "/#", label: "პროდუქტები" },
  { href: "/#", label: "ბლოგი" },
  { href: "/#", label: "FAQ" },
];

const LANG_OPTIONS = [
  {
    name: "Geo",
    value: "ge",
    imageUrl: "/assets/flagOfGeorgia.svg",
    alt: "Georgia Logo",
  },
  {
    name: "Eng",
    value: "en",
    imageUrl: "/assets/flagOfTheUk.svg",
    alt: "United Kingdom Logo",
  },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { setActiveSection } = useScrollContext();
  const { ref: headerRef, inView: isHeaderInView } = useInView({
    threshold: 0.2,
  });

  if (isHeaderInView) {
    setActiveSection("header");
  }

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.mainWrapper}>
      <header
        ref={headerRef}
        className={`${styles.headerWrapper} ${isOpen ? styles.headerOpen : ""}`}
      >
        <div className={styles.logoWrapper}>
          <Image
            src="/assets/logo.svg"
            alt="Logo"
            width={179}
            height={23.73}
            className={`${styles.logo} ${isOpen ? styles.hidden : ""}`}
          />
          <Image
            src="/assets/logoBlack.svg"
            alt="Logo"
            width={160}
            height={21.21}
            className={`${styles.logoBlack} ${isOpen ? styles.active : ""}`}
          />
          <Image
            src="/assets/burgerMenu.svg"
            alt="Logo"
            width={32}
            height={32}
            className={`${styles.burgerMenu} ${isOpen ? styles.hidden : ""}`}
            onClick={openMenu}
          />
          <Image
            src="/assets/xMark.svg"
            alt="Logo"
            width={24}
            height={24}
            className={`${styles.xMark} ${isOpen ? styles.active : ""}`}
            onClick={closeMenu}
          />
        </div>

        <ul
          className={`${styles.desktopNavWrapper} ${
            !isOpen ? styles.hidden : ""
          }`}
        >
          {NAV_LINKS.map((link, index) => (
            <li key={index}>
              <Link href={link.href}>{link.label}</Link>
              <Image
                src="/assets/arrowRight.svg"
                alt="Logo"
                width={17}
                height={1}
                className={`${styles.arrowRight}`}
              />
            </li>
          ))}
        </ul>

        <div
          className={`${styles.navAndButtonsWrapper} ${
            isOpen ? styles.active : ""
          }`}
        >
          <ul className={styles.mobNavWrapper}>
            {NAV_LINKS.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.label}</Link>
                <Image
                  src="/assets/arrowRight.svg"
                  alt="Logo"
                  width={17}
                  height={1}
                  className={`${styles.arrowRight}`}
                />
              </li>
            ))}
          </ul>

          <div className={styles.headerButtonsWrapper}>
            <button className={styles.headerButton}>კონტაქტი</button>
            <LangSwitcher options={LANG_OPTIONS} />
          </div>
        </div>
      </header>

      <section className="top-0 w-full h-[784px] overflow-hidden relative flex justify-center items-center md:h-full">
        <div className={styles.backgroundOverlay}></div>
        <Image
          src="/assets/images/backgroundImage.png"
          alt="coverImage"
          layout="fill"
          objectFit="cover"
          style={{ zIndex: "0" }}
        />
        <h2 className="relative w-[804px] text-center text-[56px] font-bold leading-[66px] text-[#f5f5f5] z-[2] -translate-y-[31px] max-900:w-[322px] max-900:text-[36px] max-900:leading-[44px] max-900:-translate-y-[44px]">
          სიმტკიცე რომელზეც შეგიძლია დააშენო
        </h2>
      </section>
    </div>
  );
};

export default Header;
