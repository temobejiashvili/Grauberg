import dynamic from "next/dynamic";
import { aboutUsContent } from "@/content/aboutUsContent";

// Dynamic Imports
const dynamicImports = {
  LoaderComponent: dynamic(
    () => import("@/components/loaderComponent/LoaderComponent"),
    { ssr: false, loading: () => <p>loading...</p> }
  ),
  AboutCardComponent: dynamic(
    () => import("@/components/aboutCardComponent/AboutCardComponent"),
    { ssr: false, loading: () => <p>loading...</p> }
  ),
};

const AboutUs = () => {
  return (
    <section className="flex flex-col gap-16 pt-24 h-full relative">
      {Object.entries(aboutUsContent).map(([key, details]) =>
        typeof details === "string" ? (
          <dynamicImports.AboutCardComponent
            key={key}
            title={key}
            details={details}
          />
        ) : null
      )}
      <dynamicImports.LoaderComponent>
        <dynamicImports.AboutCardComponent
          title="graubergVision"
          details={
            aboutUsContent.graubergVision.settingNewStandardsinConstruction
          }
          anotherParagraph={
            aboutUsContent.graubergVision.qualityResponsibilityandGrowth
          }
        />
      </dynamicImports.LoaderComponent>
      <div className="absolute inset-x-0 bottom-[-159px] h-40 bg-white rounded-b-lg"></div>
    </section>
  );
};

export default AboutUs;
