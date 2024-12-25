"use client";
import { useScrollContext } from "@/app/context/ScrollContext";
import Image from "next/image";
import CementPocket from "@/public/images/cement.png";
import { useEffect, useState } from "react";

export default function ScrollBox() {
  const { activeSection } = useScrollContext();

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // Initialize on component mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const is1280 = windowWidth <= 1280;
  const is1100 = windowWidth <= 1100;
  const is1024 = windowWidth <= 1024;
  const is853 = windowWidth <= 853;
  const is820 = windowWidth <= 820;
  const is768 = windowWidth <= 768;
  const is540 = windowWidth <= 540;
  const is444 = windowWidth <= 444;
  const is430 = windowWidth <= 430;
  const is412 = windowWidth <= 412;
  const is390 = windowWidth <= 390;
  const is375 = windowWidth <= 375;
  const is360 = windowWidth <= 360;
  const is344 = windowWidth <= 344;

  const topPosition =
    activeSection === "header"
      ? is1100
        ? "200px"
        : "100px"
      : is344
      ? "144%"
      : is360
      ? "170%"
      : is375
      ? "180%"
      : is390
      ? "140%"
      : is412
      ? "119%"
      : is430
      ? "115%"
      : is444
      ? "125%"
      : is540
      ? "135%"
      : is768
      ? "90%"
      : is820
      ? "75%"
      : is853
      ? "72%"
      : is1024
      ? "185%"
      : is1280
      ? "100%"
      : "calc(100% + 99px)";

  const leftPosition =
    activeSection === "header" ? "50%" : is1100 ? "50%" : "115px";

  const transformStyle =
    activeSection === "header"
      ? "translateX(-50%)"
      : is1100
      ? "translateX(-50%) translateY(100%)"
      : "none";

  return (
    <div
      className={`rounded-lg z-[1] shadow-lg transition-all duration-1000 ease-out ${
        activeSection === "header" ? "animate-floating" : ""
      }`}
      style={{
        position: "absolute",
        top: topPosition,
        left: leftPosition,
        transform: transformStyle,
        rotate: activeSection === "header" ? "9.92deg" : "0deg",
      }}
    >
      <Image
        src={CementPocket}
        alt="Cement"
        width={is1100 ? 211 : 306}
        height={is1100 ? 319 : 462}
        className="drop-shadow-[-20px_14px_94px_rgba(0,0,0,0.45)]"
      />
    </div>
  );
}
