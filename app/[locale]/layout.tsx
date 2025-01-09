import React, { ReactNode } from "react";
import i18nConfig from "@/i18nConfig";
import type { Metadata } from "next";
import FooterComponent from "@/components/Footer/FooterComponent";
import { Inter, Noto_Sans_Georgian } from "next/font/google";
import Header from "@/components/Header/Header";
import { ScrollProvider } from "../../components/context/ScrollContext";
import initializeTranslations from "../i18n"; // Your i18n initialization file
import "../globals.css";
import { TranslationsProvider } from "@/components";

const notoGeorgian = Noto_Sans_Georgian({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

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
  params: { locale = "ge" },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { t, resources } = await initializeTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} className={notoGeorgian.className}>
      <head>
        <link rel="icon" href="/images/Vector.png" />
      </head>
      <body>
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
        >
          <ScrollProvider>
            {/* Wrap the app with the i18n context */}
            <Header />
            {children}
            <FooterComponent />
          </ScrollProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
