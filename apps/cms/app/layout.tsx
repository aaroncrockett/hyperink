// Next
import type { Metadata } from "next";
import { Caprasimo, Outfit } from "next/font/google";

// @ Locals
import { cn } from "@/utils/cn";
// Local UI
import "./globals.css";
import { HeaderShell } from "./_components/(header)/HeaderShell";

const caprasimo = Caprasimo({
  variable: "--font-caprasimo",
  weight: "400",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "HyperInk:  Tattoo Booking & Client Records",
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
      className={`h-full  antialiased  ${outfit.variable} ${caprasimo.variable}`}
    >
      <body className={`antialiased h-full`}>
        <div className={cn("h-screen flex flex-col lg:items-start")}>
          <HeaderShell />
          <>{children}</>
        </div>
      </body>
    </html>
  );
}
