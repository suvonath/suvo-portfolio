"use client";

import React from "react";
import { FolderGit2 } from "lucide-react";
import { projectsData } from "@/data/portfolio-data";
import { ProjectCard } from "./ProjectCard";

export const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      aria-label="Featured Software Projects"
      className="py-20 md:py-28 bg-[#0B0F19] relative border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PRACTICAL WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured projects & case studies.
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Explore web applications demonstrating responsive layout design, React component architecture, and full-stack fundamentals.
            </p>
          </div>

          <div className="text-xs text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>4 Complete Case Studies Available</span>
          </div>
        </div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
