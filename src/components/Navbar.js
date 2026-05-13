"use client";

import Image from "next/image";

export default function Navbar({ onWaitlistClick, onDemoClick }) {
  return (
    <nav className="fixed top-0 w-full z-[100] glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image
            src="/bordclear.png"
            alt="BORDS Logo"
            width={32}
            height={32}
            className="w-8 h-8"
            priority
          />
          <span className="text-2xl font-semibold tracking-tighter brand-font uppercase text-white">BORDS</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm text-zinc-400">
          <a href="#logic" className="hover:text-white transition-colors">Features</a>
          <a href="#product-depth" className="hover:text-white transition-colors">How it works</a>
          <a href="#features" className="hover:text-white transition-colors">Why BORDS</a>
          <a href="#manifesto" className="hover:text-white transition-colors">Our approach</a>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onDemoClick}
            className="hidden sm:inline-flex text-sm font-medium text-zinc-300 border border-zinc-700 px-5 py-2.5 rounded-full hover:border-zinc-500 hover:text-white transition-all"
          >
            Book a Demo
          </button>
          <button
            type="button"
            onClick={onWaitlistClick}
            className="text-sm font-medium bg-white text-black px-6 py-2.5 rounded-full hover:bg-gray-200 transition-all shadow-lg inline-block"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
}
