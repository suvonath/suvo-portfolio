"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Project } from "@/types/portfolio";
import { ProjectPreview } from "./ProjectPreview";
import { GithubIcon } from "./icons/BrandIcons";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="rounded-2xl bg-[#111827] border border-slate-800/80 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-md hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1">
      <div>
        {/* Project Visual Preview Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-slate-800/80 bg-[#0A0E18]">
          <ProjectPreview type={project.mockupType} title={project.name} />

          {/* Type Badge Floating Overlay */}
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-medium bg-[#0B0F19]/90 text-blue-300 border border-slate-700/80 backdrop-blur-md shadow-sm">
              {project.type}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
            {project.name}
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed mb-5">
            {project.shortDescription}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#161F30] text-slate-300 border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-800/60 flex items-center justify-between gap-2">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-blue-600/10 hover:bg-blue-600 text-blue-400 hover:text-white text-xs font-semibold border border-blue-500/20 hover:border-blue-500 transition-all focus-visible:ring-2 focus-visible:ring-blue-400 group/btn"
          aria-label={`View details for ${project.name}`}
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </Link>

        {/* Quick Links on Card */}
        <div className="flex items-center gap-1.5">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View source code for ${project.name} on GitHub`}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-blue-400"
              title="GitHub Repository"
            >
              <GithubIcon size={16} />
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit live deployment for ${project.name}`}
              className="p-2 rounded-lg bg-blue-950/40 hover:bg-blue-900/60 text-blue-300 hover:text-white border border-blue-900/60 transition-colors focus-visible:ring-2 focus-visible:ring-blue-400"
              title="Visit Live Deployment"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};
