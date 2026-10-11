import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dear Queen, Here Are 10 Soft Skills You Need in 2025",
  description:
    "Ten soft skills to help you rise confidently in 2025 — in your career, personal life and purpose.",
  openGraph: {
    type: "article",
    title: "Dear Queen, Here Are 10 Soft Skills You Need in 2025",
    description:
      "Ten soft skills to help you rise confidently in 2025 — in your career, personal life and purpose.",
  },
};

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
