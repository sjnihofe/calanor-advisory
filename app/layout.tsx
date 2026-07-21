import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CALANOR Advisory | Strategie, Daten & Informationslogik",

  description:
    "CALANOR Advisory unterstützt Unternehmen dabei, Strategie, Daten und IT in eine belastbare Informationslogik zu übersetzen – für bessere Entscheidungen und nachhaltige Umsetzung.",

  keywords: [
    "Unternehmensberatung",
    "Strategieberatung",
    "Informationsmanagement",
    "Business Intelligence",
    "Datenstrategie",
    "Digitalisierung",
    "Managementberatung",
    "Steuerungsmodell",
    "KI",
    "AI"
  ],

  authors: [
    {
      name: "CALANOR Advisory",
    },
  ],

  creator: "CALANOR Advisory",

  openGraph: {
  title: "CALANOR Advisory",
  description: "Strategie. Informationslogik. Umsetzung.",
  url: "https://calanor-advisory.de",
  siteName: "CALANOR Advisory",
  images: [
    {
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "CALANOR Advisory",
    },
  ],
  locale: "de_DE",
  type: "website",
},

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${ibmPlexSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}