"use client";

import { useState } from "react";
import { ArrowRight, Send, Mail, Check, Copy } from "lucide-react";

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Website",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const directEmail = "hello@jovix.co.uk";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(directEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="w-full py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider">
            Let&apos;s Connect
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Have a business idea? <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Let&apos;s build it.
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 max-w-xl mx-auto">
            Tell us what you&apos;re building. We&apos;ll help turn it into a working digital product.
          </p>
        </div>

        {/* Clean Inquiry Card */}
        <div className="max-w-2xl mx-auto p-8 sm:p-12 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
          
          {submitted ? (
            <div className="text-center py-8 space-y-4 animate-in fade-in">
              <div className="h-14 w-14 bg-emerald-100 text-emerald-700 rounded-full mx-auto flex items-center justify-center font-bold text-xl">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Message Received!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. We&apos;ll review your project details and get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs text-blue-600 font-bold hover:underline uppercase pt-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                  Project Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["Website", "Web App", "AI Tool", "E-Commerce"].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`py-2.5 px-3 rounded-lg text-xs font-semibold border transition-all ${
                        formData.projectType === type
                          ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                  Brief Project Details
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us a bit about what you want to build, target timeline, or problem to solve..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-blue-600 text-white text-base font-bold hover:bg-blue-700 active:scale-[0.99] shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </button>

            </form>
          )}

          {/* Direct Email fallback */}
          <div className="mt-8 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <span>Or reach out directly:</span>
            
            <div className="flex items-center gap-3">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold hover:border-blue-400 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied email!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>{directEmail}</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
