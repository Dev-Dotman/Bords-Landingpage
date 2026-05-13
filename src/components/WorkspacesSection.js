'use client';

import { useState } from 'react';
import { User, Building2, ChevronDown, Layout, BarChart3, CheckCircle2, Clock, Users, Bell, Activity, Settings, Star, Inbox, LayoutDashboard, ListTodo, CalendarDays, MessageSquare, UserRound, TrendingUp, RefreshCw } from 'lucide-react';

export default function WorkspacesSection() {
  const [activeWorkspace, setActiveWorkspace] = useState('personal');

  return (
    <section id="workspaces" className="py-20 lg:py-40 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 lg:mb-24">
          <span className="text-zinc-500 text-sm tracking-[0.4em] uppercase mb-4 lg:mb-6 block">Workspaces</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold brand-font tracking-tight mb-6 lg:mb-8">
            Personal boards <span className="text-zinc-600 italic">to</span> team operations.
          </h2>
          <p className="text-base lg:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            Start solo or with friends, then scale into startup and team workspaces without changing how your system is organized.
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
        <div className="relative lg:min-h-[680px]">

          {/* ── Personal Dashboard Mockup ── */}
          <div
            className={`lg:absolute lg:inset-0 transition-all duration-500 ${
              activeWorkspace === 'personal'
                ? 'opacity-100 translate-x-0'
                : 'hidden lg:block lg:opacity-0 lg:-translate-x-8 pointer-events-none'
            }`}
          >
            <div className="bg-zinc-950 rounded-2xl lg:rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl shadow-black/40">
              <div className="flex min-h-[420px] lg:min-h-[640px]">

                {/* Sidebar */}
                <div className="hidden lg:flex flex-col w-52 border-r border-zinc-800 bg-zinc-900/60 shrink-0">
                  {/* Back to workspace */}
                  <div className="px-4 pt-4 pb-2">
                    <p className="text-[10px] text-zinc-500 flex items-center gap-1.5 cursor-pointer hover:text-zinc-400">
                      <span>←</span> Back to workspace
                    </p>
                  </div>
                  {/* User identity */}
                  <div className="flex items-center gap-2.5 px-4 py-3">
                    <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-xs font-bold text-white">J</div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-white truncate">Jamie Cole</p>
                      <p className="text-[10px] text-zinc-500">Personal workspace</p>
                    </div>
                    <ChevronDown className="w-3 h-3 text-zinc-600 ml-auto shrink-0" />
                  </div>
                  {/* Nav */}
                  <nav className="px-3 mt-1 space-y-0.5 flex-1">
                    {[
                      { icon: LayoutDashboard, label: 'Overview', active: true },
                      { icon: ListTodo, label: 'My Tasks' },
                      { icon: CalendarDays, label: 'Calendar' },
                      { icon: UserRound, label: 'Friends' },
                      { icon: Layout, label: 'Boards' },
                      { icon: MessageSquare, label: 'Chats', badge: 2 },
                      { icon: Activity, label: 'Activity', badge: 1 },
                      { icon: Settings, label: 'Settings' },
                    ].map((item) => (
                      <div key={item.label}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs ${
                          item.active ? 'bg-blue-500/15 text-blue-400 font-medium' : 'text-zinc-500'
                        }`}
                      >
                        <item.icon className="w-3.5 h-3.5 shrink-0" strokeWidth={1.5} />
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="ml-auto w-4 h-4 rounded-full bg-zinc-700 text-zinc-300 text-[9px] font-bold flex items-center justify-center">{item.badge}</span>
                        )}
                      </div>
                    ))}
                  </nav>
                  <div className="px-4 py-3">
                    <p className="text-[9px] text-zinc-600">Member since 3/14/2026</p>
                  </div>
                </div>

                {/* Main content */}
                <div className="flex-1 flex flex-col min-w-0">
                  {/* Top action bar */}
                  <div className="hidden sm:flex items-center justify-end gap-2 px-5 lg:px-6 pt-4 pb-2 border-b border-zinc-800/60">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-700 text-zinc-400 text-xs hover:bg-zinc-800 transition-colors">
                      <RefreshCw className="w-3 h-3" strokeWidth={1.5} /> Refresh
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-700 text-zinc-300 text-xs hover:bg-zinc-800 transition-colors">
                      Boards <span className="text-zinc-500">→</span>
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs hover:bg-blue-500 transition-colors">
                      My Tasks <span>→</span>
                    </button>
                  </div>

                  <div className="flex-1 p-4 lg:p-6 overflow-y-auto lg:overflow-hidden">
                    {/* Header */}
                    <div className="mb-4">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-0.5">Personal Workspace</p>
                      <h3 className="text-lg font-bold text-white">Welcome back, Jamie Cole</h3>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 text-xs text-zinc-500">
                        <span>Wed, May 13</span>
                        <span className="text-zinc-700">·</span>
                        <span>0 in progress</span>
                        <span className="text-zinc-700">·</span>
                        <span>0 completed</span>
                        <span className="text-zinc-700">·</span>
                        <span>2 boards</span>
                      </div>
                    </div>

                    {/* 4 stat cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                      {[
                        { value: '0', label: 'In Progress',   icon: Clock,         iconBg: 'bg-zinc-800',        iconColor: 'text-zinc-400' },
                        { value: '0', label: 'Completed',     icon: CheckCircle2,  iconBg: 'bg-zinc-800',        iconColor: 'text-zinc-400' },
                        { value: '0', label: 'Overdue',       icon: Bell,          iconBg: 'bg-zinc-800',        iconColor: 'text-zinc-400' },
                        { value: '0', label: 'High Priority', icon: Star,          iconBg: 'bg-zinc-800',        iconColor: 'text-zinc-400' },
                      ].map((stat) => (
                        <div key={stat.label} className="bg-zinc-900 rounded-xl border border-zinc-800 p-3 lg:p-4">
                          <stat.icon className={`w-4 h-4 ${stat.iconColor} mb-2`} strokeWidth={1.5} />
                          <p className="text-xl lg:text-2xl font-bold text-white">{stat.value}</p>
                          <p className="text-[10px] text-zinc-500 mt-0.5">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Focus + Recent Boards */}
                    <div className="grid lg:grid-cols-5 gap-3 mb-4">
                      {/* Focus panel */}
                      <div className="lg:col-span-3 bg-zinc-900 rounded-xl border border-zinc-800 p-4">
                        <p className="text-sm font-semibold text-white mb-4">Focus</p>
                        <div className="flex flex-col items-center justify-center py-6 gap-3">
                          <CheckCircle2 className="w-8 h-8 text-zinc-600" strokeWidth={1} />
                          <p className="text-xs text-zinc-500">No active tasks</p>
                          <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-zinc-300 text-xs hover:bg-zinc-700 transition-colors">
                            Open My Tasks <span>→</span>
                          </button>
                        </div>
                      </div>
                      {/* Recent Boards */}
                      <div className="lg:col-span-2 bg-zinc-900 rounded-xl border border-zinc-800 p-4">
                        <p className="text-sm font-semibold text-white mb-3">Recent Boards</p>
                        <div className="space-y-2">
                          {[
                            { name: 'Client Onboarding', date: '5/1/2026' },
                            { name: 'Q3 Product Roadmap', date: '4/30/2026' },
                          ].map((board) => (
                            <div key={board.name} className="flex items-center gap-3 px-2 py-2.5 rounded-lg hover:bg-zinc-800 group">
                              <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/20 flex items-center justify-center shrink-0">
                                <Layout className="w-3 h-3 text-blue-400" strokeWidth={1.5} />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-xs text-zinc-200 truncate">{board.name}</p>
                                <p className="text-[10px] text-zinc-600">{board.date}</p>
                              </div>
                              <span className="text-zinc-600 text-xs opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Overall Progress */}
                    <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-white">Overall Progress</span>
                        <span className="text-sm font-bold text-white">0%</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-800 overflow-hidden mb-2">
                        <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-teal-400" style={{ width: '0%' }}></div>
                      </div>
                      <p className="text-[10px] text-zinc-600">0 of 0 tasks completed</p>
                      <div className="flex items-center gap-1.5 mt-3 text-[10px] text-zinc-500 justify-center">
                        <ChevronDown className="w-3 h-3" strokeWidth={1.5} />
                        <span>Show Analytics</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Organization Dashboard Mockup ── */}
          <div
            className={`lg:absolute lg:inset-0 transition-all duration-500 ${
              activeWorkspace === 'organization'
                ? 'opacity-100 translate-x-0'
                : 'hidden lg:block lg:opacity-0 lg:translate-x-8 pointer-events-none'
            }`}
          >
            <div className="bg-zinc-950 rounded-2xl lg:rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl shadow-black/40">
              <div className="flex min-h-[420px] lg:min-h-[640px]">

                {/* Sidebar */}
                <div className="hidden lg:flex flex-col w-52 border-r border-zinc-800 bg-zinc-900/60 shrink-0">
                  {/* Back to workspace */}
                  <div className="px-4 pt-4 pb-2">
                    <p className="text-[10px] text-zinc-500 flex items-center gap-1.5 cursor-pointer hover:text-zinc-400">
                      <span>←</span> Back to workspace
                    </p>
                  </div>
                  {/* Org identity */}
                  <div className="flex items-center gap-2.5 px-4 py-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-sm">👑</div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-white truncate">Axecore Labs</p>
                      <p className="text-[10px] text-zinc-500">Owner</p>
                    </div>
                  </div>
                  {/* Nav */}
                  <nav className="px-3 mt-1 space-y-0.5 flex-1">
                    {[
                      { icon: LayoutDashboard, label: 'Dashboard', active: true },
                      { icon: ListTodo, label: 'Tasks' },
                      { icon: CalendarDays, label: 'Calendar' },
                      { icon: MessageSquare, label: 'Chats', badge: 2 },
                      { icon: Layout, label: 'Boards' },
                      { icon: UserRound, label: 'People' },
                      { icon: TrendingUp, label: 'Insights' },
                      { icon: Activity, label: 'Activity', badge: 1 },
                      { icon: Settings, label: 'Settings' },
                    ].map((item) => (
                      <div key={item.label}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs ${
                          item.active ? 'bg-blue-500/15 text-blue-400 font-medium' : 'text-zinc-500'
                        }`}
                      >
                        <item.icon className="w-3.5 h-3.5 shrink-0" strokeWidth={1.5} />
                        <span>{item.label}</span>
                        {item.badge && (
                          <span className="ml-auto w-4 h-4 rounded-full bg-zinc-700 text-zinc-300 text-[9px] font-bold flex items-center justify-center">{item.badge}</span>
                        )}
                      </div>
                    ))}
                  </nav>
                  <div className="px-4 py-3">
                    <p className="text-[9px] text-zinc-600">Created 3/15/2026</p>
                  </div>
                </div>

                {/* Main content */}
                <div className="flex-1 flex flex-col min-w-0">
                  {/* Top action bar */}
                  <div className="hidden sm:flex items-center justify-end gap-2 px-5 lg:px-6 pt-4 pb-2 border-b border-zinc-800/60">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-700 text-zinc-400 text-xs hover:bg-zinc-800 transition-colors">
                      <RefreshCw className="w-3 h-3" strokeWidth={1.5} /> Refresh
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-700 text-zinc-300 text-xs hover:bg-zinc-800 transition-colors">
                      Boards <span className="text-zinc-500">→</span>
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs hover:bg-blue-500 transition-colors">
                      People <span>→</span>
                    </button>
                  </div>

                  <div className="flex-1 p-4 lg:p-6 overflow-y-auto lg:overflow-hidden">
                    {/* Header: org name + metadata */}
                    <div className="mb-4">
                      <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-0.5">Axecore Labs</p>
                      <h3 className="text-lg font-bold text-white">Dashboard</h3>
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 text-xs text-zinc-500">
                        <span>Wed, May 13</span>
                        <span className="text-zinc-700">·</span>
                        <span>5 members</span>
                        <span className="text-zinc-700">·</span>
                        <span>14 boards</span>
                        <span className="text-zinc-700">·</span>
                        <span>25% complete</span>
                      </div>
                    </div>

                    {/* 4 stat cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
                      {[
                        { value: '5',  label: 'Team Members',    iconBg: 'bg-blue-500/15',   iconColor: 'text-blue-400',   icon: Users },
                        { value: '14', label: 'Active Boards',   iconBg: 'bg-purple-500/15', iconColor: 'text-purple-400', icon: Layout },
                        { value: '9',  label: 'Tasks Assigned',  iconBg: 'bg-amber-500/15',  iconColor: 'text-amber-400',  icon: Clock },
                        { value: '3',  label: 'Tasks Completed', iconBg: 'bg-emerald-500/15',iconColor: 'text-emerald-400',icon: CheckCircle2 },
                      ].map((stat) => (
                        <div key={stat.label} className="bg-zinc-900 rounded-xl border border-zinc-800 p-3 lg:p-4">
                          <div className={`w-7 h-7 rounded-lg ${stat.iconBg} flex items-center justify-center mb-2`}>
                            <stat.icon className={`w-3.5 h-3.5 ${stat.iconColor}`} strokeWidth={1.8} />
                          </div>
                          <p className="text-xl lg:text-2xl font-bold text-white">{stat.value}</p>
                          <p className="text-[10px] text-zinc-500 mt-0.5">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Task completion bar */}
                    <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-4 mb-4">
                      <div className="flex items-center justify-between mb-1">
                        <div>
                          <p className="text-sm font-semibold text-white">Task Completion</p>
                          <p className="text-[10px] text-zinc-500">3 of 12 tasks completed</p>
                        </div>
                        <span className="text-xl font-bold text-white">25%</span>
                      </div>
                      <div className="h-2.5 rounded-full bg-zinc-800 overflow-hidden my-3">
                        <div className="h-full rounded-full bg-gradient-to-r from-blue-500 to-teal-400" style={{ width: '25%' }}></div>
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[10px] text-zinc-500">
                        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-zinc-600 inline-block"></span> Draft: 0</span>
                        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400 inline-block"></span> In Progress: 9</span>
                        <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-teal-400 inline-block"></span> Completed: 3</span>
                      </div>
                    </div>

                    {/* Bottom: Timeline + Donut */}
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                      {/* Assignment Timeline */}
                      <div className="sm:col-span-3 bg-zinc-900 rounded-xl border border-zinc-800 p-4">
                        <p className="text-xs font-semibold text-white mb-3">Assignment Timeline</p>
                        <div className="relative h-24">
                          <svg viewBox="0 0 240 80" className="w-full h-full" preserveAspectRatio="none">
                            {/* Grid lines */}
                            {[0,20,40,60,80].map(y => (
                              <line key={y} x1="0" y1={y} x2="240" y2={y} stroke="#27272a" strokeWidth="0.5"/>
                            ))}
                            {/* Created line (blue) */}
                            <polyline points="0,75 40,70 80,55 120,20 160,18 200,35 240,55" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinejoin="round"/>
                            <path d="M0,75 40,70 80,55 120,20 160,18 200,35 240,55 V80 H0Z" fill="url(#blueGrad)" opacity="0.15"/>
                            {/* Completed line (teal) */}
                            <polyline points="0,78 40,76 80,72 120,65 160,58 200,50 240,45" fill="none" stroke="#2dd4bf" strokeWidth="1.5" strokeLinejoin="round"/>
                            <path d="M0,78 40,76 80,72 120,65 160,58 200,50 240,45 V80 H0Z" fill="url(#tealGrad)" opacity="0.15"/>
                            <defs>
                              <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#3b82f6"/><stop offset="100%" stopColor="transparent"/>
                              </linearGradient>
                              <linearGradient id="tealGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2dd4bf"/><stop offset="100%" stopColor="transparent"/>
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-[10px] text-zinc-500">
                          <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-blue-400 inline-block rounded"></span> Created</span>
                          <span className="flex items-center gap-1.5"><span className="w-3 h-0.5 bg-teal-400 inline-block rounded"></span> Completed</span>
                        </div>
                      </div>
                      {/* Task Status donut */}
                      <div className="sm:col-span-2 bg-zinc-900 rounded-xl border border-zinc-800 p-4">
                        <p className="text-xs font-semibold text-white mb-3">Task Status</p>
                        <div className="flex items-center justify-center">
                          <svg viewBox="0 0 80 80" className="w-20 h-20">
                            {/* Donut: Assigned 75% amber, Completed 25% teal */}
                            <circle cx="40" cy="40" r="28" fill="none" stroke="#27272a" strokeWidth="12"/>
                            <circle cx="40" cy="40" r="28" fill="none" stroke="#f59e0b" strokeWidth="12"
                              strokeDasharray="131.95" strokeDashoffset="0" strokeLinecap="round"
                              transform="rotate(-90 40 40)"/>
                            <circle cx="40" cy="40" r="28" fill="none" stroke="#2dd4bf" strokeWidth="12"
                              strokeDasharray="32.99 131.95" strokeDashoffset="-98.96" strokeLinecap="round"
                              transform="rotate(-90 40 40)"/>
                          </svg>
                        </div>
                        <div className="space-y-1.5 mt-2">
                          {[
                            { label: 'Draft', color: 'bg-zinc-600' },
                            { label: 'Assigned', color: 'bg-amber-400' },
                            { label: 'Completed', color: 'bg-teal-400' },
                          ].map(s => (
                            <div key={s.label} className="flex items-center gap-2 text-[10px] text-zinc-500">
                              <span className={`w-2 h-2 rounded-sm ${s.color} shrink-0`}></span>{s.label}
                            </div>
                          ))}
                        </div>
                      </div>
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
