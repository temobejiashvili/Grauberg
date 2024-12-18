import "../globals.css";
import AboutCard from "@/components/AboutCard/AboutCard";
import Faq from "@/components/Faq/Faq";
import ContactPage from "@/components/ContactPage/ContactPage";

export default function TestPage() {
  return (
    <div className="h-[10000px] bg-[#D6D6D6]">
      {/* <div className="bg-[#D6D6D6] relative pb-[100px] px-[179px] max-900:px-[22px] flex justify-center items-center"> */}
      <div>
        {/* <Faq /> */}
        {/* <AboutCard /> */}
        <ContactPage />
      </div>
    </div>
  );
}
