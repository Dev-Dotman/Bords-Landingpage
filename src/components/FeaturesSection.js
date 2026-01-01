export default function FeaturesSection() {
  return (
    <section id="features" className="py-60 bg-white text-black relative z-30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-32 items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 mb-4 block">Why BORDS</span>
            <h2 className="text-6xl font-semibold mb-10 brand-font tracking-tighter">Planning meets <br/>freedom.</h2>
            <p className="text-zinc-500 text-xl leading-relaxed mb-12 font-light">
              Transform planning, thinking, and workflow management into a visual, flexible experience. Organize your ideas, projects, and workflows with minimal distractions.
            </p>
            <ul className="space-y-4 mb-12">
              <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 bg-black rounded-full"></div><span className="font-medium">For Creators & Teams</span></li>
              <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div><span className="text-zinc-500">Modern & Professional</span></li>
              <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div><span className="text-zinc-500">Intelligent Structuring</span></li>
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="p-8 bg-zinc-50 rounded-[32px] border border-zinc-100 flex justify-between items-center hover:bg-zinc-100 transition-colors">
              <div>
                <h4 className="text-xl font-semibold mb-2">Minimalist Design</h4>
                <p className="text-zinc-400">Nothing unnecessary. Focus on essentials.</p>
              </div>
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-zinc-200 flex items-center justify-center font-bold">01</div>
            </div>
            <div className="p-8 bg-zinc-50 rounded-[32px] border border-zinc-100 flex justify-between items-center hover:bg-zinc-100 transition-colors">
              <div>
                <h4 className="text-xl font-semibold mb-2">Stay in Control</h4>
                <p className="text-zinc-400">Calm interface that reduces cognitive load.</p>
              </div>
              <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-zinc-200 flex items-center justify-center font-bold">02</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
