"use client";

import React, { useState } from "react";
import {
  Layout,
  Server,
  Database,
  Network,
  Wrench,
  Smartphone,
  Code2,
} from "lucide-react";
import { skillCategories } from "@/data/portfolio-data";

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "frontend":
        return <Layout className="w-5 h-5 text-blue-400" />;
      case "backend":
        return <Server className="w-5 h-5 text-purple-400" />;
      case "databases":
        return <Database className="w-5 h-5 text-emerald-400" />;
      case "apis-testing":
        return <Network className="w-5 h-5 text-sky-400" />;
      case "tools":
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case "additional":
        return <Smartphone className="w-5 h-5 text-pink-400" />;
      default:
        return <Code2 className="w-5 h-5 text-blue-400" />;
    }
  };

  const filteredCategories =
    selectedFilter === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedFilter);

  return (
    <section
      id="skills"
      aria-label="Technical Skills & Competencies"
      className="py-20 md:py-28 bg-[#090D16] relative border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
              <span>TECHNICAL TOOLKIT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Technologies & core capabilities.
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              A comprehensive view of languages, libraries, databases, and developer tooling I use to craft web applications.
            </p>
          </div>

          {/* Category Filter Pills for rapid scanning */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#111827] rounded-xl border border-slate-800 text-xs">
            <button
              onClick={() => setSelectedFilter("all")}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                selectedFilter === "all"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Skills
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                  selectedFilter === cat.id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {cat.title.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="p-6 rounded-2xl bg-[#111827] border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between group shadow-sm hover:shadow-md hover:shadow-black/20"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-105 transition-transform">
                    {getCategoryIcon(category.id)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    {category.skills.length} skills
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-1.5 group-hover:text-blue-300 transition-colors">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-5">
                  {category.description}
                </p>
              </div>

              {/* Skills Tags List */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161F30] text-slate-200 text-xs font-medium border border-slate-700/60 hover:border-blue-500/40 hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400/80" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section Note adhering to instructions */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-400 font-sans">
            Competencies are based on active practical usage, personal projects, and ongoing coursework at Leading University.
          </p>
        </div>
      </div>
    </section>
  );
};
