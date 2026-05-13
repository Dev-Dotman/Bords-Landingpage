import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { render } from '@react-email/render';
import { WaitlistEmail } from '@/lib/email/WaitlistEmail';
import { sendEmail } from '@/lib/email/sendEmail';

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

    // Send confirmation email — non-blocking, don't fail the request if it errors
    try {
      const html = await render(WaitlistEmail({ name: name?.trim() || null }));
      await sendEmail({
        to: email.toLowerCase().trim(),
        toName: name?.trim() || undefined,
        subject: "You're on the BORDS waitlist",
        html,
      });
    } catch (emailErr) {
      console.error('Waitlist email send error:', emailErr);
    }

    // Notify team — non-blocking
    try {
      await sendEmail({
        to: 'usebords@gmail.com',
        toName: 'BORDS Team',
        subject: `New waitlist signup: ${name?.trim() || email.toLowerCase().trim()}`,
        html: `<p><strong>Name:</strong> ${name?.trim() || '—'}</p><p><strong>Email:</strong> ${email.toLowerCase().trim()}</p><p><strong>Source:</strong> ${source || 'landing-page'}</p><p><strong>Time:</strong> ${new Date().toUTCString()}</p>`,
      });
    } catch (notifyErr) {
      console.error('Waitlist notify error:', notifyErr);
    }

    return NextResponse.json({ message: 'Successfully joined the waitlist!' }, { status: 201 });
  } catch (err) {
    console.error('Waitlist API error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
