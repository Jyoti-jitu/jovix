"use client";

import { ArrowRight, TrendingUp, Zap, Sparkles } from "lucide-react";

export default function RevenueFlow() {
  const websiteSteps = [
    { label: "TRAFFIC", desc: "People visit your brand", color: "bg-blue-100 text-blue-800 border-blue-300" },
    { label: "BETTER WEBSITE", desc: "Fast, clear & modern", color: "bg-indigo-100 text-indigo-800 border-indigo-300" },
    { label: "MORE TRUST", desc: "Look like the market leader", color: "bg-purple-100 text-purple-800 border-purple-300" },
    { label: "MORE ENQUIRIES", desc: "Visitors take action", color: "bg-emerald-100 text-emerald-800 border-emerald-300" },
    { label: "MORE CUSTOMERS", desc: "Real revenue growth", color: "bg-emerald-600 text-white border-emerald-700 font-bold" }
  ];

  const softwareSteps = [
    { label: "PROBLEM", desc: "Manual spreadsheets & delays", color: "bg-rose-100 text-rose-800 border-rose-300" },
    { label: "CUSTOM SOFTWARE", desc: "Built for your exact workflow", color: "bg-amber-100 text-amber-800 border-amber-300" },
    { label: "AUTOMATION", desc: "Tasks run 24/7 automatically", color: "bg-purple-100 text-purple-800 border-purple-300" },
    { label: "LOWER WORKLOAD", desc: "Zero repetitive human errors", color: "bg-blue-100 text-blue-800 border-blue-300" },
    { label: "BUSINESS GROWTH", desc: "Scale without hiring army", color: "bg-blue-600 text-white border-blue-700 font-bold" }
  ];

  return (
    <section className="w-full py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider">
            Commercial Return on Investment
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            How We Help Businesses Make Money.
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            You are not just paying for code. You are investing in an engineered system that turns visitors into paying customers and reduces manual workload.
          </p>
        </div>

        {/* 2 Visual Flowcharts */}
        <div className="space-y-12">
          
          {/* Flow 1: Websites & Growth */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-50/60 via-indigo-50/40 to-purple-50/60 border border-blue-200/80 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-blue-200/60 pb-4">
              <span className="font-bold text-sm text-blue-950 uppercase tracking-wide flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                HOW A MODERN WEBSITE CREATES REVENUE
              </span>
              <span className="text-xs text-blue-600 font-medium">Customer Conversion Funnel</span>
            </div>

            {/* Steps Container */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center">
              {websiteSteps.map((step, idx) => (
                <div key={step.label} className="relative flex flex-col items-center">
                  <div className={`w-full p-4 rounded-xl border text-center space-y-1 shadow-xs transition-transform hover:scale-105 ${step.color}`}>
                    <div className="text-xs tracking-wider uppercase font-bold">{step.label}</div>
                    <div className="text-[11px] opacity-90">{step.desc}</div>
                  </div>
                  {idx < websiteSteps.length - 1 && (
                    <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Flow 2: Custom Software & Efficiency */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-rose-50/60 via-amber-50/40 to-emerald-50/60 border border-rose-200/80 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rose-200/60 pb-4">
              <span className="font-bold text-sm text-slate-950 uppercase tracking-wide flex items-center gap-2">
                <Zap className="w-4 h-4 text-rose-600" />
                HOW CUSTOM SOFTWARE SAVES MONEY & SCALES
              </span>
              <span className="text-xs text-rose-600 font-medium">Operational Efficiency Pipeline</span>
            </div>

            {/* Steps Container */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center">
              {softwareSteps.map((step, idx) => (
                <div key={step.label} className="relative flex flex-col items-center">
                  <div className={`w-full p-4 rounded-xl border text-center space-y-1 shadow-xs transition-transform hover:scale-105 ${step.color}`}>
                    <div className="text-xs tracking-wider uppercase font-bold">{step.label}</div>
                    <div className="text-[11px] opacity-90">{step.desc}</div>
                  </div>
                  {idx < softwareSteps.length - 1 && (
                    <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Takeaway quote box */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              The Real Takeaway
            </span>
            <p className="text-sm sm:text-base font-medium text-slate-200">
              “Every rupee you spend on digital products should come back with measurable business leverage.”
            </p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-white text-slate-900 text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors shrink-0"
          >
            Start a Conversation →
          </a>
        </div>

      </div>
    </section>
  );
}
