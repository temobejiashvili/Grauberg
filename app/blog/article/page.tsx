import { FC } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { TranslateText } from "@/components/translateText/TranslateText";
import { socialIcons } from "@/content/socialIcons";

import constructionImage1 from "@/public/assets/images/construction.png";
import constructionImage2 from "@/public/assets/images/construction2.png";
import loaderBackground from "@/public/assets/images/loaderBackground.png";

const BlogSection = dynamic(
  () => import("@/components/blogSection/BlogComponent"),
  {
    ssr: false,
    loading: () => (
      <Image
        src={loaderBackground}
        alt="Loading"
        width={1000}
        height={1000}
        className="fixed w-[100vw] h-[100vh] top-0 left-0 z-50"
      />
    ),
  }
);
const LoaderComponent = dynamic(
  () => import("@/components/loaderComponent/LoaderComponent"),
  {
    ssr: false,
    loading: () => (
      <Image
        src={loaderBackground}
        alt="Loading"
        width={1000}
        height={1000}
        className="fixed w-[100vw] h-[100vh] top-0 left-0 z-50"
      />
    ),
  }
);

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

const cementTypes = [
  { key: "portlandcement", desc: "cementVarietie" },
  { key: "whiteCement", desc: "whiteCementOverview" },
  { key: "quickSetCement", desc: "cementTypesExplained" },
  { key: "hydroCem", desc: "AquaCem" },
];

const Blog = () => {
  return (
    <section className="bg-gray-100">
      <LoaderComponent>
        <div className="pt-32 mx-auto max-w-7xl px-6 mb-24">
          <header className="flex flex-col gap-4">
            <h2 className="text-black text-3xl font-bold leading-11 max-w-xl max-900:text-2xl max-900:leading-8">
              <TranslateText text="betonTypes" />
            </h2>
            <div className="flex justify-between items-center max-600:flex-col max-600:items-start max-600:gap-5">
              <aside className="flex items-center gap-8 text-gray-600">
                <TranslateText text="march20" />
                <div className="flex items-center gap-2">
                  <Image
                    src="/assets/icons/time.svg"
                    alt="Time Icon"
                    width={20}
                    height={20}
                  />
                  <TranslateText text="minute5" />
                </div>
              </aside>
              <aside className="flex items-center gap-3">
                {socialIcons.map((icon, index) => (
                  <SocialIcon key={index} {...icon} />
                ))}
              </aside>
            </div>
          </header>

          <section className="mt-7 flex flex-col gap-14">
            <Image
              src={constructionImage1}
              alt="Construction"
              width={902}
              height={529}
              priority={true}
              className="self-center max-600:max-h-80"
              placeholder="blur"
            />

            <article className="flex flex-col gap-7 text-gray-900 font-medium leading-7">
              <h3 className="text-black font-bold text-xl">
                <TranslateText text="cementBasics" />
              </h3>
              <TranslateText text="coreCement" />
              <TranslateText text="cementEssentials" />
            </article>

            <article className="flex flex-col gap-7">
              <h3 className="text-black font-bold text-xl">
                <TranslateText text="cementTypes" />
              </h3>
              {cementTypes.map(({ key, desc }, index) => (
                <p key={index} className="text-gray-900 font-medium leading-7">
                  <span className="font-bold">
                    {index + 1}. <TranslateText text={key} />:
                  </span>{" "}
                  <TranslateText text={desc} />
                </p>
              ))}
            </article>

            <Image
              src={constructionImage2}
              alt="Construction"
              layout="responsive"
              width={902}
              height={529}
              priority={true}
              placeholder="blur"
            />

            <article className="flex flex-col gap-7">
              <h3 className="text-black font-bold text-xl">
                <TranslateText text="conclusion" />
              </h3>
              <TranslateText text="cementCore" />
              <TranslateText text="rightCementChoice" />
            </article>
          </section>
        </div>

        <BlogSection
          needButton
          style="bg-white"
          headline={<TranslateText text="relatedTopics" />}
        />
        <div className="w-full bg-white h-36 rounded-b-lg absolute"></div>
      </LoaderComponent>
    </section>
  );
};

export default Blog;
