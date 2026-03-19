export default function CTASection() {
  return (
    <section className="py-20 lg:py-40 bg-black text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 lg:mb-12">Start collaborating <br/>today.</h2>
        <p className="text-base lg:text-xl text-zinc-400 mb-10 lg:mb-12 max-w-xl mx-auto font-light">
          No credit card required. Create your first board in seconds — upgrade only when you're ready.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="https://bords-nu.vercel.app" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-white text-black rounded-2xl font-semibold text-lg hover:scale-105 transition-all shadow-xl inline-block text-center">Start Free</a>
          <a href="https://bords-nu.vercel.app" target="_blank" rel="noopener noreferrer" className="px-12 py-5 border border-zinc-800 text-white rounded-2xl font-medium text-lg hover:bg-zinc-900 transition-all inline-block text-center">Book a Demo</a>
        </div>
      </div>
    </section>
  );
}
