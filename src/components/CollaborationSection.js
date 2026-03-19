'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

export default function CollaborationSection() {
  const [mounted, setMounted] = useState(false);
  const [lines, setLines] = useState([]);
  const canvasRef = useRef(null);
  const yellowRef = useRef(null);
  const pinkRef = useRef(null);
  const blueRef = useRef(null);
  const checklistRef = useRef(null);
  const kanbanRef = useRef(null);

  const calcLines = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const cRect = canvas.getBoundingClientRect();

    const getPoint = (elRef, side, vPos = 0.5) => {
      const el = elRef.current;
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const x = side === 'right' ? r.right - cRect.left : r.left - cRect.left;
      const y = r.top - cRect.top + r.height * vPos;
      return { x, y };
    };

    const newLines = [];
    // Yellow sticky right → Pink sticky left
    const a1 = getPoint(yellowRef, 'right');
    const b1 = getPoint(pinkRef, 'left');
    if (a1 && b1) newLines.push({ from: a1, to: b1 });

    // Blue sticky right → Checklist left
    const a2 = getPoint(blueRef, 'right');
    const b2 = getPoint(checklistRef, 'left');
    if (a2 && b2) newLines.push({ from: a2, to: b2 });

    // Checklist right → Kanban left (at 1/3 height)
    const a3 = getPoint(checklistRef, 'right', 0.33);
    const b3 = getPoint(kanbanRef, 'left', 0.33);
    if (a3 && b3) newLines.push({ from: a3, to: b3 });

    setLines(newLines);
  }, []);

  useEffect(() => {
    setMounted(true);
    // Initial calculation after paint
    const raf = requestAnimationFrame(() => {
      calcLines();
    });
    const ro = new ResizeObserver(() => calcLines());
    if (canvasRef.current) ro.observe(canvasRef.current);
    window.addEventListener('resize', calcLines);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('resize', calcLines);
    };
  }, [calcLines]);

  const cursors = [
    { name: 'Sarah', color: '#bfdbfe', x: 25, y: 35, delay: 0 },
    { name: 'Alex', color: '#fbcfe8', x: 65, y: 45, delay: 1.5 },
    { name: 'Mike', color: '#fef9c3', x: 45, y: 60, delay: 3 }
  ];

  return (
    <section id="collaboration" className="py-20 lg:py-40 bg-gradient-to-b from-black via-zinc-950 to-black text-white relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-zinc-500 text-sm tracking-[0.4em] uppercase mb-4 lg:mb-6 block">Live Collaboration</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold brand-font tracking-tight mb-6 lg:mb-8">
            See teammates <br/><span className="text-zinc-500 italic">in real time.</span>
          </h2>
          <p className="text-base lg:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Watch live cursors move across the board. Know who's editing what. Collaborate without conflict.
          </p>
        </div>

        {/* Collaboration Demo Canvas — mirrors actual BORDS workspace */}
        <div className="relative mx-auto max-w-5xl">
          {/* Canvas frame */}
          <div className="relative bg-zinc-900 rounded-2xl border border-zinc-800 min-h-[520px] lg:min-h-[640px] overflow-hidden shadow-2xl">

            {/* Grid background */}
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>

            {/* ─── TopBar (left) — frosted glass ─── */}
            <div className="absolute top-3 left-3 z-30 flex items-center gap-2 px-3 py-1.5 bg-zinc-800/90 backdrop-blur-xl rounded-xl border border-zinc-700/50 shadow-lg">
              <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center">
                <img src="/bordclear.png" alt="" className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold tracking-tighter text-white">BORDS</span>
              <div className="w-px h-4 bg-zinc-600/50"></div>
              <div className="w-5 h-5 rounded-full bg-blue-500/30"></div>
              <span className="text-[11px] text-zinc-400 font-medium">Sarah</span>
            </div>

            {/* Board name pill (center top) */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-3 py-1.5 bg-zinc-800/90 backdrop-blur-xl rounded-xl border border-zinc-700/50 shadow-lg">
              <span className="text-[11px] font-semibold text-white">Sprint Planning</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-400 font-semibold">EDITOR</span>
              <div className="w-px h-4 bg-zinc-600/50"></div>
              {/* Active collaborators stack */}
              <div className="flex -space-x-1.5">
                {cursors.map((c, i) => (
                  <div key={i} className="w-5 h-5 rounded-full ring-1 ring-zinc-800 text-[8px] font-bold flex items-center justify-center" style={{ backgroundColor: c.color, color: '#000' }}>
                    {c.name[0]}
                  </div>
                ))}
              </div>
            </div>

            {/* TopBar (right) */}
            <div className="absolute top-3 right-3 z-30 flex items-center gap-2 px-3 py-1.5 bg-zinc-800/90 backdrop-blur-xl rounded-xl border border-zinc-700/50 shadow-lg">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                <span className="text-[10px] text-zinc-400 font-medium">3 online</span>
              </div>
            </div>

            {/* ─── Canvas items ─── */}
            <div ref={canvasRef} className="absolute inset-0 pt-12 pb-14">

              {/* Dynamic connection lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-[5]">
                {lines.map((line, i) => {
                  const dx = line.to.x - line.from.x;
                  const cp = Math.abs(dx) * 0.4;
                  return (
                    <path
                      key={i}
                      d={`M ${line.from.x} ${line.from.y} C ${line.from.x + cp} ${line.from.y}, ${line.to.x - cp} ${line.to.y}, ${line.to.x} ${line.to.y}`}
                      stroke="rgba(59,130,246,0.4)"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  );
                })}
                {/* Connection dots at endpoints */}
                {lines.map((line, i) => (
                  <g key={`dots-${i}`}>
                    <circle cx={line.from.x} cy={line.from.y} r="4" fill="#3b82f6" opacity="0.7" />
                    <circle cx={line.to.x} cy={line.to.y} r="4" fill="#3b82f6" opacity="0.7" />
                  </g>
                ))}
              </svg>

              {/* Sticky Note 1 — yellow */}
              <div ref={yellowRef} className="absolute top-[22%] left-6 lg:left-10 w-36 lg:w-44 rounded-2xl p-3 lg:p-4 backdrop-blur-sm border border-black/10 rotate-1 z-10" style={{ backgroundColor: 'rgb(253 224 71 / 0.9)', boxShadow: '0 10px 40px rgba(0,0,0,0.15)' }}>
                <div className="flex items-center gap-1.5 mb-2">
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-gradient-to-r from-zinc-700 to-zinc-600 text-white font-medium">Sticky Note</span>
                </div>
                <div className="space-y-1.5">
                  <div className="h-1.5 w-4/5 bg-yellow-600/30 rounded"></div>
                  <div className="h-1.5 w-3/5 bg-yellow-600/20 rounded"></div>
                  <div className="h-1.5 w-2/3 bg-yellow-600/15 rounded"></div>
                </div>
              </div>

              {/* Sticky Note 2 — pink */}
              <div ref={pinkRef} className="absolute top-[20%] left-44 lg:left-60 w-28 lg:w-36 rounded-2xl p-3 backdrop-blur-sm border border-black/10 -rotate-2 z-10" style={{ backgroundColor: 'rgb(249 168 212 / 0.9)', boxShadow: '0 10px 40px rgba(0,0,0,0.15)' }}>
                <div className="space-y-1.5 mt-1">
                  <div className="h-1.5 w-4/5 bg-pink-600/30 rounded"></div>
                  <div className="h-1.5 w-3/5 bg-pink-600/20 rounded"></div>
                </div>
              </div>

              {/* Sticky Note 3 — blue (smaller, offset) */}
              <div ref={blueRef} className="absolute bottom-20 left-6 lg:left-12 w-28 lg:w-32 rounded-2xl p-3 backdrop-blur-sm border border-black/10 rotate-2 z-10" style={{ backgroundColor: 'rgb(147 197 253 / 0.9)', boxShadow: '0 10px 40px rgba(0,0,0,0.15)' }}>
                <div className="space-y-1.5 mt-1">
                  <div className="h-1.5 w-full bg-blue-600/25 rounded"></div>
                  <div className="h-1.5 w-2/3 bg-blue-600/15 rounded"></div>
                </div>
              </div>

              {/* Kanban Board — rounded-3xl like real product */}
              <div ref={kanbanRef} className="absolute top-[38%] right-4 lg:right-8 w-56 lg:w-72 rounded-3xl border border-white/20 backdrop-blur-sm z-10" style={{ backgroundColor: 'rgb(191 219 254 / 0.85)', boxShadow: '0 10px 40px rgba(0,0,0,0.15)' }}>
                {/* Kanban header */}
                <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-200/50">
                  <span className="text-[11px] font-semibold text-gray-800">Sprint Board</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-white/80 text-gray-700">6</span>
                </div>
                {/* Columns */}
                <div className="flex gap-1.5 p-2">
                  {/* To Do */}
                  <div className="flex-1 bg-zinc-50/80 rounded-2xl p-1.5">
                    <div className="text-[8px] font-semibold text-gray-600 px-1 mb-1 truncate">To Do</div>
                    <div className="space-y-1">
                      <div className="p-1.5 rounded-xl border border-zinc-200/60 bg-white">
                        <div className="h-1 w-full bg-zinc-300 rounded mb-1"></div>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500"></div>
                          <div className="h-0.5 w-6 bg-zinc-200 rounded"></div>
                        </div>
                      </div>
                      <div className="p-1.5 rounded-xl border border-zinc-200/60 bg-white">
                        <div className="h-1 w-3/4 bg-zinc-300 rounded mb-1"></div>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div>
                          <div className="h-0.5 w-4 bg-zinc-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* In Progress */}
                  <div className="flex-1 bg-zinc-50/80 rounded-2xl p-1.5">
                    <div className="text-[8px] font-semibold text-gray-600 px-1 mb-1 truncate">In Progress</div>
                    <div className="space-y-1">
                      <div className="p-1.5 rounded-xl border border-zinc-200/60 bg-white">
                        <div className="h-1 w-full bg-zinc-300 rounded mb-1"></div>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                          <div className="h-0.5 w-5 bg-zinc-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Done */}
                  <div className="flex-1 bg-zinc-50/80 rounded-2xl p-1.5">
                    <div className="text-[8px] font-semibold text-gray-600 px-1 mb-1 truncate">Done</div>
                    <div className="space-y-1">
                      <div className="p-1.5 rounded-xl border border-zinc-200/60 bg-white">
                        <div className="h-1 w-full bg-zinc-300 rounded mb-1 line-through opacity-60"></div>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                          <div className="h-0.5 w-5 bg-zinc-200 rounded"></div>
                        </div>
                      </div>
                      <div className="p-1.5 rounded-xl border border-zinc-200/60 bg-white">
                        <div className="h-1 w-2/3 bg-zinc-300 rounded mb-1 opacity-60"></div>
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                          <div className="h-0.5 w-4 bg-zinc-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Checklist — green, rounded-3xl */}
              <div ref={checklistRef} className="absolute bottom-16 left-40 lg:left-52 w-40 lg:w-48 rounded-3xl p-3 backdrop-blur-md border border-black/10 z-10" style={{ backgroundColor: 'rgb(134 239 172 / 0.85)', boxShadow: '0 10px 40px rgba(0,0,0,0.15)' }}>
                <div className="text-[10px] font-semibold text-gray-800 mb-2">Launch Checklist</div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-xl px-2 py-1.5 border border-white/50">
                    <div className="w-3 h-3 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <svg className="w-2 h-2" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div className="h-1 flex-1 bg-gray-400/30 rounded line-through"></div>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-xl px-2 py-1.5 border border-white/50">
                    <div className="w-3 h-3 rounded-md bg-emerald-500 text-white flex items-center justify-center shrink-0">
                      <svg className="w-2 h-2" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div className="h-1 flex-1 bg-gray-400/30 rounded line-through"></div>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-xl px-2 py-1.5 border border-white/50">
                    <div className="w-3 h-3 rounded-md bg-white/80 border border-black/10 shrink-0"></div>
                    <div className="h-1 flex-1 bg-gray-600/20 rounded"></div>
                  </div>
                  <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-xl px-2 py-1.5 border border-white/50">
                    <div className="w-3 h-3 rounded-md bg-white/80 border border-black/10 shrink-0"></div>
                    <div className="h-1 flex-1 bg-gray-600/20 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar strip */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 bg-zinc-800/90 backdrop-blur-xl rounded-l-2xl py-3 flex flex-col items-center gap-2.5 border-l border-zinc-700/50 z-20">
                <div className="w-3 h-3 rounded bg-zinc-600"></div>
                <div className="w-3 h-3 rounded bg-zinc-600"></div>
                <div className="w-3 h-3 rounded bg-zinc-600"></div>
                <div className="w-3 h-3 rounded bg-zinc-600"></div>
              </div>
            </div>

            {/* ─── Bottom Dock ─── */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1 px-3 py-1.5 bg-zinc-800/90 backdrop-blur-xl rounded-2xl border border-zinc-700/50 shadow-lg">
              {/* Navigation group */}
              <div className="w-4 h-4 rounded bg-zinc-600 hover:scale-125 transition-transform"></div>
              <div className="w-4 h-4 rounded bg-zinc-600 hover:scale-125 transition-transform"></div>
              <div className="w-px h-5 bg-zinc-600/30 mx-0.5"></div>
              {/* Content creation */}
              <div className="w-4 h-4 rounded bg-yellow-200/60 hover:scale-125 transition-transform"></div>
              <div className="w-4 h-4 rounded bg-zinc-600 hover:scale-125 transition-transform"></div>
              <div className="w-4 h-4 rounded bg-zinc-600 hover:scale-125 transition-transform"></div>
              <div className="w-4 h-4 rounded bg-blue-400/50 hover:scale-125 transition-transform"></div>
              <div className="w-4 h-4 rounded bg-zinc-600 hover:scale-125 transition-transform"></div>
              <div className="w-px h-5 bg-zinc-600/30 mx-0.5"></div>
              {/* Drawing tools */}
              <div className="w-4 h-4 rounded bg-zinc-600 hover:scale-125 transition-transform"></div>
              <div className="w-4 h-4 rounded bg-zinc-600 hover:scale-125 transition-transform"></div>
              <div className="w-4 h-4 rounded bg-zinc-600 hover:scale-125 transition-transform"></div>
              <div className="w-px h-5 bg-zinc-600/30 mx-0.5"></div>
              {/* Zoom */}
              <span className="text-[9px] text-zinc-500 font-medium px-1">100%</span>
            </div>

            {/* Animated Live Cursors */}
            {mounted && cursors.map((cursor, index) => (
              <div
                key={index}
                className="live-cursor absolute pointer-events-none z-[50]"
                style={{
                  left: `${cursor.x}%`,
                  top: `${cursor.y}%`,
                  animationDelay: `${cursor.delay}s`
                }}
              >
                {/* Cursor pointer */}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="cursor-pointer"
                  style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
                >
                  <path
                    d="M5 3L19 12L12 13L9 20L5 3Z"
                    fill={cursor.color}
                    stroke="black"
                    strokeWidth="1"
                  />
                </svg>

                {/* Name badge */}
                <div
                  className="cursor-name-badge absolute left-6 top-0 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap shadow-lg"
                  style={{
                    backgroundColor: cursor.color,
                    color: '#000'
                  }}
                >
                  {cursor.name}
                </div>

                {/* Cursor trail */}
                <div
                  className="cursor-trail absolute w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: cursor.color,
                    opacity: 0.6,
                    left: '12px',
                    top: '12px'
                  }}
                ></div>
              </div>
            ))}

            {/* Sync indicator */}
            <div className="absolute bottom-12 right-12 flex items-center gap-2 bg-zinc-800/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-zinc-700/50 z-20">
              <div className="sync-pulse w-1.5 h-1.5 rounded-full bg-green-400"></div>
              <span className="text-[10px] text-zinc-300 font-medium">Live</span>
            </div>
          </div>

          {/* Online users list */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {cursors.map((cursor, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm border-2 border-zinc-900"
                    style={{ backgroundColor: cursor.color, color: '#000' }}
                  >
                    {cursor.name.charAt(0)}
                  </div>
                ))}
              </div>
              <span className="text-sm text-zinc-500">{cursors.length} collaborators online</span>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-20 lg:mt-32">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-blue-200/10 border border-blue-200/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-2">Live Awareness</h4>
            <p className="text-sm text-zinc-500">See exactly where teammates are working with live cursors</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-pink-200/10 border border-pink-200/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-pink-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-2">Instant Sync</h4>
            <p className="text-sm text-zinc-500">Changes appear immediately for everyone on the board</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-yellow-100/10 border border-yellow-100/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-yellow-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold mb-2">Conflict-Free</h4>
            <p className="text-sm text-zinc-500">CRDTs ensure all edits merge without data loss</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes cursorMove {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(40px, -20px);
          }
          50% {
            transform: translate(80px, 30px);
          }
          75% {
            transform: translate(40px, 50px);
          }
        }

        @keyframes cursorPulse {
          0%, 100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.5);
          }
        }

        @keyframes syncPulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.3);
          }
        }

        .live-cursor {
          animation: cursorMove 8s ease-in-out infinite;
        }

        .cursor-trail {
          animation: cursorPulse 2s ease-in-out infinite;
        }

        .sync-pulse {
          animation: syncPulse 2s ease-in-out infinite;
        }

        .cursor-name-badge {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
