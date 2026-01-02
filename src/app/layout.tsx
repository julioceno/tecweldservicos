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
  metadataBase: new URL("https://tecweldservicos.com.br"),
  title: {
    default: "TECWELD | Soluções em Montagem e Manutenção Industrial",
    template: "%s | TECWELD",
  },
  description:
    "Especializada em montagem, manutenção e soldagem industrial. A TecWeld oferece soluções completas e personalizadas para a indústria, com foco em qualidade e segurança.",
  keywords: [
    "tecweld",
    "serviços industriais",
    "montagem industrial",
    "manutenção industrial",
    "soldagem",
    "soldagem industrial",
    "caldeiraria",
    "tubulação industrial",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" style={{ scrollBehavior:'smooth' }}>
      <head>
        <link rel="icon" href="/logo-2.svg" type="image/svg+xml" />
      </head>
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
