import "../globals.css";
import FooterComponent from "../../components/Footer/FooterComponent";
import AboutSection from "./components/AboutSection";
import { HomeHero } from "./components/Hero";
import { Products } from "./components/products";

async function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div>
      <HomeHero />
      <AboutSection />
      <Products />
      <FooterComponent />
    </div>
  );
}

export default Home;
