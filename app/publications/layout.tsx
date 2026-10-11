import type { Metadata } from "next";

export const metadata: Metadata = {
  // A plain string here would replace the root template for every child
  // route, so re-declare it to keep the suffix on nested pages.
  title: {
    default: "Publications",
    template: "%s | Queens Palm Support Initiative",
  },
  description:
    "Articles, insights and media coverage from Queens Palm Support Initiative.",
};

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
