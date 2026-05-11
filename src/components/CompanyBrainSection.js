import { CircleHelp, Sparkles } from 'lucide-react';

const flow = [
  'Capture: work, decisions, and discussions stay attached to boards',
  'Structure: plans are converted into SOPs and repeatable workflows',
  'Retrieve: AI can read this context and answer process questions',
  'Assist: teammates get next steps tied to real company context',
  'Improve: every update refines the system and strengthens memory',
];

export default function CompanyBrainSection() {
  return (
    <section id="company-brain" className="relative py-24 lg:py-40 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[8%] top-24 h-52 w-52 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute right-[8%] top-36 h-56 w-56 rounded-full bg-emerald-300/10 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
          <span className="text-zinc-500 text-sm tracking-[0.4em] uppercase mb-4 lg:mb-6 block">Company Brain</span>
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold brand-font tracking-tight mb-6 lg:mb-8">
            How BORDS becomes{' '}
            <br className="hidden sm:block" />
            <span className="text-zinc-500 italic">your company brain.</span>
          </h2>
          <p className="text-base lg:text-xl text-zinc-400 leading-relaxed font-light max-w-3xl mx-auto">
            BORDS becomes a company brain through a repeatable loop: capture execution, structure it, retrieve it, assist teammates, and improve continuously.
          </p>
        </div>

        <div className="relative min-h-[680px] md:min-h-[600px] lg:min-h-[640px] rounded-[24px] lg:rounded-[44px] border border-zinc-800 overflow-hidden">
          <iframe
            src="https://my.spline.design/particleaibrain-PatJUnCdRjPoFkgB3VuJsnVA/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="absolute inset-0 w-full h-full"
            title="3D Particle Brain Animation"
            style={{ pointerEvents: 'none', filter: 'brightness(1.12) contrast(1.08) saturate(1.08)' }}
          />

          <div className="absolute inset-0 bg-black/15"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/35 to-black/70"></div>

          <div className="relative z-10 h-full p-5 md:p-8 lg:p-10 flex flex-col lg:grid lg:grid-cols-[1.05fr_0.95fr] gap-6 lg:gap-8 lg:items-end">
            <div className="lg:self-center max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/35 backdrop-blur-sm px-3.5 py-2 mb-5">
                <Sparkles className="w-3.5 h-3.5 text-zinc-300" strokeWidth={1.9} />
                <span className="text-[10px] uppercase tracking-[0.35em] text-zinc-300">Compounding Context</span>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-5xl font-semibold brand-font tracking-tight leading-tight text-white mb-4 lg:mb-6">
                The company brain is built from workflow evidence.
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-zinc-300/90 leading-relaxed font-light max-w-xl">
                Instead of static docs, BORDS links planning, execution, and decisions in one place. That makes organizational knowledge usable, teachable, and searchable.
              </p>
            </div>

            <div className="rounded-2xl lg:rounded-3xl border border-white/10 bg-black/35 backdrop-blur-md p-4 lg:p-6">
              <p className="text-[10px] uppercase tracking-[0.35em] text-zinc-400 mb-3">Mechanism</p>
              <div className="space-y-2">
                {flow.map((item, index) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/30 px-3 py-2.5">
                    <span className="text-[10px] uppercase tracking-[0.35em] text-zinc-400 mt-0.5 shrink-0">0{index + 1}</span>
                    <p className="text-xs lg:text-sm text-zinc-100 leading-snug">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-zinc-400/90 leading-relaxed mt-3">
                This loop repeats as teams collaborate, so the system gets smarter with real usage.
              </p>
            </div>
          </div>

          <div className="relative z-10 px-6 lg:px-10 pb-6 lg:pb-10">
            <div className="rounded-2xl border border-white/10 bg-black/35 backdrop-blur-sm px-5 py-4 flex items-start gap-3 max-w-3xl">
              <CircleHelp className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" strokeWidth={1.8} />
              <p className="text-sm lg:text-base text-zinc-200 font-light leading-relaxed">
                Result: every teammate can ask what to do, why it is done that way, and what changed, then act from shared context.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
