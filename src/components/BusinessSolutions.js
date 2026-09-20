"use client";

import { Globe, Calendar, ShoppingBag, Terminal, Sparkles, LayoutDashboard, ArrowRight } from "lucide-react";

export default function BusinessSolutions() {
  const solutions = [
    {
      icon: <Globe className="w-6 h-6 text-blue-600" />,
      title: "BUSINESS WEBSITES",
      description: "For companies that need a stronger, more credible online presence that converts visitors into leads.",
      tag: "Brand Authority",
      borderColor: "border-blue-200",
      accentBg: "bg-blue-50/60"
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-600" />,
      title: "BOOKING SYSTEMS",
      description: "For businesses that manage appointments, vehicle/space rentals, or reservations without double-booking.",
      tag: "Live Scheduling",
      borderColor: "border-purple-200",
      accentBg: "bg-purple-50/60"
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-rose-600" />,
      title: "E-COMMERCE",
      description: "For businesses selling physical or digital products online with fast checkout and payment processing.",
      tag: "Online Sales",
      borderColor: "border-rose-200",
      accentBg: "bg-rose-50/60"
    },
    {
      icon: <Terminal className="w-6 h-6 text-amber-600" />,
      title: "CUSTOM WEB APPS",
      description: "For businesses replacing messy Excel sheets and manual workflows with dedicated software.",
      tag: "Efficiency",
      borderColor: "border-amber-200",
      accentBg: "bg-amber-50/60"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-emerald-600" />,
      title: "AI AUTOMATION",
      description: "For businesses looking to automate customer inquiries, document searching, and repetitive data tasks.",
      tag: "Smart Ops",
      borderColor: "border-emerald-200",
      accentBg: "bg-emerald-50/60"
    },
    {
      icon: <LayoutDashboard className="w-6 h-6 text-indigo-600" />,
      title: "BUSINESS DASHBOARDS",
      description: "For businesses that need their revenue, inventory, and operations data visible in one single screen.",
      tag: "Full Visibility",
      borderColor: "border-indigo-200",
      accentBg: "bg-indigo-50/60"
    }
  ];

  return (
    <section id="solutions" className="w-full py-16 lg:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold uppercase tracking-wider">
            Real Business Solutions
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            These are Real Business Problems We Solve.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Tell us what your company struggles with, and we&apos;ll build the exact digital system to fix it.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {solutions.map((sol) => (
            <div
              key={sol.title}
              className={`p-5 sm:p-6 rounded-2xl border ${sol.borderColor} ${sol.accentBg} hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col justify-between bg-white`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                    {sol.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider bg-white px-2.5 py-0.5 rounded-full border border-slate-200">
                    {sol.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900">
                  {sol.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {sol.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 hover:text-blue-600 transition-colors uppercase tracking-wider"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
