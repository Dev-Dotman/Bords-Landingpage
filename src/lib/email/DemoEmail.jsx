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

export function DemoEmail({ name, company, team_size, message }) {
  const firstName = name ? name.split(' ')[0] : name;

  return (
    <Html lang="en">
      <Head />
      <Preview>Your BORDS demo request is confirmed — we'll be in touch within 1–2 business days.</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>

          {/* Wordmark */}
          <Section style={styles.logoSection}>
            <Text style={styles.wordmark}>BORDS</Text>
          </Section>

          {/* Main card */}
          <Section style={styles.card}>
            <Text style={styles.eyebrow}>Demo Request</Text>
            <Text style={styles.heading}>
              We got your request, {firstName}.
            </Text>
            <Text style={styles.body_text}>
              Thanks for reaching out. Someone from the BORDS team will be in touch within
              1–2 business days to schedule your demo and learn more about how you work.
            </Text>

            <Hr style={styles.divider} />

            {/* Submitted details */}
            <Text style={styles.subheading}>Your submission</Text>
            <Section style={styles.detailsGrid}>
              <DetailRow label="Name" value={name} />
              {company && <DetailRow label="Company" value={company} />}
              {team_size && <DetailRow label="Team size" value={team_size} />}
              {message && <DetailRow label="Your note" value={message} />}
            </Section>

            <Hr style={styles.divider} />

            <Text style={styles.subheading}>What to expect</Text>
            {[
              { step: '01', text: 'A short intro call to understand your team\'s setup and goals.' },
              { step: '02', text: 'A walkthrough of BORDS tailored to how your team works.' },
              { step: '03', text: 'A clear path to getting started — whether that\'s free, team, or a private setup.' },
            ].map((item) => (
              <Section key={item.step} style={styles.stepRow}>
                <Text style={styles.stepNumber}>{item.step}</Text>
                <Text style={styles.stepText}>{item.text}</Text>
              </Section>
            ))}
          </Section>

          {/* Reply nudge */}
          <Section style={styles.replyCard}>
            <Text style={styles.replyText}>
              Questions before the call? Just reply to this email — it goes straight to the team.
            </Text>
          </Section>

          {/* Footer */}
          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              BORDS · bords.app
            </Text>
            <Text style={styles.footerText}>
              You received this because you submitted a demo request at bords.app.
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

function DetailRow({ label, value }) {
  return (
    <Section style={{ marginBottom: '10px' }}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </Section>
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
    marginBottom: '12px',
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
    margin: 0,
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
    margin: '0 0 14px 0',
  },
  detailsGrid: {
    backgroundColor: '#f4f4f5',
    borderRadius: '10px',
    padding: '16px 20px',
    border: '1px solid #e4e4e7',
  },
  detailLabel: {
    color: '#a1a1aa',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    margin: '0 0 2px 0',
  },
  detailValue: {
    color: '#18181b',
    fontSize: '14px',
    margin: 0,
    lineHeight: '1.5',
  },
  stepRow: {
    display: 'flex',
    marginBottom: '14px',
  },
  stepNumber: {
    color: '#d4d4d8',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '1px',
    margin: '0 0 2px 0',
  },
  stepText: {
    color: '#52525b',
    fontSize: '14px',
    lineHeight: '1.6',
    margin: 0,
  },
  replyCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #e4e4e7',
    borderRadius: '12px',
    padding: '20px 24px',
    marginBottom: '20px',
  },
  replyText: {
    color: '#71717a',
    fontSize: '13px',
    lineHeight: '1.6',
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
