"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "./footer.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/content/navigation";

import navLogo from "@/public/images/nav-logo.webp";
import shadow from "@/public/assets/shadow.webp";

export default function FooterComponent() {
  const { t } = useTranslation("common");
  const pathname = usePathname();
  const hasNotPadding = pathname.startsWith("/product");

  return (
    <footer
      className={`${styles.footer} ${hasNotPadding ? "pt-0" : "pt-[87px]"}`}
      id="footer"
    >
      <div className="flex max-1100:items-center">
        <div
          className="w-full ml-auto pl-4 pb-[62px] pt-[170px] flex flex-row justify-around items-start
        max-1100:flex-col max-1100:items-center
        max-1100:pt-[139px] max-1100:pl-0"
        >
          <div
            className="flex flex-col items-center md:items-start mb-8 md:mb-0
          max-1100:mb-16"
          >
            <Image
              src={navLogo}
              alt="Grauberg Logo"
              width={256}
              height={34}
              placeholder="blur"
              className="w-[256px] h-[34px] mb-[34px]"
            />

            <div className="flex space-x-[13px] max-1100:justify-center max-1100:w-full">
              <Link
                href="https://www.facebook.com/profile.php?id=61560890423910"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Image
                  src="/assets/facebookRed.svg"
                  alt="Facebook"
                  width={44}
                  height={44}
                  className="w-11 h-11"
                />
              </Link>
              <Link
                href="https://www.instagram.com/grauberg.ge/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image
                  src="/assets/instagramRed.svg"
                  alt="Instagram"
                  width={44}
                  height={44}
                  className="w-11 h-11"
                />
              </Link>
            </div>
          </div>
          <div className="md:flex-row text-white text-sm">
            <h3 className="font-bold text-20 mb-3">{t("navigation")}</h3>
            <div className="flex">
              <div className="flex flex-col gap-[10px] mr-[34px]">
                {navigation.map((nav, i) => (
                  <Link
                    key={i}
                    href={nav.url}
                    className="flex items-center hover:text-red-600"
                  >
                    <span className="text-primary mr-1">&gt;</span>{" "}
                    {t(nav.name)}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col">
                <Link
                  href={"/terms-conditions"}
                  className="hover:text-red-600 mb-[10px]"
                >
                  <span className="text-primary mr-1">&gt;</span>{" "}
                  {t("termsAndConditions")}
                </Link>
                {/* <Link href={"/personal-details"} className="hover:text-red-600">
                  <span className="text-primary mr-1">&gt;</span>{" "}
                  {t("rulesAndConditions")}
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        <Image
          src={shadow}
          width={396}
          height={391}
          alt="Shadow"
          placeholder="blur"
          className="pb-[15px] max-1100:hidden"
        />
      </div>
      <div className={`w-full h-[2px] ${styles.footerBottom}`}></div>
      <div
        className={`pt-[19px] pb-5 text-white text-center font-medium text-sm`}
      >
        <div className="pt-[19px] pb-5 text-white text-center font-medium text-sm">
          © 2024 GRAUBERG. All rights reserved
        </div>
      </div>
    </footer>
  );
}
