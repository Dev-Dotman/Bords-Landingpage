'use client';

import { useEffect, useState } from 'react';

export default function DemoRequestModal({ isOpen, onClose, source = 'landing-page' }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setName('');
      setEmail('');
      setCompany('');
      setTeamSize('');
      setMessage('');
      setError('');
      setSuccess(false);
      setIsSubmitting(false);
    }
  }, [isOpen]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');

    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail || !cleanEmail.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: cleanEmail,
          company: company.trim() || null,
          team_size: teamSize || null,
          message: message.trim() || null,
          source,
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || 'Unable to submit demo request right now.');
      }

      setSuccess(true);
    } catch (submitError) {
      setError(submitError.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div className="relative w-full max-w-md max-h-[90vh] overflow-y-auto rounded-3xl border border-zinc-800 bg-zinc-950 p-6 lg:p-8 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-zinc-500 hover:text-white"
          aria-label="Close demo request modal"
        >
          x
        </button>

        {success ? (
          <div className="text-center py-6">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">Request received</p>
            <h3 className="text-2xl font-semibold text-white mb-3 brand-font">We&apos;ll be in touch soon.</h3>
            <p className="text-zinc-400 text-sm mb-6">
              Our team will reach out to <span className="text-white">{email}</span> to schedule your demo.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3">Dedicated Plans</p>
            <h3 className="text-2xl lg:text-3xl font-semibold brand-font text-white mb-3">Book a demo</h3>
            <p className="text-zinc-400 text-sm mb-6">
              See how Bords can work for your team with a personalized walkthrough.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="demo-name" className="block text-xs text-zinc-500 mb-1.5">
                  Name
                </label>
                <input
                  id="demo-name"
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-zinc-600"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="demo-email" className="block text-xs text-zinc-500 mb-1.5">
                  Work email
                </label>
                <input
                  id="demo-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-zinc-600"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="demo-company" className="block text-xs text-zinc-500 mb-1.5">
                  Company (optional)
                </label>
                <input
                  id="demo-company"
                  type="text"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-zinc-600"
                  placeholder="Acme Inc."
                />
              </div>

              <div>
                <label htmlFor="demo-team-size" className="block text-xs text-zinc-500 mb-1.5">
                  Team size (optional)
                </label>
                <select
                  id="demo-team-size"
                  value={teamSize}
                  onChange={(event) => setTeamSize(event.target.value)}
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-zinc-600 appearance-none"
                >
                  <option value="">Select...</option>
                  <option value="1-10">1 – 10</option>
                  <option value="11-50">11 – 50</option>
                  <option value="51-200">51 – 200</option>
                  <option value="201-1000">201 – 1,000</option>
                  <option value="1000+">1,000+</option>
                </select>
              </div>

              <div>
                <label htmlFor="demo-message" className="block text-xs text-zinc-500 mb-1.5">
                  Anything we should know? (optional)
                </label>
                <textarea
                  id="demo-message"
                  rows={3}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-zinc-600 resize-none"
                  placeholder="Tell us about your use case..."
                />
              </div>

              {error ? <p className="text-sm text-red-400">{error}</p> : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Submitting...' : 'Request Demo'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
