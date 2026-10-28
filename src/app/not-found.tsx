import Link from "next/link";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-36 pb-20 flex items-center justify-center bg-[#0B0F19] px-4">
      <div className="max-w-md w-full text-center p-8 rounded-2xl bg-[#111827] border border-slate-800 space-y-5 shadow-2xl">
        <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center mx-auto">
          <Compass className="w-7 h-7" />
        </div>
        <span className="text-xs font-mono text-blue-400 tracking-wider">ERROR 404</span>
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Page Not Found</h1>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
          The page or route you are looking for doesn&apos;t exist or has been relocated.
        </p>
        <div className="pt-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-md shadow-blue-500/20"
          >
            <Home className="w-4 h-4" />
            <span>Return to Portfolio Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
