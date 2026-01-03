export default function CTASection() {
  return (
    <section className="py-40 bg-black text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">Turn chaos <br/>into clarity.</h2>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="https://bords-nu.vercel.app" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-white text-black rounded-2xl font-semibold text-lg hover:scale-105 transition-all shadow-xl inline-block text-center">Get Started</a>
          <button className="px-12 py-5 border border-zinc-800 text-white rounded-2xl font-medium text-lg hover:bg-zinc-900 transition-all">Talk to Sales</button>
        </div>
      </div>
    </section>
  );
}
