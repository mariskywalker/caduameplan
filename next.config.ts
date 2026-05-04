import type { NextConfig } from "next";

/**
 * Raiz `/` → landing Tivita quando:
 * - `CADU_SITE_ROOT=/tivita` (override manual na Vercel), ou
 * - deploy do repo `cadutivita` (`VERCEL_GIT_REPO_SLUG`, definido pela Vercel).
 * Projeto `caduameplan` no GitHub mantém `/` como Ameplan.
 */
const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  transpilePackages: ["recharts"],
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    const explicit = process.env.CADU_SITE_ROOT?.trim();
    const slug = process.env.VERCEL_GIT_REPO_SLUG;
    const dest =
      explicit && explicit.startsWith("/") && explicit !== "/"
        ? explicit
        : slug === "cadutivita"
          ? "/tivita"
          : null;
    if (dest) {
      return [{ source: "/", destination: dest, permanent: false }];
    }
    return [];
  },
};

export default nextConfig;
