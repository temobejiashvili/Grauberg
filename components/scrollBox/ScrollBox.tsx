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

  const is1100 = windowWidth <= 1100;

  const topPosition = (() => {
    if (activeSection === "header") {
      return windowWidth <= 1100 ? "200px" : "150px";
    }
    if (windowWidth <= 344) return "144%";
    if (windowWidth <= 360) return "170%";
    if (windowWidth <= 375) return "180%";
    if (windowWidth <= 390) return "140%";
    if (windowWidth <= 412) return "119%";
    if (windowWidth <= 430) return "115%";
    if (windowWidth <= 444) return "125%";
    if (windowWidth <= 540) return "135%";
    if (windowWidth <= 768) return "90%";
    if (windowWidth <= 820) return "75%";
    if (windowWidth <= 853) return "72%";
    if (windowWidth <= 1024) return "185%";
    if (windowWidth <= 1280) return "100%";
    return "calc(100% + 99px)";
  })();

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
