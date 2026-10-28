"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Cpu,
  Code2,
  Compass,
  Sparkles,
  Info,
} from "lucide-react";
import { Project } from "@/types/portfolio";
import { ProjectPreview } from "./ProjectPreview";
import { projectsData } from "@/data/portfolio-data";
import { GithubIcon } from "./icons/BrandIcons";

interface ProjectDetailsProps {
  project: Project;
}

export const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  // Find previous and next project for seamless navigation
  const currentIndex = projectsData.findIndex((p) => p.slug === project.slug);
  const prevProject =
    currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject =
    currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : projectsData[0];

  return (
    <div className="min-h-screen pt-28 pb-24 bg-[#0B0F19]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation & Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-slate-400 mb-8 font-medium"
        >
          <Link
            href="/#projects"
            className="flex items-center gap-1.5 hover:text-blue-400 transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Projects</span>
          </Link>
          <span className="text-slate-600">/</span>
          <span className="text-slate-200 truncate">{project.name}</span>
        </nav>

        {/* Section A: Project Header & Overview */}
        <header className="mb-10 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {project.type}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {project.name}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {project.overview}
          </p>

          {/* Quick Action Links: Live demo + GitHub */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-md shadow-blue-500/20 border border-blue-400/30 focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <span>Visit Live Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-xs">
                <Info className="w-3.5 h-3.5 text-slate-500" />
                <span>Live demo not currently available</span>
              </div>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#111827] hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm transition-all border border-slate-700 focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <GithubIcon size={16} />
                <span>View Source Code</span>
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-xs">
                <AlertCircle className="w-3.5 h-3.5 text-amber-500/80" />
                <span>Repository URL not publicly provided</span>
              </div>
            )}
          </div>
        </header>

        {/* Section A (cont): Visual Preview Frame */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-[#090D16]">
          <div className="aspect-[16/9] w-full">
            <ProjectPreview type={project.mockupType} title={project.name} isDetailed />
          </div>
        </div>

        {/* Two-Column Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          {/* Main Content (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* Section B: Project Description & Purpose */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Compass className="w-5 h-5 text-blue-400" />
                <span>Project Purpose & Background</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.purpose}
              </p>

              <div className="p-4 rounded-xl bg-[#111827] border border-slate-800/80 mt-4">
                <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1 font-mono">
                  Target Audience & Use Case
                </h3>
                <p className="text-xs sm:text-sm text-slate-300">
                  {project.targetUsers}
                </p>
              </div>
            </section>

            {/* Main Features */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Key Features & Functional Highlights</span>
              </h2>
              <ul className="space-y-2.5">
                {project.mainFeatures.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-lg bg-[#111827]/60 border border-slate-800/60 text-xs sm:text-sm text-slate-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Development Approach */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Code2 className="w-5 h-5 text-purple-400" />
                <span>Development Approach & Architecture</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {project.developmentApproach}
              </p>
            </section>

            {/* Section F: Technical Considerations & Challenges */}
            <section className="space-y-4 pt-4 border-t border-slate-800">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-amber-400" />
                  <span>Technical Considerations & Development Challenges</span>
                </h2>
                <p className="text-xs text-slate-400">
                  Architectural hurdles encountered during development and design rationale.
                </p>
              </div>

              <div className="space-y-3.5">
                {project.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-xl bg-[#111827] border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <h3 className="text-sm font-semibold text-slate-100 flex items-center gap-2 mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {challenge.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-3.5">
                      {challenge.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section G: Potential Improvements & Future Plans */}
            <section className="space-y-4 pt-4 border-t border-slate-800">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                  <span>Potential Improvements & Roadmap</span>
                </h2>
                <p className="text-xs text-slate-400">
                  Prospective enhancements and architectural upgrades envisioned for future iterations.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.futureImprovements.map((improvement, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#111827]/80 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-2.5"
                  >
                    <span className="font-mono text-blue-400 font-bold text-xs mt-0.5">
                      0{idx + 1}.
                    </span>
                    <span className="leading-relaxed">{improvement}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar (4 cols): Tech Badges & Meta */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Tech Stack Breakdown */}
            <div className="p-6 rounded-2xl bg-[#111827] border border-slate-800 space-y-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 font-mono">
                Technology Stack
              </h3>

              <div className="space-y-4">
                {project.techCategories.map((cat, idx) => (
                  <div key={idx} className="space-y-2">
                    <span className="text-xs text-slate-400 font-medium">{cat.name}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#161F30] text-blue-300 border border-blue-500/20"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Repository Info Note if unprovided */}
            {!project.githubUrl && (
              <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 space-y-2">
                <div className="flex items-center gap-2 font-semibold">
                  <AlertCircle className="w-4 h-4" />
                  <span>Repository Status</span>
                </div>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  The source code repository for this project is private or currently unassigned. In accordance with the CV source of truth, it has not been linked to third-party or unrelated repositories.
                </p>
              </div>
            )}

            {/* Project Navigation Switcher */}
            <div className="p-5 rounded-2xl bg-[#111827] border border-slate-800 space-y-3">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Navigate Projects
              </span>
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  href={`/projects/${prevProject.slug}`}
                  className="p-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-left border border-slate-800 transition-colors group"
                >
                  <span className="text-[10px] text-slate-400 block mb-0.5">Previous</span>
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-blue-400 line-clamp-1">
                    {prevProject.name}
                  </span>
                </Link>

                <Link
                  href={`/projects/${nextProject.slug}`}
                  className="p-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-right border border-slate-800 transition-colors group"
                >
                  <span className="text-[10px] text-slate-400 block mb-0.5">Next</span>
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-blue-400 line-clamp-1">
                    {nextProject.name}
                  </span>
                </Link>
              </div>
            </div>

            {/* Back to Home CTA */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/40 via-indigo-950/20 to-transparent border border-blue-900/40 text-center space-y-3">
              <p className="text-xs text-slate-300">
                Interested in collaborating or discussing this architecture?
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors shadow-md shadow-blue-600/20"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
