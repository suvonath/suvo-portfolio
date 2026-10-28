"use client";

import React from "react";
import { Download } from "lucide-react";

interface ResumeButtonProps {
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  showIcon?: boolean;
}

export const ResumeButton: React.FC<ResumeButtonProps> = ({
  className = "",
  variant = "primary",
  size = "md",
  showIcon = true,
}) => {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2 text-sm gap-2",
    lg: "px-6 py-3 text-base gap-2.5",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium shadow-lg shadow-blue-500/10 border border-blue-400/20",
    secondary:
      "bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium border border-slate-700",
    outline:
      "bg-transparent hover:bg-slate-800/60 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-600 font-medium",
  };

  return (
    <a
      href="/resume/Suvo-Dev-Nath-Resume.pdf"
      download="Suvo-Dev-Nath-Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download Suvo Dev Nath's Resume (PDF)"
      className={`inline-flex items-center justify-center rounded-lg transition-all focus-visible:ring-2 focus-visible:ring-blue-400 group cursor-pointer ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {showIcon && (
        <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:scale-105" />
      )}
      <span>Download Resume</span>
    </a>
  );
};
