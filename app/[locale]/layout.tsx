import i18nConfig from "@/i18nConfig";
import type { Metadata } from "next";
import { Inter, Noto_Sans_Georgian } from "next/font/google";
import { ReactNode } from "react";
import { dir } from "i18next";
import initializeTranslations from "../i18n";
import { TranslationsProvider } from "@/components";
import { Navigation } from "./components/Navigation";
import styles from "./body.module.css";

const inter = Inter({ subsets: ["latin"] });
const sans = Noto_Sans_Georgian({ subsets: ["georgian"] });

const i18nNamespaces = ["common"];

export const metadata: Metadata = {
  title: "Grauberg",
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { t, resources } = await initializeTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={styles.body}>
        {/* <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
          >
          <Navigation />
          {children}
          </TranslationsProvider> */}
        <img src={"/images/logo.png"} style={{ maxWidth: "70%" }} />
        <span>Coming Soon</span>
      </body>
    </html>
  );
}
