import type { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";

import LayoutWrapper from "./LayoutWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aaron Does Ink",
  description: "Tattoo Artists in Portland Oregon",
  openGraph: {
    title: "Aaron Does Ink - Tattoo Artist in Portland, OR",
    description:
      "Queer / Gay Tattoo Artist in Portland, OR. Best tattoo artist for gay tattoos in Portland Oregon.",
    url: "https://aarondoeseink.com",
    siteName: "Aaron Does Ink",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://aarondoesink.com/images/hp-flash-intro",
        width: 1200,
        height: 630,
        alt: "Aaron Does Ink — Queer Portland artist. Gay AF Tattoos. Fuck Fascism",
      },
    ],
  },
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
