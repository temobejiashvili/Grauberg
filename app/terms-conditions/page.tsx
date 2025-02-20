import LoaderComponent from "@/components/loaderComponent/LoaderComponent";
import { TranslateText } from "@/components/translateText/TranslateText";

const TermsConditionsPage = () => {
  return (
    <div
      className="w-full relative mt-[80px] min-h-[1000px]
     flex flex-col items-center justify-center"
    >
      <LoaderComponent>
        <section className="max-w-[1200px]">
          <h4 className="my-7 text-3xl font-bold">
            <TranslateText text="termsConditions" />
          </h4>
          <p className="text-xl font-medium">
            <TranslateText text="termsDesc" />
          </p>
        </section>
        <section className="max-w-[1200px]">
          <h4 className="my-7 text-3xl font-bold">
            <TranslateText text="useOfWebsite" />
          </h4>
          <p className="text-xl font-medium">
            <TranslateText text="useOfWebsiteDesc" />
          </p>
        </section>
        <section className="max-w-[1200px]">
          <h4 className="my-7 text-3xl font-bold">
            <TranslateText text="intellectualProperty" />
          </h4>
          <p className="text-xl font-medium">
            <TranslateText text="intellectualDesc" />
          </p>
        </section>
        <section className="max-w-[1200px]">
          <h4 className="my-7 text-3xl font-bold">
            <TranslateText text="privacyPolicy" />
          </h4>
          <p className="text-xl font-medium">
            <TranslateText text="privacyPolicyDesc" />
          </p>
        </section>
        <section className="max-w-[1200px]">
          <h4 className="my-7 text-3xl font-bold">
            <TranslateText text="limitationOfLiability" />
          </h4>
          <p className="text-xl font-medium">
            <TranslateText text="limitationDesc" />
          </p>
        </section>
        <section className="max-w-[1200px]">
          <h4 className="my-7 text-3xl font-bold">
            <TranslateText text="regulatoryLawJurisdiction" />
          </h4>
          <p className="text-xl font-medium">
            <TranslateText text="regulatoryLawJurisdictionDesc" />
          </p>
        </section>
        <section className="max-w-[1200px]">
          <h4 className="my-7 text-3xl font-bold">
            <TranslateText text="contactInformation" />
          </h4>
          <p className="text-xl font-medium">
            <TranslateText text="contactDesc" />
          </p>
        </section>
        <div className="absolute inset-x-0 bottom-[-159px] h-40 bg-white rounded-b-lg"></div>
      </LoaderComponent>
    </div>
  );
};

export default TermsConditionsPage;
