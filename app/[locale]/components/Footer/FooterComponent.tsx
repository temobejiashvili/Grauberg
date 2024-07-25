"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { ContainerDiv } from "@/components";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import Modal from "@/components/CustomModal";
import ContactForm from "./ContactForm";
import RequestCallForm from "./RequestCallForm";

export default function FooterComponent() {
  const { t } = useTranslation("common");
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  const handleContactSubmit = (event: MouseEvent) => {
    event.preventDefault();
    setIsContactModalOpen(false);
  };

  const handleCallSubmit = (event: MouseEvent) => {
    event.preventDefault();
    setIsCallModalOpen(false);
  };
  return (
    <>
      <div className="bg-[black] px-4 md:px-[56px] pt-[81px]  " id="contact">
        <div className=" bg-[white]  py-[41px] md:py-[110px] bg-contact-bg  overflow-auto rounded-3xl flex flex-col items-center gap-[31px]">
          <h2 className="text-[40px] md:text-[64px] font-bold">
            {t("getInTouch")}
          </h2>
          <p className="font-normal max-w-[350px] md:max-w-[558px] text-center">
            {t("getInTouchDescription")}
          </p>
          <div>
            <button
              className="bg-red-600 text-white text-[14px] px-[67px] py-[22px] rounded-lg"
              onClick={() => setIsContactModalOpen(true)}
            >
              {t("sendEmail")}
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-[black] pt-14 md:pt-[120px] relative overflow-hidden">
        <ContainerDiv>
          <div className="bg-[black]">
            <div className="flex flex-col py-[19px]">
              <div className="flex flex-col items-center gap-6 mb-6 md:mb-0">
                <h2 className="text-[white] font-bold text-[32px] capitalize">
                  {t("getInTouch")}
                </h2>
                <div>
                  <button
                    className="bg-red-600 text-white text-[14px] px-[67px] py-[22px] rounded-md"
                    onClick={() => setIsCallModalOpen(true)}
                  >
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
                <a
                  href="https://www.instagram.com/grauberg.ge/"
                  target="_blank"
                >
                  <div className="w-[40px] h-[40px] rounded-[50%] bg-[#EE2E24] flex justify-center items-center">
                    <FaInstagram size={20} className="text-[white] !w-[29px]" />
                  </div>
                </a>
                <a href="https://wa.me/995595153333" target="blank">
                  <div className="w-[40px] h-[40px] rounded-[50%] bg-[#EE2E24] flex justify-center items-center">
                    <FaWhatsapp size={20} className="text-[white] !w-[29px]" />
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/share/t4BT4uCviA8bnjh1/?mibextid=LQQJ4d"
                  target="blank"
                >
                  <div className="w-[40px] h-[40px] rounded-[50%] bg-[#EE2E24] flex justify-center items-center">
                    <FaFacebook size={20} className="text-[white] !w-[29px]" />
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
                  src="/images/nav-logo.png"
                  alt="Logo"
                  width={106}
                  height={14}
                  className="w-[106px] h-[14px] lg:w-[175px] lg:h-[24px]"
                />
                {/* <h2 className="text-white text-xl">GRAUBERG</h2> */}
              </div>
            </div>
          </div>
        </ContainerDiv>
        <Modal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          title="contactUs"
        >
          <ContactForm onClose={() => setIsContactModalOpen(false)} />
        </Modal>

        <Modal
          isOpen={isCallModalOpen}
          onClose={() => setIsCallModalOpen(false)}
          title="requestACall"
        >
          <RequestCallForm onClose={() => setIsCallModalOpen(false)} />
        </Modal>
        <div className="w-full flex md:flex-row justify-center items-center mb-[-12px] md:mb-[-20px] lg:mb-[-45px] mt-[70px]">
          <Image
            src="/images/footer-logo.png"
            alt="Logo"
            width={414}
            height={50}
            className="w-[414px] h-[50px]  md:w-[740px] md:h-[140px] lg:w-[1336px] lg:h-[160px]"
          />
          {/* <h2 className="text-[60px]  md:text-[120px] lg:text-[160px] text-white">
            GRAUBERG
          </h2> */}
        </div>
      </footer>
    </>
  );
}
