
export default function BordsAISection() {
  return (
<section id="bords-ai" className="relative py-24 pb-72 sm:pb-80 lg:py-32 lg:pb-32 bg-zinc-950 text-white overflow-hidden min-h-screen lg:max-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden md:block absolute left-[6%] bottom-24 h-48 w-48 rounded-full bg-pink-300/6 blur-3xl"></div>
      </div>

      {/* Robot — centered on mobile, bottom-right on desktop */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 w-64 sm:w-72 lg:w-80 xl:w-96 h-72 sm:h-80 lg:h-96 xl:h-[480px]">
        <iframe
          src="https://my.spline.design/nexbotrobotcharacterconcept-5SFCyUe3t08E4ekWK87ZAUmi/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
          title="BORDS AI Robot"
        />
        {/* Bottom fade — both layouts */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/70 pointer-events-none"></div>
        {/* Side fades — visible on mobile (centered), hidden on desktop where left fade takes over */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/80 pointer-events-none"></div>
        {/* Left fade — desktop only (blends into page since robot is in corner) */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-l from-transparent to-zinc-950/80 pointer-events-none"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-8 lg:mb-10">
          <span className="text-zinc-500 text-sm tracking-[0.4em] uppercase">BORDS AI</span>
        </div>

        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
            AI that knows{' '}
            <br className="hidden sm:block" />
            <span className="text-zinc-500">what you&apos;re working on.</span>
          </h2>

          <p className="text-base lg:text-lg text-zinc-300 font-light leading-relaxed border-l-2 border-zinc-600 pl-5 mb-8">
            Most AI tools give generic answers. BORDS AI answers using your actual boards — so the help it gives is specific to how your team works.
          </p>

          <div className="space-y-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 mb-1">01 / You control the context</p>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">Pick which boards the AI should know about. It only reads what you choose to share with it.</p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 mb-1">02 / Ask inside the work</p>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">Draft plans, write guides, ask questions — and get answers based on what your team has actually built, not guesswork.</p>
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-500 mb-1">03 / Responses that compound</p>
              <p className="text-sm text-zinc-400 leading-relaxed font-light">You chat with BORDS AI right inside the board. When an answer is worth keeping, you can save it straight to a board — turning it into a plan, a guide, or a logged decision.</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800/60">
            <p className="text-[10px] text-zinc-500 uppercase tracking-[0.25em]">
              Context you control &nbsp;·&nbsp; Grounded answers &nbsp;·&nbsp; Embedded in your workflow
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}