'use client';

import { useState } from 'react';
import { Check, Zap, Users, Shield, Server, ArrowRight } from 'lucide-react';

export default function PricingSection({ onWaitlistClick, onDemoClick }) {
  const [activeTab, setActiveTab] = useState('teams');

  const teamPlans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'For individuals and small teams',
      accent: 'emerald',
      features: [
        'Unlimited boards',
        '3 active collaborators per board',
        '50 AI credits / month',
        'Public sharing',
        'Basic templates',
        'Offline-first sync',
      ],
      cta: 'Start Free',
      ctaStyle: 'border border-zinc-700 text-white hover:bg-zinc-800',
    },
    {
      name: 'Starter',
      price: '$8',
      period: 'per workspace / mo',
      description: 'For small teams getting organized',
      accent: 'blue',
      features: [
        '10 active collaborators',
        '300 AI credits / month',
        'Basic automations',
        'Export features',
        'Private boards',
        'Priority email support',
      ],
      cta: 'Start Free Trial',
      ctaStyle: 'border border-zinc-700 text-white hover:bg-zinc-800',
    },
    {
      name: 'Growth',
      price: '$15',
      period: 'per workspace / mo',
      description: 'For startups and active teams',
      accent: 'purple',
      popular: true,
      features: [
        '25 active collaborators',
        '1,000 AI credits / month',
        'Voice collaboration (Rooms)',
        'Advanced linking',
        'Workflow automation',
        'Everything in Starter',
      ],
      cta: 'Start Free Trial',
      ctaStyle: 'bg-white text-black hover:bg-zinc-200',
    },
    {
      name: 'Scale',
      price: '$25',
      period: 'per workspace / mo',
      description: 'For serious teams at full speed',
      accent: 'red',
      features: [
        'Unlimited collaborators',
        'Advanced analytics',
        'Admin controls',
        'Priority AI (faster responses)',
        'Version history',
        'Everything in Growth',
      ],
      cta: 'Start Free Trial',
      ctaStyle: 'border border-zinc-700 text-white hover:bg-zinc-800',
    },
  ];

  const dedicatedPlans = [
    {
      name: 'Team Dedicated',
      price: '$99 – $199',
      period: 'per month',
      description: 'For agencies and small companies',
      accent: 'amber',
      features: [
        'Isolated environment',
        'Custom subdomain',
        'Higher AI + collaborator limits',
        'Priority performance',
        'Email & chat support',
      ],
      cta: 'Book a Demo',
      ctaStyle: 'border border-zinc-700 text-white hover:bg-zinc-800',
    },
    {
      name: 'Business Dedicated',
      price: '$299 – $799',
      period: 'per month',
      description: 'For growing companies',
      accent: 'orange',
      popular: true,
      features: [
        'Dedicated compute scaling',
        'SLA uptime guarantee',
        'Advanced permissions',
        'Backup & recovery',
        'Higher AI capacity',
        'Everything in Team Dedicated',
      ],
      cta: 'Book a Demo',
      ctaStyle: 'bg-white text-black hover:bg-zinc-200',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'tailored to you',
      description: 'For corporations with full control',
      accent: 'red',
      features: [
        'Fully isolated deployment',
        'Custom integrations',
        'Dedicated support manager',
        'Advanced security controls',
        'Onboarding assistance',
        'Everything in Business',
      ],
      cta: 'Contact Sales',
      ctaStyle: 'border border-zinc-700 text-white hover:bg-zinc-800',
    },
  ];

  const plans = activeTab === 'teams' ? teamPlans : dedicatedPlans;

  const accentMap = {
    emerald: 'bg-emerald-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    red: 'bg-red-500',
    amber: 'bg-amber-500',
    orange: 'bg-orange-500',
  };

  return (
    <section id="pricing" className="py-20 lg:py-40 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <span className="text-zinc-500 text-sm tracking-[0.4em] uppercase mb-4 lg:mb-6 block">Pricing</span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold brand-font tracking-tight mb-6 lg:mb-8">
            Start <span className="text-zinc-500 italic">free.</span><br />Scale when ready.
          </h2>
          <p className="text-base lg:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
            We charge for workspace value, collaboration intensity, and AI usage — not the number of seats.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="max-w-sm mx-auto mb-12 lg:mb-16">
          <div className="bg-zinc-900 p-1.5 rounded-xl flex gap-1.5 border border-zinc-800">
            <button
              onClick={() => setActiveTab('teams')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'teams'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-zinc-500 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" strokeWidth={1.5} />
              Plans
            </button>
            <button
              onClick={() => setActiveTab('orgs')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeTab === 'orgs'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-zinc-500 hover:text-white'
              }`}
            >
              <Server className="w-4 h-4" strokeWidth={1.5} />
              Dedicated
            </button>
          </div>
          <p className="text-center text-sm text-zinc-500 mt-4 max-w-md mx-auto">
            {activeTab === 'teams'
              ? 'Pick a plan that fits your workflow — from solo projects to growing teams.'
              : 'We spin up a private Bords instance for your organization — isolated infrastructure, custom subdomain, and dedicated performance.'}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className={`grid gap-5 lg:gap-6 ${activeTab === 'teams' ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
          {plans.map((plan, index) => (
            <div
              key={`${activeTab}-${index}`}
              className={`pricing-card relative p-7 lg:p-8 rounded-2xl lg:rounded-3xl border transition-all duration-300 ${
                plan.popular
                  ? 'bg-white text-black border-white shadow-2xl shadow-white/10 lg:scale-[1.03]'
                  : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-black text-[10px] font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Accent dot + name */}
              <div className="flex items-center gap-2.5 mb-4">
                <div className={`w-2.5 h-2.5 rounded-full ${accentMap[plan.accent]}`}></div>
                <h3 className="text-lg lg:text-xl font-semibold brand-font">{plan.name}</h3>
              </div>

              <p className={`text-sm mb-5 ${plan.popular ? 'text-zinc-500' : 'text-zinc-500'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl lg:text-5xl font-bold brand-font">{plan.price}</span>
                <span className={`text-sm ml-2 ${plan.popular ? 'text-zinc-400' : 'text-zinc-600'}`}>
                  / {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fi) => (
                  <li key={fi} className="flex items-start gap-2.5">
                    <Check
                      className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-black' : 'text-zinc-500'}`}
                      strokeWidth={2.5}
                    />
                    <span className={`text-sm ${plan.popular ? 'text-zinc-600' : 'text-zinc-400'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {activeTab === 'teams' ? (
                <button
                  type="button"
                  onClick={() => onWaitlistClick?.(`pricing-${plan.name.toLowerCase()}`)}
                  className={`block w-full text-center px-6 py-3.5 rounded-xl font-semibold text-sm transition-all ${plan.ctaStyle}`}
                >
                  Join Waitlist
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => onDemoClick?.(`dedicated-${plan.name.toLowerCase().replace(/\s+/g, '-')}`)}
                  className={`block w-full text-center px-6 py-3.5 rounded-xl font-semibold text-sm transition-all ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Add-ons strip */}
        {activeTab === 'teams' && (
          <div className="mt-10 lg:mt-14 grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 flex items-start gap-4">
              <div className="p-2 rounded-xl bg-blue-500/10 shrink-0">
                <Zap className="w-4 h-4 text-blue-400" strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-1">Extra AI Credits</p>
                <p className="text-xs text-zinc-500">500 credits for $5 &bull; 1,200 credits for $10</p>
              </div>
            </div>
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-5 flex items-start gap-4">
              <div className="p-2 rounded-xl bg-purple-500/10 shrink-0">
                <Users className="w-4 h-4 text-purple-400" strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white mb-1">More Collaborators</p>
                <p className="text-xs text-zinc-500">+10 active collaborators for $3/month</p>
              </div>
            </div>
          </div>
        )}

        {/* Enterprise CTA for org tab */}
        {activeTab === 'orgs' && (
          <div className="mt-12 lg:mt-16 max-w-2xl mx-auto text-center bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 lg:p-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-zinc-400" strokeWidth={1.5} />
              <span className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Your own environment</span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold brand-font text-white mb-3">Need full control?</h3>
            <p className="text-sm text-zinc-500 mb-6 max-w-md mx-auto">
              Dedicated instances include isolated infrastructure, custom integrations, SLA guarantees, and onboarding assistance.
            </p>
            <button
              type="button"
              onClick={() => onDemoClick?.('dedicated-enterprise-cta')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-xl font-semibold text-sm hover:bg-zinc-200 transition-all"
            >
              Book a Demo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Bottom note */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-zinc-600 text-sm">
            All plans include offline-first architecture, real-time sync, and our core canvas tools.
          </p>
        </div>
      </div>
    </section>
  );
}
