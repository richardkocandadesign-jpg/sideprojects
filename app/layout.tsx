import type { Metadata } from "next";
import { site } from "./site";
import "./globals.css";

const title = `${site.keyword} | ${site.name}`;
const description = `Looking for a walking green flag? Meet ${site.name} from ${site.city}, ${site.role} of ${site.company}.`;

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
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
