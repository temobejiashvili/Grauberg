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
      } else {
        return "360px";
      }
    }
    if (windowWidth <= 1100 && isCement) return "1100px";
    if (windowWidth <= 1100 && !isCement) return "1250px";
    return isCement ? "calc(100% + 20px)" : "calc(100% + 40px)";
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
        width={is1100 ? (isCement ? 211 : 400) : isCement ? 240 : 500}
        height={is1100 ? 319 : isCement ? 310 : 700}
        placeholder={CementTruck ? "empty" : "blur"}
      />
    </div>
  );
}
