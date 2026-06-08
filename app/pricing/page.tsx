import Link from 'next/link';

export default function PricingPage() {
  return (
    <>
      <header className="pricing-header">
        <h1 id="main-heading">Find the Right Plan for You</h1>
        <p className="lead">Start for free and scale as you grow. All plans include our compliance guarantee.</p>
      </header>

      <div className="pricing-grid">
        {/* Starter Tier */}
        <div className="pricing-tier">
          <h3>Starter</h3>
          <p className="price">Free</p>
          <p className="description">For freelancers getting started with their first clients.</p>
          <ul className="features">
            <li>Manage up to 3 clients</li>
            <li>Basic invoice tracking</li>
            <li>Standard email receipts</li>
            <li>Compliance-first billing</li>
          </ul>
          <Link href="#" className="btn">Get Started</Link>
        </div>

        {/* Pro Tier */}
        <div className="pricing-tier pro">
          <h3>Pro</h3>
          <p className="price">$49<span>/mo</span></p>
          <p className="description">For established freelancers managing multiple retainers.</p>
          <ul className="features">
            <li>Manage up to 20 clients</li>
            <li>Advanced invoice tracking</li>
            <li>Customizable email receipts</li>
            <li>One-click client retainer setup</li>
            <li>Priority support</li>
          </ul>
          <Link href="#" className="btn">Choose Pro</Link>
        </div>

        {/* Agency Tier */}
        <div className="pricing-tier">
          <h3>Agency</h3>
          <p className="price">Contact Us</p>
          <p className="description">For agencies and teams with custom needs.</p>
          <ul className="features">
            <li>Unlimited clients</li>
            <li>Team member access</li>
            <li>API access & integrations</li>
            <li>Dedicated account manager</li>
            <li>Custom compliance review</li>
          </ul>
          <Link href="#" className="btn">Contact Sales</Link>
        </div>
      </div>
    </>
  );
}
