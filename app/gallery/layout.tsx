import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Moments from QPSI workshops, conferences and outreach — a look at the people and places behind the work.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
