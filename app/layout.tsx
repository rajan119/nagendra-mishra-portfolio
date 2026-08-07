import type { Metadata } from "next";
import { Newsreader, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export const metadata: Metadata = {
  title: "Nagendra Mishra — Founder, Strategist & Accredited Mediator",
  description:
    "Serial entrepreneur, accredited mediator, and business strategist with 16+ years scaling ventures across technology, events, hospitality, and professional services.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${newsreader.variable} ${inter.variable} ${plexMono.variable} bg-ink text-paper font-body`}
      >
        {children}
      </body>
    </html>
  );
}
