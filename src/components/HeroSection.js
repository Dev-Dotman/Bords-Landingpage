'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div id="pinContainer" className="relative">
      {/* Hero Section */}
      <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* Mobile Background Image (hidden on desktop) */}
        <div className="absolute inset-0 lg:hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/bord2.png)' }}
          ></div>
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>

        {/* Full-screen blur overlay — sits above laptops, below all text */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-xl z-[5] pointer-events-none overflow-hidden">
          {/* Animated live cursors on overlay */}
          {[
            { name: 'Sarah', color: '#bfdbfe', x: 12, y: 20, delay: 0, anim: 'heroCursorA' },
            { name: 'Alex', color: '#fbcfe8', x: 70, y: 35, delay: 2, anim: 'heroCursorB' },
            { name: 'Mike', color: '#fef9c3', x: 40, y: 70, delay: 4, anim: 'heroCursorC' },
            { name: 'Emily', color: '#bbf7d0', x: 78, y: 78, delay: 3, anim: 'heroCursorD' },
          ].map((cursor, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${cursor.x}%`,
                top: `${cursor.y}%`,
                animationName: cursor.anim,
                animationDuration: '14s',
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                animationDelay: `${cursor.delay}s`,
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" style={{ filter: 'drop-shadow(0 3px 8px rgba(0,0,0,0.5))' }}>
                <path d="M5 3L19 12L12 13L9 20L5 3Z" fill={cursor.color} stroke="rgba(0,0,0,0.3)" strokeWidth="1" />
              </svg>
              <span
                className="absolute left-7 top-0 px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
                style={{ backgroundColor: cursor.color, color: '#000' }}
              >
                {cursor.name}
              </span>
            </div>
          ))}

          <style jsx>{`
            @keyframes heroCursorA {
              0%, 100% { transform: translate(0, 0); opacity: 0.8; }
              15% { transform: translate(120px, -60px); opacity: 1; }
              35% { transform: translate(200px, 40px); opacity: 0.9; }
              55% { transform: translate(80px, 120px); opacity: 1; }
              75% { transform: translate(-40px, 60px); opacity: 0.85; }
              90% { transform: translate(-20px, -30px); opacity: 0.9; }
            }
            @keyframes heroCursorB {
              0%, 100% { transform: translate(0, 0); opacity: 0.8; }
              12% { transform: translate(-100px, 70px); opacity: 0.9; }
              30% { transform: translate(-180px, -30px); opacity: 1; }
              50% { transform: translate(-60px, -100px); opacity: 0.85; }
              70% { transform: translate(50px, -50px); opacity: 1; }
              88% { transform: translate(30px, 40px); opacity: 0.9; }
            }
            @keyframes heroCursorC {
              0%, 100% { transform: translate(0, 0); opacity: 0.8; }
              18% { transform: translate(80px, -90px); opacity: 1; }
              38% { transform: translate(-70px, -140px); opacity: 0.9; }
              55% { transform: translate(-150px, -40px); opacity: 1; }
              72% { transform: translate(-60px, 60px); opacity: 0.85; }
              90% { transform: translate(40px, 30px); opacity: 0.9; }
            }
            @keyframes heroCursorD {
              0%, 100% { transform: translate(0, 0); opacity: 0.8; }
              14% { transform: translate(-80px, -40px); opacity: 1; }
              32% { transform: translate(-140px, 20px); opacity: 0.9; }
              48% { transform: translate(-60px, -70px); opacity: 1; }
              65% { transform: translate(30px, -30px); opacity: 0.85; }
              82% { transform: translate(50px, 40px); opacity: 0.9; }
            }
          `}</style>
        </div>

        {/* Mobile Reveal Text - Only visible on mobile */}
        <div className="mobile-reveal-text lg:hidden absolute inset-0 flex flex-col items-center justify-center text-center px-6 opacity-0 z-20">
          <h2 className="text-5xl sm:text-6xl font-light text-white leading-tight">
            Collaborate <br className="sm:hidden"/>in real time
          </h2>
          <h2 className="text-5xl sm:text-6xl font-light text-white leading-tight mt-8">
            Work <br className="sm:hidden"/>together
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center z-10 hero-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6">
          <h1 className="text-5xl sm:text-6xl md:text-9xl font-semibold leading-[0.95] mb-6 sm:mb-8 tracking-tighter text-white">
            Collaboration <br/><span className="text-zinc-300 lg:text-zinc-600 italic font-light">at its finest<span className="text-blue-200">.</span></span>
          </h1>
          <p className="text-base sm:text-xl text-zinc-200 lg:text-zinc-500 mb-12 max-w-xl mx-auto leading-relaxed font-light px-4">
            Organize visually. Work together <span className="text-pink-200/70">in real time</span>. Build on an <span className="text-blue-200/70">infinite canvas</span>.
          </p>
        </div>

        {/* Reveal Text — above overlay, in section stacking context */}
        <div className="absolute inset-0 z-[8] pointer-events-none hidden lg:block">
          <div className="bg-reveal-text left-[5%] top-[35%] !text-6xl max-w-[40%]" id="revealTextLeft">Collaborate  in real time</div>
          <div className="bg-reveal-text right-[5%] top-[40%] !text-6xl max-w-[40%]" id="revealTextRight">Work  together</div>
        </div>

        {/* 3D Laptop Scene - Desktop Only */}
        <div className="scene-container w-full max-w-full mx-auto h-full flex items-center justify-center overflow-hidden px-4 hidden lg:flex">
          <div className="floor-reflection"></div>
          
          <div className="laptop-group">

            {/* Left Laptop — Personal Dashboard */}
            <div className="laptop-mockup w-[450px] aspect-[16/10] left-[-150px] z-10" id="laptopLeft">
              <div className="laptop-base"></div>
              <div className="laptop-lid h-full">
                <div className="screen-content border-zinc-800">
                  <div className="bezel-top"><div className="camera-dot"></div></div>
                  <div className="flex h-full bg-[#18181b] text-white opacity-50">
                    {/* Mini sidebar */}
                    <div className="w-14 border-r border-zinc-800 p-2 flex flex-col items-center gap-3 pt-4">
                      <div className="w-7 h-7 rounded-lg bg-blue-500/15"></div>
                      <div className="w-5 h-0.5 bg-zinc-800 rounded"></div>
                      <div className="w-5 h-5 rounded bg-zinc-800"></div>
                      <div className="w-5 h-5 rounded bg-blue-500/20"></div>
                      <div className="w-5 h-5 rounded bg-zinc-800"></div>
                    </div>
                    {/* Dashboard content */}
                    <div className="flex-1 p-4">
                      <div className="h-2 w-16 bg-zinc-800 rounded mb-4"></div>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div className="h-10 bg-zinc-800/80 rounded-lg p-2">
                          <div className="h-1 w-6 bg-blue-400/40 rounded mb-1"></div>
                          <div className="h-1 w-8 bg-zinc-700 rounded"></div>
                        </div>
                        <div className="h-10 bg-zinc-800/80 rounded-lg p-2">
                          <div className="h-1 w-6 bg-emerald-400/40 rounded mb-1"></div>
                          <div className="h-1 w-8 bg-zinc-700 rounded"></div>
                        </div>
                      </div>
                      <div className="bg-zinc-800/60 rounded-lg p-2 space-y-1.5">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                          <div className="h-1 flex-1 bg-zinc-700 rounded"></div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                          <div className="h-1 flex-1 bg-zinc-700 rounded"></div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          <div className="h-1 flex-1 bg-zinc-700 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Laptop — Org Dashboard with Metrics */}
            <div className="laptop-mockup w-[450px] aspect-[16/10] right-[-150px] z-10" id="laptopRight">
              <div className="laptop-base"></div>
              <div className="laptop-lid h-full">
                <div className="screen-content border-zinc-800">
                  <div className="bezel-top"><div className="camera-dot"></div></div>
                  <div className="flex h-full bg-[#18181b] text-white opacity-50">
                    {/* Mini sidebar */}
                    <div className="w-14 border-r border-zinc-800 p-2 flex flex-col items-center gap-3 pt-4">
                      <div className="w-7 h-7 rounded-lg bg-purple-500/15"></div>
                      <div className="w-5 h-0.5 bg-zinc-800 rounded"></div>
                      <div className="w-5 h-5 rounded bg-zinc-800"></div>
                      <div className="w-5 h-5 rounded bg-zinc-800"></div>
                      <div className="w-5 h-5 rounded bg-purple-500/20"></div>
                    </div>
                    {/* Metrics content */}
                    <div className="flex-1 p-4">
                      <div className="h-2 w-20 bg-zinc-800 rounded mb-4"></div>
                      <div className="grid grid-cols-3 gap-1.5 mb-3">
                        <div className="h-8 bg-zinc-800/80 rounded-lg"></div>
                        <div className="h-8 bg-zinc-800/80 rounded-lg"></div>
                        <div className="h-8 bg-zinc-800/80 rounded-lg"></div>
                      </div>
                      {/* Mini chart area */}
                      <div className="bg-zinc-800/60 rounded-lg p-3 mb-2">
                        <div className="flex items-end gap-1 h-12">
                          <div className="flex-1 bg-blue-500/20 rounded-sm" style={{height: '40%'}}></div>
                          <div className="flex-1 bg-blue-500/30 rounded-sm" style={{height: '60%'}}></div>
                          <div className="flex-1 bg-blue-500/20 rounded-sm" style={{height: '45%'}}></div>
                          <div className="flex-1 bg-blue-500/40 rounded-sm" style={{height: '80%'}}></div>
                          <div className="flex-1 bg-blue-500/30 rounded-sm" style={{height: '55%'}}></div>
                          <div className="flex-1 bg-emerald-500/40 rounded-sm" style={{height: '90%'}}></div>
                          <div className="flex-1 bg-emerald-500/30 rounded-sm" style={{height: '70%'}}></div>
                        </div>
                      </div>
                      {/* Member avatars */}
                      <div className="flex gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-blue-500/40"></div>
                        <div className="w-5 h-5 rounded-full bg-purple-500/40"></div>
                        <div className="w-5 h-5 rounded-full bg-emerald-500/40"></div>
                        <div className="w-5 h-5 rounded-full bg-pink-500/40"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Laptop — Canvas Workspace (main product view) */}
            <div className="laptop-mockup w-[600px] aspect-[16/10] z-20" id="laptopCenter">
              <div className="laptop-base"></div>
              <div className="laptop-lid h-full">
                <div className="screen-content border-zinc-800">
                  <div className="bezel-top"><div className="camera-dot"></div></div>
                  <div className="flex-1 flex flex-col h-full bg-[#18181b] text-white relative">

                    {/* TopBar - frosted glass */}
                    <div className="flex items-center justify-between px-3 py-1.5 z-10">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-black rounded flex items-center justify-center">
                          <img src="/bordclear.png" alt="" className="w-3 h-3" />
                        </div>
                        <span className="text-[9px] font-bold tracking-tighter">BORDS</span>
                        <div className="w-px h-3 bg-zinc-700"></div>
                        <div className="w-4 h-4 rounded-full bg-blue-500/30"></div>
                        <span className="text-[8px] text-zinc-400">Sprint Board</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        {/* Active collaborators */}
                        <div className="flex -space-x-1.5">
                          <div className="w-4 h-4 rounded-full bg-blue-500 ring-1 ring-zinc-800 text-[6px] font-bold flex items-center justify-center">S</div>
                          <div className="w-4 h-4 rounded-full bg-purple-500 ring-1 ring-zinc-800 text-[6px] font-bold flex items-center justify-center">A</div>
                          <div className="w-4 h-4 rounded-full bg-emerald-500 ring-1 ring-zinc-800 text-[6px] font-bold flex items-center justify-center">M</div>
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                      </div>
                    </div>

                    {/* Canvas area with grid */}
                    <div className="flex-1 relative overflow-hidden" style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}>
                      {/* Sticky notes */}
                      <div className="absolute top-3 left-6 w-20 h-20 bg-yellow-200 rounded-xl p-2 rotate-2 shadow-lg" style={{boxShadow: '0 4px 20px rgba(0,0,0,0.3)'}}>
                        <div className="h-1 w-10 bg-yellow-400/60 rounded mb-1"></div>
                        <div className="h-1 w-8 bg-yellow-400/40 rounded mb-1"></div>
                        <div className="h-1 w-6 bg-yellow-400/30 rounded"></div>
                      </div>
                      <div className="absolute top-5 left-28 w-16 h-16 bg-pink-200 rounded-xl p-2 -rotate-3 shadow-lg" style={{boxShadow: '0 4px 20px rgba(0,0,0,0.3)'}}>
                        <div className="h-1 w-8 bg-pink-400/60 rounded mb-1"></div>
                        <div className="h-1 w-6 bg-pink-400/40 rounded"></div>
                      </div>

                      {/* Kanban board */}
                      <div className="absolute top-2 right-3 w-44 h-[85%] bg-blue-100 rounded-2xl p-2 shadow-lg" style={{boxShadow: '0 4px 20px rgba(0,0,0,0.3)'}}>
                        <div className="h-1 w-8 bg-blue-300/60 rounded mb-2 mx-auto"></div>
                        <div className="flex gap-1.5 h-full">
                          <div className="flex-1 bg-white/60 rounded-lg p-1 space-y-1">
                            <div className="h-5 bg-white rounded p-1">
                              <div className="h-0.5 w-full bg-zinc-300 rounded"></div>
                            </div>
                            <div className="h-5 bg-white rounded p-1">
                              <div className="h-0.5 w-full bg-zinc-300 rounded"></div>
                            </div>
                          </div>
                          <div className="flex-1 bg-white/60 rounded-lg p-1 space-y-1">
                            <div className="h-5 bg-white rounded p-1">
                              <div className="h-0.5 w-full bg-zinc-300 rounded"></div>
                            </div>
                          </div>
                          <div className="flex-1 bg-white/60 rounded-lg p-1 space-y-1">
                            <div className="h-5 bg-white rounded p-1">
                              <div className="h-0.5 w-full bg-zinc-300 rounded"></div>
                            </div>
                            <div className="h-5 bg-white rounded p-1">
                              <div className="h-0.5 w-full bg-zinc-300 rounded"></div>
                            </div>
                            <div className="h-5 bg-white rounded p-1">
                              <div className="h-0.5 w-full bg-zinc-300 rounded"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Checklist */}
                      <div className="absolute bottom-8 left-6 w-28 bg-green-100 rounded-xl p-2 shadow-lg" style={{boxShadow: '0 4px 20px rgba(0,0,0,0.3)'}}>
                        <div className="h-1 w-10 bg-green-400/60 rounded mb-2"></div>
                        <div className="space-y-1">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded bg-emerald-500"></div>
                            <div className="h-0.5 flex-1 bg-green-300/40 rounded"></div>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded bg-emerald-500"></div>
                            <div className="h-0.5 flex-1 bg-green-300/40 rounded"></div>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded border border-green-300"></div>
                            <div className="h-0.5 flex-1 bg-green-300/40 rounded"></div>
                          </div>
                        </div>
                      </div>

                      {/* Connection line SVG */}
                      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 0}}>
                        <path d="M 105 55 C 145 55, 165 30, 200 30" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                      </svg>

                      {/* Right sidebar (tiny) */}
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 bg-zinc-800/80 rounded-l-lg py-2 flex flex-col items-center gap-1.5">
                        <div className="w-2 h-2 rounded bg-zinc-700"></div>
                        <div className="w-2 h-2 rounded bg-zinc-700"></div>
                        <div className="w-2 h-2 rounded bg-zinc-700"></div>
                      </div>
                    </div>

                    {/* Bottom Dock */}
                    <div className="flex items-center justify-center pb-2">
                      <div className="flex items-center gap-1 px-2 py-1 bg-zinc-800/90 rounded-lg border border-zinc-700/50">
                        <div className="w-2.5 h-2.5 rounded bg-zinc-600"></div>
                        <div className="w-px h-3 bg-zinc-700"></div>
                        <div className="w-2.5 h-2.5 rounded bg-yellow-200/60"></div>
                        <div className="w-2.5 h-2.5 rounded bg-zinc-600"></div>
                        <div className="w-2.5 h-2.5 rounded bg-zinc-600"></div>
                        <div className="w-2.5 h-2.5 rounded bg-blue-400/40"></div>
                        <div className="w-px h-3 bg-zinc-700"></div>
                        <div className="w-2.5 h-2.5 rounded bg-zinc-600"></div>
                        <div className="w-2.5 h-2.5 rounded bg-zinc-600"></div>
                        <div className="w-px h-3 bg-zinc-700"></div>
                        <span className="text-[6px] text-zinc-500 px-0.5">100%</span>
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
