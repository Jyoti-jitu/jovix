"use client";

import { ArrowRight, Globe, Laptop, Cpu, Cloud, ShoppingCart, Check } from "lucide-react";
import { services } from "@/data/services";

export default function Services() {
  const iconMap = {
    websites: <Globe className="w-6 h-6 text-blue-600" />,
    "web-apps": <Laptop className="w-6 h-6 text-purple-600" />,
    "ai-solutions": <Cpu className="w-6 h-6 text-emerald-600" />,
    "cloud-devops": <Cloud className="w-6 h-6 text-amber-600" />,
    ecommerce: <ShoppingCart className="w-6 h-6 text-rose-600" />
  };

  return (
    <section id="services" className="w-full py-12 lg:py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            What We Provide
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Complete Digital Solutions For Growing Businesses.
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            No technical headaches. You get a complete, modern system built to help your business operate better and win more clients.
          </p>
        </div>

        {/* 5 Visual Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.id}
              className={`p-6 rounded-2xl border ${service.border} ${service.bgLight} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group bg-white`}
            >
              <div className="space-y-4">
                {/* Icon & Badge */}
                <div className="flex items-center justify-between">
                  <div className="h-11 w-11 rounded-xl bg-white border border-slate-200/80 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[service.id]}
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-white border border-slate-200/60 ${service.textAccent}`}>
                    {service.badge}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1.5">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {service.tagline}
                  </p>
                </div>

                {/* Features list */}
                <ul className="space-y-1.5 pt-2 border-t border-slate-200/60">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                      <Check className={`w-3.5 h-3.5 ${service.textAccent} shrink-0`} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 mt-4 border-t border-slate-200/60">
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold ${service.textAccent} group-hover:gap-3 transition-all`}
                >
                  <span>Explore {service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}

          {/* 6th Card: Custom Consultation */}
          <div className="p-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50/70 flex flex-col justify-between text-left">
            <div className="space-y-3">
              <div className="h-11 w-11 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-slate-700 font-bold">
                ?
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                NEED SOMETHING SPECIFIC?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Have a unique operational workflow or custom product in mind? Let&apos;s talk through your business requirements.
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-200">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-800 hover:text-blue-600 transition-colors"
              >
                <span>Book a Free Call →</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
