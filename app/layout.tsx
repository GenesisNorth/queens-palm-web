import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
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

const SITE = "https://queenspalmsi.org";

export const metadata: Metadata = {
  // Lets every page supply just its own title; the suffix is appended here.
  metadataBase: new URL(SITE),
  title: {
    default: "Queens Palm Support Initiative — Empowering Young Minds",
    template: "%s | Queens Palm Support Initiative",
  },
  description:
    "QPSI empowers young people with essential soft skills that are timeless and invaluable for success in life and career. Aligned with UN SDG 4.",
  keywords: [
    "QPSI", "Queens Palm Support Initiative", "soft skills", "youth empowerment",
    "mentorship", "leadership development", "Nigeria", "SDG 4",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Queens Palm Support Initiative",
    description:
      "Empowering young individuals with essential soft skills for success in life and career.",
    url: SITE,
    siteName: "Queens Palm Support Initiative",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Queens Palm Support Initiative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Queens Palm Support Initiative",
    description:
      "Empowering young individuals with essential soft skills for success in life and career.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} bg-[#050505] relative`}
      >
        <SmoothScroll>
          <div className="w-full overflow-x-hidden relative">
            {/* Ambient Glassmorphism Background — promoted to own GPU layers */}
            <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#A855F7] opacity-[0.15] blur-[140px] pointer-events-none -z-20 will-change-transform [transform:translateZ(0)]" />
            <div className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#7C3AED] opacity-[0.15] blur-[140px] pointer-events-none -z-20 will-change-transform [transform:translateZ(0)]" />
            <div className="fixed top-[40%] right-[20%] w-[30%] h-[30%] rounded-full bg-[#A855F7] opacity-[0.1] blur-[100px] pointer-events-none -z-20 will-change-transform [transform:translateZ(0)]" />
            
            {/* Wave Pattern Overlay */}
            <div 
              className="fixed inset-0 pointer-events-none -z-10 will-change-transform [transform:translateZ(0)]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 10 Q 30 30 10 30 Q 30 30 30 50 Q 30 30 50 30 Q 30 30 30 10 Z' fill='%23A855F7' fill-opacity='0.08'/%3E%3Cpath d='M90 60 Q 90 75 75 75 Q 90 75 90 90 Q 90 75 105 75 Q 90 75 90 60 Z' fill='%23A855F7' fill-opacity='0.06'/%3E%3Cpath d='M40 80 Q 40 90 30 90 Q 40 90 40 100 Q 40 90 50 90 Q 40 90 40 80 Z' fill='%23A855F7' fill-opacity='0.05'/%3E%3Cpath d='M95 15 Q 95 22 88 22 Q 95 22 95 29 Q 95 22 102 22 Q 95 22 95 15 Z' fill='%23A855F7' fill-opacity='0.07'/%3E%3Ccircle cx='70' cy='30' r='1.5' fill='%23A855F7' fill-opacity='0.08'/%3E%3Ccircle cx='20' cy='80' r='1' fill='%23A855F7' fill-opacity='0.05'/%3E%3Ccircle cx='60' cy='100' r='2' fill='%23A855F7' fill-opacity='0.04'/%3E%3C/svg%3E")`,
              }}
            />
            
            <Header />
            {children}
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
