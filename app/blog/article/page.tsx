"use client";
import { FC } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { TranslateText } from "@/components/translateText/TranslateText";
import { socialIcons } from "@/content/socialIcons";

import { articles } from "@/content/blogsContent";
import constructionImage1 from "@/public/assets/images/construction.png";
import constructionImage2 from "@/public/assets/images/construction2.png";
import loaderBackground from "@/public/assets/images/loaderBackground.webp";
import { useSearchParams } from "next/navigation";
import { useTranslation } from "react-i18next";

const BlogSection = dynamic(
  () => import("@/components/blogSection/BlogComponent"),
  {
    ssr: false,
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
        placeholder="blur"
        priority
        width={1000}
        height={1000}
        className="fixed object-cover w-[100vw] h-[100vh] top-0 left-0 z-50"
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

const cementMaking = [
  { key: "rawMaterials", desc: "rawMaterialsDesc" },
  { key: "materials", desc: "materialsDesc" },
  { key: "oven", desc: "ovenDesc" },
  { key: "grinding", desc: "grindingDesc" },
  { key: "distribution", desc: "distributionDesc" },
];

const cementTypes = [
  { key: "portlandcement", desc: "cementVarietie" },
  { key: "Portland Pozzolana Cement (PPC)", desc: "pozzolanaDesc" },
  { key: "quickSetCement", desc: "cementTypesExplained" },
  { key: "sulphatResistannce", desc: "sulphatDesc" },
  { key: "whiteCement", desc: "whiteCementOverview" },
  { key: "hydroCem", desc: "aquaCem" },
];

const Blog = () => {
  const searchParams = useSearchParams();
  const { t } = useTranslation();
  const search = searchParams.get("");
  const blogBasic = t("blogs", { returnObjects: true });
  const data = blogBasic?.[search - 1];

  return (
    <section className="bg-gray-100">
      <div className="pt-32 mx-auto max-w-7xl px-6 mb-24">
        <header className="flex flex-col gap-4">
          <h2 className="text-black text-3xl font-bold leading-11 max-w-xl max-900:text-2xl max-900:leading-8">
            {/* <TranslateText text={data?.header} /> */}
            {data?.header}
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
          {/* <Image
            src={constructionImage1}
            alt="Construction"
            width={902}
            height={529}
            className="self-center max-600:max-h-80"
            placeholder="blur"
          /> */}
          {data && (
            <article className="flex flex-col gap-7 text-gray-900 font-medium leading-7">
              <h3 className="text-black font-bold text-xl">{data?.header}</h3>
              {/* <TranslateText text={data?.headerDetails} /> */}
              {data?.headerDetails}
            </article>
          )}
          <article className="flex flex-col gap-7">
            {data?.olList?.map(({ header, list, subText }, index) => (
              <div key={index} className="text-gray-900 font-medium leading-7">
                <span className="text-black font-bold text-xl">
                  <TranslateText text={header} />:
                </span>{" "}
                <ol className="list-disc ml-6 space-y-2 text-gray-800">
                  {list.map((item, i) => (
                    <li className="text-base font-medium" key={i}>
                      <TranslateText text={item.key} />
                      <TranslateText text={item.desc} />
                    </li>
                  ))}
                </ol>
                <p className="my-14 font-semibold">
                  <TranslateText text={subText} />
                </p>
              </div>
            ))}
            {data?.ulList?.map(
              ({ header, subHeader, list, subText }, index) => (
                <div
                  key={index}
                  className="text-gray-900 font-medium leading-7"
                >
                  <span className="text-black font-bold text-xl">
                    <TranslateText text={header} />:
                  </span>{" "}
                  {subHeader && (
                    <span className="block">
                      <TranslateText text={subHeader} />
                    </span>
                  )}
                  <ul className="list-decimal ml-6 space-y-2 text-gray-800">
                    {list.map((item, i) => (
                      <li className="text-base font-medium" key={i}>
                        <TranslateText text={item.key} />
                        <TranslateText text={item.desc} />
                      </li>
                    ))}
                  </ul>
                  <p className="my-14 font-semibold">
                    <TranslateText text={subText} />
                  </p>
                </div>
              )
            )}
          </article>
          {/* <Image
            src={constructionImage2}
            alt="Construction"
            layout="responsive"
            width={902}
            height={529}
            placeholder="blur"
          /> */}
          {data?.subHeader && (
            <article className="flex flex-col gap-7 text-gray-900 font-medium leading-7">
              <h3 className="text-black font-bold text-xl mb-7">
                {data?.subHeader}
              </h3>
              <TranslateText text={data?.subText} />
            </article>
          )}
          {data?.footerTitle && (
            <article className="flex flex-col gap-7">
              <h3 className="text-black font-bold text-xl">
                <TranslateText text={data?.footerTitle} />
              </h3>
              <TranslateText text={data?.footerDetails[0]} />
              <TranslateText text={data?.footerDetails[1]} />
            </article>
          )}
        </section>
      </div>
      <LoaderComponent>
        <BlogSection
          needButton
          style="bg-white"
          headline={<TranslateText text="relatedTopics" />}
        />
      </LoaderComponent>
      <div className="w-full bg-white h-36 rounded-b-lg absolute"></div>
    </section>
  );
};

export default Blog;
