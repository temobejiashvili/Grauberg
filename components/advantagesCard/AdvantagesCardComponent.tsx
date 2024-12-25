import Image from "next/image";
import React from "react";

import AdvantagesInfo from "./AdvantagesInfo";
import AnimatedBox from "../animatedBox/AnimatedBox";

import adventagesImage from "../../public/images/advantagesImage.png";

const AdvantagesCardComponent = () => {
  return (
    <div
      className="rounded-t-[50px] w-full flex bg-backgroundGrey
    max-600:flex-col"
    >
      <div className="w-[634px] h-[634px] max-600:w-full max-600:h-[465px]">
        <Image
          height={634}
          width={634}
          src={adventagesImage}
          alt="adv"
          className="rounded-tl-[50px] max-600:rounded-tl-[0px] max-600:w-full max-600:h-[465px]"
        />
      </div>
      <div className="pt-[47px] pl-[54px] max-600:pl-[22px] max-600:pr-[22px]">
        <AnimatedBox isFadeIn>
          <h1 className="font-bold max-w-[672px] text-36 mb-[35px] text-darkPrimary opacity-0 animate-fadeIn">
            რა უპირატესობები აქვს ჩვენს ცემენტს
          </h1>
        </AnimatedBox>
        <AnimatedBox isFadeIn={false}>
          <div className="bg-white rounded-30 max-w-[621px] w-full p-[30px]">
            <AdvantagesInfo
              title={"მაღალი ხარისხი"}
              info={
                "ჩვენი პროდუქცია საერთაშორისო სტანდარტების შესაბამისად გახლავთ დამზადებული, რაც მასალების გამძლეობასა და საიმედოობას უზრუნველყოფს."
              }
            />
            <div className="w-full bg-stroke h-[1px] my-[25px]" />
            <AdvantagesInfo
              title={"გამძლეობა"}
              info={
                "გრაუბერგის ცემენტი და ბეტონი მაღალი გამძლეობითა და ექსტრემალურ კლიმატურ პირობებთან წინააღმდეგობის უნარით ხასიათდება."
              }
            />
            <div className="w-full bg-stroke h-[1px] my-[25px]" />
            <AdvantagesInfo
              title={"ეკოლოგიური სტანდარტები"}
              info={
                "ჩვენი პროდუქცია შეესაბამება ეკოლოგიური სტანდარტების მოთხოვნებს, რაც იმას ნიშნავს, რომ ის უსაფრთხოა როგორც გარემოსთვის, ასევე მომხმარებლისთვის."
              }
            />
          </div>
        </AnimatedBox>
      </div>
    </div>
  );
};

export default AdvantagesCardComponent;
