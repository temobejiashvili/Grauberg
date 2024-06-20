import "../globals.css";
import { HomeHero } from "./components/Hero";
import { Products } from "./components/products";

async function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <div>
      <HomeHero />
      <Products />
    </div>
  );
}

export default Home;
