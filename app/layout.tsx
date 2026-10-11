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
// Social preview stays on the microphone photo whatever the page order is.
const ogPhoto = photos.find((p) => p.src.includes("microphone")) ?? photos[0];
const ogImage = ogPhoto ? [{ url: ogPhoto.src, alt: ogPhoto.alt }] : undefined;

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
