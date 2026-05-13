import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Hr,
  Preview,
} from '@react-email/components';

export function WaitlistEmail({ name }) {
  const firstName = name ? name.split(' ')[0] : null;
  const greeting = firstName ? `You're on the list, ${firstName}.` : `You're on the list.`;

  return (
    <Html lang="en">
      <Head />
      <Preview>You're on the BORDS waitlist — we'll be in touch soon.</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>

          {/* Wordmark */}
          <Section style={styles.logoSection}>
            <Text style={styles.wordmark}>BORDS</Text>
          </Section>

          {/* Main card */}
          <Section style={styles.card}>
            <Text style={styles.eyebrow}>Waitlist Confirmation</Text>
            <Text style={styles.heading}>{greeting}</Text>
            <Text style={styles.body_text}>
              Thanks for joining the BORDS waitlist. We're building a work OS where your boards, AI,
              and team memory live in one place — and you'll be among the first to get access.
            </Text>

            <Hr style={styles.divider} />

            <Text style={styles.subheading}>What happens next</Text>
            <Text style={styles.body_text}>
              We'll reach out as soon as your spot is ready. Early access is rolling out in batches,
              so keep an eye on your inbox. In the meantime, if you have questions or want to talk
              about your use case, just reply to this email.
            </Text>

            <Hr style={styles.divider} />

            {/* Three pillars */}
            <Section>
              {[
                { label: 'Boards', detail: 'One shared board per project — plans, tasks, guides, and conversations.' },
                { label: 'Company Brain', detail: 'Your team\'s knowledge builds automatically as you work.' },
                { label: 'BORDS AI', detail: 'Ask questions, draft plans, and get answers right inside the board.' },
              ].map((item) => (
                <Section key={item.label} style={styles.pillarRow}>
                  <Text style={styles.pillarLabel}>{item.label}</Text>
                  <Text style={styles.pillarDetail}>{item.detail}</Text>
                </Section>
              ))}
            </Section>
          </Section>

          {/* Footer */}
          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              BORDS · bords.app
            </Text>
            <Text style={styles.footerText}>
              You received this because you joined the waitlist at bords.app.
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

const styles = {
  body: {
    backgroundColor: '#f4f4f5',
    margin: 0,
    padding: 0,
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  },
  container: {
    maxWidth: '560px',
    margin: '0 auto',
    padding: '40px 20px',
  },
  logoSection: {
    marginBottom: '24px',
  },
  wordmark: {
    color: '#09090b',
    fontSize: '18px',
    fontWeight: '700',
    letterSpacing: '2px',
    margin: 0,
  },
  card: {
    backgroundColor: '#ffffff',
    border: '1px solid #e4e4e7',
    borderRadius: '16px',
    padding: '40px 36px',
    marginBottom: '20px',
  },
  eyebrow: {
    color: '#a1a1aa',
    fontSize: '11px',
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    margin: '0 0 14px 0',
  },
  heading: {
    color: '#09090b',
    fontSize: '26px',
    fontWeight: '700',
    letterSpacing: '-0.5px',
    lineHeight: '1.25',
    margin: '0 0 16px 0',
  },
  body_text: {
    color: '#52525b',
    fontSize: '15px',
    lineHeight: '1.65',
    margin: '0 0 0 0',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #e4e4e7',
    margin: '28px 0',
  },
  subheading: {
    color: '#a1a1aa',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    margin: '0 0 12px 0',
  },
  pillarRow: {
    marginBottom: '16px',
  },
  pillarLabel: {
    color: '#18181b',
    fontSize: '14px',
    fontWeight: '600',
    margin: '0 0 2px 0',
  },
  pillarDetail: {
    color: '#71717a',
    fontSize: '13px',
    lineHeight: '1.55',
    margin: 0,
  },
  footer: {
    paddingTop: '4px',
  },
  footerText: {
    color: '#a1a1aa',
    fontSize: '12px',
    lineHeight: '1.6',
    margin: '0 0 4px 0',
  },
};
