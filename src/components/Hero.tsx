"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Mail, MapPin, Code2 } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";
import { ResumeButton } from "./ResumeButton";
import { SocialLinks } from "./SocialLinks";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Introduction & Overview"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-gradient"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Ambient gradient blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono tracking-wider font-semibold text-blue-400">
                WEB DEVELOPER · SYLHET, BANGLADESH
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Building thoughtful{" "}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
                digital experiences
              </span>{" "}
              for the web.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {personalInfo.heroSupportingText}
            </p>

            {/* Quick Skills Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-slate-400 font-medium">Core Stack:</span>
              {["React", "Next.js", "Tailwind CSS", "JavaScript", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-slate-900/90 text-slate-300 border border-slate-800 font-mono text-[11px]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Three Required CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              {/* 1. Explore My Work */}
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-blue-600/20 border border-blue-400/30 focus-visible:ring-2 focus-visible:ring-blue-400 group"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </Link>

              {/* 2. Download Resume */}
              <ResumeButton size="md" variant="secondary" />

              {/* 3. Get In Touch */}
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm transition-all border border-slate-700/80 hover:border-slate-600 focus-visible:ring-2 focus-visible:ring-blue-400"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Get In Touch</span>
              </Link>
            </div>

            {/* Social Links & Location metadata */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" /> Sylhet, Bangladesh
                </span>
                <span className="text-slate-600">·</span>
                <span className="flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-purple-400" /> Leading University CSE
                </span>
              </div>

              <SocialLinks iconSize={16} showLabels />
            </div>
          </div>

          {/* Right Column: Professional Portrait Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Backing decorative frames */}
              <div className="absolute -inset-1.5 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent rounded-2xl blur-md" />
              
              <div className="relative rounded-2xl bg-[#111827] border border-slate-800 overflow-hidden shadow-2xl p-2 sm:p-3">
                {/* Visual Portrait Container */}
                <div className="relative w-full aspect-[4/4.6] rounded-xl overflow-hidden bg-[#0F172A] flex flex-col items-center justify-center">
                  <Image
                    src="/images/portrait-placeholder.svg"
                    alt="Professional portrait representation of Suvo Dev Nath, Web Developer"
                    width={480}
                    height={540}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                    priority
                  />
                </div>

                {/* Subtitle / Asset instructions box */}
                <div className="mt-3 p-2.5 rounded-lg bg-[#0B0F19] border border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-slate-300 font-medium">Suvo Dev Nath</span>
                  </div>
                  <span className="text-blue-400 font-mono text-[10px]">Active Status</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
