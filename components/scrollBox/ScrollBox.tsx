"use client";
import { useScrollContext } from "@/components/context/ScrollContext";
import Image from "next/image";
import CementPocket from "@/public/images/cement.webp";
import CementTruck from "@/public/assets/graubergTruck.webp";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ScrollBox() {
  const { activeSection } = useScrollContext();
  const pathname = usePathname();
  const isCement = pathname === "/product/cement";
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const is1100 = windowWidth <= 1100;

  const topPosition = (() => {
    if (activeSection === "header") {
      if (windowWidth <= 1100 && isCement) {
        return "150px";
      } else if (windowWidth <= 1100 && !isCement) {
        return "350px";
      } else if (!isCement) {
        return "400px";
      } else {
        return "150px";
      }
    }
    if (windowWidth <= 320 && isCement) return "225%";
    if (windowWidth <= 344 && isCement) return "144%";
    if (windowWidth <= 344 && !isCement) return "195%";
    if (windowWidth <= 360 && isCement) return "170%";
    if (windowWidth <= 375) return "190%";
    if (windowWidth <= 390 && isCement) return "185%";
    if (windowWidth <= 390 && !isCement) return "180%";
    if (windowWidth <= 440 && isCement) return "130%";
    if (windowWidth <= 444 && isCement) return "175%";
    if (windowWidth <= 444 && !isCement) return "165%";
    if (windowWidth <= 600 && isCement) return "160%";
    if (windowWidth <= 600 && !isCement) return "150%";
    if (windowWidth <= 768 && isCement) return "152%";
    if (windowWidth <= 768 && !isCement) return "135%";
    if (windowWidth <= 820 && isCement) return "155%";
    if (windowWidth <= 820 && !isCement) return "130%";
    if (windowWidth <= 853 && isCement) return "150%";
    if (windowWidth <= 853 && !isCement) return "130%";
    if (windowWidth <= 1024 && isCement) return "175%";
    if (windowWidth <= 1024 && !isCement) return "145%";
    if (windowWidth <= 1280 && isCement) return "125%";
    if (windowWidth <= 1600 && !isCement) return "140%";
    if (windowWidth >= 2700) return "70%";
    if (windowWidth >= 2200) return "85%";
    if (windowWidth >= 2000) return "100%";
    return isCement ? "calc(100% + 99px)" : "calc(100% + 40px)";
  })();

  const leftPosition =
    activeSection === "header"
      ? "50%"
      : is1100
      ? "50%"
      : isCement
      ? "115px"
      : "30px";

  const transformStyle =
    activeSection === "header"
      ? "translateX(-50%)"
      : is1100
      ? "translateX(-50%) translateY(100%)"
      : "none";

  return (
    <div
      className={`rounded-lg 
         z-[1] transition-all duration-1000 ease-out ${
           activeSection === "header" ? "animate-floating" : ""
         }`}
      style={{
        position: "absolute",
        top: topPosition,
        left: leftPosition,
        transform: transformStyle,
        rotate: activeSection === "header" && isCement ? "9.92deg" : "0deg",
      }}
    >
      <Image
        src={isCement ? CementPocket : CementTruck}
        alt="Cement"
        width={is1100 ? (isCement ? 211 : 400) : isCement ? 306 : 500}
        height={is1100 ? 319 : isCement ? 462 : 700}
        placeholder={CementTruck ? "empty" : "blur"}
      />
    </div>
  );
}
