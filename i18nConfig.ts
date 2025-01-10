import { Config } from "next-i18n-router/dist/types";

const i18nConfig: Config = {
  locales: ["ge", "en"],
  defaultLocale: "ge",
  localeDetection: false,
  noPrefix: true,
};

export default i18nConfig;
