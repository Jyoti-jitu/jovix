"use client";

import { Code2, Server, Database, Cloud, Terminal, Cpu } from "lucide-react";

export default function TechStack() {
  const stackItems = [
    {
      category: "FRONTEND",
      techs: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
      icon: <Code2 className="w-5 h-5 text-blue-600" />,
      color: "bg-blue-50/80 border-blue-200"
    },
    {
      category: "BACKEND",
      techs: ["Node.js", "Express", "REST APIs"],
      icon: <Server className="w-5 h-5 text-purple-600" />,
      color: "bg-purple-50/80 border-purple-200"
    },
    {
      category: "DATABASE",
      techs: ["PostgreSQL", "MongoDB", "Redis"],
      icon: <Database className="w-5 h-5 text-emerald-600" />,
      color: "bg-emerald-50/80 border-emerald-200"
    },
    {
      category: "CLOUD",
      techs: ["AWS", "GCP", "Vercel"],
      icon: <Cloud className="w-5 h-5 text-amber-600" />,
      color: "bg-amber-50/80 border-amber-200"
    },
    {
      category: "DEVOPS",
      techs: ["Docker", "Kubernetes", "CI/CD"],
      icon: <Terminal className="w-5 h-5 text-rose-600" />,
      color: "bg-rose-50/80 border-rose-200"
    },
    {
      category: "AI & LLM",
      techs: ["LLMs", "RAG", "AI APIs"],
      icon: <Cpu className="w-5 h-5 text-indigo-600" />,
      color: "bg-indigo-50/80 border-indigo-200"
    }
  ];

  return (
    <section className="w-full py-12 lg:py-16 bg-[#FAFAF8] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200">
            Technology Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Built with Modern, Reliable Technology.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Battle-tested frameworks chosen for speed, scalability, and long-term security.
          </p>
        </div>

        {/* Compact Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 max-w-5xl mx-auto">
          {stackItems.map((item) => (
            <div
              key={item.category}
              className={`p-4 sm:p-5 rounded-xl border ${item.color} bg-white shadow-xs hover:shadow-md transition-all flex items-start gap-3.5`}
            >
              <div className="p-2 rounded-lg bg-white shadow-xs border border-slate-100 shrink-0">
                {item.icon}
              </div>

              <div className="space-y-0.5">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                  {item.category}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                  {item.techs.join(" • ")}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
