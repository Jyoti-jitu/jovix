"use client";

import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { projects } from "@/data/projects";

export default function SelectedWork() {
  return (
    <section id="work" className="w-full py-20 lg:py-28 bg-[#FAFAF8] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider border border-emerald-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Proven Track Record
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Real Products <br />
              Successfully Delivered.
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              We engineer complete digital platforms designed to solve complex business problems, ship on schedule, and generate tangible commercial results.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors shrink-0"
          >
            <span>Have a project in mind? Let&apos;s talk</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* 2 Featured Delivered Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div
              key={p.id}
              className={`rounded-3xl border ${p.border} ${p.bgCard} p-8 sm:p-10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group bg-white`}
            >
              <div className="space-y-6">
                
                {/* Visual Header Banner */}
                <div className={`w-full p-6 sm:p-8 rounded-2xl bg-gradient-to-r ${p.gradient} text-white shadow-md flex flex-col justify-between min-h-[160px]`}>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/25 backdrop-blur-xs border border-white/20">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                      <span>{p.badge}</span>
                    </span>
                    <span className="text-xs text-white/90 font-medium bg-white/15 px-2.5 py-0.5 rounded-md">
                      {p.industry}
                    </span>
                  </div>

                  <div className="pt-4">
                    <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                      {p.title}
                    </h3>
                    <p className="text-sm text-white/90 font-medium mt-1">
                      {p.tagline}
                    </p>
                  </div>
                </div>

                {/* Delivery Outcome Metric Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-emerald-800">
                  <Zap className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Delivery Milestone: {p.deliveryMetrics}</span>
                </div>

                {/* Description */}
                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  {p.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Key Features Delivered:
                  </span>
                  {p.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className={`w-4 h-4 ${p.accentText} shrink-0 mt-0.5`} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    Tech Stack:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {p.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                  Production Ready & Active
                </span>

                <a
                  href="#contact"
                  className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${p.accentText} group-hover:gap-2.5 transition-all`}
                >
                  <span>Build Similar System</span>
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
