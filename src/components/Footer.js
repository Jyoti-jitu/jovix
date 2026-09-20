"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-slate-950 text-white py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-400">
        
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl overflow-hidden shadow-md bg-white border border-slate-800 flex items-center justify-center p-0.5">
            <img src="/jovix-logo.jpg" alt="Jovix Logo" className="w-full h-full object-cover rounded-lg" />
          </div>
          <div>
            <span className="font-black text-white text-base tracking-tight flex items-center gap-1">
              JOVIX
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
            </span>
            <span className="block text-xs text-slate-400">jovix.co.uk • Digital Product Studio</span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#value" className="hover:text-white transition-colors">Business Value</a>
          <a href="#work" className="hover:text-white transition-colors">Delivered Work</a>
          <a href="#solutions" className="hover:text-white transition-colors">Solutions</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 text-xs transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 mt-6 pt-4 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          © {new Date().getFullYear()} Jovix (jovix.co.uk). All rights reserved.
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
          <span>Available for client projects worldwide</span>
        </div>
      </div>
    </footer>
  );
}
