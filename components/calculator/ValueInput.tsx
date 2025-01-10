"use client";
import { useTranslation } from "react-i18next";

type valueType = {
  title: string;
  unit: string;
  value: string | number;
  onChange: (value: string) => void;
};

const ValueInput = ({ title, unit, value, onChange }: valueType) => {
  const { t } = useTranslation();
  return (
    <div
      className="flex items-center border border-gray-300
     rounded-[10px] w-[264px] h-[64px] bg-white
     max-1100:w-full"
    >
      {/* Left Side */}
      <div className="flex flex-col justify-center px-4 py-[7px] w-[205px] max-1100:w-full">
        <label className="text-darkSecondary font-normal text-[12px] leading-[20px] text-xs">
          {t(title)}
        </label>
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="text-black text-lg font-bold outline-none bg-transparent"
          placeholder="0"
        />
      </div>
      {/* Divider */}
      <div className="h-[100%] w-[1px] bg-gray-300"></div>
      {/* Right Side */}
      <div
        className="flex justify-center items-center w-[59px] font-normal
       text-darkPrimary text-[14px] leading-[20px]"
      >
        {t(unit)}.
      </div>
    </div>
  );
};

export default ValueInput;
