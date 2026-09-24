"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { LiquidEffectAnimation } from "@/components/ui/liquid-effect-animation";

export default function Hero() {
  return (
    <section className="relative isolate w-full h-[calc(100dvh-5rem)] min-h-[480px] sm:min-h-[580px] max-h-[860px] flex flex-col justify-between overflow-hidden px-4 pt-3 pb-5 sm:px-6 sm:pt-6 sm:pb-8 lg:py-10 bg-slate-950 select-none touch-pan-y">
      {/* Interactive Liquid Canvas Background with Responsive 'Jovix' Textures */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden touch-pan-y pointer-events-auto">
        <LiquidEffectAnimation
          className="absolute inset-0 w-full h-full touch-pan-y"
          canvasClassName="w-full h-full block cursor-crosshair touch-pan-y"
          imageUrl="/jovix-liquid.png"
          mobileImageUrl="/jovix-liquid-mobile.png"
          metalness={0.75}
          roughness={0.25}
          displacementScale={3.5}
        />
        {/* Soft vignette gradients so text & buttons pop while center 'Jovix' stays crystal-clear */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/85 pointer-events-none" />
      </div>

      {/* Top: Availability Badge & Interactive Hint */}
      <div className="relative z-10 w-full flex items-center justify-center sm:justify-between gap-3 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-slate-900/85 backdrop-blur-xl border border-emerald-500/35 text-[11px] sm:text-xs font-semibold text-slate-100 shadow-xl shadow-black/40 pointer-events-auto hover:border-emerald-400/60 transition-all">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-300 font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">Available for new projects</span>
        </div>

        <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/75 backdrop-blur-md border border-white/10 text-xs text-slate-300 shadow-lg pointer-events-auto">
          <Sparkles className="w-3.5 h-3.5 text-purple-300 animate-pulse" />
          <span>Interactive liquid canvas • Move or click to ripple</span>
        </div>
      </div>

      {/* Bottom Content: Tagline, Supporting Text & Compact Dual Action Buttons */}
      <div className="relative z-10 max-w-2xl mx-auto w-full text-center space-y-2.5 sm:space-y-3.5 pointer-events-none">
        {/* Core Tagline & Supporting Copy */}
        <div className="space-y-1 sm:space-y-1.5">
          <h2 className="text-sm sm:text-xl lg:text-2xl font-bold text-white tracking-tight drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)] px-2">
            We build digital products that help businesses grow
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)] max-w-xs sm:max-w-xl mx-auto px-2">
            Websites, web apps, AI solutions and cloud systems — designed and built end-to-end.
          </p>
        </div>

        {/* Action Buttons: Clean side-by-side row with comfortable touch padding */}
        <div className="flex flex-row items-center justify-center gap-2.5 sm:gap-3.5 w-full max-w-xs sm:max-w-md mx-auto px-1 sm:px-0 pt-0.5 sm:pt-1 pointer-events-auto">
          <a
            href="#contact"
            className="flex-1 sm:flex-initial px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl bg-white text-slate-950 text-xs sm:text-sm font-bold hover:bg-slate-100 active:scale-[0.98] shadow-2xl shadow-black/50 transition-all flex items-center justify-center gap-1.5 sm:gap-2 group cursor-pointer whitespace-nowrap"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#work"
            className="flex-1 sm:flex-initial px-4 sm:px-7 py-2.5 sm:py-3.5 rounded-xl bg-slate-950/75 backdrop-blur-xl text-white border border-white/25 text-xs sm:text-sm font-semibold hover:bg-slate-950/90 hover:border-white/50 active:scale-[0.98] shadow-2xl transition-all text-center justify-center cursor-pointer whitespace-nowrap"
          >
            <span>Delivered Work</span>
          </a>
        </div>
      </div>
    </section>
  );
}
