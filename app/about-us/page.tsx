import dynamic from "next/dynamic";
import { aboutUsContent } from "@/content/aboutUsContent";

import loaderBackground from "@/public/assets/images/loaderBackground.webp";
import Image from "next/image";
import { VisibilityProvider } from "@/components/context/VisibilityContext";

const dynamicImports = {
  LoaderComponent: dynamic(
    () => import("@/components/loaderComponent/LoaderComponent"),
    {
      ssr: false,
      loading: () => (
        <Image
          src={loaderBackground}
          alt="Loading"
          width={1000}
          height={1000}
          className="fixed w-[100vw] h-[100vh] top-0 left-0 z-50 object-cover aspect-auto"
        />
      ),
    }
  ),
  AboutCardComponent: dynamic(
    () => import("@/components/aboutCardComponent/AboutCardComponent"),
    {
      ssr: false,
    }
  ),
};

const AboutUs = () => {
  return (
    <dynamicImports.LoaderComponent>
      <section className="flex flex-col gap-16 pt-24 h-full relative">
        {Object.entries(aboutUsContent).map(([key, details], index) =>
          typeof details === "string" ? (
            <VisibilityProvider key={index}>
              <dynamicImports.AboutCardComponent
                title={key}
                details={details}
              />
            </VisibilityProvider>
          ) : null
        )}
        <VisibilityProvider>
          <dynamicImports.AboutCardComponent
            title="graubergVision"
            details={
              aboutUsContent.graubergVision.settingNewStandardsinConstruction
            }
            anotherParagraph={
              aboutUsContent.graubergVision.qualityResponsibilityandGrowth
            }
          />
        </VisibilityProvider>
        <div className="absolute inset-x-0 bottom-[-159px] h-40 bg-white rounded-b-lg"></div>
      </section>
    </dynamicImports.LoaderComponent>
  );
};

export default AboutUs;
