'use client';

import { useState } from 'react';
import { StickyNote, CheckSquare, Columns3, Type, Image, Table2, PenTool, Link2, Bell } from 'lucide-react';

export default function CanvasToolsSection() {
  const [hoveredTool, setHoveredTool] = useState(null);

  const tools = [
    {
      icon: StickyNote,
      name: "Sticky Notes",
      description: "Quick ideas with customizable colors. Click to expand into full editing mode."
    },
    {
      icon: CheckSquare,
      name: "Checklists",
      description: "Track tasks with due dates and email reminders. Assign to team members."
    },
    {
      icon: Columns3,
      name: "Kanban Boards",
      description: "Full kanban columns with draggable cards, priorities, and workflows."
    },
    {
      icon: Type,
      name: "Text Blocks",
      description: "Long-form rich text. Write documentation right alongside visual elements."
    },
    {
      icon: Image,
      name: "Media",
      description: "Upload images and files. Cloud storage with drag-and-drop support."
    },
    {
      icon: Table2,
      name: "Tables",
      description: "Structured data in tabular format. Organize info that needs structure."
    },
    {
      icon: PenTool,
      name: "Drawings",
      description: "Freehand sketching with pen, arrows, highlights, and shapes."
    },
    {
      icon: Link2,
      name: "Connections",
      description: "Visual lines linking items. Map relationships and dependencies."
    },
    {
      icon: Bell,
      name: "Reminders",
      description: "Time-based notifications. Never miss a deadline with email alerts."
    }
  ];

  return (
    <section id="canvas-tools" className="py-20 lg:py-40 bg-zinc-950 text-white relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-zinc-500 text-sm tracking-[0.4em] uppercase mb-4 lg:mb-6 block">Infinite Canvas</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold brand-font tracking-tight mb-6 lg:mb-8">
            Everything you need <br/><span className="text-zinc-500 italic">in one place.</span>
          </h2>
          <p className="text-base lg:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Drop any of these modular blocks anywhere on your infinite canvas. Mix, stack, and connect them however you work best.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <div 
                key={index}
                onMouseEnter={() => setHoveredTool(index)}
                onMouseLeave={() => setHoveredTool(null)}
                className="group p-6 lg:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800/60 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-300 cursor-pointer"
                style={{
                  transform: hoveredTool === index ? 'translateY(-4px)' : 'translateY(0)',
                  transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-zinc-800 border border-zinc-700/50 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    hoveredTool === index ? 'bg-zinc-700 border-zinc-600' : ''
                  }`}>
                    <Icon className={`w-5 h-5 lg:w-6 lg:h-6 text-zinc-400 transition-all duration-300 ${
                      hoveredTool === index ? 'text-white' : ''
                    }`} strokeWidth={1.5} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base lg:text-lg font-medium mb-1.5 text-white">{tool.name}</h3>
                    <p className="text-sm text-zinc-500 font-light leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <p className="text-zinc-500 text-sm lg:text-base mb-6">
            Plus grid snapping, connections, and more.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs lg:text-sm text-zinc-600">
            <span className="px-4 py-2 rounded-full border border-zinc-800 hover:border-zinc-700 transition-colors cursor-default">Drag & Drop</span>
            <span className="px-4 py-2 rounded-full border border-zinc-800 hover:border-zinc-700 transition-colors cursor-default">Infinite Canvas</span>
            <span className="px-4 py-2 rounded-full border border-zinc-800 hover:border-zinc-700 transition-colors cursor-default">Real-Time Sync</span>
            <span className="px-4 py-2 rounded-full border border-zinc-800 hover:border-zinc-700 transition-colors cursor-default">Offline Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
