export default function ManifestoSection() {
  return (
    <section id="manifesto" className="py-20 lg:py-40 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium tracking-tight text-white mb-12 lg:mb-20 leading-tight max-w-5xl mx-auto">
          We believe <span className="text-zinc-600 italic">rigid structures</span> limit creativity. BORDS gives you the <span className="bg-white text-black px-2 lg:px-4 rounded-md lg:rounded-lg">freedom to organize.</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="p-6 lg:p-8 border-b sm:border-b-0 md:border-r border-zinc-800 text-left">
            <h4 className="text-white font-semibold mb-2 text-base lg:text-lg">Visual</h4>
            <p className="text-zinc-500 text-xs lg:text-sm">Organize ideas with drag-and-drop simplicity.</p>
          </div>
          <div className="p-6 lg:p-8 border-b sm:border-b-0 md:border-r border-zinc-800 text-left">
            <h4 className="text-white font-semibold mb-2 text-base lg:text-lg">Flexible</h4>
            <p className="text-zinc-500 text-xs lg:text-sm">Everything is a modular block you control.</p>
          </div>
          <div className="p-6 lg:p-8 border-b sm:border-b-0 md:border-r border-zinc-800 text-left">
            <h4 className="text-white font-semibold mb-2 text-base lg:text-lg">Calm</h4>
            <p className="text-zinc-500 text-xs lg:text-sm">Minimalist design reduces cognitive load.</p>
          </div>
          <div className="p-6 lg:p-8 text-left">
            <h4 className="text-white font-semibold mb-2 text-base lg:text-lg">Smart</h4>
            <p className="text-zinc-500 text-xs lg:text-sm">Intelligent structuring for modern workflows.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
