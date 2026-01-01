import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
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
        className={`${urbanist.variable} font-sans antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
