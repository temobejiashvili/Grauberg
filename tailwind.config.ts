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
        "contact-bg": "url('/images/contact-bg.png')",
      },
      boxShadow: {
        custom: "0px 14px 84px 0px rgba(0, 0, 0, 0.2)",
      },
      backdropBlur: {
        custom: "12px",
      },
      borderRadius: {
        "custom-top": "30px 30px 0 0",
      },
      colors: {
        primary: "#EE2E24",
      },
      screens: {
        "max-1250": { max: "1250px" },
        "max-1100": { max: "1100px" },
        "max-900": { max: "900px" },
      },
    },
  },
  plugins: [
    // function ({ addUtilities }) {
    //   addUtilities({
    //     ".gradient-border": {
    //       position: "relative",
    //       padding: "2px",
    //       background:
    //         "linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%)",
    //       boxSizing: "border-box",
    //     },
    // ".gradient-inner": {
    //   background: "transfarent",
    //   backdropFilter: "blur(12px)",
    // },
    // });
    // },
  ],
};
export default config;
