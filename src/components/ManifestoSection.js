export default function ManifestoSection() {
  return (
    <section id="manifesto" className="py-20 lg:py-40 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium tracking-tight text-white mb-12 lg:mb-20 leading-tight max-w-5xl mx-auto">
          We believe collaboration needs both <span className="text-zinc-600 italic">clarity and flexibility.</span> BORDS helps teams <span className="bg-white text-black px-2 lg:px-4 rounded-md lg:rounded-lg">design how work gets done.</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8">
          <div className="p-6 lg:p-8 border-b sm:border-b-0 md:border-r border-zinc-800 text-left">
            <h4 className="text-white font-semibold mb-2 text-base lg:text-lg">Visual</h4>
            <p className="text-zinc-500 text-xs lg:text-sm">Boards are infinite canvases for plans, process maps, and team context.</p>
          </div>
          <div className="p-6 lg:p-8 border-b sm:border-b-0 md:border-r border-zinc-800 text-left">
            <h4 className="text-white font-semibold mb-2 text-base lg:text-lg">Flexible</h4>
            <p className="text-zinc-500 text-xs lg:text-sm">Modular blocks adapt from personal planning to startup and team execution.</p>
          </div>
          <div className="p-6 lg:p-8 border-b sm:border-b-0 md:border-r border-zinc-800 text-left">
            <h4 className="text-white font-semibold mb-2 text-base lg:text-lg">Collaborative</h4>
            <p className="text-zinc-500 text-xs lg:text-sm">Live collaboration keeps teammates and friends aligned in the same workspace.</p>
          </div>
          <div className="p-6 lg:p-8 border-b sm:border-b-0 md:border-r border-zinc-800 text-left">
            <h4 className="text-white font-semibold mb-2 text-base lg:text-lg">Calm</h4>
            <p className="text-zinc-500 text-xs lg:text-sm">Structured boards reduce fragmentation so teams can execute with less noise.</p>
          </div>
          <div className="p-6 lg:p-8 text-left">
            <h4 className="text-white font-semibold mb-2 text-base lg:text-lg">Smart</h4>
            <p className="text-zinc-500 text-xs lg:text-sm">BORDS AI uses board context to co-build SOPs and make company knowledge actionable.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
