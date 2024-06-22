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
      <div className="bg-[black] px-[56px]">
        <div className=" bg-[white] py-[41px] md:py-[110px]  rounded-3xl flex flex-col items-center gap-[31px]">
          <h2 className="text-[64px] font-bold">Get in touch</h2>
          <p className="font-normal w-[350px] md:w-[600px] text-center">
            Have questions or need more information? Get in touch with us today
            to discuss your project needs and discover how GRAUBERG can support
            your construction goals. Were here to help
          </p>
          <div>
            <button className="bg-red-600 text-white text-[14px] px-[67px] py-[22px] rounded-md">
              {t("contact_us")}
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-[black] pt-[118px]">
        <ContainerDiv>
          <div className="bg-[black]">
            <div className="flex flex-col py-[19px]">
              <div className="hidden md:flex md:flex-col items-center gap-6">
                <h2 className="text-[white] font-bold text-[32px] capitalize">
                  Get In Touch With Us
                </h2>
                <div>
                  <button className="bg-red-600 text-white text-[14px] px-[67px] py-[22px] rounded-md">
                    {t("contact_us")}
                  </button>
                </div>
              </div>
              <nav>
                <div className="flex flex-col items-center gap-[24px] md:flex-row md:justify-center md:gap-[40px] md:mt-[31px]">
                  <a
                    href="#"
                    className="text-white md:text-[24px] md:font-normal font-semibold text-[16px]"
                  >
                    {t("home")}
                  </a>
                  <a
                    href="#"
                    className="text-white md:text-[24px] md:font-normal font-semibold text-[16px]"
                  >
                    {t("about")}
                  </a>
                  <a
                    href="#"
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
                <a href="#">
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
                © 2023 Grauberg, All Rights Reserved
              </h6>
              <div className="flex items-end space-x-2">
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
        <div className="w-full flex md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
          <Image
            src="/images/BigVector.svg"
            alt="Logo"
            width={179}
            height={158}
            className="opacity-60 w-[50px] h-[50px] sd:w-[100px] sd:h-[100px] md:w-[140px] md:h-[140px] lg:w-[179px] lg:h-[158px]"
          />
          <h2 className="text-[60px]  md:text-[100px] lg:text-[130px] text-white opacity-60">
            GRAUBERG
          </h2>
        </div>
      </footer>
    </>
  );
}
