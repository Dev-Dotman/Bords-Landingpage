export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-60 bg-zinc-950 text-white relative z-30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center mb-20 lg:mb-32">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 mb-3 lg:mb-4 block">Why BORDS</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 lg:mb-10 brand-font tracking-tighter">The best of<br/>all worlds.</h2>
            <p className="text-zinc-500 text-base lg:text-xl leading-relaxed mb-8 lg:mb-12 font-light">
              BORDS combines the visual freedom of a whiteboard with the structured productivity of project management — and it works offline.
            </p>
            <ul className="space-y-3 lg:space-y-4 mb-8 lg:mb-12">
              <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 bg-white rounded-full"></div><span className="font-medium text-sm lg:text-base">For Creators & Teams</span></li>
              <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></div><span className="text-zinc-400 text-sm lg:text-base">Modern & Professional</span></li>
              <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></div><span className="text-zinc-400 text-sm lg:text-base">Offline-First Architecture</span></li>
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:gap-6">
            <div className="p-6 lg:p-8 bg-zinc-900/50 rounded-2xl lg:rounded-[32px] border border-zinc-800 flex justify-between items-center hover:bg-zinc-900 transition-colors">
              <div>
                <h4 className="text-lg lg:text-xl font-semibold mb-1 lg:mb-2">Infinite Canvas</h4>
                <p className="text-zinc-500 text-sm lg:text-base">Freedom to organize anywhere, not just lists.</p>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-zinc-800 rounded-xl lg:rounded-2xl border border-zinc-700 flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0 ml-4 text-zinc-400">01</div>
            </div>
            <div className="p-6 lg:p-8 bg-zinc-900/50 rounded-2xl lg:rounded-[32px] border border-zinc-800 flex justify-between items-center hover:bg-zinc-900 transition-colors">
              <div>
                <h4 className="text-lg lg:text-xl font-semibold mb-1 lg:mb-2">Real-Time Collaboration</h4>
                <p className="text-zinc-500 text-sm lg:text-base">Live cursors, instant sync, voice calls built in.</p>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-zinc-800 rounded-xl lg:rounded-2xl border border-zinc-700 flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0 ml-4 text-zinc-400">02</div>
            </div>
          </div>
        </div>

        {/* Comparison Section */}
        <div>
          <div className="text-center mb-12 lg:mb-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold brand-font tracking-tight mb-4 lg:mb-6">
              How BORDS <span className="text-zinc-400 italic">compares</span>
            </h3>
            <p className="text-zinc-500 text-base lg:text-lg max-w-2xl mx-auto font-light">
              We took the best parts of the tools you know and combined them into something better.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* vs Trello/Asana */}
            <div className="p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-400 mb-4">
                  vs Trello / Asana
                </div>
                <h4 className="text-xl lg:text-2xl font-semibold mb-3">Freeform Canvas</h4>
                <p className="text-sm lg:text-base text-zinc-400 leading-relaxed font-light">
                  Items go <span className="font-semibold text-white">anywhere</span>, not just in lists. Plus real-time collaboration with live cursors.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-800">
                <p className="text-xs text-zinc-500 font-medium">✓ Infinite 2D workspace <br/>✓ Voice & video calls built in</p>
              </div>
            </div>

            {/* vs Miro/FigJam */}
            <div className="p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-400 mb-4">
                  vs Miro / FigJam
                </div>
                <h4 className="text-xl lg:text-2xl font-semibold mb-3">Productivity Tools</h4>
                <p className="text-sm lg:text-base text-zinc-400 leading-relaxed font-light">
                  <span className="font-semibold text-white">Structured tools</span> like kanban, checklists, and task delegation — not just a whiteboard.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-800">
                <p className="text-xs text-zinc-500 font-medium">✓ Task management built in <br/>✓ Bidirectional sync</p>
              </div>
            </div>

            {/* vs Notion */}
            <div className="p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-400 mb-4">
                  vs Notion
                </div>
                <h4 className="text-xl lg:text-2xl font-semibold mb-3">Visual First</h4>
                <p className="text-sm lg:text-base text-zinc-400 leading-relaxed font-light">
                  <span className="font-semibold text-white">See everything at once</span> on a canvas instead of scrolling through pages. Plus offline-first architecture.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-800">
                <p className="text-xs text-zinc-500 font-medium">✓ Works without internet <br/>✓ Organization workspaces</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
