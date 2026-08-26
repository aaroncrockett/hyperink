// Next
import type { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";
// @
import { cn } from "@/utils/cn";
// local
import Nav from "./_components/(sidebar)/SidebarNav";
import DTFooter from "./_components/(footer)/DTFooter";
import MobileFooterNav from "./_components/(footer)/MobileFooterNav";
import HeaderWrapper from "./_components/(header)/HeaderWrapper";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      className={`h-full ${outfit.variable} ${bebasNeue.variable} `}
      data-theme="shadetoshade"
      lang="en"
    >
      <body className={`antialiased h-full`}>
        <div className={cn("grid min-h-screen mx-auto")}>
          <HeaderWrapper />
          <div className="grid h-full grid-cols-1 bg-surface-800-200 md:grid-cols-[minmax(220px,auto)_1fr]">
            <aside className="hidden w-full min-h-screen col-span-1 bg-surface-800-200 lg:block ">
              <Nav className="sticky col-span-1 top-25 min-h-[calc(100vh-12rem)] self-start" />
            </aside>

            <div className="col-span-1">
              <main className={`noise-bg pt-2 md:pt-3 h-full`}>
                {children}
                <DTFooter className="hidden p-2 bg-primary-500 sm:p-4 lg:block"></DTFooter>
              </main>
              <MobileFooterNav className="sticky bottom-0 flex items-center bg-primary-500! justify-between w-full h-auto p-5 px-4 mx-auto lg:hidden lg:relative" />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
