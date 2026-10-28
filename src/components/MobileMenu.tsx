"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { ResumeButton } from "./ResumeButton";
import { SocialLinks } from "./SocialLinks";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string; id: string }[];
  activeSection: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navItems,
  activeSection,
}) => {
  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 md:hidden bg-[#0B0F19]/95 backdrop-blur-xl flex flex-col justify-between p-6 transition-all animate-in fade-in duration-200"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div>
          <span className="text-base font-bold tracking-tight text-white">
            Suvo Dev Nath
          </span>
          <span className="block text-xs text-blue-400 font-mono">
            Web Developer
          </span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close navigation menu"
          className="p-2.5 rounded-lg bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 focus-visible:ring-2 focus-visible:ring-blue-400"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Nav list */}
      <nav className="flex flex-col gap-2 my-auto">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <Link
              key={item.id}
              href={item.href}
              onClick={onClose}
              className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium transition-all ${
                isActive
                  ? "bg-blue-600/15 text-blue-400 border border-blue-500/30"
                  : "text-slate-300 hover:text-white hover:bg-slate-900 border border-transparent"
              }`}
            >
              <span>{item.label}</span>
              <ArrowRight className={`w-4 h-4 ${isActive ? "text-blue-400" : "text-slate-600"}`} />
            </Link>
          );
        })}
      </nav>

      {/* Actions and Socials */}
      <div className="pt-6 border-t border-slate-800 space-y-4">
        <ResumeButton className="w-full justify-center" size="md" />

        <div className="flex items-center justify-between pt-2">
          <span className="text-xs text-slate-400 font-medium">Connect:</span>
          <SocialLinks showLabels />
        </div>
      </div>
    </div>
  );
};
