"use client";
import LogoMini from "../../public/assets/logoMini.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type CardProps = {
  title: string;
  text: string;
};

const Card: React.FC<CardProps> = ({ title, text }) => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div
      ref={container}
      className="h-[500px] flex justify-center items-center sticky top-[10px] mx-[40px]"
    >
      <motion.div
        style={{ opacity }}
        className="relative top-[-10%] max-w-[1194px] rounded-[23px] shadow-md border border-gray-200 overflow-hidden bg-backgroundGrey transition-opacity"
      >
        <div className="flex items-center">
          <div
            className="relative rounded-br-[34px] p-[1px]"
            style={{
              background: "linear-gradient(142deg, #F5F5F5 60%, #F29893 100%)",
            }}
          >
            <div
              className="w-[203px] h-[101px] 
                flex justify-center
                items-center
                rounded-tl-[23px]
                rounded-br-[34px]
                bg-[#f5efef]
                max-900:w-[78px] max-900:h-[74px]"
            >
              <div className="w-[41px] mt-[9px] h-[40px] flex-shrink-0 text-white flex items-center justify-center rounded-full">
                <LogoMini />
              </div>
            </div>
          </div>
          <div
            className="relative rounded-bl-[34px] w-full p-[1px] ml-2"
            style={{
              background: "linear-gradient(192deg, #F5F5F5 50%, #F29893 100%)",
            }}
          >
            <div
              className="h-[101px] 
                flex justify-start
                items-center
                w-full
                pl-7
                rounded-bl-[34px]
                bg-[#f5efef]
                max-900:h-[74px]"
            >
              <h2
                className="ml-3 w-full text-28 font-bold text-darkPrimary
                max-900:text-[20px] max-900:leading-[30px]"
              >
                {title}
              </h2>
            </div>
          </div>
        </div>
        <div
          className="px-6 py-4 text-darkPrimary text-16 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </motion.div>
    </div>
  );
};

export default Card;
