"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import styles from "./footer.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    name: "მთავარი",
    url: "/",
  },
  {
    name: "ჩვენს შესახებ",
    url: "about-us",
  },
  { name: "პროდუქტი", url: "/product" },

  { name: "ბლოგი", url: "/blog" },

  { name: "ხშირად დასმული კითხვები", url: "/faq" },

  { name: "კონტაქტი", url: "/contact" },
];

export default function FooterComponent() {
  const { t } = useTranslation("common");
  const pathname = usePathname();
  const hasNotPadding = ["/en/product"].includes(pathname);

  return (
    <footer
      className={`${styles.footer} ${hasNotPadding ? "pt-0" : "pt-[87px]"}`}
      id="footer"
    >
      <div className="flex">
        <div
          className="w-full ml-auto pl-4 pb-[62px] pt-[170px] flex flex-row justify-around items-start
        max-1100:flex-col max-1100:items-center
        max-1100:pt-[139px] max-1100:pl-0"
        >
          {/* Logo and Social Media */}
          <div
            className="flex flex-col items-center md:items-start mb-8 md:mb-0
          max-1100:mb-16"
          >
            <Image
              src="/images/nav-logo.png"
              alt="Logo"
              width={256}
              height={34}
              className="w-[256px] h-[34px] mb-[34px]"
            />
            <div className="flex space-x-[13px] max-1100:justify-center max-1100:w-full">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/facebookRed.svg"
                  alt="facebook"
                  width={44}
                  height={44}
                  className="w-11 h-11"
                />
              </a>
              <a
                href="https://www.instagram.com/grauberg.ge/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/instagramRed.svg"
                  alt="instagram"
                  width={44}
                  height={44}
                  className="w-11 h-11"
                />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:flex-row text-white text-sm">
            <h3 className="font-bold text-20 mb-3">{t("ნავიგაცია")}</h3>
            <div className="flex">
              <div className="flex flex-col gap-[10px] mr-[34px]">
                {navigation.map((nav, i) => (
                  <div key={i} className="flex ">
                    <div className="flex items-center justify-center w-5 h-5 bg-transparent">
                      <span className="text-primary">&gt;</span>
                    </div>

                    <Link
                      href={nav.url}
                      className="hover:text-red-600 font-normal text-stroke text-sm ml-[5px]"
                    >
                      {nav.name}
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex flex-col gap-[10px]">
                  <div className="flex">
                    <div className="flex items-center justify-center w-5 h-5 bg-transparent">
                      <span className="text-primary">&gt;</span>
                    </div>
                    <a
                      href="#section5"
                      className="hover:text-red-600 text-stroke ml-[5px]"
                    >
                      {t("წესები და პირობები")}
                    </a>
                  </div>
                  <div className="flex">
                    <div className="flex items-center justify-center w-5 h-5 bg-transparent">
                      <span className="text-primary">&gt;</span>
                    </div>
                    <a
                      href="#section6"
                      className="hover:text-red-600 text-stroke ml-[5px]"
                    >
                      {t("პერსონალური მონაცემები")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          src={"/assets/shadow.png"}
          width={396}
          height={391}
          alt="shadow"
          className="pb-[15px] max-1100:hidden"
        />
      </div>
      <div className={` w-full h-[2px] ${styles.footerBottom}`}></div>

      {/* Footer Bottom */}
      <div
        className={`pt-[19px] pb-5 text-white text-center font-medium text-sm`}
      >
        © 2024 GRAUBERG. All rights reserved
      </div>
    </footer>
  );
}
