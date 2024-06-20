import "../globals.css";
import { HomeHero } from "./components/Hero";

async function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div>
      <HomeHero />
    </div>
  );
}

export default Home;
