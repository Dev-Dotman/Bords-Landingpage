/**
 * Send a transactional email via ZeptoMail.
 * Requires env vars:
 *   ZEPTOMAIL_API_KEY     — your Send Mail Token from ZeptoMail
 *   ZEPTOMAIL_FROM_EMAIL  — verified sender address (e.g. hello@bords.app)
 *   ZEPTOMAIL_FROM_NAME   — sender display name (defaults to "BORDS")
 */
export async function sendEmail({ to, toName, subject, html }) {
  const apiKey = process.env.ZEPTOMAIL_API_KEY;
  const fromEmail = process.env.ZEPTOMAIL_FROM_EMAIL;
  const fromName = process.env.ZEPTOMAIL_FROM_NAME || 'BORDS';

  if (!apiKey || !fromEmail) {
    console.warn('[sendEmail] ZeptoMail env vars not configured — skipping send.');
    return;
  }

  const res = await fetch('https://api.zeptomail.com/v1.1/email', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Zoho-enczapikey ${apiKey}`,
    },
    body: JSON.stringify({
      from: { address: fromEmail, name: fromName },
      to: [{ email_address: { address: to, name: toName || to } }],
      subject,
      htmlbody: html,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`ZeptoMail error ${res.status}: ${text}`);
  }

  return res.json();
}
