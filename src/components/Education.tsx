"use client";

import React from "react";
import { GraduationCap, Calendar, MapPin, Award, Clock } from "lucide-react";
import { educationData } from "@/data/portfolio-data";

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      aria-label="Academic Background & Education"
      className="py-20 md:py-28 bg-[#0B0F19] relative border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Formal education & coursework.
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            My academic journey in computer science and foundational sciences in Sylhet, Bangladesh.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-slate-800 ml-4 md:ml-6 pl-6 md:pl-10 space-y-10">
          {educationData.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline marker node */}
              <div
                className={`absolute -left-[31px] md:-left-[47px] top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                  item.isCurrent
                    ? "bg-blue-600 border-blue-400 shadow-md shadow-blue-500/40"
                    : "bg-[#111827] border-slate-700 group-hover:border-slate-500"
                }`}
              >
                {item.isCurrent && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                )}
              </div>

              {/* Card Container */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#111827] border border-slate-800/80 hover:border-slate-700 transition-all shadow-sm group-hover:shadow-lg group-hover:shadow-black/20">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    {/* Status Pill */}
                    <div className="flex items-center gap-2 mb-2">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                          item.isCurrent
                            ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                            : "bg-slate-800 text-slate-300 border border-slate-700"
                        }`}
                      >
                        {item.isCurrent ? (
                          <>
                            <Clock className="w-3 h-3 animate-spin" /> In Progress (Ongoing Degree)
                          </>
                        ) : (
                          <>
                            <Award className="w-3 h-3 text-slate-400" /> Completed
                          </>
                        )}
                      </span>

                      {item.group && (
                        <span className="px-2 py-0.5 rounded bg-slate-800/60 text-slate-400 text-[11px] border border-slate-800">
                          Group: {item.group}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {item.degree}
                    </h3>
                  </div>

                  {/* Period badge */}
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#161F30] border border-slate-700/60 text-slate-300 text-xs font-mono">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>{item.period}</span>
                  </span>
                </div>

                {/* Institution & Location */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 mb-4 font-medium">
                  <span className="flex items-center gap-1.5 text-slate-200">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                    {item.institution}
                  </span>
                  <span className="text-slate-600">·</span>
                  <span className="flex items-center gap-1.5 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    {item.location}
                  </span>
                  {item.gpa && (
                    <>
                      <span className="text-slate-600">·</span>
                      <span className="text-emerald-400 font-semibold font-mono">
                        GPA: {item.gpa}
                      </span>
                    </>
                  )}
                </div>

                {/* Academic Description */}
                {item.details && (
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-3 border-t border-slate-800/60">
                    {item.details}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
