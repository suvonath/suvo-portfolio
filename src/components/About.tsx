"use client";

import React from "react";
import {
  Code,
  Sparkles,
  Layers,
  Compass,
  Cpu,
  Terminal,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

export const About: React.FC = () => {
  const enjoymentIcons = [
    <Layers key="1" className="w-5 h-5 text-blue-400" />,
    <Code key="2" className="w-5 h-5 text-indigo-400" />,
    <Cpu key="3" className="w-5 h-5 text-purple-400" />,
    <Compass key="4" className="w-5 h-5 text-emerald-400" />,
  ];

  return (
    <section
      id="about"
      aria-label="About Me & Background"
      className="py-20 md:py-28 bg-[#0B0F19] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Engineering with curiosity, clarity, and purpose.
          </h2>
        </div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story (7 cols) */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base">
            {personalInfo.aboutJourney.map((paragraph, index) => (
              <p key={index} className="text-slate-300/90 font-normal">
                {paragraph}
              </p>
            ))}

            {/* Quote / Highlight Card */}
            <div className="mt-8 p-5 rounded-xl bg-[#111827] border border-slate-800 border-l-4 border-l-blue-500">
              <p className="text-sm italic text-slate-300">
                &ldquo;I value readable code, continuous learning, and practical solutions over unnecessary complexity.&rdquo;
              </p>
              <span className="block mt-2 text-xs font-mono text-blue-400">
                — Suvo Dev Nath, Web Developer
              </span>
            </div>
          </div>

          {/* Right Column: Professional Focus Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2 font-mono flex items-center gap-2">
              <Terminal className="w-4 h-4 text-blue-400" />
              <span>Professional Focus</span>
            </h3>

            <div className="space-y-3">
              {personalInfo.professionalFocus.map((focus, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[#111827]/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
                >
                  <h4 className="text-sm font-semibold text-slate-100 flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    {focus.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed pl-3.5">
                    {focus.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subsection: What I Enjoy */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-slate-800/80">
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span>What I Enjoy</span>
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Core activities and pursuits that fuel my everyday passion for programming.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {personalInfo.whatIEnjoy.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#111827] border border-slate-800/80 hover:border-slate-700/80 transition-all hover:-translate-y-0.5 group"
              >
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 w-fit mb-4 group-hover:scale-105 transition-transform">
                  {enjoymentIcons[idx]}
                </div>
                <h4 className="text-sm font-semibold text-slate-100 mb-2 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
