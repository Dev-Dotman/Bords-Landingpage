export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-60 bg-zinc-950 text-white relative z-30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center mb-20 lg:mb-32">
          <div>
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-zinc-400 mb-3 lg:mb-4 block">Why BORDS</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 lg:mb-10 brand-font tracking-tighter">One workspace.<br/>Less chaos.</h2>
            <p className="text-zinc-500 text-base lg:text-xl leading-relaxed mb-8 lg:mb-12 font-light">
              BORDS brings your plans, tasks, team conversations, and how-to guides into one shared board.
            </p>
            <ul className="space-y-3 lg:space-y-4 mb-8 lg:mb-12">
              <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 bg-white rounded-full"></div><span className="font-medium text-sm lg:text-base">Collaboration-first by design</span></li>
              <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></div><span className="text-zinc-400 text-sm lg:text-base">AI that knows what your team is working on</span></li>
              <li className="flex items-center space-x-3"><div className="w-1.5 h-1.5 bg-zinc-600 rounded-full"></div><span className="text-zinc-400 text-sm lg:text-base">From personal planning to company operations</span></li>
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-4 lg:gap-6">
            <div className="p-6 lg:p-8 bg-zinc-900/50 rounded-2xl lg:rounded-[32px] border border-zinc-800 flex justify-between items-center hover:bg-zinc-900 transition-colors">
              <div>
                <h4 className="text-lg lg:text-xl font-semibold mb-1 lg:mb-2">A board for every project</h4>
                <p className="text-zinc-500 text-sm lg:text-base">Create as many boards as you need — one per project, client, or team. Plans, tasks, guides, and conversations all live inside it.</p>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-zinc-800 rounded-xl lg:rounded-2xl border border-zinc-700 flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0 ml-4 text-zinc-400">01</div>
            </div>
            <div className="p-6 lg:p-8 bg-zinc-900/50 rounded-2xl lg:rounded-[32px] border border-zinc-800 flex justify-between items-center hover:bg-zinc-900 transition-colors">
              <div>
                <h4 className="text-lg lg:text-xl font-semibold mb-1 lg:mb-2">AI integrated with collaboration</h4>
                <p className="text-zinc-500 text-sm lg:text-base">BORDS AI helps you plan, write guides, and answer questions — right where your team is already working.</p>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-zinc-800 rounded-xl lg:rounded-2xl border border-zinc-700 flex items-center justify-center font-bold text-sm lg:text-base flex-shrink-0 ml-4 text-zinc-400">02</div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div>
          <div className="text-center mb-12 lg:mb-16">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold brand-font tracking-tight mb-4 lg:mb-6">
              Built for <span className="text-zinc-400 italic">real workflows</span>
            </h3>
            <p className="text-zinc-500 text-base lg:text-lg max-w-2xl mx-auto font-light">
              From personal planning to startup execution to enterprise deployment, BORDS scales with your workflow without losing clarity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-400 mb-4">
                  Personal + Teams
                </div>
                <h4 className="text-xl lg:text-2xl font-semibold mb-3">From solo to startup</h4>
                <p className="text-sm lg:text-base text-zinc-400 leading-relaxed font-light">
                  Start solo, collaborate with friends, and grow into team operations without starting over.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-800">
                <p className="text-xs text-zinc-500 font-medium">✓ Infinite board canvas<br/>✓ Real-time collaboration + offline sync</p>
              </div>
            </div>

            <div className="p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-400 mb-4">
                  Consultants + Operators
                </div>
                <h4 className="text-xl lg:text-2xl font-semibold mb-3">Build systems clients can run</h4>
                <p className="text-sm lg:text-base text-zinc-400 leading-relaxed font-light">
                  Build board systems and guides for your clients, then hand them over knowing the AI will help the team get up to speed.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-800">
                <p className="text-xs text-zinc-500 font-medium">✓ Board structures clients can follow<br/>✓ New teammates learn how things work inside the board</p>
              </div>
            </div>

            <div className="p-6 lg:p-8 rounded-2xl lg:rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="mb-6">
                <div className="inline-block px-3 py-1 rounded-full bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-400 mb-4">
                  Enterprise Deployment
                </div>
                <h4 className="text-xl lg:text-2xl font-semibold mb-3">Dedicated by BORDS team</h4>
                <p className="text-sm lg:text-base text-zinc-400 leading-relaxed font-light">
                  We set up and manage a private BORDS environment for your company — with your data kept separate and secure.
                </p>
              </div>
              <div className="pt-4 border-t border-zinc-800">
                <p className="text-xs text-zinc-500 font-medium">✓ Your data stays private and separate<br/>✓ Contact us to plan your setup</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
