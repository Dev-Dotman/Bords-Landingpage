export default function ManifestoSection() {
  return (
    <section id="manifesto" className="py-20 lg:py-40 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium tracking-tight text-white mb-12 lg:mb-20 leading-tight max-w-5xl mx-auto">
          We believe teams work better when there&apos;s a clear shared system. BORDS helps you <span className="bg-white text-black px-2 lg:px-4 rounded-md lg:rounded-lg">build one.</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 lg:gap-8">
          <div className="p-6 lg:p-8 border-b sm:border-b-0 md:border-r border-zinc-800 text-left">
            <h4 className="text-white font-semibold mb-2 text-base lg:text-lg">Visual</h4>
            <p className="text-zinc-500 text-xs lg:text-sm">Boards hold everything — plans, diagrams, notes, and team knowledge — all in one place.</p>
          </div>
          <div className="p-6 lg:p-8 border-b sm:border-b-0 md:border-r border-zinc-800 text-left">
            <h4 className="text-white font-semibold mb-2 text-base lg:text-lg">Flexible</h4>
            <p className="text-zinc-500 text-xs lg:text-sm">Works for personal use, small teams, and fast-growing companies — without needing to start over.</p>
          </div>
          <div className="p-6 lg:p-8 border-b sm:border-b-0 md:border-r border-zinc-800 text-left">
            <h4 className="text-white font-semibold mb-2 text-base lg:text-lg">Collaborative</h4>
            <p className="text-zinc-500 text-xs lg:text-sm">Live collaboration keeps teammates and friends aligned in the same workspace.</p>
          </div>
          <div className="p-6 lg:p-8 border-b sm:border-b-0 md:border-r border-zinc-800 text-left">
            <h4 className="text-white font-semibold mb-2 text-base lg:text-lg">Calm</h4>
            <p className="text-zinc-500 text-xs lg:text-sm">When everything lives in one board, there&apos;s less confusion and less time wasted chasing updates.</p>
          </div>
          <div className="p-6 lg:p-8 text-left">
            <h4 className="text-white font-semibold mb-2 text-base lg:text-lg">Smart</h4>
            <p className="text-zinc-500 text-xs lg:text-sm">BORDS AI uses what&apos;s already in your boards to give useful, specific answers — not generic suggestions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
