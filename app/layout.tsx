import type { Metadata, Viewport } from "next";
import {
  Plus_Jakarta_Sans,
  Source_Sans_3,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Modern, high-end display sans-serif for headings
const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display-sans",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

// Highly readable body sans-serif for descriptions, metadata, and fine text
const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

// Monospace font for price tags, listing IDs, specs, and coordinates
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://homelandpremier.vercel.app"), // Replace with your production domain
  title: {
    default: "Homeland Premier | Luxury Real Estate & Estate Listings",
    template: "%s | Homeland Premier",
  },
  description:
    "Discover luxury homes, lands, residential estates, and video property tours with Homeland Premier. Browse verified real estate listings available for buy, rent, or short-let.",
  keywords: [
    "Real Estate",
    "Luxury Homes",
    "Residential Estates",
    "Property Listings",
    "Buy Land",
    "Short Let Apartments",
    "Homeland Premier",
  ],
  authors: [{ name: "Homeland Premier" }],
  creator: "Homeland Premier",
  publisher: "Homeland Premier",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Homeland Premier | Luxury Real Estate & Estate Listings",
    description:
      "Curated luxury homes, land, and estates at your doorstep. Explore video tours and verified listings.",
    url: "https://homelandpremier.vercel.app",
    siteName: "Homeland Premier",
    images: [
      {
        url: "/og-image.jpg", // Place your default OG share image in /public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "Homeland Premier Real Estate Listings",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homeland Premier | Luxury Real Estate & Estate Listings",
    description:
      "Curated luxury homes, land, and estates at your doorstep. Explore video tours and verified listings.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://homelandpremier.vercel.app",
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
      className={`${jakartaSans.variable} ${sourceSans.variable} ${plexMono.variable}`}
    >
      <body className="font-sans antialiased bg-neutral-950 text-white selection:bg-orange-600 selection:text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
