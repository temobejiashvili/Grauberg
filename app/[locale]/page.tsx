import "../globals.css";
import FooterComponent from "./components/Footer/FooterComponent";
import { HomeHero } from "./components/Hero";

async function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div>
      <HomeHero />
      <FooterComponent />
    </div>
  );
}

export default Home;
