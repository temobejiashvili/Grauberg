"use client";

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver/useIntersectionObserver";
import AnimatedText from "../AnimatedText";

interface HeaderMainProps {
  headerImageRef: any;
}

const HeaderMain = ({ headerImageRef }: HeaderMainProps) => {
  const { ref, isVisible } = useIntersectionObserver({
    threshold: 0.1,

    rootMargin: "300px 0px",
  });
  return (
    <section className="top-0 relative w-full h-[784px] overflow-hidden  flex justify-center items-center max-1250:h-[700px] max-900:h-[568px]  ">
      <video
        ref={headerImageRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        preload="none"
        playsInline
      >
        <source src="/assets/backgroundVideo.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black-opacity-60 z-[1]"></div>
      <h2
        ref={ref}
        className={`relative w-[804px] text-center text-[56px] font-bold
              leading-[66px] text-[#f5f5f5] z-[2] -translate-y-[31px]
              max-900:w-[382px] max-900:text-[36px] max-900:leading-[44px] max-900:-translate-y-[44px]
              transition-all duration-400 ease-in-out ${
                isVisible
                  ? "animate-slideUpHalf"
                  : "opacity-0 translate-y-[100%]"
              }`}
      >
        <AnimatedText time={700} data="strengthYou" />
        <AnimatedText time={950} data="canBuildOn" />
      </h2>
    </section>
  );
};

export default HeaderMain;
