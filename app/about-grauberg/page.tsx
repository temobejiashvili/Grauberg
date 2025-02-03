import Image from "next/image";
import LoaderComponent from "@/components/loaderComponent/LoaderComponent";
import { TranslateText } from "@/components/translateText/TranslateText";

import factoryImage from "@/public/assets/images/backgroundImage.webp";

const AboutGraubergPage = () => {
  return (
    <div className="w-full relative min-h-[1000px] h-full">
      <LoaderComponent>
        <section className="flex flex-col max-w-[1200px] mx-auto justify-center items-center mt-10 px-4">
          <h4 className="w-fit text-4xl font-bold mb-5">
            <TranslateText text="graubergFactory" />
          </h4>
          <p className="text-base font-medium">
            <TranslateText text="factoryDetails" />
          </p>
        </section>
        <section className="w-full flex justify-center mt-10">
          <Image src={factoryImage} alt="factory" width={1000} height={539} />
        </section>
        <section className="flex flex-col max-w-[1200px] mx-auto justify-center items-center mt-10 px-4">
          <h4 className="w-fit text-3xl font-bold mb-5">
            <TranslateText text="whyFactory" />
          </h4>
          <p className="text-base font-medium mb-5">
            <TranslateText text="substantiation1" />
          </p>
          <p className="text-base font-medium mb-5">
            <TranslateText text="substantiation2" />
          </p>
          <p className="text-base font-medium mb-5">
            <TranslateText text="substantiation3" />
          </p>
          <p className="text-base font-medium">
            <TranslateText text="substantiation4" />
          </p>
        </section>
      </LoaderComponent>
      <div className="absolute inset-x-0 bottom-[-159px] h-40 bg-white rounded-b-lg"></div>
    </div>
  );
};

export default AboutGraubergPage;
