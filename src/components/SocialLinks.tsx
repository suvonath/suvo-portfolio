"use client";

import React from "react";
import { personalInfo } from "@/data/portfolio-data";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  showLabels?: boolean;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
  className = "",
  iconSize = 18,
  showLabels = false,
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <a
        href={personalInfo.gitHub}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Suvo Dev Nath's GitHub Profile"
        className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-all focus-visible:ring-2 focus-visible:ring-blue-400 group"
      >
        <GithubIcon size={iconSize} className="transition-transform group-hover:scale-110" />
        {showLabels && <span className="text-xs font-medium">GitHub</span>}
      </a>

      <a
        href={personalInfo.linkedIn}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Suvo Dev Nath's LinkedIn Profile"
        className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-900/80 hover:bg-blue-950/40 text-slate-300 hover:text-blue-300 border border-slate-800 hover:border-blue-900/50 transition-all focus-visible:ring-2 focus-visible:ring-blue-400 group"
      >
        <LinkedinIcon size={iconSize} className="transition-transform group-hover:scale-110" />
        {showLabels && <span className="text-xs font-medium">LinkedIn</span>}
      </a>
    </div>
  );
};
