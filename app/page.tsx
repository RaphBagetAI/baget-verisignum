import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold font-serif text-brand-primary">Verisignum</h1>
        <p className="mt-4 text-xl text-brand-text max-w-2xl mx-auto">
          Compliance-first subscription billing designed to protect elite freelancers and their clients.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/signup"
            className="px-8 py-3 font-semibold text-white bg-brand-primary rounded-md shadow-md hover:bg-opacity-90 transition-transform transform hover:scale-105"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="px-8 py-3 font-semibold text-brand-primary bg-white border border-brand-primary rounded-md shadow-md hover:bg-gray-50 transition-transform transform hover:scale-105"
          >
            Log In
          </Link>
        </div>
      </header>

      <hr className="my-12 border-t-4 border-brand-primary rounded-sm" />

      <section className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center font-serif text-brand-primary">Why Verisignum?</h2>
        <div className="mt-6 space-y-4 text-brand-text text-lg">
          <p>
            Your monthly retainers deserve legally compliant billing with transparent disclosures and simple cancellation.
          </p>
          <p>
            Verisignum guarantees the <strong>Clear & Conspicuous disclosures, Affirmative Consent, and One-Click Cancellation</strong>{' '}
            federal and California ARL standards require.
          </p>
          <p>
            Protect your income and reputation with an audit-ready platform trusted by top-tier freelancers managing $2k–$10k monthly retainers.
          </p>
        </div>
      </section>

      <hr className="my-12 border-t-4 border-brand-primary rounded-sm" />

      <section className="text-center">
        <h2 className="text-3xl font-bold font-serif text-brand-primary">Ready to Secure Your Retainers?</h2>
        <div className="mt-6">
           <Link
            href="/signup"
            className="px-10 py-4 text-lg font-semibold text-white bg-brand-primary rounded-md shadow-lg hover:bg-opacity-90 transition-transform transform hover:scale-105"
          >
            Create Your Account
          </Link>
        </div>
      </section>
    </>
  );
}
