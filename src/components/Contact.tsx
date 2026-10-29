"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MessageSquare,
  Copy,
  Check,
  Send,
  ExternalLink,
  MapPin,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";
import { GithubIcon, LinkedinIcon } from "./icons/BrandIcons";

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [composerStatus, setComposerStatus] = useState<"idle" | "ready" | "copied">("idle");

  const copyToClipboard = async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch {
      // Fallback
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};

    if (!name.trim()) errors.name = "Please enter your name";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) errors.email = "Please enter a valid email address";
    if (!subject.trim()) errors.subject = "Please enter a subject line";
    if (!message.trim()) errors.message = "Please write your message";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    // Construct genuine mailto URL
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${subject} - from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n---\nSent via Suvo Dev Nath Portfolio`
    )}`;

    // Open user's email client directly with all pre-filled content
    window.location.href = mailtoUrl;
    setComposerStatus("ready");
  };

  const copyDraftToClipboard = async () => {
    const draftText = `To: ${personalInfo.email}\nSubject: [Portfolio Inquiry] ${subject} - from ${name}\n\n${message}\n\nSender Contact: ${email}`;
    try {
      await navigator.clipboard.writeText(draftText);
      setComposerStatus("copied");
      setTimeout(() => setComposerStatus("ready"), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Information & Inquiries"
      className="py-20 md:py-28 bg-[#090D16] relative border-t border-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-mono text-blue-400 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>LET&apos;S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Have a project in mind? Let&apos;s connect.
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            I&apos;m open to connecting with developers, discussing ideas, and exploring opportunities to build useful web experiences.
          </p>
        </div>

        {/* Contact Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct verified channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono mb-2">
              Direct Communication Channels
            </h3>

            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-[#111827] border border-slate-800 flex items-start justify-between gap-3 group hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block mb-0.5">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-semibold text-slate-100 hover:text-blue-400 transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                  >
                    {personalInfo.email}
                  </a>
                  <span className="block text-[11px] text-slate-400 mt-1">
                    Direct reply within 24 hours
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(personalInfo.email, "email")}
                aria-label="Copy email address to clipboard"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-[#111827] border border-slate-800 flex items-start justify-between gap-3 group hover:border-slate-700 transition-colors">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block mb-0.5">
                    Phone & WhatsApp
                  </span>
                  <a
                    href={`tel:${personalInfo.phoneRaw}`}
                    className="text-sm font-semibold text-slate-100 hover:text-emerald-400 transition-colors focus-visible:ring-2 focus-visible:ring-blue-400 rounded"
                  >
                    {personalInfo.phone}
                  </a>
                  <div className="flex items-center gap-2 mt-1.5">
                    <a
                      href={personalInfo.whatsApp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] text-emerald-400 hover:underline font-medium"
                    >
                      <span>Message on WhatsApp</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                aria-label="Copy phone number to clipboard"
                className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                title="Copy Phone Number"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Professional Profiles */}
            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                href={personalInfo.gitHub}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#111827] border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all flex items-center gap-3 group"
              >
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 group-hover:text-white">
                  <GithubIcon size={16} />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">GitHub</span>
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-blue-400">
                    suvonath
                  </span>
                </div>
              </a>

              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-[#111827] border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all flex items-center gap-3 group"
              >
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 group-hover:text-blue-400">
                  <LinkedinIcon size={16} />
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block">LinkedIn</span>
                  <span className="text-xs font-semibold text-slate-200 group-hover:text-blue-400">
                    shubho-dev
                  </span>
                </div>
              </a>
            </div>

            {/* Location & Timezone info */}
            <div className="p-4 rounded-xl bg-[#0F1420] border border-slate-800/80 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="font-medium">Sylhet, Bangladesh (UTC+6)</span>
              </div>
              <p className="text-[11px] text-slate-400 pl-6">
                Available for local, regional, and remote opportunities.
              </p>
            </div>
          </div>

          {/* Right Column: Genuine Email Message Composer (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#111827] border border-slate-800 shadow-xl relative">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  <span>Send a Message</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Compose a draft below. It will open directly in your mail application with authentic routing to <span className="text-slate-300 font-mono">suvodevnath123@gmail.com</span>.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Rahman"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                        formErrors.name ? "border-red-500" : "border-slate-800"
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-[11px] text-red-400 mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1.5">
                      Your Email <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                        formErrors.email ? "border-red-500" : "border-slate-800"
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-red-400 mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Subject <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="e.g. Web Development Opportunity / Project Discussion"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                      formErrors.subject ? "border-red-500" : "border-slate-800"
                    }`}
                  />
                  {formErrors.subject && (
                    <p className="text-[11px] text-red-400 mt-1">{formErrors.subject}</p>
                  )}
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1.5">
                    Message <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hello Suvo, I came across your portfolio and would like to discuss..."
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#0B0F19] border text-xs text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none ${
                      formErrors.message ? "border-red-500" : "border-slate-800"
                    }`}
                  />
                  {formErrors.message && (
                    <p className="text-[11px] text-red-400 mt-1">{formErrors.message}</p>
                  )}
                </div>

                {/* Action buttons */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs transition-colors shadow-md shadow-blue-500/20 focus-visible:ring-2 focus-visible:ring-blue-400"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Open in Email App</span>
                  </button>

                  <button
                    type="button"
                    onClick={copyDraftToClipboard}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium transition-colors"
                  >
                    {composerStatus === "copied" ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Draft Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Draft Text</span>
                      </>
                    )}
                  </button>
                </div>

                {composerStatus === "ready" && (
                  <p className="text-xs text-emerald-400 pt-2 flex items-center gap-1.5">
                    <Check className="w-4 h-4" />
                    <span>Mail client opened with your formatted draft.</span>
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
