import initializeTranslations from "../i18n";
import "../globals.css";
import Image from "next/image";
import HomeHero from "@/components/HomeHero";

async function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div>
      <HomeHero />
    </div>
  );
}

export default Home;
