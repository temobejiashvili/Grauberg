"use client";
import { useScrollContext } from "@/components/context/ScrollContext";
import Image from "next/image";
import CementPocket from "@/public/images/cement.png";
import CementTruck from "@/public/assets/graubergTruck.gif";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ScrollBox() {
  const { activeSection } = useScrollContext();
  const pathname = usePathname();
  const [windowWidth, setWindowWidth] = useState(0);
  const isCement = pathname === "/product/cement";

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const is1100 = windowWidth <= 1100;

  const topPosition = (() => {
    if (activeSection === "header") {
      return windowWidth <= 1100 || !isCement ? "200px" : "150px";
    }
    if (windowWidth <= 320) return "225%";
    if (windowWidth <= 344) return "144%";
    if (windowWidth <= 360) return "170%";
    if (windowWidth <= 375) return "190%";
    if (windowWidth <= 390) return "185%";
    if (windowWidth <= 444) return "175%";
    if (windowWidth <= 600) return "160%";
    if (windowWidth <= 768) return "152%";
    if (windowWidth <= 820) return "155%";
    if (windowWidth <= 853) return "150%";
    if (windowWidth <= 1024) return "175%";
    if (windowWidth <= 1280) return "125%";
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
      className={`rounded-lg 
         z-[1] transition-all duration-1000 ease-out ${
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
        src={isCement ? CementPocket : CementTruck}
        alt="Cement"
        width={is1100 ? 211 : isCement ? 306 : 380}
        height={is1100 ? 319 : isCement ? 462 : 500}
        placeholder={CementTruck ? "empty" : "blur"}
      />
    </div>
  );
}
