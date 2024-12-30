import React from "react";
import Image from "next/image";

interface BlogCardProps {
  image?: string;
  alt?: string;
  title?: string;
  text?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ image, alt, title, text }) => {
  return (
    <div className="w-[375px] max-900:w-[370px] hover:shadow-little rounded-[16px]">
      <aside className="w-full h-[292px] overflow-hidden rounded-tl-[16px] rounded-tr-[16px]">
        <Image
          src={`${image}`}
          alt={`${alt}`}
          width={381}
          height={292}
          className="transition-transform duration-300 ease-in-out hover:scale-110"
          style={{
            width: "100%",
            height: "292px",
            objectFit: "cover",
          }}
        />
      </aside>
      <aside className="py-[20px] px-[17px] border-[1px] border-solid border-[#D6D6D6] rounded-bl-[16px] rounded-br-[16px]">
        <h3 className="text-[24px] text-[#100F0F] font-bold leading-[32px] max-900:text-[20px] max-900:leading-[30px]">
          {title}
        </h3>
        <p className="text-[14px] text-[#5C5C5C] leading-[20px] mt-[11px] ">
          {text}
        </p>
      </aside>
    </div>
  );
};

export default BlogCard;
