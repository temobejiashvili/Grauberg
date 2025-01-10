import React, { ReactNode } from "react";
import i18nConfig from "@/i18nConfig";
import type { Metadata } from "next";
import FooterComponent from "@/components/Footer/FooterComponent";
import { Inter, Noto_Sans_Georgian } from "next/font/google";
import Header from "@/components/Header/Header";
import { ScrollProvider } from "../components/context/ScrollContext";
import initializeTranslations from "./i18n"; // Your i18n initialization file
import "./globals.css";
import { TranslationsProvider } from "@/components";

const notoGeorgian = Noto_Sans_Georgian({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({ subsets: ["latin"] });

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
  // Initialize translations for the requested locale
  const { resources } = await initializeTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} className={notoGeorgian.className}>
      <head>
        <link rel="icon" href="/images/Vector.png" />
      </head>
      <body>
        {/* Provide translations and manage global state */}
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
