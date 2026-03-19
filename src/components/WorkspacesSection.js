'use client';

import { useState } from 'react';
import { User, Building2, ChevronDown, Layout, BarChart3, CheckCircle2, Clock, Users, Bell, Activity, Settings, Star, Inbox } from 'lucide-react';

export default function WorkspacesSection() {
  const [activeWorkspace, setActiveWorkspace] = useState('personal');

  return (
    <section id="workspaces" className="py-20 lg:py-40 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-zinc-500 text-sm tracking-[0.4em] uppercase mb-4 lg:mb-6 block">Workspaces</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold brand-font tracking-tight mb-6 lg:mb-8">
            Personal <span className="text-zinc-600 italic">or</span> team.<br/>Your choice.
          </h2>
          <p className="text-base lg:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Start with your personal workspace, then create organizations when you're ready to collaborate with your team.
          </p>
        </div>

        {/* Workspace Switcher - mirrors actual product DashboardSwitcher */}
        <div className="max-w-md mx-auto mb-12 lg:mb-16">
          <div className="bg-zinc-800/60 p-1.5 rounded-xl flex gap-1.5 border border-zinc-700/50">
            <button
              onClick={() => setActiveWorkspace('personal')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeWorkspace === 'personal'
                  ? 'bg-zinc-100 text-zinc-950 shadow-lg shadow-black/20'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <User className="w-4 h-4" strokeWidth={1.5} />
              Personal
            </button>
            <button
              onClick={() => setActiveWorkspace('organization')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeWorkspace === 'organization'
                  ? 'bg-zinc-100 text-zinc-950 shadow-lg shadow-black/20'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Building2 className="w-4 h-4" strokeWidth={1.5} />
              Organization
            </button>
          </div>
        </div>

        {/* Dashboard Mockups */}
        <div className="relative min-h-[560px] lg:min-h-[680px]">

          {/* ── Personal Dashboard Mockup ── */}
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              activeWorkspace === 'personal'
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8 pointer-events-none'
            }`}
          >
            <div className="bg-zinc-900 rounded-2xl lg:rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl shadow-black/40">
              <div className="flex min-h-[520px] lg:min-h-[640px]">
                {/* Sidebar */}
                <div className="hidden lg:flex flex-col w-56 border-r border-zinc-800 bg-zinc-900/80 p-4 shrink-0">
                  {/* Switcher */}
                  <div className="flex items-center gap-3 p-2 rounded-xl mb-5">
                    <div className="w-9 h-9 rounded-xl bg-blue-500/15 flex items-center justify-center">
                      <User className="w-4 h-4 text-blue-400" strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white truncate">Personal</p>
                      <p className="text-[10px] text-zinc-500">Free plan</p>
                    </div>
                    <ChevronDown className="w-3.5 h-3.5 text-zinc-500 ml-auto" />
                  </div>
                  {/* Nav */}
                  <nav className="space-y-1">
                    {[
                      { icon: Layout, label: 'Overview', active: true },
                      { icon: Inbox, label: 'Inbox', badge: 3 },
                      { icon: Users, label: 'Friends' },
                      { icon: Layout, label: 'Boards' },
                      { icon: Activity, label: 'Activity' },
                      { icon: Settings, label: 'Settings' },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm ${
                          item.active
                            ? 'bg-blue-500/15 text-blue-400 font-medium'
                            : 'text-zinc-500'
                        }`}
                      >
                        <item.icon className="w-4 h-4" strokeWidth={1.5} />
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="ml-auto w-5 h-5 rounded-full bg-blue-500 text-white text-[10px] font-bold flex items-center justify-center">{item.badge}</span>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>

                {/* Main content */}
                <div className="flex-1 p-5 lg:p-8 min-w-0">
                  {/* Welcome */}
                  <div className="mb-6">
                    <h3 className="text-lg lg:text-xl font-bold text-white">Welcome back</h3>
                    <p className="text-sm text-zinc-500 font-light">Here's what's happening in your workspace</p>
                  </div>

                  {/* Quick Stats - mirrors real dashboard grid-cols-4 */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                    {[
                      { value: '12', label: 'Active Tasks', color: 'text-blue-400' },
                      { value: '3', label: 'Boards', color: 'text-zinc-300' },
                      { value: '87%', label: 'Completion', color: 'text-emerald-400' },
                      { value: '2', label: 'Overdue', color: 'text-red-400' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-zinc-800/60 rounded-xl border border-zinc-700/50 p-3 lg:p-4">
                        <p className={`text-xl lg:text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                        <p className="text-[11px] text-zinc-500 mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Two-column: Focus tasks + Boards */}
                  <div className="grid lg:grid-cols-5 gap-4">
                    {/* Focus */}
                    <div className="lg:col-span-3 bg-zinc-800/60 rounded-xl border border-zinc-700/50 p-4">
                      <p className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <Star className="w-3.5 h-3.5 text-blue-400" strokeWidth={2} /> Focus
                      </p>
                      <div className="space-y-2">
                        {[
                          { title: 'Finalize Q2 roadmap', priority: 'high', due: 'Today' },
                          { title: 'Review design mockups', priority: 'medium', due: 'Tomorrow' },
                          { title: 'Update team handbook', priority: 'low', due: 'Mar 22' },
                        ].map((task) => (
                          <div key={task.title} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-700/30 group">
                            <div className={`w-2 h-2 rounded-full ${
                              task.priority === 'high' ? 'bg-red-400' :
                              task.priority === 'medium' ? 'bg-yellow-400' : 'bg-blue-400'
                            }`}></div>
                            <span className="text-sm text-zinc-200 flex-1 truncate">{task.title}</span>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                              task.due === 'Today' ? 'bg-red-500/15 text-red-400' : 'bg-zinc-700 text-zinc-400'
                            }`}>{task.due}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Boards */}
                    <div className="lg:col-span-2 bg-zinc-800/60 rounded-xl border border-zinc-700/50 p-4">
                      <p className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                        <Layout className="w-3.5 h-3.5 text-blue-400" strokeWidth={2} /> Boards
                      </p>
                      <div className="space-y-2">
                        {['Sprint Planning', 'Design System', 'Personal Notes'].map((name) => (
                          <div key={name} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-700/30">
                            <div className="w-8 h-8 rounded-lg bg-blue-500/15 flex items-center justify-center">
                              <Layout className="w-3.5 h-3.5 text-blue-400" strokeWidth={1.5} />
                            </div>
                            <span className="text-sm text-zinc-200 truncate">{name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-4 bg-zinc-800/60 rounded-xl border border-zinc-700/50 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-zinc-500">Weekly progress</span>
                      <span className="text-xs font-bold text-emerald-400">87%</span>
                    </div>
                    <div className="h-2 rounded-full bg-zinc-700 overflow-hidden">
                      <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Organization Dashboard Mockup ── */}
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              activeWorkspace === 'organization'
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8 pointer-events-none'
            }`}
          >
            <div className="bg-zinc-950 rounded-2xl lg:rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl shadow-black/40">
              <div className="flex min-h-[520px] lg:min-h-[640px]">
                {/* Sidebar */}
                <div className="hidden lg:flex flex-col w-56 border-r border-zinc-800 bg-zinc-900/50 p-4 shrink-0">
                  {/* Switcher */}
                  <div className="flex items-center gap-3 p-2 rounded-xl mb-5">
                    <div className="w-9 h-9 rounded-xl bg-purple-500/15 flex items-center justify-center">
                      <Building2 className="w-4 h-4 text-purple-400" strokeWidth={2} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-white truncate">Acme Corp</p>
                      <p className="text-[10px] text-zinc-500">Owner</p>
                    </div>
                    <ChevronDown className="w-3.5 h-3.5 text-zinc-500 ml-auto" />
                  </div>
                  {/* Nav */}
                  <nav className="space-y-1">
                    {[
                      { icon: Layout, label: 'Overview', active: true },
                      { icon: Inbox, label: 'Inbox', badge: 5 },
                      { icon: BarChart3, label: 'Metrics' },
                      { icon: Users, label: 'Members' },
                      { icon: Layout, label: 'Boards' },
                      { icon: Activity, label: 'Activity' },
                      { icon: Settings, label: 'Settings' },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm ${
                          item.active
                            ? 'bg-blue-500/15 text-blue-400 font-medium'
                            : 'text-zinc-500'
                        }`}
                      >
                        <item.icon className="w-4 h-4" strokeWidth={1.5} />
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="ml-auto w-5 h-5 rounded-full bg-blue-500 text-white text-[10px] font-bold flex items-center justify-center">{item.badge}</span>
                        )}
                      </div>
                    ))}
                  </nav>
                </div>

                {/* Main content */}
                <div className="flex-1 p-5 lg:p-8 min-w-0">
                  {/* Header */}
                  <div className="mb-6">
                    <h3 className="text-lg lg:text-xl font-bold text-white">Acme Corp Overview</h3>
                    <p className="text-sm text-zinc-500 font-light">Team performance and activity</p>
                  </div>

                  {/* Org Stats */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                    {[
                      { value: '48', label: 'Active Tasks', icon: CheckCircle2, color: 'text-blue-400', bg: 'bg-blue-500/10' },
                      { value: '8', label: 'Team Boards', icon: Layout, color: 'text-purple-400', bg: 'bg-purple-500/10' },
                      { value: '6', label: 'Members', icon: Users, color: 'text-amber-400', bg: 'bg-amber-500/10' },
                      { value: '92%', label: 'Completion', icon: BarChart3, color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-zinc-900 rounded-xl border border-zinc-800 p-3 lg:p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`p-1.5 rounded-lg ${stat.bg}`}>
                            <stat.icon className={`w-3.5 h-3.5 ${stat.color}`} strokeWidth={2} />
                          </div>
                        </div>
                        <p className={`text-xl lg:text-2xl font-bold text-white`}>{stat.value}</p>
                        <p className="text-[11px] text-zinc-500 mt-0.5">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Completion + Activity row */}
                  <div className="grid lg:grid-cols-2 gap-4">
                    {/* Completion */}
                    <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-4">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-white">Team Completion</span>
                        <span className="text-lg font-bold text-emerald-400">92%</span>
                      </div>
                      <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-500" style={{ width: '92%' }}></div>
                      </div>
                      <div className="flex justify-between mt-3 text-xs text-zinc-500">
                        <span>44 of 48 tasks</span>
                        <span className="flex items-center gap-1 text-emerald-400">↑ 12% this week</span>
                      </div>
                    </div>
                    {/* Recent Activity */}
                    <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-4">
                      <p className="text-sm font-semibold text-white mb-3">Recent Activity</p>
                      <div className="space-y-2.5">
                        {[
                          { text: 'Sarah completed "Update API docs"', color: 'bg-emerald-400', time: '2m' },
                          { text: 'Alex assigned "Fix nav bug" to Mike', color: 'bg-blue-400', time: '15m' },
                          { text: 'New member joined: Emily', color: 'bg-purple-400', time: '1h' },
                        ].map((act, i) => (
                          <div key={i} className="flex items-start gap-2.5">
                            <div className={`w-1.5 h-1.5 rounded-full ${act.color} mt-1.5 shrink-0`}></div>
                            <p className="text-xs text-zinc-400 flex-1 leading-relaxed">{act.text}</p>
                            <span className="text-[10px] text-zinc-600 shrink-0">{act.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Members strip */}
                  <div className="mt-4 bg-zinc-900 rounded-xl border border-zinc-800 p-4">
                    <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">Team Members</p>
                    <div className="flex items-center gap-3 overflow-hidden">
                      {['Sarah', 'Alex', 'Mike', 'Emily', 'Jordan', 'Kim'].map((name, i) => (
                        <div key={name} className="flex flex-col items-center gap-1.5 shrink-0">
                          <div className={`w-9 h-9 rounded-full text-[11px] font-semibold text-white flex items-center justify-center ${
                            ['bg-blue-500', 'bg-purple-500', 'bg-emerald-500', 'bg-pink-500', 'bg-amber-500', 'bg-cyan-500'][i]
                          }`}>{name[0]}</div>
                          <span className="text-[10px] text-zinc-500">{name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-sm text-zinc-500">
            Switch between workspaces instantly. <span className="text-white font-medium">Your context, your control.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
