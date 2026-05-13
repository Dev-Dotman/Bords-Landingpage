import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

// Read the knowledge base once at module load (cached per worker)
let knowledgeBase;
function getKnowledgeBase() {
  if (!knowledgeBase) {
    knowledgeBase = readFileSync(join(process.cwd(), 'KNOWLEDGE_BASE.md'), 'utf-8');
  }
  return knowledgeBase;
}

const SYSTEM_PROMPT = `You are a helpful assistant for BORDS, a visual productivity platform built by AXECORE Labs Inc.
Your job is to answer questions about BORDS — what it is, how it works, who it's for, pricing, and features.

Use ONLY the information in the knowledge base below to answer. Do not make up features, pricing, or claims not listed.
If something isn't covered in the knowledge base, say "I'm not sure about that — you can reach us at support@bords.app for more details."

Keep responses concise and conversational. Use short paragraphs. Avoid bullet-point lists unless the question specifically asks for a comparison or list of features.
Never mention that you have a "knowledge base" or that you're an AI — just answer naturally as a BORDS assistant.

---

KNOWLEDGE BASE:
${getKnowledgeBase()}`;

export async function POST(request) {
  try {
    const { messages } = await request.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Messages are required.' }, { status: 400 });
    }

    // Limit conversation history to last 10 messages to stay within token limits
    const recentMessages = messages.slice(-10);

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Chat is not configured.' }, { status: 503 });
    }

    const upstream = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': process.env.NEXT_PUBLIC_SITE_URL || 'https://bords.app',
        'X-Title': 'Bords AI',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...recentMessages,
        ],
        stream: true,
        max_tokens: 512,
        temperature: 0.4,
      }),
    });

    if (!upstream.ok) {
      const text = await upstream.text();
      console.error('OpenRouter error:', upstream.status, text);
      return NextResponse.json({ error: 'Unable to reach AI service.' }, { status: 502 });
    }

    // Stream the response directly back to the client
    return new Response(upstream.body, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (err) {
    console.error('Chat API error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
