import React, { ReactNode } from "react";
import FooterComponent from "@/components/Footer/FooterComponent";
import { Noto_Sans_Georgian } from "next/font/google";
import Header from "@/components/Header/Header";
import { ScrollProvider } from "@/components/context/ScrollContext";
import initializeTranslations from "./i18n";
import "./globals.css";
import { TranslationsProvider } from "@/components";

const notoGeorgian = Noto_Sans_Georgian({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const i18nNamespaces = ["common"];

export const metadata = {
  title: "Grauberg",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale?: string };
}) {
  const locale = params.locale || "ge";
  const { resources } = await initializeTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} className={notoGeorgian.className}>
      <head>
        <link rel="icon" href="/images/Vector.png" />
      </head>
      <body>
        <ScrollProvider>
          <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
          >
            <Header />
            {children}
            <FooterComponent />
          </TranslationsProvider>
        </ScrollProvider>
      </body>
    </html>
  );
}
