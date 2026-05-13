'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { MessageCircle, X, Send, RotateCcw } from 'lucide-react';

const SUGGESTED = [
  'What is BORDS?',
  'How does pricing work?',
  'Can I use it offline?',
  'What is the Company Brain?',
];

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className="w-1.5 h-1.5 rounded-full bg-zinc-500 animate-bounce"
          style={{ animationDelay: `${i * 150}ms`, animationDuration: '900ms' }}
        />
      ))}
    </div>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const abortRef = useRef(null);

  // Scroll to bottom on new content
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streaming]);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 120);
  }, [open]);

  const sendMessage = useCallback(async (text) => {
    const content = text.trim();
    if (!content || streaming) return;

    const userMessage = { role: 'user', content };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput('');
    setStreaming(true);

    // Placeholder assistant message we'll stream into
    setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

    abortRef.current = new AbortController();

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: nextMessages }),
        signal: abortRef.current.signal,
      });

      if (!res.ok) {
        const { error } = await res.json().catch(() => ({}));
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'assistant', content: error || 'Something went wrong. Please try again.' };
          return updated;
        });
        setStreaming(false);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop(); // keep incomplete line

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6).trim();
          if (data === '[DONE]') break;
          try {
            const parsed = JSON.parse(data);
            const delta = parsed.choices?.[0]?.delta?.content;
            if (delta) {
              setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = {
                  role: 'assistant',
                  content: (updated[updated.length - 1].content || '') + delta,
                };
                return updated;
              });
            }
          } catch {
            // Ignore malformed SSE chunks
          }
        }
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        setMessages(prev => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: 'assistant', content: 'Something went wrong. Please try again.' };
          return updated;
        });
      }
    } finally {
      setStreaming(false);
    }
  }, [messages, streaming]);

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleReset = () => {
    abortRef.current?.abort();
    setMessages([]);
    setInput('');
    setStreaming(false);
  };

  const isEmpty = messages.length === 0;

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-label={open ? 'Close chat' : 'Ask about BORDS'}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-13 h-13 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          open
            ? 'bg-zinc-800 border border-zinc-700 text-zinc-400 hover:bg-zinc-700'
            : 'bg-white text-zinc-950 hover:scale-105'
        }`}
        style={{ width: 52, height: 52 }}
      >
        {open
          ? <X className="w-4 h-4" strokeWidth={2} />
          : <MessageCircle className="w-5 h-5" strokeWidth={1.8} />
        }
      </button>

      {/* Chat panel */}
      <div
        className={`fixed z-50 transition-all duration-300 origin-bottom-right
          inset-x-3 bottom-[72px] top-[88px]
          sm:top-auto sm:inset-x-auto sm:bottom-[76px] sm:right-6 sm:w-[360px] sm:max-w-[calc(100vw-24px)] ${
          open ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <div className="bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl shadow-black/60 flex flex-col overflow-hidden h-full sm:h-[480px]"
          style={{ maxHeight: 'calc(100dvh - 100px)' }}>

          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm font-semibold text-white">Bords AI</span>
            </div>
            {!isEmpty && (
              <button
                onClick={handleReset}
                className="text-zinc-600 hover:text-zinc-400 transition-colors"
                aria-label="Reset conversation"
              >
                <RotateCcw className="w-3.5 h-3.5" strokeWidth={2} />
              </button>
            )}
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scroll-smooth">

            {/* Welcome state */}
            {isEmpty && (
              <div className="space-y-4">
                <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    Hi! I can answer questions about BORDS — features, pricing, how it works, who it's for.
                  </p>
                  <p className="text-xs text-zinc-600 mt-2">What would you like to know?</p>
                </div>
                <div className="space-y-2">
                  {SUGGESTED.map(q => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="w-full text-left text-xs text-zinc-400 px-3 py-2.5 rounded-xl border border-zinc-800 hover:border-zinc-700 hover:text-zinc-200 hover:bg-zinc-900/60 transition-all duration-200"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Message thread */}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'assistant' && msg.content === '' && streaming ? (
                  <div className="bg-zinc-900 rounded-2xl rounded-tl-sm border border-zinc-800">
                    <TypingDots />
                  </div>
                ) : (
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                      msg.role === 'user'
                        ? 'bg-white text-zinc-950 rounded-tr-sm'
                        : 'bg-zinc-900 text-zinc-200 rounded-tl-sm border border-zinc-800'
                    }`}
                  >
                    {msg.content}
                  </div>
                )}
              </div>
            ))}

            <div ref={bottomRef} />
          </div>

          {/* Disclaimer */}
          <p className="text-center text-[10px] text-zinc-700 px-4 pb-1 shrink-0">
            Bords AI can make mistakes. Verify important details.
          </p>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-3 py-3 border-t border-zinc-800/80 shrink-0"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask anything about BORDS…"
              disabled={streaming}
              className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2.5 text-base sm:text-sm text-white placeholder-zinc-600 outline-none focus:border-zinc-600 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || streaming}
              className="w-9 h-9 rounded-xl bg-white text-zinc-950 flex items-center justify-center hover:bg-zinc-100 transition-all disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
            >
              <Send className="w-3.5 h-3.5" strokeWidth={2} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
