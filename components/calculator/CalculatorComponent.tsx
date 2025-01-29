"use client";

import Image from "next/image";
import { useState } from "react";
import parallelepiped from "../../public/images/parallelepiped.png";
import ValueInput from "./ValueInput";
import { TranslateText } from "../translateText/TranslateText";

interface CalculatorComponentProps {
  cement?: boolean;
}

const CalculatorComponent = ({ cement }: CalculatorComponentProps) => {
  const [values, setValues] = useState({
    thickness: "",
    length: "",
    height: "",
  });
  const [cubicMeters, setCubicMeters] = useState(0);
  const [pocket, setPocket] = useState(0);

  const [cementVolume, setCementVolume] = useState(0);
  const [cementBags, setCementBags] = useState(0);

  const handleChange = (key: string, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const handleCalculate = () => {
    const { thickness, length, height } = values;

    const thicknessInMeters = parseFloat(thickness) / 100;
    const lengthInMeters = parseFloat(length) / 100;
    const heightInMeters = parseFloat(height) / 100;

    if ([thicknessInMeters, lengthInMeters, heightInMeters].some(isNaN)) {
      console.error("Please enter valid numeric values.");
      return;
    }

    const volume = thicknessInMeters * lengthInMeters * heightInMeters;
    const weight = volume * 1440; // 1440 kg/m³ is the density of cement
    const pockets = Math.ceil(weight / 40);

    const bags = Math.ceil(volume * 28.8);

    setCementVolume(volume);
    setCubicMeters(volume);
    setCementBags(bags);
    setPocket(pockets);
    setCementBags(bags);
  };

  return (
    <section className="max-w-[1194px] relative h-[513px] p-[54px_56px_0_55px] bg-backgroundGrey rounded-[30px] border border-gray-300 max-1100:h-auto max-1100:p-0">
      {/* Image & Title Section */}
      <div className="flex pl-2 max-1100:flex-col max-1100:items-center max-1100:pt-[31px]">
        <Image
          width={359}
          height={223}
          src={parallelepiped}
          alt="Parallelepiped"
          className="max-1100:w-[234px] max-1100:h-[145px]"
          placeholder="blur"
        />
        <div className="max-w-[516px] ml-[104px] mt-[43px] max-1100:ml-0 max-1100:mt-[26px] max-1100:px-[18px]">
          <h1 className="font-bold text-darkPrimary text-36 mb-5 max-1100:flex max-1100:flex-col max-1100:items-center max-1100:mb-[14px]">
            <TranslateText text={cement ? "cementS" : "concretS"} />
            <span className="text-primary pl-3">
              <TranslateText text="calculator" />
            </span>
          </h1>
          <p className="font-normal text-darkPrimary max-1100:text-center">
            შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპო
            გრაფიკული ნაწარმის შემქმნელებს.
          </p>
        </div>
      </div>

      {/* Input Fields Section */}
      <section className="pt-[46px] flex gap-4 max-1100:flex-col max-1100:px-[18px] max-1100:mb-[27px] max-1100:pt-[26px]">
        {["thickness", "length", "height"].map((key) => (
          <ValueInput
            key={key}
            title={key}
            unit="sm"
            value={values[key as keyof typeof values]}
            onChange={(val) => handleChange(key, val)}
          />
        ))}
        <button
          className="w-[241px] h-[64px] bg-black text-white rounded-[10px] font-normal text-sm max-1100:w-full"
          onClick={handleCalculate}
        >
          <TranslateText text="calculate" />
        </button>
      </section>

      {/* Results Section */}
      <div
        className="absolute flex justify-around items-center bottom-[-69px] left-[55px] w-full max-w-[1083px] h-[136px] bg-white rounded-2xl py-3 px-10 
          max-1100:flex-col max-1100:h-[206px] max-1100:relative max-1100:left-0 max-1100:bottom-0 max-1100:rounded-t-none max-1100:px-[14px]"
        style={{
          boxShadow: `0px 12px 26px 0px #0000001A, 
                      0px 48px 48px 0px #00000017, 
                      0px 107px 64px 0px #0000000D, 
                      0px 190px 76px 0px #00000003, 
                      0px 297px 83px 0px #00000000`,
          borderTop: "1px solid #D6D6D6",
        }}
      >
        {[
          {
            label: "cementNeeded",
            value: cement ? cubicMeters.toFixed(4) : cementVolume.toFixed(4),
            unit: "cubicMeters",
          },
          {
            label: "howMuchCement",
            value: cement ? pocket : cementBags,
            unit: "cementPocket",
          },
        ].map(({ label, value, unit }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center gap-3 w-[406px] max-1100:w-full"
          >
            <span className="text-darkSecondary font-normal text-sm">
              <TranslateText text={label} />
            </span>
            <h4 className="text-darkPrimary font-bold text-2xl">
              {value} <TranslateText text={unit} />
            </h4>
          </div>
        ))}

        <div className="w-[1px] h-full bg-gray-300 max-1100:w-full max-1100:h-[1px]" />
      </div>
    </section>
  );
};

export default CalculatorComponent;
