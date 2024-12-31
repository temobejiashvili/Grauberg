import FooterComponent from "@/components/Footer/FooterComponent";
import { Noto_Sans_Georgian } from "@next/font/google";
import Header from "@/components/Header/Header";
import { ScrollProvider } from "../components/context/ScrollContext";
import "./globals.css";

const notoGeorgian = Noto_Sans_Georgian({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={notoGeorgian.className}>
      <head>
        <link rel="icon" href="/images/vector.png" />
      </head>
      <body>
        <ScrollProvider>
          <Header />
          <>{children}</>
          <FooterComponent />
        </ScrollProvider>
      </body>
    </html>
  );
}
