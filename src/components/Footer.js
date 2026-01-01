import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 lg:py-24 bg-black text-zinc-600 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        <div className="flex items-center space-x-2">
          <Image
            src="/bordclear.png"
            alt="BORDS Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-white font-bold tracking-tighter brand-font text-xl">BORDS</span>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 md:space-x-12 text-sm">
          <a href="#logic" className="hover:text-white transition-colors">Features</a>
          <a href="#product-depth" className="hover:text-white transition-colors">How it works</a>
          <a href="#features" className="hover:text-white transition-colors">Why BORDS</a>
          <a href="#manifesto" className="hover:text-white transition-colors">Our approach</a>
        </div>
        <p className="text-xs text-center md:text-left">© 2026 AXECORE Labs Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
