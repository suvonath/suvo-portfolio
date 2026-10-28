"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { SocialLinks } from "./SocialLinks";

const CURRENT_YEAR = 2026;

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#070A12] border-t border-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          {/* Identity info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href="/"
              className="text-base font-bold text-white hover:text-blue-400 transition-colors"
            >
              Suvo Dev Nath
            </Link>
            <p className="text-xs text-slate-400 mt-0.5">
              Web Developer · Sylhet, Bangladesh
            </p>
            <p className="text-[11px] text-slate-400 mt-1 max-w-sm">
              Building modern, responsive, and user-friendly web applications with React, Next.js, and Node.js.
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <SocialLinks iconSize={16} showLabels />

            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top of the page"
              className="p-2.5 rounded-lg bg-[#111827] text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-blue-400"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <p>
            &copy; {CURRENT_YEAR} Suvo Dev Nath. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 font-mono text-[11px] text-slate-400">
            <span>Built with Next.js, React, TypeScript &amp; Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
