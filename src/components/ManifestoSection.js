export default function ManifestoSection() {
  return (
    <section id="manifesto" className="py-40 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-20 leading-tight max-w-5xl mx-auto">
          We believe <span className="text-zinc-600 italic">rigid structures</span> limit creativity. BORDS gives you the <span className="bg-white text-black px-4 rounded-lg">freedom to organize.</span>
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="p-8 border-r border-zinc-800 text-left">
            <h4 className="text-white font-semibold mb-2">Visual</h4>
            <p className="text-zinc-500 text-sm">Organize ideas with drag-and-drop simplicity.</p>
          </div>
          <div className="p-8 border-r border-zinc-800 text-left">
            <h4 className="text-white font-semibold mb-2">Flexible</h4>
            <p className="text-zinc-500 text-sm">Everything is a modular block you control.</p>
          </div>
          <div className="p-8 border-r border-zinc-800 text-left">
            <h4 className="text-white font-semibold mb-2">Calm</h4>
            <p className="text-zinc-500 text-sm">Minimalist design reduces cognitive load.</p>
          </div>
          <div className="p-8 text-left">
            <h4 className="text-white font-semibold mb-2">Smart</h4>
            <p className="text-zinc-500 text-sm">Intelligent structuring for modern workflows.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
