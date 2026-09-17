//
import type { Metadata } from "next";
import { League_Gothic, Outfit, Rubik, Rubik_Dirt } from "next/font/google";
import "@fontsource/rubik-dirt";
//
import { cn } from "@hyperink/utils";
//
import "./globals.css";
import { Toaster } from "./_components/Toaster";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
});

const leagueGothic = League_Gothic({
  variable: "--font-league-gothic",
  weight: "400",
  subsets: ["latin"],
});

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
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="hyperinknue"
      className={`h-full antialiased ${outfit.variable} ${leagueGothic.variable} ${rubik.variable} ${rubikDirt.variable}`}
    >
      <body className={`h-full`}>
        <div className={cn("grid grid-rows-[auto_1fr] mx-auto min-h-screen")}>
          {children}
          <Toaster />
        </div>
      </body>
    </html>
  );
}
