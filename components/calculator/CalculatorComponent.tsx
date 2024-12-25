"use client";
import Image from "next/image";
import parallelepiped from "../../public/images/parallelepiped.png";
import ValueInput from "./ValueInput";
import { useState } from "react";

const CalculatorComponent = () => {
  const [thickness, setThickness] = useState("");
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [cubicMeters, setCubicMeters] = useState(0);
  const [pocket, setPocket] = useState(0);

  const handleCalculate = () => {
    const thicknessInMeters = parseFloat(thickness) / 100;
    const lengthInMeters = parseFloat(length) / 100;
    const heightInMeters = parseFloat(height) / 100;

    if (
      isNaN(thicknessInMeters) ||
      isNaN(lengthInMeters) ||
      isNaN(heightInMeters)
    ) {
      console.error("Please enter valid numeric values.");
      return;
    }

    const volume = thicknessInMeters * lengthInMeters * heightInMeters;
    setCubicMeters(volume);
    const weight = volume * 1440; // 1440 kg/m³ is the density of cement

    const pockets = Math.ceil(weight / 40);
    setPocket(pockets);
  };

  return (
    <section
      style={{ border: "1px solid #D6D6D6" }}
      className="max-w-[1194px] relative h-[513px] pt-[54px] pl-[56px]
       pr-[55px] bg-backgroundGrey rounded-30
       max-1100:h-[unset] max-1100:p-[unset]"
    >
      <div
        className="flex pl-[9px] 
      max-1100:flex-col
      max-1100:pl-[unset]
      max-1100:items-center
      max-1100:pt-[31px]"
      >
        <Image
          width={359}
          height={223}
          src={parallelepiped}
          alt="[]"
          className="max-1100:w-[234px] max-1100:h-[145px]"
        />
        <div
          className="max-w-[516px] ml-[104px] mt-[43px]
        max-1100:ml-[unset] max-1100:mt-[26px] max-1100:px-[18px]"
        >
          <h1
            className="font-bold text-darkPrimary text-36 mb-5
           max-1100:flex max-1100:flex-col
           max-1100:items-center max-1100:mb-[14px]"
          >
            ცემენტის<span className="text-primary pl-3">კალკულატორი</span>
          </h1>
          <p
            className="font-normal text-darkPrimary 
          max-1100:flex max-1100:text-center"
          >
            შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპო
            გრაფიკული ნაწარმის შემქმნელებს.
          </p>
        </div>
      </div>
      <section
        className="pt-[46px] flex gap-4 
      max-1100:flex-col
      max-1100:px-[18px]
      max-1100:mb-[27px]
      max-1100:pt-[26px]"
      >
        <ValueInput
          title="სისქე"
          unit="სმ"
          value={thickness}
          onChange={setThickness}
        />
        <ValueInput
          title="სიგრძე"
          unit="სმ"
          value={length}
          onChange={setLength}
        />
        <ValueInput
          title="სიმაღლე"
          unit="სმ"
          value={height}
          onChange={setHeight}
        />
        <button
          className="w-[241px] h-[64px] bg-black 
          text-white rounded-[10px] font-normal text-sm
          max-1100:w-full"
          onClick={handleCalculate}
        >
          გამოთვლა
        </button>
      </section>
      <div
        style={{
          boxShadow: `0px 12px 26px 0px #0000001A, 
          0px 48px 48px 0px #00000017, 
          0px 107px 64px 0px #0000000D, 
          0px 190px 76px 0px #00000003, 
          0px 297px 83px 0px #00000000`,
          borderTop: "1px solid #D6D6D6",
        }}
        className="absolute flex justify-around items-center
         bottom-[-69px] left-[55px] w-full max-w-[1083px]
          h-[136px] bg-white rounded-2xl py-3 px-10 
          max-1100:flex-col max-1100:h-[206px] max-1100:relative
          max-1100:left-0 max-1100:bottom-[0]
          max-1100:rounded-t-none max-1100:px-[14px]"
      >
        <div className="flex flex-col items-center justify-center gap-3 w-[406px] max-1100:w-full">
          <span className="text-darkSecondary font-normal text-sm">
            საჭირო ცემენტის მოცულობა
          </span>
          <h4 className="text-darkPrimary font-bold text-2xl">
            {cubicMeters.toFixed(4)} კუბური მეტრი
          </h4>
        </div>
        <div
          className="w-[1px] h-full bg-gray-300
         max-1100:w-full max-1100:h-[1px]"
        />
        <div className="flex flex-col items-center justify-center gap-3 w-[406px] max-1100:w-full">
          <span className="text-darkSecondary font-normal text-sm">
            რამდენი ცალი Grauberg-ის ცემენტი დამჭირდება{" "}
          </span>
          <h4 className="text-darkPrimary font-bold text-2xl">
            {pocket} ცემენტის ტომარა
          </h4>
        </div>
      </div>
    </section>
  );
};

export default CalculatorComponent;
