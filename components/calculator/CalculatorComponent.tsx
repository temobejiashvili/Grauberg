"use client";
import Image from "next/image";
import parallelepiped from "../../public/images/parallelepiped.png";
import ValueInput from "./ValueInput";
import { Button, Divider } from "@mui/material";
import { useState } from "react";

const CalculatorComponent = () => {
  const [thickness, setThickness] = useState("");
  const [length, setLength] = useState("");
  const [height, setHeight] = useState("");
  const [cubicMeters, setCubicMeters] = useState(0);
  const [pocket, setPocket] = useState(0);

  const handleCalculate = () => {
    // Convert cm to meters and calculate cubic meters
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

    // Calculate number of 40 kg pockets
    const pockets = Math.ceil(weight / 40); // Use Math.ceil to round up to the next whole pocket
    setPocket(pockets);

    console.log(`Calculated volume: ${volume.toFixed(2)} cubic meters`);
    console.log(`Calculated weight: ${weight.toFixed(2)} kg`);
    console.log(`Required pockets: ${pockets}`);
  };

  return (
    <section className="max-w-[1194px] relative h-513 pt-[54px] pl-[56px] pr-[55px] bg-backgroundGrey rounded-30 border border-stroke">
      <div className="flex pl-[9px]">
        <Image width={359} height={223} src={parallelepiped} alt="[]" />
        <div className="max-w-[516px] ml-[104px] mt-[43px]">
          <h1 className="font-bold text-darkPrimary text-36 mb-5">
            ცემენტის<span className="text-primary pl-3">კალკულატორი</span>
          </h1>
          <p className="font-normal text-darkPrimary">
            შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპო გრაფ
            იული ნაწარმის შემქმნელებს.
          </p>
        </div>
      </div>
      <section className="pt-[46px] flex gap-4">
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
        <Button
          style={{
            width: "241px",
            height: "64px",
            backgroundColor: "#100F0F",
            borderRadius: "10px",
            color: "white",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
          }}
          onClick={handleCalculate}
        >
          გამოთვლა
        </Button>
      </section>
      <div
        style={{
          boxShadow: `0px 12px 26px 0px #0000001A, 
          0px 48px 48px 0px #00000017, 
          0px 107px 64px 0px #0000000D, 
          0px 190px 76px 0px #00000003, 
          0px 297px 83px 0px #00000000`,
        }}
        className="absolute flex justify-around items-center bottom-[-69px] left-[55px] w-full max-w-[1083px] h-[136px] bg-white rounded-2xl py-3 px-10 "
      >
        <div className="flex flex-col items-center justify-center gap-3 w-[406px]">
          <span className="text-darkSecondary font-normal text-sm">
            საჭირო ცემენტის მოცულობა
          </span>
          <h4 className="text-darkPrimary font-bold text-2xl">
            {cubicMeters.toFixed(4)} კუბური მეტრი
          </h4>
        </div>
        <Divider orientation="vertical" variant="middle" flexItem />
        <div className="flex flex-col items-center justify-center gap-3 w-[406px]">
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
