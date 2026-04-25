import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://riftclb-portfolio.vercel.app"),
  title: {
    default: "rift.clb · automotive films & cinema",
    template: "%s · rift.clb",
  },
  description:
    "Automotive films, stills, and brand content shot the way the culture deserves. Rollers under tunnel lights. Garage edits at 2am.",
  openGraph: {
    title: "rift.clb",
    description: "Cinematic car content. Films, stills, brand reels.",
    type: "website",
    locale: "en_US",
    images: ["/posters/hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "rift.clb",
    description: "Cinematic car content.",
    images: ["/posters/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700&display=swap"
        />
      </head>
      <body className="paper-grain">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-[var(--color-paper)] focus:text-[var(--color-ink)] focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
