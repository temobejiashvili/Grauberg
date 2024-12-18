import Image from "next/image";
import adventagesImage from "../../public/images/advantagesImage.png";
import React from "react";

import AdvantagesInfo from "./AdvantagesInfo";

const AdvantagesCardComponent = () => {
  return (
    <div className="rounded-t-[50px] w-full flex bg-backgroundGrey">
      <div className="w-[634px] h-[634px]">
        <Image height={634} width={634} src={adventagesImage} alt="adv" />
      </div>
      <div className="pt-[47px] pl-[54px]">
        <h1 className="font-bold max-w-[672px] text-36 mb-[35px] text-darkPrimary">
          რა უპირატესობები აქვს ჩვენს ცემენტს
        </h1>
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
      </div>
    </div>
  );
};

export default AdvantagesCardComponent;
