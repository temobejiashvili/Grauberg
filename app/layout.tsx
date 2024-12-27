"use client";
import FooterComponent from "@/components/Footer/FooterComponent";
import { Noto_Sans_Georgian } from "@next/font/google";
import Header from "@/components/Header/Header";
import { ScrollProvider } from "./context/ScrollContext";
import "./globals.css";
import { usePathname } from "next/navigation";

const notoGeorgian = Noto_Sans_Georgian({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const AboutUsCover = ["/about-us"].includes(pathname);
  const hasNotPadding = ["/product"].includes(pathname);
  const contact = ["/contact"].includes(pathname);
  const product = ["/product"].includes(pathname);
  const blog = ["/blog"].includes(pathname);
  const faq = ["/faq"].includes(pathname);

  return (
    <html lang="en" className={notoGeorgian.className}>
      <body>
        <ScrollProvider>
          {AboutUsCover ? (
            <Header AboutUsCover />
          ) : contact ? (
            <Header isWhite />
          ) : blog ? (
            <Header isWhite />
          ) : faq ? (
            <Header cover />
          ) : product ? (
            <Header isWhite whiteOverlay isProduct={product} />
          ) : (
            <Header factoryBackground />
          )}
          <>{children}</>
          <FooterComponent hasNotPadding={hasNotPadding} />
        </ScrollProvider>
      </body>
    </html>
  );
}
