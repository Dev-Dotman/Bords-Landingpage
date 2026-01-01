export default function HeroSection() {
  return (
    <div id="pinContainer" className="relative">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-visible">
        
        <div className="max-w-4xl mx-auto text-center z-10 hero-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6">
          <h1 className="text-6xl md:text-9xl font-semibold leading-[0.95] mb-8 tracking-tighter text-white">
            Visual <br/><span className="text-zinc-600 italic font-light">productivity<span className="text-blue-200">.</span></span>
          </h1>
          <p className="text-xl text-zinc-500 mb-12 max-w-xl mx-auto leading-relaxed font-light">
            Organize tasks, ideas, and projects with <span className="text-blue-200/70">drag-and-drop boards</span> and modular blocks.
          </p>
        </div>

        {/* 3D Laptop Scene */}
        <div className="scene-container w-full max-w-6xl mx-auto h-full flex items-center justify-center">
          <div className="floor-reflection"></div>
          
          <div className="laptop-group">
            {/* Reveal Text */}
            <div className="bg-reveal-text left-[5%] top-[35%] !text-5xl md:!text-6xl max-w-[40%]" id="revealTextLeft">Organize  visually</div>
            <div className="bg-reveal-text right-[5%] top-[40%] !text-5xl md:!text-6xl max-w-[40%]" id="revealTextRight">Work  flexibly</div>

            {/* Side Laptops */}
            <div className="laptop-mockup w-[450px] aspect-[16/10] left-[-150px] z-10" id="laptopLeft">
              <div className="laptop-base"></div>
              <div className="laptop-lid h-full">
                <div className="screen-content border-zinc-800">
                  <div className="bezel-top"><div className="camera-dot"></div></div>
                  <div className="p-8 h-full flex flex-col space-y-4 opacity-40">
                    <div className="h-4 w-20 bg-pink-200 rounded"></div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="h-24 bg-zinc-900 rounded-xl border border-zinc-800"></div>
                      <div className="h-24 bg-zinc-900 rounded-xl border border-zinc-800"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="laptop-mockup w-[450px] aspect-[16/10] right-[-150px] z-10" id="laptopRight">
              <div className="laptop-base"></div>
              <div className="laptop-lid h-full">
                <div className="screen-content border-zinc-800">
                  <div className="bezel-top"><div className="camera-dot"></div></div>
                  <div className="p-8 h-full flex flex-col space-y-6 opacity-40">
                    <div className="h-4 w-24 bg-zinc-800 rounded"></div>
                    <div className="flex space-x-3">
                      <div className="w-10 h-10 bg-blue-200 rounded-full"></div>
                      <div className="w-10 h-10 bg-zinc-800 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Laptop */}
            <div className="laptop-mockup w-[600px] aspect-[16/10] z-20" id="laptopCenter">
              <div className="laptop-base"></div>
              <div className="laptop-lid h-full">
                <div className="screen-content border-zinc-800">
                  <div className="bezel-top"><div className="camera-dot"></div></div>
                  <div className="flex-1 flex flex-col h-full bg-[#141414] text-white">
                    <div className="ui-header">
                      <div className="ui-dot"></div>
                      <div className="ui-dot"></div>
                      <div className="ui-dot"></div>
                    </div>
                    <div className="flex-1 p-10 flex space-x-8">
                      <div className="w-1/3 space-y-4">
                        <div className="h-3 w-12 bg-zinc-800 rounded mb-6"></div>
                        <div className="p-4 bg-[#1c1c1c] rounded-xl border border-zinc-800">
                          <div className="h-1.5 w-full bg-zinc-700 rounded mb-2"></div>
                        </div>
                      </div>
                      <div className="w-2/3 space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="aspect-square bg-zinc-900 rounded-2xl p-4 rotate-2 border border-zinc-800"></div>
                          <div className="aspect-square bg-zinc-900 rounded-2xl p-4 -rotate-3 border border-yellow-100/20"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
