import React from "react";
import Image from "next/image";

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-[93px] pt-[212px] max-900:pt-[94px] px-[123px] bg-[#F5F5F5] max-1250:px-[70px] max-900:items-center max-900:gap-[34px]">
      <section className="flex justify-between items-center max-1100:flex-col max-1100:gap-[52px]">
        <aside className="flex flex-col  gap-[77px] max-900:gap-[32px] max-900:w-[410px]">
          <div className="flex flex-col gap-[12px]">
            <h2 className="text-[#100F0F] text-[44px] leading-[56px] font-bold max-900:text-[28px] max-900:leading-[34px]">
              კონტაქტი
            </h2>
            <p className="text-[#100F0F] text-[16px] leading-[26px] max-w-[522px] max-900:text-[14px] max-900:leading-[20px] max-900:max-w-[370px]">
              შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპო გრაფ
              იული ნაწარმის შემქმნელებს, რეალურთან მაქს
            </p>
          </div>
          <ul className="flex flex-col gap-[24px]">
            <li className="flex items-center gap-[16px]">
              <div
                className="w-[56px] h-[56px] rounded-[16px] bg-[#EE2E24] flex justify-center items-center"
                style={{
                  boxShadow: `
                  0px 12px 26px 0px rgba(0, 0, 0, 0.1),
                  0px 48px 48px 0px rgba(0, 0, 0, 0.09),
                  0px 107px 64px 0px rgba(0, 0, 0, 0.05),
                  0px 190px 76px 0px rgba(0, 0, 0, 0.01),
                  0px 297px 83px 0px rgba(0, 0, 0, 0)
                `,
                }}
              >
                <Image
                  src="/assets/icons/mobile.svg"
                  alt="mobileIcon"
                  width={26}
                  height={26}
                />
              </div>
              <a className="font-medium leading-[26px] text-[#100F0F]" href="#">
                +995 599 47-81-18
              </a>
            </li>
            <li className="flex items-center gap-[16px]">
              <div
                className="w-[56px] h-[56px] rounded-[16px] bg-[#EE2E24] flex justify-center items-center"
                style={{
                  boxShadow: `
                      0px 12px 26px 0px rgba(0, 0, 0, 0.1),
                      0px 48px 48px 0px rgba(0, 0, 0, 0.09),
                      0px 107px 64px 0px rgba(0, 0, 0, 0.05),
                      0px 190px 76px 0px rgba(0, 0, 0, 0.01),
                      0px 297px 83px 0px rgba(0, 0, 0, 0)
                    `,
                }}
              >
                <Image
                  src="/assets/icons/message.svg"
                  alt="mobileIcon"
                  width={26}
                  height={26}
                />
              </div>
              <a className="font-medium leading-[26px] text-[#100F0F]" href="#">
                contact@grauberg.ge
              </a>
            </li>
            <li className="flex items-center gap-[16px]">
              <div
                className="w-[56px] h-[56px] rounded-[16px] bg-[#EE2E24] flex justify-center items-center "
                style={{
                  boxShadow: `
                    0px 12px 26px 0px rgba(0, 0, 0, 0.1),
                    0px 48px 48px 0px rgba(0, 0, 0, 0.09),
                    0px 107px 64px 0px rgba(0, 0, 0, 0.05),
                    0px 190px 76px 0px rgba(0, 0, 0, 0.01),
                    0px 297px 83px 0px rgba(0, 0, 0, 0)
                  `,
                }}
              >
                <Image
                  src="/assets/icons/location.svg"
                  alt="mobileIcon"
                  width={26}
                  height={26}
                />
              </div>
              <a className="font-medium leading-[26px] text-[#100F0F]" href="#">
                ქ.თბილისი ჭავჭავაძის 61ა
              </a>
            </li>
          </ul>
        </aside>
        <aside>
          <div className="bg-[#FFF]  p-[1px] rounded-[24px] bg-gradient-to-t from-[#F5F5F5] to-[#ee2e24]">
            <div className="bg-[#F5F5F5] backdrop-blur-[34px]  p-[18px] rounded-[24px]">
              <div
                className="border-solid border-[#D6D6D6] border-[1px] rounded-[12px] bg-[#FFFFFF] flex flex-col gap-[16px] py-[29px] px-[34px] z-[100]"
                style={{
                  boxShadow: `
                    0px 12px 26px 0px rgba(0, 0, 0, 0.1),
                    0px 48px 48px 0px rgba(0, 0, 0, 0.09),
                    0px 107px 64px 0px rgba(0, 0, 0, 0.05),
                    0px 190px 76px 0px rgba(0, 0, 0, 0.01),
                    0px 297px 83px 0px rgba(0, 0, 0, 0)
                  `,
                }}
              >
                <input
                  type="text"
                  className="w-[398px] max-900:w-[299px] h-[56px] border-solid border-[#D6D6D6] border-[1px] rounded-[12px] text-[#5C5C5C] px-[21px]"
                  placeholder="სახელი, გვარი"
                />
                <input
                  type="text"
                  className="w-[398px] max-900:w-[299px] h-[56px] border-solid border-[#D6D6D6] border-[1px] rounded-[12px] text-[#5C5C5C] px-[21px]"
                  placeholder="ტელეფონის ნომერი"
                />
                <input
                  type="text"
                  className="w-[398px] max-900:w-[299px] h-[56px] border-solid border-[#D6D6D6] border-[1px] rounded-[12px] text-[#5C5C5C] px-[21px]"
                  placeholder="მეილი"
                />
                <textarea
                  name="text"
                  className="w-[398px] max-900:w-[299px] h-[200px] border-solid border-[#D6D6D6] border-[1px] rounded-[12px] text-[#5C5C5C] px-[21px] py-[15px] resize-none"
                  placeholder="კომენტარი"
                />
                <button className="h-[46px] rounded-[60px] text-[#FFFFFF] bg-[#EE2E24] mt-[7px]">
                  გაგზავნა
                </button>
              </div>
            </div>
          </div>
        </aside>
      </section>
      <section className="w-full h-[386px] border-[21px] border-solid border-[#FFFFFF] rounded-[30px] max-900:w-[370px] max-900:h-[473px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1539.526411855878!2d21.014668246839673!3d52.243065148393576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc6744146b3f%3A0x29d4dd8ead0dc6f6!2sPresidential%20Palace!5e0!3m2!1ska!2sge!4v1734501488978!5m2!1ska!2sge"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};
export default ContactPage;