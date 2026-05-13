import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';
import { render } from '@react-email/render';
import { DemoEmail } from '@/lib/email/DemoEmail';
import { DemoNotifyEmail } from '@/lib/email/DemoNotifyEmail';
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
    const { name, email, company, team_size, message, source } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
    }

    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();

    const { error } = await supabase.from('demo_requests').insert({
      email: email.toLowerCase().trim(),
      name: name.trim(),
      company: company?.trim() || null,
      team_size: team_size || null,
      message: message?.trim() || null,
      source: source || 'landing-page',
    });

    if (error) {
      if (error.code === '23505') {
        return NextResponse.json({ message: "You've already requested a demo — we'll be in touch!" }, { status: 200 });
      }
      console.error('Supabase demo error:', error);
      return NextResponse.json({ error: 'Unable to submit demo request right now.' }, { status: 500 });
    }

    // Send confirmation email — non-blocking, don't fail the request if it errors
    try {
      const html = await render(DemoEmail({ name: name.trim(), company: company?.trim() || null, team_size: team_size || null, message: message?.trim() || null }));
      await sendEmail({
        to: email.toLowerCase().trim(),
        toName: name.trim(),
        subject: "Your BORDS demo request is confirmed",
        html,
      });
    } catch (emailErr) {
      console.error('Demo email send error:', emailErr);
    }

    // Notify team — non-blocking
    try {
      const notifyHtml = await render(DemoNotifyEmail({
        name: name.trim(),
        email: email.toLowerCase().trim(),
        company: company?.trim() || null,
        team_size: team_size || null,
        message: message?.trim() || null,
        source: source || 'landing-page',
        timestamp: new Date().toUTCString(),
      }));
      await sendEmail({
        to: 'usebords@gmail.com',
        toName: 'BORDS Team',
        subject: `New demo request: ${name.trim()}${company?.trim() ? ` (${company.trim()})` : ''}`,
        html: notifyHtml,
      });
    } catch (notifyErr) {
      console.error('Demo notify error:', notifyErr);
    }

    return NextResponse.json({ message: 'Demo request submitted!' }, { status: 201 });
  } catch (err) {
    console.error('Demo API error:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
