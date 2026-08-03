import Image from "next/image";
import type { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";

// Local
import "./globals.css";

export const metadata: Metadata = {
  title: "HyperInk",
  description: "HyperInk - Tattoo Booking and client management app. Owned and made by an artist.",
  icons: {
    icon: "/favicon.svg",
  },
};

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="hyperink" className={`h-full ${outfit.variable} ${bebas.variable}  antialiased`}>
      <body className="min-h-full flex flex-col mx-auto w-full ">
        <div className="flex justify-between p-4 bg-surface-950-50">
      
          <Image
            src="/images/hyperink-logo-lt-text.svg"
            alt="Aaron Does Ink - Logo"
            width={201}
            height={40}
            className="h-16 w-auto mx-auto"
          />
        </div>
        {children}
      </body>
    </html>
  );
}
