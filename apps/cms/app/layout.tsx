// Next
import type { Metadata } from "next";
import { League_Gothic, Outfit, Rubik, Rubik_Dirt } from "next/font/google";
import "@fontsource/rubik-dirt";
// @ Locals
import { cn } from "@/utils/cn";
// Local UI
import "./globals.css";
import { HeaderShell } from "./_components/(header)/HeaderShell";

import { getUserData } from "@/app/getUserData";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const leagueGothic = League_Gothic({
  variable: "--font-league-gothic",
  weight: "400",
  subsets: ["latin"],
});

import {} from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400", "500", "600", "700"],
});

const rubikDirt = Rubik_Dirt({
  subsets: ["latin"],
  variable: "--font-rubik-dirt",
  weight: "400",
});

export const metadata: Metadata = {
  title: "HyperInk: Tattoo Booking & Client Records.",
  description: "Tattoo Artists in Portland Oregon",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "HyperInk: Tattoo Booking & Client Records.",
    description:
      "Tattoo Booking and Client Records Web App - Mobile & Desktop. Run & created by Artists.",
    url: "https://hyperink.studio",
    siteName: "HyperInk Tattoo Booking & Client Records",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://hyperink.studio/images/hyperink-card-display-logo.webp",
        width: 1000,
        height: 800,
        alt: "HyperInk Tattoo Booking & Client Records.",
      },
    ],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await getUserData();

  const isSignedIn = !!user;
  return (
    <html
      lang="en"
      data-theme="hyperinknue"
      className={`h-full antialiased ${outfit.variable} ${leagueGothic.variable} ${rubik.variable} ${rubikDirt.variable}`}
    >
      <body className={`h-full`}>
        <div className={cn("grid min-h-screen mx-auto grid-rows-[auto_1fr]")}>
          <HeaderShell isSignedIn={isSignedIn} />
          {children}
        </div>
      </body>
    </html>
  );
}
