import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Queens Palms Support Initiative — Empowering Young Minds",
  description:
    "QPSI empowers young people with essential soft skills that are timeless and invaluable for success in life and career. Aligned with UN SDG 4.",
  openGraph: {
    title: "Queens Palms Support Initiative",
    description:
      "Empowering young individuals with essential soft skills for success in life and career.",
    url: "https://queenspalmsi.org",
    siteName: "Queens Palms Support Initiative",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} bg-[#0A0A0A] overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
