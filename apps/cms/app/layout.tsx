import type { Metadata } from "next";
// @
import { cn } from "@/utils/cn";
// Local
import "./globals.css";
import { HeaderShell } from "./_components/(header)/HeaderShell";

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
    <html lang="en" data-theme="hyperink" className={`h-full  antialiased`}>
      <body className={`antialiased h-full`}>
        <div className={cn("h-screen flex flex-col lg:items-start")}>
          <HeaderShell />
          <>{children}</>
        </div>
      </body>
    </html>
  );
}
