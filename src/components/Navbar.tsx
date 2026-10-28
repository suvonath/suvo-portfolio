"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { ResumeButton } from "./ResumeButton";
import { MobileMenu } from "./MobileMenu";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navItems = [
    { label: "Home", href: isHomePage ? "#hero" : "/#hero", id: "hero" },
    { label: "About", href: isHomePage ? "#about" : "/#about", id: "about" },
    { label: "Skills", href: isHomePage ? "#skills" : "/#skills", id: "skills" },
    { label: "Education", href: isHomePage ? "#education" : "/#education", id: "education" },
    { label: "Projects", href: isHomePage ? "#projects" : "/#projects", id: "projects" },
    { label: "Contact", href: isHomePage ? "#contact" : "/#contact", id: "contact" },
  ];

  // Handle scroll and active section observation on the home page
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const sections = ["hero", "about", "skills", "education", "projects", "contact"];
      const scrollPosition = window.scrollY + 180;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B0F19]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3"
            : "bg-transparent py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Identity */}
            <Link
              href="/"
              className="flex items-center gap-2.5 text-white hover:text-blue-400 transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg p-1 group"
              aria-label="Suvo Dev Nath Portfolio Home"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform border border-blue-400/30">
                SN
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm tracking-tight text-slate-100 group-hover:text-white transition-colors">
                  Suvo Dev Nath
                </span>
                <span className="text-[11px] text-slate-400 font-mono tracking-wide">
                  Web Developer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-[#111827]/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-800/80 shadow-inner">
              {navItems.map((item) => {
                const isActive = isHomePage && activeSection === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                      isActive
                        ? "bg-blue-600/20 text-blue-300 font-semibold shadow-sm"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    } focus-visible:ring-2 focus-visible:ring-blue-400`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <ResumeButton size="sm" variant="primary" />
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-label="Open navigation menu"
              className="md:hidden p-2 rounded-lg bg-slate-900/90 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 focus-visible:ring-2 focus-visible:ring-blue-400"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
        activeSection={activeSection}
      />
    </>
  );
};
