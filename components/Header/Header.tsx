"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import { LangSwitcher } from "./LangSwitcher";
import AnimatedText from "./AnimatedText";

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
  const [isLoading, setIsLoading] = useState(true);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // For the menu

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsTextVisible(true); // Trigger fade-in after loading
    }, 800); // Matches the faster animation time for loading
    return () => clearTimeout(timer);
  }, []);

  // Menu toggle functions
  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.mainWrapper}>
      <header
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

        {/* Wrap the texts in a parent container */}
        <div className="text-center space-y-4">
          <AnimatedText time={700} data="სიმტკიცე რომელზეც" />
          <AnimatedText time={950} data="შეგიძლია დააშენო" />
        </div>
      </section>
    </div>
  );
};

export default Header;
