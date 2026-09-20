"use client";

import { ArrowUp, Mail, ArrowRight, ShieldCheck, Globe, Send, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Studio Mission Banner */}
        <div className="pb-12 mb-12 border-b border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Full-Stack Digital Product Studio</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Ready to turn your business idea into a working product?
            </h3>
            <p className="text-sm text-slate-400">
              Websites, web apps, AI tools, and cloud infrastructure — designed and engineered end-to-end.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl bg-blue-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-blue-500 active:scale-[0.98] shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="mailto:hello@jovix.co.uk"
              className="px-5 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-bold uppercase tracking-wider hover:bg-slate-800 hover:text-white transition-all flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Studio</span>
            </a>
          </div>
        </div>

        {/* Main Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl overflow-hidden shadow-md bg-white border border-slate-800 flex items-center justify-center p-0.5">
                <img src="/jovix-logo.jpg" alt="Jovix Logo" className="w-full h-full object-cover rounded-lg" />
              </div>
              <div>
                <span className="font-black text-white text-lg tracking-tight flex items-center gap-1">
                  JOVIX
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-500"></span>
                </span>
                <span className="block text-xs text-slate-400 font-medium">jovix.co.uk • Digital Product Studio</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              We partner directly with founders and businesses to engineer high-performance websites, custom web applications, AI automation, and scalable cloud systems.
            </p>

            {/* Availability pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs text-slate-300 font-medium w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 font-semibold">Available for new projects</span>
            </div>

            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <div>📍 London, United Kingdom & Worldwide Remote</div>
              <div>⚡ Direct senior collaboration — zero junior pass-off</div>
            </div>
          </div>

          {/* Column 2: Direct Company Emails (Jitu, Jay, Hello) (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Direct Team & Contacts
            </span>

            <ul className="space-y-3 text-xs">
              {/* Jitu's Email */}
              <li className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-[11px] uppercase tracking-wider">Jitu</span>
                  <span className="text-[10px] text-blue-400 font-medium">Engineering & Tech</span>
                </div>
                <a
                  href="mailto:jitu@jovix.co.uk"
                  className="text-slate-300 hover:text-blue-400 font-mono text-xs transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3 h-3 text-slate-500" />
                  <span>jitu@jovix.co.uk</span>
                </a>
              </li>

              {/* Jay's Email */}
              <li className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-[11px] uppercase tracking-wider">Jay</span>
                  <span className="text-[10px] text-emerald-400 font-medium">Product & Strategy</span>
                </div>
                <a
                  href="mailto:jay@jovix.co.uk"
                  className="text-slate-300 hover:text-emerald-400 font-mono text-xs transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3 h-3 text-slate-500" />
                  <span>jay@jovix.co.uk</span>
                </a>
              </li>

              {/* General Inquiry Email */}
              <li className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-[11px] uppercase tracking-wider">Studio Office</span>
                  <span className="text-[10px] text-purple-400 font-medium">General RFPs</span>
                </div>
                <a
                  href="mailto:hello@jovix.co.uk"
                  className="text-slate-300 hover:text-purple-400 font-mono text-xs transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3 h-3 text-slate-500" />
                  <span>hello@jovix.co.uk</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Capabilities
            </span>
            <ul className="space-y-2.5 text-slate-400 font-medium">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Custom Websites</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Web Applications</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">AI & LLM Solutions</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Cloud & DevOps</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Modern E-Commerce</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">API Architecture</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Solutions & Work (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <span className="text-xs font-bold uppercase tracking-wider text-white block">
              Solutions & Delivered Work
            </span>
            <ul className="space-y-2.5 text-slate-400 font-medium">
              <li>
                <a href="#work" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Forecast Earthing</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Delivered</span>
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>The SolarPlate</span>
                  <span className="text-[10px] text-emerald-400 font-mono">Delivered</span>
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">Booking & Rental Systems</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">Business Dashboards</a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">Workflow Automation</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">4-Step Development Process</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Jovix Studio</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Jovix (jovix.co.uk). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-slate-300 transition-colors">
              Privacy & Confidentiality
            </a>
            <span className="text-slate-700">•</span>
            <span className="text-slate-400">Response time &lt; 24h</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:bg-slate-800 hover:text-white text-slate-300 text-xs transition-all shadow-xs cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
