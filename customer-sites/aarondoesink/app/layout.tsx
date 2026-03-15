import type { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";

import LayoutWrapper from "./LayoutWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaron Does Ink",
  description: "Tattoo Artists in Portland Oregon",
};

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`h-full ${outfit.variable} ${bebas.variable}`}
      data-theme="adi"
      lang="en"
    >
      <body className={`antialiased h-full`}>
        {<LayoutWrapper>{children}</LayoutWrapper>}
      </body>
    </html>
  );
}
