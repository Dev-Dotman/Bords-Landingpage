export default function BordsOverviewSection() {
  return (
    <section id="overview" className="relative py-24 lg:py-40 bg-zinc-950 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[10%] top-20 h-48 w-48 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute right-[8%] top-32 h-56 w-56 rounded-full bg-pink-300/8 blur-3xl"></div>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14 lg:mb-20">
          <span className="text-zinc-500 text-sm tracking-[0.4em] uppercase mb-4 lg:mb-6 block">What BORDS Is</span>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tight mb-6 lg:mb-8">
            Everything your team{' '}
            <br className="hidden sm:block" />
            <span className="text-zinc-500">a board for every part of your work.</span>
          </h2>
          <p className="text-base lg:text-xl text-zinc-400 leading-relaxed font-light max-w-2xl mx-auto">
            A board for every project, team, or client — each one holding everything that work needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-10 lg:space-y-12">
            <div className="space-y-4">
              <p className="text-[10px] lg:text-xs uppercase tracking-[0.35em] text-zinc-500">01 / Stop switching between tools</p>
              <p className="text-lg lg:text-2xl text-zinc-200 leading-relaxed font-light max-w-3xl">
                Instead of juggling docs, chats, tasks, and whiteboards, BORDS keeps everything in one board your team can work from directly.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] lg:text-xs uppercase tracking-[0.35em] text-zinc-500">02 / AI that understands your work</p>
              <p className="text-base lg:text-xl text-zinc-400 leading-relaxed font-light max-w-3xl">
                BORDS AI lives inside your boards. It helps you plan, write guides, and answer questions — using what your team has already built, not generic suggestions.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-[10px] lg:text-xs uppercase tracking-[0.35em] text-zinc-500">03 / Build a knowledge base as you work</p>
              <p className="text-base lg:text-xl text-zinc-400 leading-relaxed font-light max-w-3xl">
                As your team works, BORDS builds up a record of how things get done — so anyone can find answers, get up to speed quickly, and keep improving.
              </p>
            </div>

            <p className="text-xs lg:text-sm text-zinc-500 leading-relaxed uppercase tracking-[0.25em] pt-2">
              Personal use • Startups and teams • Consultants • Enterprise deployment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}