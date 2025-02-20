import React, { ReactNode } from "react";
import { Noto_Sans_Georgian } from "next/font/google";
import { ScrollProvider } from "@/components/context/ScrollContext";
import initializeTranslations from "./i18n";
import { TranslationsProvider } from "@/components";
import dynamic from "next/dynamic";
import "./globals.css";
import Image from "next/image";

import loaderBackground from "@/public/assets/images/loaderBackground.webp";

const Header = dynamic(() => import("@/components/Header/Header"), {
  ssr: false,
  loading: () => (
    <Image
      src={loaderBackground}
      alt="Loading"
      placeholder="blur"
      className="absolute object-cover w-[100vw] h-[100vh] top-0 left-0"
    />
  ),
});

const FooterComponent = dynamic(
  () => import("@/components/Footer/FooterComponent"),
  {
    ssr: false,
    loading: () => <div className="h-[100px] bg-gray-200" />,
  }
);

const notoGeorgian = Noto_Sans_Georgian({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const i18nNamespaces = ["common"];

export const metadata = {
  title: "Grauberg",
  description: "Grauberg - High-quality cement & concrete products",
  keywords: "cement, concrete, construction, Grauberg",
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link rel="icon" href="/images/Vector.png" />

        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@400;700;900&display=swap"
          as="style"
        />
      </head>
      <body className="bg-white text-gray-900">
        <ScrollProvider>
          <TranslationsProvider
            namespaces={i18nNamespaces}
            locale={locale}
            resources={resources}
          >
            <Header />
            <main className="min-h-[1000px] w-full">{children}</main>
            <FooterComponent />
          </TranslationsProvider>
        </ScrollProvider>
      </body>
    </html>
  );
}
