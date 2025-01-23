"use client";
import React, { FC } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import AnimatedBox from "../animatedBox/AnimatedBox";
import Link from "next/link";

import Arrow from "../../public/assets/arrow.svg";
import beton from "../../public/images/beton.png";
import factory from "../../public/images/factory.png";
import block from "../../public/images/block.png";

interface BlogProps {
  style?: string;
  needButton?: boolean;
  headline?: string | React.ReactNode;
}

const BlogSection: React.FC<BlogProps> = ({ style, needButton, headline }) => {
  const { t } = useTranslation("common");

  const blogItems = [
    {
      id: 1,
      image: beton,
      title: t("betonTypes"),
      description: t(
        "შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპო გრაფ იული ნაწარმის შემქმნელებს ასფოი ასკფჯოკას ფსაფსფა საფასფსაფ"
      ),
    },
    {
      id: 2,
      image: factory,
      title: t("PrimeStandards"),
      description: t("buildMix"),
    },
    {
      id: 3,
      image: block,
      title: t("CemGuide"),
      description: t("cemStrength"),
    },
  ];

  return (
    <section className={`bg-backgroundGrey ${style} relative py-[46px]`}>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-44 font-bold text-center mb-[66px] text-darkPrimary max-600:text-[28px] max-600:leading-[34px] max-600:max-w-[270px] ">
          {headline ? headline : t("latestNews")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-11">
          {blogItems.map((item, i) => (
            <AnimatedBox isFadeIn key={i}>
              <div
                key={item.id}
                className="bg-white border-stroke border rounded-2xl overflow-hidden
                hover:shadow-little "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={300}
                  height={300}
                  className="w-full h-300 object-cover"
                  placeholder="blur"
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
            </AnimatedBox>
          ))}
        </div>
        {!needButton && (
          <div className="text-center flex justify-center w-full bg-backgroundGrey absolute left-0 -bottom-159 rounded-b-60 pt-18 pb-87">
            <AnimatedBox isFadeIn>
              <Link
                href="/blog/catalog"
                className="group px-52 py-4 flex items-center h-54 text-sm bg-white border border-stroke transition-colors text-darkPrimary hover:text-white  rounded-10 hover:bg-darkPrimary"
              >
                {t("news")}
                <Arrow className="w-2 object-cover ml-3 group-hover:filter group-hover:brightness-0 group-hover:invert" />
              </Link>
            </AnimatedBox>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
