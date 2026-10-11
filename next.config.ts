import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats; AVIF is ~30% smaller than WebP for photographs.
    formats: ["image/avif", "image/webp"],
    // Cache optimized variants for a year — the source files are immutable.
    minimumCacheTTL: 31536000,
    // Trim the default ladder to the widths this layout actually requests,
    // so the optimizer does less work and caches fewer variants.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [96, 128, 210, 256, 384, 560],
  },
  // Strip React dev-only prop checks from the production bundle.
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
};

export default nextConfig;
