import AnimatedText from "../AnimatedText";

interface HeaderMainProps {
  headerImageRef: any;
  i18n: any;
}

const HeaderMain = ({ headerImageRef, i18n }: HeaderMainProps) => {
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
        className={`relative w-[804px] text-center  font-bold
               text-[#f5f5f5] z-[2] -translate-y-[31px]
              max-900:w-[382px] max-900:text-[36px] max-900:leading-[44px] max-900:-translate-y-[44px]
              transition-all duration-400 ease-in-out
              ${
                i18n.language === "en"
                  ? "text-[60px]"
                  : "text-[56px] leading-[66px]"
              }
              `}
      >
        <AnimatedText time={700} data="strengthYou" />
        <AnimatedText time={950} data="canBuildOn" />
      </h2>
    </section>
  );
};

export default HeaderMain;
