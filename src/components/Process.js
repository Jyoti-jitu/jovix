"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "UNDERSTAND",
      description: "Understand your business goals, users, and the core problem we are solving.",
      color: "text-blue-600",
      border: "border-blue-200",
      bg: "bg-blue-50/50"
    },
    {
      number: "02",
      title: "DESIGN",
      description: "Create the visual experience, interface layouts, and technical solution architecture.",
      color: "text-purple-600",
      border: "border-purple-200",
      bg: "bg-purple-50/50"
    },
    {
      number: "03",
      title: "BUILD",
      description: "Develop the frontend, backend APIs, database, and integrations with modern code.",
      color: "text-emerald-600",
      border: "border-emerald-200",
      bg: "bg-emerald-50/50"
    },
    {
      number: "04",
      title: "LAUNCH",
      description: "Deploy to production, optimize speed and SEO, and hand over a fully working system.",
      color: "text-amber-600",
      border: "border-amber-200",
      bg: "bg-amber-50/50"
    }
  ];

  return (
    <section id="process" className="w-full py-12 lg:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold uppercase tracking-wider">
            Simple 4-Step Process
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Build Your Product.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            A clear, predictable roadmap from day one to launch day. No surprises.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className={`p-5 sm:p-6 rounded-2xl border ${step.border} ${step.bg} bg-white shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all space-y-3`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-2xl sm:text-3xl font-extrabold font-mono ${step.color}`}>
                  {step.number}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                  Phase
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                {step.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
