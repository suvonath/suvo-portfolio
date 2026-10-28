"use client";

import React from "react";
import { BookOpen, CheckCircle2, Users, ShoppingCart, Wrench, Shield, GraduationCap, Clock, ArrowRight, Star } from "lucide-react";

interface ProjectPreviewProps {
  type: "lms" | "university" | "service" | "ecommerce";
  title?: string;
  isDetailed?: boolean;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ type }) => {
  if (type === "lms") {
    return (
      <div className="w-full h-full min-h-[220px] bg-[#0E1526] rounded-xl p-4 sm:p-5 flex flex-col justify-between border border-slate-800/80 font-sans select-none overflow-hidden relative group">
        {/* Ambient Top Glow */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Header bar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-slate-200 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-blue-400" /> HyperCampus LMS
            </span>
          </div>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-blue-500/10 text-blue-300 border border-blue-500/20">
            Student Portal
          </span>
        </div>

        {/* Main interactive dashboard simulation */}
        <div className="my-3 space-y-2.5">
          <div className="bg-[#141E33] p-3 rounded-lg border border-slate-700/40">
            <div className="flex justify-between items-center text-xs mb-1.5">
              <span className="text-slate-300 font-medium">CS304: Modern Web Architectures</span>
              <span className="text-blue-400 font-mono text-[11px]">78% Done</span>
            </div>
            {/* Progress bar */}
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-[78%]" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="bg-[#111A2E] p-2.5 rounded-md border border-slate-800 flex items-center gap-2">
              <div className="p-1 rounded bg-blue-500/10 text-blue-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-slate-400 text-[10px]">Active Modules</p>
                <p className="font-semibold text-slate-200">12 Lessons</p>
              </div>
            </div>
            <div className="bg-[#111A2E] p-2.5 rounded-md border border-slate-800 flex items-center gap-2">
              <div className="p-1 rounded bg-purple-500/10 text-purple-400">
                <Clock className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="text-slate-400 text-[10px]">Time Spent</p>
                <p className="font-semibold text-slate-200">18.4 Hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer simulation */}
        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1 text-slate-400">
            Next: Component Lifecycle Hooks
          </span>
          <span className="text-blue-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform text-[11px]">
            Resume <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    );
  }

  if (type === "university") {
    return (
      <div className="w-full h-full min-h-[220px] bg-[#0E1526] rounded-xl p-4 sm:p-5 flex flex-col justify-between border border-slate-800/80 font-sans select-none overflow-hidden relative group">
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-purple-400" />
            <span className="font-semibold text-slate-200">Academic Project Portal</span>
          </div>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-purple-500/10 text-purple-300 border border-purple-500/20">
            Leading University
          </span>
        </div>

        <div className="my-3 space-y-2">
          <div className="bg-[#151D30] p-3 rounded-lg border border-slate-700/40">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider">CSE-499 Capstone</span>
                <p className="text-xs font-semibold text-slate-200 mt-0.5">Automated Attendance & Grading</p>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                Approved
              </span>
            </div>
            <div className="mt-2.5 flex items-center justify-between text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3 text-slate-400" /> Team: 3 Members
              </span>
              <span>Supervisor: Assigned</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-1.5 text-[10px]">
            <div className="bg-[#111A2E] p-2 rounded text-center border border-slate-800">
              <span className="text-slate-400 block text-[9px]">Proposal</span>
              <span className="text-emerald-400 font-semibold">Accepted</span>
            </div>
            <div className="bg-[#111A2E] p-2 rounded text-center border border-slate-800">
              <span className="text-slate-400 block text-[9px]">Mid Defense</span>
              <span className="text-blue-400 font-semibold">Scheduled</span>
            </div>
            <div className="bg-[#111A2E] p-2 rounded text-center border border-slate-800">
              <span className="text-slate-400 block text-[9px]">Documentation</span>
              <span className="text-slate-300 font-semibold">In Progress</span>
            </div>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span>Relational DB: MySQL</span>
          <span className="text-purple-400 font-mono text-[10px]">PHP / SQL Architecture</span>
        </div>
      </div>
    );
  }

  if (type === "service") {
    return (
      <div className="w-full h-full min-h-[220px] bg-[#0E1526] rounded-xl p-4 sm:p-5 flex flex-col justify-between border border-slate-800/80 font-sans select-none overflow-hidden relative group">
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs">
          <div className="flex items-center gap-2">
            <Wrench className="w-4 h-4 text-amber-400" />
            <span className="font-semibold text-slate-200">Local Service Hub</span>
          </div>
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-amber-500/10 text-amber-300 border border-amber-500/20">
            Sylhet Region
          </span>
        </div>

        <div className="my-3 space-y-2.5">
          {/* Categories chip bar */}
          <div className="flex gap-1.5 overflow-hidden text-[10px]">
            <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-medium">
              Electrician
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              Plumber
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              Mechanic
            </span>
          </div>

          <div className="bg-[#141E33] p-2.5 rounded-lg border border-slate-700/40 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-amber-400 font-bold text-xs">
                EP
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-200">Express Plumbing & Diagnostics</p>
                <div className="flex items-center gap-1 text-[10px] text-amber-400">
                  <Star className="w-2.5 h-2.5 fill-current" />
                  <span>4.9 (42 jobs)</span>
                  <span className="text-slate-500">·</span>
                  <span className="text-emerald-400">Available Today</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              tabIndex={-1}
              className="px-2.5 py-1 text-[10px] font-medium bg-blue-600 hover:bg-blue-500 text-white rounded transition-colors"
            >
              Book
            </button>
          </div>
        </div>

        <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-slate-400" /> Verified Professionals
          </span>
          <span className="text-slate-400 text-[10px]">React UI Components</span>
        </div>
      </div>
    );
  }

  // Ecommerce
  return (
    <div className="w-full h-full min-h-[220px] bg-[#0E1526] rounded-xl p-4 sm:p-5 flex flex-col justify-between border border-slate-800/80 font-sans select-none overflow-hidden relative group">
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs">
        <div className="flex items-center gap-2">
          <ShoppingCart className="w-4 h-4 text-emerald-400" />
          <span className="font-semibold text-slate-200">Modern Storefront</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
            Live Cart (3)
          </span>
        </div>
      </div>

      <div className="my-3 space-y-2">
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-[#141E33] p-2.5 rounded-lg border border-slate-700/40">
            <div className="w-full h-12 bg-slate-800/80 rounded flex items-center justify-center text-slate-500 text-[10px] mb-2">
              Featured Item
            </div>
            <p className="text-slate-200 font-medium text-[11px] truncate">Wireless Headset</p>
            <div className="flex items-center justify-between mt-1">
              <span className="text-emerald-400 font-bold text-xs">$79.99</span>
              <span className="text-[9px] px-1.5 py-0.5 bg-blue-600/30 text-blue-300 rounded">
                + Cart
              </span>
            </div>
          </div>

          <div className="bg-[#141E33] p-2.5 rounded-lg border border-slate-700/40">
            <div className="w-full h-12 bg-slate-800/80 rounded flex items-center justify-center text-slate-500 text-[10px] mb-2">
              Bestseller
            </div>
            <p className="text-slate-200 font-medium text-[11px] truncate">Mechanical Keyboard</p>
            <div className="flex items-center justify-between mt-1">
              <span className="text-emerald-400 font-bold text-xs">$119.00</span>
              <span className="text-[9px] px-1.5 py-0.5 bg-blue-600/30 text-blue-300 rounded">
                + Cart
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
        <span className="text-emerald-400 font-medium">Cart Total: $198.99</span>
        <span className="text-[10px] text-slate-400">Vanilla JS DOM Architecture</span>
      </div>
    </div>
  );
};
