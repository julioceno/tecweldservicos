import type { Metadata } from "next";
import { Urbanist, Fira_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const firaSans = Fira_Sans({
  variable: "--font-fira-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TecWeld - Serviços Industriais",
  description: "TecWeld Serviços Industriais",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" style={{ scrollBehavior:'smooth' }}>
      <body
        className={`${urbanist.variable} ${firaSans.variable} font-sans antialiased bg-white min-h-screen flex flex-col`}
      >
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
