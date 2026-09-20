"use client";

import { useState } from "react";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Business Value", href: "#value" },
    { label: "Delivered Work", href: "#work" },
    { label: "Solutions", href: "#solutions" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fcf7e3]/90 backdrop-blur-md border-b border-stone-300/80 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo & Status */}
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-3 group">
            <div className="h-10 w-10 rounded-xl overflow-hidden shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform bg-white border border-slate-100 flex items-center justify-center p-0.5">
              <img src="/jovix-logo.jpg" alt="Jovix Logo" className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-slate-900 text-lg tracking-tight leading-tight group-hover:text-blue-600 transition-colors flex items-center gap-1">
                JOVIX
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide">
                jovix.co.uk
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-blue-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 active:scale-[0.98] shadow-md shadow-blue-600/20 transition-all"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-[#fcf7e3] px-6 py-6 flex flex-col gap-4 text-base font-medium text-slate-800 shadow-xl animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-blue-600 border-b border-slate-100 flex items-center justify-between"
            >
              <span>{link.label}</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 w-full py-3 rounded-xl bg-blue-600 text-white text-center font-semibold shadow-md shadow-blue-600/20 flex items-center justify-center gap-2"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
