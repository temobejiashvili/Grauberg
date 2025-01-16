import React, { ReactNode } from "react";
import type { Metadata } from "next";
import FooterComponent from "@/components/Footer/FooterComponent";
import { Noto_Sans_Georgian } from "next/font/google";
import Header from "@/components/Header/Header";
import { ScrollProvider } from "../components/context/ScrollContext";
import initializeTranslations from "./i18n";
import "./globals.css";
import { TranslationsProvider } from "@/components";

const notoGeorgian = Noto_Sans_Georgian({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const i18nNamespaces = ["common"];

export const metadata: Metadata = {
  title: "Grauberg",
};

export default async function RootLayout({
  children,
  params: { locale = "ge" },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { resources } = await initializeTranslations(locale, i18nNamespaces);

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
            <Header />
            {children}
            <FooterComponent />
          </ScrollProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
