"use client";
import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import Arrow from "../../public/assets/arrow.svg";

const BlogSection = () => {
  const { t } = useTranslation("common");

  const blogItems = [
    {
      id: 1,
      image: "/images/beton.png",
      title: t("ბეტონის ტიპები და მათი გამოყენება"),
      description: t(
        "შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპო გრაფ იული ნაწარმის შემქმნელებს ასფოი ასკფჯოკას ფსაფსფა საფასფსაფ"
      ),
    },
    {
      id: 2,
      image: "/images/factory.png",
      title: t("ქარხნის სტანდარტები და მისი უპირატესობები"),
      description: t("blog2Description"),
    },
    {
      id: 3,
      image: "/images/block.png",
      title: t("როგორ გამოვიყენოთ ცემენტი სწორად"),
      description: t(
        "ცემენტის სწორად გამოყენება მშენებლობაში დიდ მნიშვნელობას ატარებს, რადგან ის განსაზღვრავს საბოლოო სტრუქტურის სიმტasfjgasfghfkjashfkfjhs"
      ),
    },
  ];

  return (
    <section className="bg-backgroundGrey relative py-[46px] ">
      <div className="container mx-auto">
        <h2 className="text-44 font-bold text-center mb-[66px] text-darkPrimary">
          {t("ბოლო სიახლეები")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-11">
          {blogItems.map((item) => (
            <div
              key={item.id}
              className="bg-white border-stroke border rounded-2xl overflow-hidden "
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-300 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-bold text-darkPrimary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm line-clamp-3 font-normal w-full h-60 text-darkSecondary mb-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center flex justify-center w-full bg-backgroundGrey absolute left-0 -bottom-159 rounded-b-60 pt-18 pb-87">
          <a
            href="/blog"
            className="group px-52 py-4 flex items-center h-54 text-sm bg-white border border-stroke text-darkPrimary rounded-10 hover:bg-darkPrimary hover:text-white transition-colors"
          >
            {t("ყველა სიახლე")}
            <Image
              src={Arrow}
              alt={">"}
              width={22}
              height={22}
              className="w-2 object-cover ml-3 group-hover:filter group-hover:brightness-0 group-hover:invert"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
