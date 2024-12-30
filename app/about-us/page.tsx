import dynamic from "next/dynamic";
import { aboutUsContent } from "@/content/aboutUsContent";

const LoaderComponent = dynamic(
  () => import("@/components/loaderComponent/LoaderComponent")
);
const AboutCardComponent = dynamic(
  () => import("@/components/aboutCardComponent/AboutCardComponent")
);

const AboutUs = () => {
  return (
    <section className="flex flex-col gap-16 pt-24 h-full relative">
      <AboutCardComponent
        title="გრაუბერგის შესახებ"
        details={aboutUsContent.about}
      />
      <LoaderComponent>
        <div>
          <AboutCardComponent
            title="გრაუბერგის მისია"
            details={aboutUsContent.mission}
          />
        </div>
        <AboutCardComponent
          title="გრაუბერგის ხედვაა"
          details={aboutUsContent.vision}
        />
        <div className="absolute inset-x-0 bottom-[-159px] h-40 bg-white rounded-b-lg"></div>
      </LoaderComponent>
    </section>
  );
};

export default AboutUs;
