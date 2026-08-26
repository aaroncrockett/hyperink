// Next
import type { Metadata } from "next";
import { League_Gothic, Outfit } from "next/font/google";
// @ Locals
import { cn } from "@/utils/cn";
// Local UI
import "./globals.css";
import { HeaderShell } from "./_components/(header)/HeaderShell";

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

export const metadata: Metadata = {
  title: "HyperInk: Tattoo Booking & Client Records",
  description: "Tattoo Artists in Portland Oregon",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "HyperInk Tattoo Booking - Tattoo Artist in Portland, OR.",
    description:
      "Tattoo Booking and Client Records Web App - Mobile and Desktop. Owned and created by Artists.",
    url: "https://hyperink.studio",
    siteName: "HyperInk Tattoo Booking & Client Records",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://hyperink.studio/images/hyperink-card-display-logo.webp",
        width: 1000,
        height: 800,
        alt: "HyperInk Tattoo Booking & Client Records",
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
      lang="en"
      data-theme="hyperinknue"
      className={`h-full antialiased ${outfit.variable} ${leagueGothic.variable}`}
    >
      <body className={`h-full`}>
        <div className={cn("grid h-screen mx-auto")}>
          <HeaderShell />
          {children}
        </div>
      </body>
    </html>
  );
}
