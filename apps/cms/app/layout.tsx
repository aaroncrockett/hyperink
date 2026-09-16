// Next
import type { Metadata } from "next";

// @ Locals
import { cn } from "@hyperink/utils";
// Local UI
import "./globals.css";

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
    <html lang="en" data-theme="hyperinknue" className={`h-full antialiased `}>
      <body className={`h-full`}>
        <div className={cn("grid min-h-screen mx-auto grid-rows-[auto_1fr]")}>
          {children}
        </div>
      </body>
    </html>
  );
}
