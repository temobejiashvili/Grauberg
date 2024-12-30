"use client";
import FooterComponent from "@/components/Footer/FooterComponent";
import "./globals.css"; // Global CSS file (if applicable)
import { Noto_Sans_Georgian } from "@next/font/google";
import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";

import { ScrollProvider } from "./context/ScrollContext";

const notoGeorgian = Noto_Sans_Georgian({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // Specify weights you need
});

// export const metadata = {
//   title: "Your App Title",
//   description: "Your App Description",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hasNotPadding = ["/product"].includes(pathname);
  const aboutUsCover = ["/about-us"].includes(pathname);
  const catalog = ["/blog/catalog"].includes(pathname);
  const product = ["/product"].includes(pathname);
  const contact = ["/contact"].includes(pathname);
  const blog = ["/blog"].includes(pathname);
  const faq = ["/faq"].includes(pathname);

  return (
    <html lang="en" className={notoGeorgian.className}>
      <body>
        <ScrollProvider>
          {catalog ? (
            <Header catalog />
          ) : aboutUsCover ? (
            <Header aboutUsCover />
          ) : contact ? (
            <Header isWhite />
          ) : blog ? (
            <Header isWhite />
          ) : faq ? (
            <Header cover />
          ) : product ? (
            <Header isWhite whiteOverlay />
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
