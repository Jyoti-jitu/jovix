"use client";

import { useState } from "react";
import { ArrowRight, Send, Mail, Check } from "lucide-react";

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Website",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const directEmail = "hello@jovix.co.uk";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full py-16 lg:py-24 bg-[#FAFAF8] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context & Direct Value */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                Let&apos;s Connect
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Have a project? <br />
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Let&apos;s build it.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Tell us about your goals. We&apos;ll help you architect and engineer a high-impact digital product tailored to your business.
              </p>
            </div>

            {/* 3 Trust Points */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Fast 24-Hour Response</h4>
                  <p className="text-xs text-slate-600 mt-0.5">We review your requirements and respond with initial insights within one business day.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs">
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Senior Collaboration</h4>
                  <p className="text-xs text-slate-600 mt-0.5">Work directly with principal builders — zero agency middlemen or account managers.</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
                Prefer direct email?
              </span>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${directEmail}`}
                  className="flex items-center gap-2.5 group"
                >
                  <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors block">{directEmail}</span>
                    <span className="text-[11px] text-slate-500">Click to compose email</span>
                  </div>
                </a>

                <a
                  href={`mailto:${directEmail}`}
                  className="px-3.5 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-600 hover:text-white hover:border-blue-600 text-slate-700 text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs group cursor-pointer"
                >
                  <span>Send Email</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Form Card */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/40">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in">
                  <div className="h-16 w-16 bg-emerald-100 text-emerald-700 rounded-full mx-auto flex items-center justify-center font-bold text-2xl shadow-inner">
                    ✓
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    Inquiry Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-slate-900">{formData.name}</span>. We will review your project requirements and reach out at <span className="font-semibold text-slate-900">{formData.email}</span> within 24 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Your Name <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Morgan"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Work Email <span className="text-blue-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type Selection */}
                  <div className="space-y-2.5">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                      What are you looking to build?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {[
                        { id: "Website", label: "Website" },
                        { id: "Web App", label: "Web App" },
                        { id: "AI Tool", label: "AI Solution" },
                        { id: "E-Commerce", label: "E-Commerce" }
                      ].map((item) => (
                        <button
                          type="button"
                          key={item.id}
                          onClick={() => setFormData({ ...formData, projectType: item.id })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                            formData.projectType === item.id
                              ? "bg-slate-900 text-white border-slate-900 shadow-md shadow-slate-900/20"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-white"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                        Project Overview <span className="text-blue-600">*</span>
                      </label>
                      <span className="text-[11px] text-slate-400 font-medium">Timeline, goals, or scope</span>
                    </div>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe what you want to build, any specific features, target launch dates, or problems you are trying to solve..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all resize-y"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-blue-600 text-white text-sm sm:text-base font-bold hover:bg-blue-700 active:scale-[0.99] shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>Submit Project Inquiry</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Privacy note */}
                  <p className="text-center text-xs text-slate-400 pt-1">
                    🔒 100% confidential. We sign NDAs and never share your email.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
