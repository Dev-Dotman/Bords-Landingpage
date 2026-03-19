'use client';

import { useEffect, useState } from 'react';

export default function WaitlistModal({ isOpen, onClose, source = 'landing-page' }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
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

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          email: cleanEmail,
          source,
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload.error || 'Unable to join waitlist right now.');
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

      <div className="relative w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-950 p-6 lg:p-8 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-zinc-500 hover:text-white"
          aria-label="Close waitlist modal"
        >
          x
        </button>

        {success ? (
          <div className="text-center py-6">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-4">You are in</p>
            <h3 className="text-2xl font-semibold text-white mb-3 brand-font">Thanks for joining the waitlist.</h3>
            <p className="text-zinc-400 text-sm mb-6">
              We will send your early access invite to <span className="text-white">{email}</span>.
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
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500 mb-3">Early Access</p>
            <h3 className="text-2xl lg:text-3xl font-semibold brand-font text-white mb-3">Join the waitlist</h3>
            <p className="text-zinc-400 text-sm mb-6">
              Get notified as soon as your Bords workspace is ready.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="waitlist-name" className="block text-xs text-zinc-500 mb-1.5">
                  Name (optional)
                </label>
                <input
                  id="waitlist-name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-zinc-600"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="waitlist-email" className="block text-xs text-zinc-500 mb-1.5">
                  Email
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-white outline-none focus:border-zinc-600"
                  placeholder="you@company.com"
                />
              </div>

              {error ? <p className="text-sm text-red-400">{error}</p> : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
