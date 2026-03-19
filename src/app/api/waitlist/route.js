import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

function getSupabaseAdmin() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error('Missing Supabase environment variables');
  }
  return createClient(url, key);
}

export async function POST(request) {
  try {
    const { name, email, source } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();

    const { error } = await supabase.from('waitlist_signups').insert({
      email: email.toLowerCase().trim(),
      name: name?.trim() || null,
      source: source || 'landing-page',
    });

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ message: "You're already on the list!" }, { status: 200 });
      }
      console.error('Supabase waitlist error:', error);
      return NextResponse.json({ error: 'Unable to join waitlist right now.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Successfully joined the waitlist!' }, { status: 201 });
  } catch (err) {
    console.error('Waitlist API error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
