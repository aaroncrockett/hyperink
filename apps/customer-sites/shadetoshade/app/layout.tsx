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
        <div className={cn("grid min-h-screen mx-auto grid-rows-[auto_1fr]")}>
          <HeaderWrapper className="sticky top-0 z bg-white shadow-lg header-padding z-20" />
          <div className="grid h-full grid-cols-1 bg-surface-800-200 lg:grid-cols-[minmax(220px,auto)_1fr] md:grid-cols-[minmax(180px,auto)_1fr] ">
            <aside className="hidden w-full min-h-screen col-span-1 pr-2 bg-surface-800-200 md:block">
              <Nav className="sticky col-span-1 top-28 min-h-[calc(100vh-10rem)] self-start" />
            </aside>

            <div className="flex flex-col h-full col-span-1">
              <main className={`noise-bg flex flex-col flex-1 h-full"`}>
                {children}
                {/* shown on md or above */}
                <DTFooter className="flex-row items-center justify-between hidden w-full text-sm main-padding md:flex bg-primary-500"></DTFooter>
              </main>
              {/* shown bellow md */}
              <MobileFooterNav className="main-padding sticky bottom-0 flex items-center bg-primary-500! justify-between w-full h-auto mx-auto md:hidden z-20" />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
