export default function LogicSection() {
  return (
    <section id="logic" className="py-20 lg:py-40 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16 lg:mb-32">
          <span className="text-zinc-500 text-sm tracking-[0.4em] uppercase mb-4 lg:mb-6">Core Features</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold brand-font tracking-tight max-w-3xl">Built for <span className="italic text-zinc-400">clear execution.</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          <div className="stat-card p-8 lg:p-12 rounded-3xl lg:rounded-[40px] flex flex-col h-full">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-zinc-800 rounded-xl lg:rounded-2xl mb-6 lg:mb-8 flex items-center justify-center font-bold text-white text-sm lg:text-base">01</div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4">Infinite Board Canvas</h3>
            <p className="text-sm lg:text-base text-zinc-500 leading-relaxed font-light">Use boards as infinite canvases where plans, tasks, docs, and process knowledge live together in one system.</p>
          </div>
          <div className="stat-card p-8 lg:p-12 rounded-3xl lg:rounded-[40px] flex flex-col h-full md:mt-12 lg:mt-20">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white text-black rounded-xl lg:rounded-2xl mb-6 lg:mb-8 flex items-center justify-center font-bold text-sm lg:text-base">02</div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4">Real-Time Collaboration</h3>
            <p className="text-sm lg:text-base text-zinc-500 leading-relaxed font-light">Collaborate with friends or teams in real time, with live cursors, offline reliability, and conflict-free syncing.</p>
          </div>
          <div className="stat-card p-8 lg:p-12 rounded-3xl lg:rounded-[40px] flex flex-col h-full">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-zinc-800 rounded-xl lg:rounded-2xl mb-6 lg:mb-8 flex items-center justify-center font-bold text-white text-sm lg:text-base">03</div>
            <h3 className="text-xl lg:text-2xl font-semibold mb-3 lg:mb-4">Context-Aware AI</h3>
            <p className="text-sm lg:text-base text-zinc-500 leading-relaxed font-light">BORDS AI works inside your boards to co-build plans, generate SOPs, and make company knowledge searchable and actionable.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
