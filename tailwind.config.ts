import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        notoGeorgian: ["Noto Sans Georgian", "sans-serif"],
      },
      backgroundImage: {
        "hero-mobile": "url('/images/home-b-mobile-1.png')",
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
