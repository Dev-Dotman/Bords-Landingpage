export default function LogicSection() {
  return (
    <section id="logic" className="py-40 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-32">
          <span className="text-zinc-500 text-sm tracking-[0.4em] uppercase mb-6">Core Features</span>
          <h2 className="text-5xl md:text-7xl font-semibold brand-font tracking-tight max-w-3xl">Built for <span className="italic text-zinc-400">Flexibility.</span></h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="stat-card p-12 rounded-[40px] flex flex-col h-full">
            <div className="w-12 h-12 bg-zinc-800 rounded-2xl mb-8 flex items-center justify-center font-bold text-white">01</div>
            <h3 className="text-2xl font-semibold mb-4">Drag & Drop Interface</h3>
            <p className="text-zinc-500 leading-relaxed font-light">Visually rearrange tasks, notes, and projects. Organize with Kanban boards and manage workflows intuitively.</p>
          </div>
          <div className="stat-card p-12 rounded-[40px] flex flex-col h-full mt-12 md:mt-20">
            <div className="w-12 h-12 bg-white text-black rounded-2xl mb-8 flex items-center justify-center font-bold">02</div>
            <h3 className="text-2xl font-semibold mb-4">Modular Blocks</h3>
            <p className="text-zinc-500 leading-relaxed font-light">Everything is a block. Sticky notes for quick ideas, checklists for tasks — stack, link, or rearrange however you need.</p>
          </div>
          <div className="stat-card p-12 rounded-[40px] flex flex-col h-full">
            <div className="w-12 h-12 bg-zinc-800 rounded-2xl mb-8 flex items-center justify-center font-bold text-white">03</div>
            <h3 className="text-2xl font-semibold mb-4">Minimal Distractions</h3>
            <p className="text-zinc-500 leading-relaxed font-light">Clean, calm interface that reduces cognitive load. Focus on what matters with maximum clarity and minimal noise.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
