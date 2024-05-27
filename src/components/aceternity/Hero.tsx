import React, { useEffect, useState, useRef } from "react";
import { Spotlight } from "./components/Spotlight";
import { HeroHighlightDemo } from "./HeroHighlight";
import { TextRevealCardPreview } from "./RevealCard";

export function Hero() {

  return (
    <div className="flex flex-col mx-4">
      <div
        className="h-5/6 w-full flex flex-col lg:flex-row md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.04] relative" >
        <div className="absolute top-0 pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        <Spotlight className="-top-20 right-0 md:right md:-top-20" fill="purple" />
        <HeroHighlightDemo />
        <TextRevealCardPreview />
      </div>

    </div>
  );
}
