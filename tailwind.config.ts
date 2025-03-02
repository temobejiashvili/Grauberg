import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "black-opacity-60": "rgba(0, 0, 0, 0.6)",
      },
      borderColor: {
        triangle: "transparent transparent #ffffff transparent",
      },
      borderWidth: {
        triangle: "0 13px 26px 13px",
      },
      height: {
        "513": "513px",
        "300": "300px",
        "60": "60px",
        "58": "58px",
        "54": "54px",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUpFull: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        slideUpHalf: {
          "0%": { transform: "translateY(50%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        floating: {
          "0%, 100%": { transform: "translateY(-5px) translateX(-52%)" },
          "50%": { transform: "translateY(5px) translateX(-48%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out forwards",
        slideUp: "slideUp 0.8s ease-in-out forwards",
        slideUpHalf: "slideUpHalf 0.8s ease-in-out forwards",
        floating: "floating 3s ease-in-out infinite",
      },
      width: {
        "58": "58px",
      },
      maxHeight: {
        "513": "513px",
        "284": "284px",
      },
      maxWidth: {
        "395": "395px",
      },
      padding: {
        "87": "87px",
        "66": "66px",
        "52": "52px",
        "18": "18px",
      },
      spacing: {
        "159": "159px",
      },
      borderRadius: {
        "60": "60px",
        "10": "10px",
        "30": "30px",
        "custom-top": "30px 30px 0 0",
      },
      fontSize: {
        "44": ["44px", "56px"],
        "36": ["36px", "44px"],
        "28": ["28px", "34px"],
        "20": ["20px", "26px"],
        "16": ["16px", "30px"],
        baseHigh: ["16px", "26px"],
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        notoGeorgian: ["'Noto Sans Georgian'", "sans-serif"],
      },
      backgroundImage: {
        "hero-mobile": "url('/images/home-b-mobile-1.png')",
        "hero-desktop": "url('/images/home-bg.png')",
        "gradient-border":
          "linear-gradient(120.6deg, #F5F5F5 45.99%, #EE2E24 151.58%)",
      },
      boxShadow: {
        custom: "0px 14px 84px 0px rgba(0, 0, 0, 0.2)",
        multi: `
          0px 12px 26px 0px #0000001A,
          0px 48px 48px 0px #00000017,
          0px 107px 64px 0px #0000000D,
          0px 190px 76px 0px #00000003,
          0px 297px 83px 0px #00000000
        `,
        little: "0px 5px 50px 0px rgba(0, 0, 0, 0.2)",
      },
      backdropBlur: {
        custom: "12px",
        "84px": "84px",
      },
      colors: {
        primary: "#EE2E24",
        darkPrimary: "#100F0F",
        darkSecondary: "#313131",
        backgroundGrey: "#F5F5F5",
        white: "#FFFFFF",
        stroke: "#D6D6D6",
        gradientStart: "#F5F5F5",
        gradientEnd: "#FFF4F3",
      },
      screens: {
        "max-1400": { max: "1400px" },
        "max-1300": { max: "1300px" },
        "max-1250": { max: "1250px" },
        "max-1100": { max: "1100px" },
        "max-900": { max: "900px" },
        "max-600": { max: "600px" },
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0.0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
