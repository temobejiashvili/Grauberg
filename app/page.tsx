import "./globals.css";
import { TranslateText } from "@/components/translateText/TranslateText";
import dynamic from "next/dynamic";
import loaderBackground from "@/public/assets/images/loaderBackground.webp";
import Image from "next/image";

const LoaderComponent = dynamic(
  () => import("@/components/loaderComponent/LoaderComponent"),
  {
    ssr: false,
    loading: () => (
      <Image
        src={loaderBackground}
        alt="Loading"
        priority
        className="absolute w-[100vw] h-[100vh] top-0 left-0"
      />
    ),
  }
);

const AboutCard = dynamic(() => import("@/components/aboutCard/AboutCard"), {
  ssr: false,
});

const ProductCardComponent = dynamic(
  () => import("@/components/productCard/ProductCardComponent"),
  {
    ssr: false,
  }
);

const BlogSection = dynamic(
  () => import("@/components/blogSection/BlogComponent"),
  {
    ssr: false,
  }
);

const Home = () => {
  return (
    <>
      <div className="flex relative flex-col gap-[65px] pt-[100px] h-full">
        <AboutCard />
      </div>

      <section className="mt-[40rem] flex flex-col gap-[8rem] max-900:mt-[53.75rem]">
        <h2 className="text-4xl font-bold leading-[1.3] text-center text-primary">
          <TranslateText text="ourProduct" />
        </h2>

        <LoaderComponent>
          <div className="flex justify-center items-center gap-12 max-900:flex-col max-900:gap-10">
            <ProductCardComponent isCement />
            <ProductCardComponent />
          </div>
        </LoaderComponent>
      </section>

      <div className="h-24" />

      <BlogSection />
    </>
  );
};

export default Home;
