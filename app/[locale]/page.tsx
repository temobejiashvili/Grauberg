import "../globals.css";
import AboutSection from "./components/AboutSection";
import { HomeHero } from "./components/Hero";
import { Products } from "./components/products";

async function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div>
      <HomeHero />
      <AboutSection />
      <Products />
    </div>
  );
}

export default Home;
