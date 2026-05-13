"use client";

export default function CTASection({ onWaitlistClick, onDemoClick }) {
  return (
    <section className="py-20 lg:py-40 bg-black text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 lg:mb-12">Bring your team&apos;s <br/>work into one place.</h2>
        <p className="text-base lg:text-xl text-zinc-400 mb-10 lg:mb-12 max-w-xl mx-auto font-light">
          Start for free and invite your team. Need a private setup for your company? Get in touch.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={onWaitlistClick}
            className="px-12 py-5 bg-white text-black rounded-2xl font-semibold text-lg hover:scale-105 transition-all shadow-xl inline-block text-center"
          >
            Join Waitlist
          </button>
          <button type="button" onClick={onDemoClick} className="px-12 py-5 border border-zinc-800 text-white rounded-2xl font-medium text-lg hover:bg-zinc-900 transition-all inline-block text-center">Book a Demo</button>
        </div>
      </div>
    </section>
  );
}
