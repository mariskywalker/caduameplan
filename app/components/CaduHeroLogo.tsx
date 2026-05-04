"use client";

import Lottie from "lottie-react";
import animationData from "@/data/cadu-logo-lottie.json";

/** Hero: animação Lottie exportada do SVGator (`data/cadu-logo-lottie.json`). */
export function CaduHeroLogo() {
  return (
    <div className="hero-brand-lottie-wrap enter-1">
      <Lottie
        animationData={animationData}
        loop
        autoplay
        className="hero-brand-lottie"
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
        aria-hidden
      />
    </div>
  );
}
