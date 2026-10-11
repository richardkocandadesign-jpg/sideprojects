import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { photos, site } from "./site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });
// Satoshi (Fontshare), self-hosted; used for headings only.
const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  weight: "300 900",
  variable: "--font-heading",
  display: "swap",
});

const title = `${site.keyword} | ${site.name}`;
const description = `${site.keyword}? That's ${site.name} from ${site.city}, ${site.role} of ${site.company}. Google sent you here for a reason. Here's the evidence.`;
const ogImage = photos[0]
  ? [{ url: photos[0].src, alt: photos[0].alt }]
  : undefined;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: site.url,
    siteName: site.keyword,
    type: "profile",
    locale: "en_US",
    images: ogImage,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ogImage,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${satoshi.variable}`}>
      <body>{children}</body>
    </html>
  );
}
