import type { Metadata } from "next";
import { Urbanist, Fira_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
    <html lang="pt-BR">
      <body
        className={`${urbanist.variable} ${firaSans.variable} font-sans antialiased bg-white`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
