import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-mobile": "url('/images/home-bg-mobile.png')",
        "hero-desktop": "url('/images/home-bg.png')",
      },
      colors: {
        primary: "#EE2E24",
      },
    },
  },
  plugins: [],
};
export default config;
