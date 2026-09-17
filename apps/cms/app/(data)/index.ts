import type { Metadata } from "next";
import { League_Gothic, Outfit, Rubik, Rubik_Dirt } from "next/font/google";
export const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
});

export const leagueGothic = League_Gothic({
  variable: "--font-league-gothic",
  weight: "400",
  subsets: ["latin"],
});

export const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["400", "500", "600", "700"],
});

export const rubikDirt = Rubik_Dirt({
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
