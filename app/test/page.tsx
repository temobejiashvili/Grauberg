import "../globals.css";
// import AboutCard from "@/components/AboutCard/AboutCard";
import Faq from "@/components/Faq/Faq";

export default function TestPage() {
  return (
    <div className="h-[10000px] ">
      <div className="relative">{/* <AboutCard /> */}</div>
      <h1>Test Page</h1>
      <div className="bg-[#D6D6D6] pt-[900px] pb-[100px] px-[179px] max-900:px-[22px]">
        <Faq />
      </div>
    </div>
  );
}
