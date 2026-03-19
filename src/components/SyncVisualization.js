'use client';

import { useState, useEffect } from 'react';

export default function SyncVisualization() {
  const [syncState, setSyncState] = useState('online');
  const [mounted, setMounted] = useState(false);
  const [changeCount, setChangeCount] = useState(0);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setSyncState(prev => {
        if (prev === 'online') return 'offline';
        if (prev === 'offline') return 'syncing';
        if (prev === 'syncing') return 'synced';
        return 'online';
      });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (syncState === 'offline') {
      const counter = setInterval(() => setChangeCount(c => c + 1), 800);
      return () => clearInterval(counter);
    }
    if (syncState === 'synced' || syncState === 'online') {
      setChangeCount(0);
    }
  }, [syncState]);

  if (!mounted) return null;

  return (
    <div className="relative w-full max-w-3xl mx-auto">
      <div className="bg-zinc-900 rounded-2xl lg:rounded-3xl border border-zinc-800 relative overflow-hidden">

        {/* Top status bar */}
        <div className="flex items-center justify-between px-6 lg:px-8 py-4 border-b border-zinc-800/80">
          <div className="flex items-center gap-3">
            <div className={`w-2.5 h-2.5 rounded-full transition-all duration-700 ${
              syncState === 'online' || syncState === 'synced' ? 'bg-zinc-300' :
              syncState === 'offline' ? 'bg-zinc-600' :
              'bg-zinc-400'
            }`}>
              {(syncState === 'online' || syncState === 'synced') && (
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 animate-ping"></div>
              )}
            </div>
            <span className="text-sm text-zinc-400 font-medium tracking-wide">
              {syncState === 'online' && 'Connected'}
              {syncState === 'offline' && 'Offline'}
              {syncState === 'syncing' && 'Syncing...'}
              {syncState === 'synced' && 'All synced'}
            </span>
          </div>
          <span className="text-xs text-zinc-600 font-mono">YJS CRDT</span>
        </div>

        {/* Main content area */}
        <div className="px-6 lg:px-8 py-8 lg:py-10">

          {/* Three-column: Device | Transfer | Cloud */}
          <div className="grid grid-cols-[1fr_auto_1fr] gap-6 lg:gap-10 items-center">

            {/* Device column */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
                <span className="text-xs text-zinc-500 uppercase tracking-widest">Device</span>
              </div>

              <div className="space-y-2.5">
                {['Board: Sprint Planning', 'Board: Product Roadmap', 'Board: Design System'].map((item, i) => (
                  <div
                    key={i}
                    className={`px-4 py-3 rounded-xl border transition-all duration-700 ${
                      syncState === 'offline'
                        ? 'bg-zinc-800 border-zinc-700 shadow-sm'
                        : syncState === 'syncing' && i < changeCount
                        ? 'bg-zinc-800/40 border-zinc-700/50'
                        : 'bg-zinc-800/60 border-zinc-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zinc-400">{item}</span>
                      {syncState === 'offline' && i < changeCount && (
                        <span className="text-[10px] text-zinc-500 bg-zinc-700/50 px-2 py-0.5 rounded-full">edited</span>
                      )}
                      {syncState === 'synced' && (
                        <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transfer column */}
            <div className="flex flex-col items-center gap-3 py-4">
              {syncState === 'offline' ? (
                <div className="flex flex-col items-center gap-2">
                  <svg className="w-5 h-5 text-zinc-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  <div className="w-px h-12 bg-zinc-800"></div>
                  <span className="text-[10px] text-zinc-600 text-center">No<br/>connection</span>
                </div>
              ) : syncState === 'syncing' ? (
                <div className="flex flex-col items-center gap-2">
                  <div className="relative">
                    <svg className="w-5 h-5 text-zinc-400 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                    </svg>
                  </div>
                  {/* Transfer dots */}
                  <div className="flex flex-col gap-1.5">
                    <div className="w-1 h-1 bg-zinc-500 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-1 h-1 bg-zinc-500 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
                    <div className="w-1 h-1 bg-zinc-500 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
                  </div>
                  <span className="text-[10px] text-zinc-500">Merging</span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <svg className="w-5 h-5 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                  <div className="w-px h-12 bg-zinc-800"></div>
                  <span className="text-[10px] text-zinc-600">In sync</span>
                </div>
              )}
            </div>

            {/* Cloud column */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                </svg>
                <span className="text-xs text-zinc-500 uppercase tracking-widest">Cloud</span>
              </div>

              <div className="space-y-2.5">
                {['Sprint Planning', 'Product Roadmap', 'Design System'].map((item, i) => (
                  <div
                    key={i}
                    className={`px-4 py-3 rounded-xl border transition-all duration-700 ${
                      syncState === 'offline'
                        ? 'bg-zinc-800/30 border-zinc-800/50 opacity-50'
                        : syncState === 'syncing'
                        ? 'bg-zinc-800/50 border-zinc-800'
                        : 'bg-zinc-800/60 border-zinc-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-zinc-400">{item}</span>
                      {syncState === 'synced' && (
                        <svg className="w-3.5 h-3.5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      )}
                      {syncState === 'offline' && (
                        <span className="text-[10px] text-zinc-600">stale</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`px-6 lg:px-8 py-3 border-t transition-all duration-700 ${
          syncState === 'offline' ? 'border-zinc-800 bg-zinc-800/30' :
          syncState === 'syncing' ? 'border-zinc-800 bg-zinc-800/20' :
          'border-zinc-800/60 bg-transparent'
        }`}>
          <div className="flex items-center justify-between">
            <p className="text-xs text-zinc-500">
              {syncState === 'online' && 'Real-time collaboration active'}
              {syncState === 'offline' && `${changeCount} local change${changeCount !== 1 ? 's' : ''} pending`}
              {syncState === 'syncing' && 'Merging changes with conflict-free CRDTs...'}
              {syncState === 'synced' && 'All changes synced — no conflicts'}
            </p>
            <div className="flex gap-1">
              {['online', 'offline', 'syncing', 'synced'].map((s) => (
                <div
                  key={s}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    syncState === s ? 'bg-zinc-400' : 'bg-zinc-800'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
