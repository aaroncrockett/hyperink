import type { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";

import Card from "@/ui/card";
import { cn } from "@/utils/cn";

import HeaderWrapper from "./(header)/HeaderWrapper";
import Footer from "./(footer)/Footer";
import FooterNav from "./(nav)/FooterNav";
import Nav from "./(nav)/Nav";

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
        <div
          className={cn(
            "h-screen grid grid-rows-[auto_1fr_auto] lg:grid-cols-[200px_1fr]",
          )}
        >
          {/* hidden: default - shown:lg*/}
          <Card className="h-full row-span-3 noise-bg-opac-0pt8 hidden lg:block">
            <Nav className="hidden lg:block" />
          </Card>
          <HeaderWrapper />

          <main
            className={`noise-bg lg:col-start-2 lg:row-start-2 relative z-0`}
          >
            {children}
          </main>

          <Footer className="bg-primary-500 lg:col-start-2 lg:row-start-3 p-2 sm:p-4">
            {/* shown: default - hidden:lg*/}
            <FooterNav className="flex lg:hidden w-full" />

            {/* hidden: default - shown:lg*/}
            <div className="hidden lg:block">
              Deved By Aaron Does Everything (Tattoos, Web Apps, Web Sites, Web
              Design, Graphic Design, Illustration, Painting)
            </div>
          </Footer>
        </div>
      </body>
    </html>
  );
}
