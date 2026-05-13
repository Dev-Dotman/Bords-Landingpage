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

export function DemoNotifyEmail({ name, email, company, team_size, message, source, timestamp }) {
  return (
    <Html lang="en">
      <Head />
      <Preview>New demo request: {name}{company ? ` (${company})` : ''}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>

          {/* Wordmark */}
          <Section style={styles.logoSection}>
            <Text style={styles.wordmark}>BORDS</Text>
            <Text style={styles.internalBadge}>Internal · Demo Request Notification</Text>
          </Section>

          {/* Main card */}
          <Section style={styles.card}>
            <Text style={styles.eyebrow}>Demo Request</Text>
            <Text style={styles.heading}>
              {name}{company ? ` from ${company}` : ''} wants a demo
            </Text>
            <Text style={styles.body_text}>
              A new demo request has been submitted. Reach out within 1–2 business days.
            </Text>

            <Hr style={styles.divider} />

            <Text style={styles.subheading}>Contact details</Text>
            <DetailRow label="Name" value={name} />
            <DetailRow label="Email" value={email} />
            {company && <DetailRow label="Company" value={company} />}
            {team_size && <DetailRow label="Team size" value={team_size} />}

            {message && (
              <>
                <Hr style={styles.divider} />
                <Text style={styles.subheading}>Their message</Text>
                <Text style={styles.messageBox}>{message}</Text>
              </>
            )}

            <Hr style={styles.divider} />

            <Text style={styles.subheading}>Metadata</Text>
            <DetailRow label="Source" value={source || 'landing-page'} />
            <DetailRow label="Time" value={timestamp} />
          </Section>

          {/* Footer */}
          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              BORDS internal notification · Do not reply
            </Text>
          </Section>

        </Container>
      </Body>
    </Html>
  );
}

function DetailRow({ label, value }) {
  return (
    <Section style={{ marginBottom: '12px' }}>
      <Text style={styles.detailLabel}>{label}</Text>
      <Text style={styles.detailValue}>{value}</Text>
    </Section>
  );
}

const styles = {
  body: {
    backgroundColor: '#09090b',
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
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: '700',
    letterSpacing: '2px',
    margin: '0 0 4px 0',
  },
  internalBadge: {
    color: '#71717a',
    fontSize: '11px',
    letterSpacing: '1px',
    margin: 0,
  },
  card: {
    backgroundColor: '#18181b',
    border: '1px solid #27272a',
    borderRadius: '16px',
    padding: '36px 32px',
    marginBottom: '20px',
  },
  eyebrow: {
    color: '#60a5fa',
    fontSize: '11px',
    letterSpacing: '2.5px',
    textTransform: 'uppercase',
    margin: '0 0 12px 0',
  },
  heading: {
    color: '#ffffff',
    fontSize: '22px',
    fontWeight: '700',
    letterSpacing: '-0.4px',
    lineHeight: '1.3',
    margin: '0 0 14px 0',
  },
  body_text: {
    color: '#a1a1aa',
    fontSize: '14px',
    lineHeight: '1.6',
    margin: 0,
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #27272a',
    margin: '24px 0',
  },
  subheading: {
    color: '#d4d4d8',
    fontSize: '13px',
    fontWeight: '600',
    margin: '0 0 16px 0',
  },
  detailLabel: {
    color: '#71717a',
    fontSize: '11px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    margin: '0 0 2px 0',
  },
  detailValue: {
    color: '#e4e4e7',
    fontSize: '14px',
    fontWeight: '500',
    margin: 0,
  },
  messageBox: {
    color: '#d4d4d8',
    fontSize: '14px',
    lineHeight: '1.65',
    backgroundColor: '#09090b',
    border: '1px solid #27272a',
    borderRadius: '10px',
    padding: '14px 16px',
    margin: 0,
    fontStyle: 'italic',
  },
  footer: {
    textAlign: 'center',
  },
  footerText: {
    color: '#3f3f46',
    fontSize: '11px',
    margin: '4px 0',
  },
};
