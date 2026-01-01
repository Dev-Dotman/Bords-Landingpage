import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-24 bg-black text-zinc-600 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Image
            src="/bordclear.png"
            alt="BORDS Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <span className="text-white font-bold tracking-tighter brand-font text-xl">BORDS</span>
        </div>
        <div className="flex space-x-12 text-sm">
          <a href="#logic" className="hover:text-white">Features</a>
          <a href="#product-depth" className="hover:text-white">How it works</a>
          <a href="#features" className="hover:text-white">Why BORDS</a>
          <a href="#manifesto" className="hover:text-white">Our approach</a>
        </div>
        <p className="text-xs mt-8 md:mt-0">© 2026 AXECORE Labs Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
