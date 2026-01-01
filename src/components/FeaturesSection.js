export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-60 bg-white text-black relative z-30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 mb-3 lg:mb-4 block">Why BORDS</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 lg:mb-10 brand-font tracking-tighter">Planning meets <br/>freedom.</h2>
            <p className="text-zinc-500 text-base lg:text-xl leading-relaxed mb-8 lg:mb-12 font-light">
              Transform planning, thinking, and workflow management into a visual, flexible experience. Organize your ideas, projects, and workflows with minimal distractions.
            </p>
            <ul className="space-y-3 lg:space-y-4 mb-8 lg:mb-12">
              <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 bg-black rounded-full"></div><span className="font-medium text-sm lg:text-base">For Creators & Teams</span></li>
              <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div><span className="text-zinc-500 text-sm lg:text-base">Modern & Professional</span></li>
              <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 bg-zinc-300 rounded-full"></div><span className="text-zinc-500 text-sm lg:text-base">Intelligent Structuring</span></li>
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:gap-6">
            <div className="p-6 lg:p-8 bg-zinc-50 rounded-2xl lg:rounded-[32px] border border-zinc-100 flex justify-between items-center hover:bg-zinc-100 transition-colors">
              <div>
                <h4 className="text-lg lg:text-xl font-semibold mb-1 lg:mb-2">Minimalist Design</h4>
                <p className="text-zinc-400 text-sm lg:text-base">Nothing unnecessary. Focus on essentials.</p>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-xl lg:rounded-2xl shadow-sm border border-zinc-200 flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0 ml-4">01</div>
            </div>
            <div className="p-6 lg:p-8 bg-zinc-50 rounded-2xl lg:rounded-[32px] border border-zinc-100 flex justify-between items-center hover:bg-zinc-100 transition-colors">
              <div>
                <h4 className="text-lg lg:text-xl font-semibold mb-1 lg:mb-2">Stay in Control</h4>
                <p className="text-zinc-400 text-sm lg:text-base">Calm interface that reduces cognitive load.</p>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white rounded-xl lg:rounded-2xl shadow-sm border border-zinc-200 flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0 ml-4">02</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
