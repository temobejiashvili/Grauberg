"use client";
import { CustomVerticalProgress } from "@/components";
import React, { useEffect, useState } from "react";

export function HomeHero() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev === 100 ? 0 : prev + 1));
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div
      className="bg-hero-mobile md:bg-hero-desktop bg-cover bg-center  h-[100vh]  "
      id="home"
    >
      <CustomVerticalProgress progress={progress} />

      {/* <ContainerDiv>
        <h1>asdfasdf</h1>
        <p>asdfasdf</p>
      </ContainerDiv> */}
    </div>
  );
}
