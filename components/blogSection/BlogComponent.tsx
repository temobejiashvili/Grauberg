import Image from "next/image";
import dynamic from "next/dynamic";

import Link from "next/link";

import Arrow from "@/public/assets/arrow.svg";
import beton from "@/public/images/beton.webp";
import factory from "@/public/images/factory.webp";
import block from "@/public/images/block.webp";
import { TranslateText } from "../translateText/TranslateText";

const AnimatedBox = dynamic(() => import("../animatedBox/AnimatedBox"), {
  ssr: true,
});

interface BlogProps {
  style?: string;
  needButton?: boolean;
  headline?: string | React.ReactNode;
}

const BlogSection = ({ style, needButton, headline }: BlogProps) => {
  const blogItems = [
    {
      id: 1,
      image: beton,
      title: "betonTypes",
      description: "concreteInArchitectureEngineering",
      url: "/blog/article?=1",
    },
    {
      id: 2,
      image: factory,
      title: "betonTypes",
      description:
        "ბეტონი ერთ-ერთი ყველაზე ფართოდ გამოყენებადი მასალაა მშენებლობაში, რომელიც გამოირჩევა სიმტკიცითა და გამძლეობით. ბეტონი მიიღება ბუნებრივი და ხელოვნური მასალების ურთიერთ შეზავებით და შედგება რამდენიმე ძირითადი კომპონენტისგან: ქვიშა, ღორღი, ცემენტი, წყალი, ცემენტისებრი შემავსებელი და სხვადასხვა ტიპის პლასტიფიკატორები.",
      url: "/blog/article?=2",
    },
  ];

  return (
    <section className={`bg-backgroundGrey ${style} relative py-[46px]`}>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <h2 className="text-44 font-bold text-center mb-[66px] text-darkPrimary max-600:text-[28px] max-600:leading-[34px] max-600:max-w-[270px] ">
          {headline ? headline : <TranslateText text="latestNews" />}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-11">
          {blogItems.map((item, i) => (
            <Link href={item.url}>
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
                      <TranslateText text={item.title} />
                    </h3>
                    <p className="text-sm line-clamp-3 font-normal w-full h-60 text-darkSecondary mb-4">
                      <TranslateText text={item.description} />
                    </p>
                  </div>
                </div>
              </AnimatedBox>
            </Link>
          ))}
        </div>
        {!needButton && (
          <div className="text-center flex justify-center w-full bg-backgroundGrey absolute left-0 -bottom-159 rounded-b-60 pt-18 pb-87">
            <AnimatedBox isFadeIn>
              <Link
                href="/blog/catalog"
                className="group px-52 py-4 flex items-center h-54 text-sm bg-white border border-stroke transition-colors text-darkPrimary hover:text-white  rounded-10 hover:bg-darkPrimary"
              >
                <TranslateText text="news" />
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
