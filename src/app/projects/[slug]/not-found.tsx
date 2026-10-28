import Link from "next/link";
import { ArrowLeft, AlertCircle } from "lucide-react";

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen pt-36 pb-20 flex items-center justify-center bg-[#0B0F19] px-4">
      <div className="max-w-md w-full text-center p-8 rounded-2xl bg-[#111827] border border-slate-800 space-y-5">
        <div className="w-12 h-12 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 flex items-center justify-center mx-auto">
          <AlertCircle className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-bold text-white">Project Not Found</h1>
        <p className="text-sm text-slate-400">
          The project route you requested does not match any of the verified project case studies in Suvo Dev Nath&apos;s portfolio.
        </p>
        <div className="pt-2">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
