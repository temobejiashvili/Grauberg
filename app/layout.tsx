"use client";
import FooterComponent from "@/components/Footer/FooterComponent";
import "./globals.css"; // Global CSS file (if applicable)
import { Noto_Sans_Georgian } from "@next/font/google";
import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import FaqHeader from "@/components/FaqHeader/FaqHeader";

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
  const isFaq = ["/contact"].includes(pathname);

  return (
    <html lang="en" className={notoGeorgian.className}>
      <body>
        <ScrollProvider>
          {isFaq ? <FaqHeader isWhite /> : <Header />}
          <>{children}</>
          <FooterComponent hasNotPadding={hasNotPadding} />
        </ScrollProvider>
      </body>
    </html>
  );
}
