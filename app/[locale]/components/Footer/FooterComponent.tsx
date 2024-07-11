"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { ContainerDiv } from "@/components";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function FooterComponent() {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="bg-[black] px-[56px] pt-[81px]" id="contact">
        <div className=" bg-[white] py-[41px] md:py-[110px]  rounded-3xl flex flex-col items-center gap-[31px]">
          <h2 className="text-[40px] md:text-[64px] font-bold">
            {t("getInTouch")}
          </h2>
          <p className="font-normal w-[350px] md:w-[600px] text-center">
            {t("getInTouchDescription")}
          </p>
          <div>
            <button className="bg-red-600 text-white text-[14px] px-[67px] py-[22px] rounded-md">
              {t("sendEmail")}
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-[black] pt-[10px] relative overflow-hidden">
        <ContainerDiv>
          <div className="bg-[black]">
            <div className="flex flex-col py-[19px]">
              <div className="hidden md:flex md:flex-col items-center gap-6">
                <h2 className="text-[white] font-bold text-[32px] capitalize">
                  {t("getInTouchWithUs")}
                </h2>
                <div>
                  <button className="bg-red-600 text-white text-[14px] px-[67px] py-[22px] rounded-md">
                    {t("requestACall")}
                  </button>
                </div>
              </div>
              <nav>
                <div className="flex flex-col items-center gap-[24px] md:flex-row md:justify-center md:gap-[40px] md:mt-[31px]">
                  <a
                    href="#home"
                    className="text-white md:text-[24px] md:font-normal font-semibold text-[16px]"
                  >
                    {t("home")}
                  </a>
                  <a
                    href="#about"
                    className="text-white md:text-[24px] md:font-normal font-semibold text-[16px]"
                  >
                    {t("about")}
                  </a>
                  <a
                    href="#products"
                    className="text-white md:text-[24px] md:font-normal font-semibold text-[16px]"
                  >
                    {t("products")}
                  </a>
                </div>
              </nav>

              <div className="flex items-center justify-center gap-[18px] mt-[32px] md:mt-[28px]">
                <a href="#">
                  <div className="w-[40px] h-[40px] rounded-[50%] bg-[#EE2E24] flex justify-center items-center">
                    <FaInstagram className="text-[white] !w-[29px]" />
                  </div>
                </a>
                <a href="https://wa.me/995591123123" target="blank">
                  <div className="w-[40px] h-[40px] rounded-[50%] bg-[#EE2E24] flex justify-center items-center">
                    <FaWhatsapp className="text-[white] !w-[29px]" />
                  </div>
                </a>
                <a href="#">
                  <div className="w-[40px] h-[40px] rounded-[50%] bg-[#EE2E24] flex justify-center items-center">
                    <FaFacebook className="text-[white] !w-[29px]" />
                  </div>
                </a>
              </div>
            </div>
            <div className="mt-[54px] flex flex-col gap-6 md:mt-[19px] md:flex md:flex-col md:items-center ">
              <h6 className="text-[14px] font-normal text-[#fff]">
                {t("allRightReserved")}
              </h6>
              <div className="flex items-end space-x-2 ">
                <Image
                  src="/images/Vector.png"
                  alt="Logo"
                  width={23}
                  height={23}
                />
                <h2 className="text-white text-xl">GRAUBERG</h2>
              </div>
            </div>
          </div>
        </ContainerDiv>
        <div className="w-full flex md:flex-row justify-center items-center mb-[-30px] md:mb-[-60px] lg:mb-[-85px]">
          <Image
            src="/images/BigVector.svg"
            alt="Logo"
            width={179}
            height={158}
            className="opacity-60 w-[70px] h-[70px]  md:w-[140px] md:h-[140px] lg:w-[179px] lg:h-[158px]"
          />
          <h2 className="text-[60px]  md:text-[120px] lg:text-[160px] text-white opacity-60">
            GRAUBERG
          </h2>
        </div>
      </footer>
    </>
  );
}
