import { FC } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { TranslateText } from "@/components/translateText/TranslateText";

const BlogSection = dynamic(
  () => import("@/components/blogSection/BlogComponent"),
  { ssr: false }
);
const LoaderComponent = dynamic(
  () => import("@/components/loaderComponent/LoaderComponent"),
  { ssr: false }
);

const socialIcons = [
  {
    src: "/assets/icons/fbIcon.svg",
    alt: "Facebook Logo",
    width: 9.6,
    height: 18.4,
  },
  {
    src: "/assets/icons/instIcon.svg",
    alt: "Instagram Logo",
    width: 19.2,
    height: 19.11,
  },
  {
    src: "/assets/icons/telegramIcon.svg",
    alt: "Telegram Logo",
    width: 19.74,
    height: 17.73,
  },
  {
    src: "/assets/icons/linkedIcon.svg",
    alt: "LinkedIn Logo",
    width: 16.56,
    height: 15.84,
  },
];

// Reusable SocialIcon component
const SocialIcon: FC<{
  src: string;
  alt: string;
  width: number;
  height: number;
}> = ({ src, alt, width, height }) => (
  <div className="w-12 h-12 flex justify-center items-center border border-gray-300 rounded-full max-600:w-10 max-600:h-10">
    <Image src={src} alt={alt} width={width} height={height} />
  </div>
);

const Blog = () => {
  return (
    <div className="bg-gray-100">
      {/* Main Blog Content */}
      <div className="pt-32 mx-[268px] mb-24 max-1250:mx-48 max-1100:mx-36 max-900:mx-6">
        <header className="flex flex-col gap-4 items-start max-600:gap-5">
          <h2 className="text-black text-3xl font-bold leading-11 max-w-xl max-900:text-2xl max-900:leading-8 max-900:max-w-xs">
            <TranslateText text="betonTypes" />
          </h2>
          <div className="w-full flex justify-between items-center max-600:flex-col max-600:items-start max-600:gap-5">
            <aside className="flex items-center gap-8">
              <h4 className="text-gray-600">
                <TranslateText text="march20" />
              </h4>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icons/time.svg"
                  alt="Time Icon"
                  width={20}
                  height={20}
                />
                <h4 className="text-gray-600">
                  <TranslateText text="minute5" />
                </h4>
              </div>
            </aside>
            <aside className="flex items-center gap-3">
              {socialIcons.map((icon, index) => (
                <SocialIcon key={index} {...icon} />
              ))}
            </aside>
          </div>
        </header>
        <section className="mt-7 flex flex-col gap-14 max-600:gap-7">
          <div className="max-600:max-h-80 self-center">
            <Image
              src="/assets/images/construction.png"
              alt="Construction"
              width={902}
              height={529}
            />
          </div>
          <article className="flex flex-col gap-7">
            <h3 className="text-black font-bold text-xl leading-8">
              <TranslateText text="cementBasics" />
            </h3>
            <p className="text-gray-900 font-medium leading-7">
              <TranslateText text="coreCement" />
            </p>
            <p className="text-gray-900 font-medium leading-7">
              <TranslateText text="cementEssentials" />
            </p>
          </article>
          <LoaderComponent>
            <article className="flex flex-col items-start justify-center gap-7">
              <h3 className="text-black font-bold text-xl leading-8">
                <TranslateText text="cementTypes" />
              </h3>
              <p className="text-gray-900 font-medium leading-7">
                <span className="font-bold">
                  1. <TranslateText text="portlandcement" />:
                </span>
                <TranslateText text="cementVarietie" />
              </p>
              <p className="text-gray-900 font-medium leading-7">
                <span className="font-bold">
                  2. <TranslateText text="whiteCement" />:
                </span>
                <TranslateText text="whiteCementOverview" />
              </p>
              <p className="text-gray-900 font-medium leading-7">
                <span className="font-bold">
                  3. <TranslateText text="quickSetCement" />:
                </span>
                <TranslateText text="cementTypesExplained" />
              </p>
              <p className="text-gray-900 font-medium leading-7">
                <span className="font-bold">
                  4. <TranslateText text="hydroCem" />:
                </span>
                <TranslateText text="AquaCem" />
              </p>
            </article>

            <Image
              src="/assets/images/construction2.png"
              alt="Construction"
              width={902}
              height={529}
              className="self-center"
            />

            <article className="flex flex-col gap-7">
              <h3 className="text-black font-bold text-xl leading-8">
                <TranslateText text="conclusion" />
              </h3>
              <p className="text-gray-900 font-medium leading-7">
                <TranslateText text="cementCore" />
              </p>
              <p className="text-gray-900 font-medium leading-7">
                <TranslateText text="rightCementChoice" />
              </p>
            </article>
          </LoaderComponent>
        </section>
      </div>
      <BlogSection
        needButton
        style="bg-white"
        headline={<TranslateText text="relatedTopics" />}
      />
      <div className="w-full bg-white h-36 rounded-b-lg absolute"></div>
    </div>
  );
};

export default Blog;
