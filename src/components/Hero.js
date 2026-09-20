"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("Autoplay was prevented by browser policy:", err);
        });
      }
    }
  }, []);

  return (
    <section className="relative isolate w-full h-[calc(100vh-5rem)] max-h-[calc(100vh-5rem)] flex flex-col justify-between overflow-hidden px-6 py-6 sm:py-8 lg:py-10 bg-slate-950">
      {/* Full-Screen Pure Video - Uncropped 16:9 Fit */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none flex items-center justify-center bg-slate-950">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/video-thumb.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/Procedural-Gradient-Background.mp4" type="video/mp4" />
        </video>
        {/* Subtle bottom vignette to ensure buttons and text are crisp */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Top: Availability Badge on top of the video */}
      <div className="relative z-10 w-full flex justify-center pt-2 sm:pt-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-lg">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Available for new projects</span>
        </div>
      </div>

      {/* Bottom Content: Supporting Text & Dual Action Buttons */}
      <div className="relative z-10 max-w-3xl mx-auto w-full text-center space-y-4 pb-2 sm:pb-4">
        
        {/* Supporting text */}
        <p className="text-base sm:text-lg lg:text-xl text-white font-medium leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] max-w-2xl mx-auto">
          Websites, web apps, AI solutions and cloud systems — designed and built end-to-end.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-1">
          <a
            href="#contact"
            className="px-7 py-3.5 rounded-xl bg-white text-slate-950 text-sm font-bold hover:bg-slate-100 active:scale-[0.98] shadow-2xl shadow-black/40 transition-all flex items-center gap-2 group"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <a
            href="#work"
            className="px-7 py-3.5 rounded-xl bg-slate-950/65 backdrop-blur-xl text-white border border-white/30 text-sm font-bold hover:bg-slate-950/85 hover:border-white/50 active:scale-[0.98] shadow-2xl transition-all"
          >
            <span>View Delivered Work</span>
          </a>
        </div>

      </div>
    </section>
  );
}
