"use client";

import { ShieldCheck, TrendingUp, Clock, Rocket } from "lucide-react";

export default function BusinessValue() {
  const benefits = [
    {
      icon: <ShieldCheck className="w-7 h-7 text-blue-600" />,
      title: "LOOK PROFESSIONAL",
      description: "Build immediate credibility with a modern digital presence that sets you apart from competitors.",
      badge: "Credibility",
      accent: "bg-blue-50 border-blue-200"
    },
    {
      icon: <TrendingUp className="w-7 h-7 text-emerald-600" />,
      title: "GET MORE CUSTOMERS",
      description: "Create seamless user experiences and clear visual funnels designed around conversion.",
      badge: "Conversion",
      accent: "bg-emerald-50 border-emerald-200"
    },
    {
      icon: <Clock className="w-7 h-7 text-purple-600" />,
      title: "SAVE TIME",
      description: "Automate repetitive administrative and manual workflows so you can focus on running your business.",
      badge: "Automation",
      accent: "bg-purple-50 border-purple-200"
    },
    {
      icon: <Rocket className="w-7 h-7 text-amber-600" />,
      title: "SCALE WITHOUT LIMITS",
      description: "Build robust technology and cloud infrastructure that reliably grows as your customer base expands.",
      badge: "Reliability",
      accent: "bg-amber-50 border-amber-200"
    }
  ];

  return (
    <section id="value" className="w-full py-16 lg:py-20 bg-[#FAFAF8] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Business Value
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Not just a website.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              A business tool.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Every feature, layout, and line of code is designed to generate real commercial value for your company.
          </p>
        </div>

        {/* 4 Clean Value Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {benefits.map((b) => (
            <div
              key={b.title}
              className={`p-5 sm:p-6 rounded-2xl border bg-white shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all space-y-3 ${b.accent}`}
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-white shadow-xs">
                  {b.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                  {b.badge}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-900 tracking-tight">
                {b.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {b.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
