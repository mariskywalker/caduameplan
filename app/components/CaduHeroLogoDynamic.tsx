"use client";

import dynamic from "next/dynamic";

/** Client-only: `lottie-react` só pinta após `useEffect`; evita hero vazio no HTML estático. */
export const CaduHeroLogoDynamic = dynamic(() => import("./CaduHeroLogo").then((m) => m.CaduHeroLogo), {
  ssr: false,
  loading: () => <div className="hero-brand-lottie-wrap hero-brand-lottie-loading enter-1" aria-hidden />,
});
