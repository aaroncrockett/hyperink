// Next
import type { Metadata } from "next";

import { Bebas_Neue, Outfit } from "next/font/google";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

// @
import { cn } from "@/utils/cn";
// local
import { ShellUpper } from "./_components/ShellUpper";
import Footer from "./_components/(footer)/Footer";
import FooterNav from "./_components/(nav)/FooterNav";

import "./globals.css";

export const metadata: Metadata = {
  title: "Shade To Shade Tattoo",
  description: "Tattoo Artists in Portland Oregon",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Shade To Shade Tattoo - Tattoo Artist in Portland, OR.",
    description: "Queer / Gay Tattoo Artist in Portland, OR.",
    url: "https://shadetoshadetattoo.com",
    siteName: "Shade To Shade Tattoo",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://shadetoshadetattoo.com/images/pdx-tatt-artist.webp",
        width: 1540,
        height: 275,
        alt: "Shade To Shade Tattoo — Queer Portland artist. Tattoo Artist in Portland, OR. ",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`h-full  antialiased  ${outfit.variable} ${bebasNeue.variable} `}
      data-theme="shadetoshade"
      lang="en"
    >
      <body className={`antialiased h-full`}>
        <div
          className={cn(
            "h-screen flex flex-col lg:grid lg:grid-cols-[200px_1fr] lg:items-start",
          )}
        >
          <ShellUpper />
          <main
            className={`noise-bg lg:col-start-2 lg:row-start-2 pt-2 md:pt-3`}
          >
            {children}
          </main>
          <Footer className="bg-primary-500 lg:col-start-2 lg:row-start-3 p-2 sm:p-4 ">
            {/* shown: default - hidden:lg*/}
            <FooterNav className="flex lg:hidden w-full" />
          </Footer>
        </div>
      </body>
    </html>
  );
}
