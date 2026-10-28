import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0B0F19",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Suvo Dev Nath — Web Developer | Portfolio",
  description:
    "Personal portfolio of Suvo Dev Nath, a Web Developer from Sylhet, Bangladesh. Building modern, responsive, and user-friendly web applications using React, Next.js, and Node.js.",
  keywords: [
    "Suvo Dev Nath",
    "Web Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Sylhet",
    "Bangladesh",
    "Leading University",
    "Tailwind CSS",
    "JavaScript",
  ],
  authors: [{ name: "Suvo Dev Nath", url: "https://github.com/Shubho-Debnath" }],
  creator: "Suvo Dev Nath",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/Shubho-Debnath",
    title: "Suvo Dev Nath — Web Developer Portfolio",
    description:
      "Modern, responsive web applications built with clean code, reusable components, and thoughtful UI design.",
    siteName: "Suvo Dev Nath Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suvo Dev Nath — Web Developer",
    description:
      "Web Developer from Sylhet, Bangladesh. Focused on React, Next.js, and modern full-stack web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#0B0F19] text-[#F8FAFC] flex flex-col antialiased selection:bg-blue-500/30 selection:text-white">
        {/* Skip to Content accessible link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold shadow-lg outline-none ring-2 ring-white"
        >
          Skip to main content
        </a>

        {/* Global sticky navigation bar */}
        <Navbar />

        {/* Main Content Area */}
        <main id="main-content" className="flex-1 flex flex-col">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
