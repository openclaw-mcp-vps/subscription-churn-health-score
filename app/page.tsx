export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">

      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Churn Risk Intelligence
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know Which Subscribers Are About to Leave —{' '}
          <span className="text-[#58a6ff]">Before They Do</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          ChurnGuard analyzes user behavior patterns across your SaaS and generates real-time health scores so you can intervene before a cancellation happens.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $17/mo
        </a>
        <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. No contracts.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[
            { stat: '34%', label: 'Avg churn reduction' },
            { stat: '2 min', label: 'Setup time' },
            { stat: '100+', label: 'Subscribers supported' },
          ].map(({ stat, label }) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 max-w-sm mx-auto text-center shadow-lg shadow-[#58a6ff]/5">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$17</div>
          <div className="text-[#8b949e] text-sm mb-6">/month · billed monthly</div>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              'Unlimited subscriber health scores',
              'Real-time churn risk alerts',
              'Automated intervention playbooks',
              'API + CSV data import',
              'Email digest reports',
              'Priority support',
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-sm"
          >
            Get Started — $17/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does ChurnGuard calculate health scores?',
              a: 'We connect to your customer data via API and analyze behavioral signals — login frequency, feature usage, support tickets, and billing events — to produce a 0–100 churn risk score for each subscriber.'
            },
            {
              q: 'What integrations are supported?',
              a: 'ChurnGuard works with any platform via REST API or CSV import. Native connectors for Stripe, Paddle, and common SaaS databases are included out of the box.'
            },
            {
              q: 'Can I cancel my subscription at any time?',
              a: 'Yes. There are no contracts or lock-in periods. Cancel from your account dashboard at any time and you will not be charged again.'
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pt-8 border-t border-[#30363d]">
        © {new Date().getFullYear()} ChurnGuard. All rights reserved.
      </footer>
    </main>
  )
}
