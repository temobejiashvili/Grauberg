import "../globals.css";
import Faq from "@/components/Faq/Faq";

export default function TestPage() {
  return (
    <div>
      <Faq />
      <div
        className="w-full bg-backgroundGrey h-[140px]
       rounded-b-60 absolute max-900:h-[100px]"
      ></div>
    </div>
  );
}
