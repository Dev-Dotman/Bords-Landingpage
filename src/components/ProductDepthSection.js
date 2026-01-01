export default function ProductDepthSection() {
  return (
    <section id="product-depth" className="py-40 bg-black overflow-hidden relative">
      {/* Background Graphic */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div 
          className="absolute inset-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url(/bord2.png)',
            backgroundSize: '70%',
            filter: 'blur(2px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">
        
        {/* Content Left */}
        <div className="space-y-12">
          <div>
            <span className="text-zinc-500 text-sm tracking-[0.4em] uppercase mb-6 block">Modern Productivity</span>
            <h2 className="text-5xl md:text-7xl font-semibold brand-font tracking-tight text-white leading-tight">
              More than a <span className="text-zinc-500 italic">to-do app.</span>
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-px h-24 bg-zinc-800"></div>
              <div>
                <h4 className="text-xl font-medium text-white mb-2">Visual Flexibility</h4>
                <p className="text-zinc-500 font-light leading-relaxed">
                  A digital surface for ideas, tasks, and projects. Organize and move your work freely without being boxed in by rigid structures.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-px h-24 bg-zinc-800"></div>
              <div>
                <h4 className="text-xl font-medium text-white mb-2">Modular by Design</h4>
                <p className="text-zinc-500 font-light leading-relaxed">
                  Everything is a block that can be stacked, linked, or rearranged. Combine the simplicity of sticky notes with the power of modular boards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mockups Right */}
        <div className="stationary-mockup-wrap relative h-[600px] flex items-center justify-end">
          {/* Laptop 1 (Higher) */}
          <div className="stationary-laptop w-[500px] aspect-[16/10] absolute top-0 -right-20 z-10 scale-90 opacity-60">
            <div className="laptop-base"></div>
            <div className="laptop-lid h-full">
              <div className="screen-content border-zinc-800 bg-zinc-900">
                <div className="bezel-top"><div className="camera-dot"></div></div>
                <div className="p-8 opacity-20">
                  <div className="h-4 w-3/4 bg-zinc-700 rounded mb-4"></div>
                  <div className="h-4 w-1/2 bg-zinc-700 rounded"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Laptop 2 (Lower/Foreground) */}
          <div className="stationary-laptop w-[550px] aspect-[16/10] absolute bottom-10 -right-10 z-20">
            <div className="laptop-base shadow-2xl"></div>
            <div className="laptop-lid h-full">
              <div className="screen-content border-zinc-800 shadow-2xl">
                <div className="bezel-top"><div className="camera-dot"></div></div>
                <div className="ui-header">
                  <div className="ui-dot"></div>
                  <div className="ui-dot"></div>
                  <div className="ui-dot"></div>
                </div>
                <div className="flex-1 overflow-hidden">
                  <img 
                    src="/bord3.png" 
                    alt="BORDS Interface" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
