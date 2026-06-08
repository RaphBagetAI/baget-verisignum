'use client';

import { useState, FormEvent } from 'react';

export default function ComingSoonPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setError('');

    if (!email) {
      setError('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Thank you! You have been added to our waitlist.');
        setEmail('');
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-accent mb-4">
          Finally, Compliant Retainer Billing for Freelancers.
        </h1>
        <p className="text-lg md:text-xl text-text-primary mb-8">
          Verisignum is coming soon. Stop worrying about invoicing and get back to the work you love. Enter your email to get notified when we launch.
        </p>

        <ul className="text-left list-none md:list-disc list-inside space-y-4 mb-10 max-w-md mx-auto">
          <li>
            <strong className="text-text-accent">Track Invoices:</strong> Centralize all your client invoices effortlessly.
          </li>
          <li>
            <strong className="text-text-accent">Automate Retainers:</strong> Let clients subscribe to monthly retainers online.
          </li>
          <li>
            <strong className="text-text-accent">Get Paid Faster:</strong> Automated payments and receipts for you and your clients.
          </li>
        </ul>

        <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 text-lg text-text-primary bg-white border-2 border-text-accent rounded-md focus:outline-none focus:ring-2 focus:ring-text-primary"
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="w-full sm:w-auto bg-text-accent text-background font-serif font-bold text-lg px-8 py-3 rounded-md hover:bg-text-primary transition-colors duration-300 disabled:bg-gray-400"
            >
              {isLoading ? 'Submitting...' : 'Get Notified'}
            </button>
          </div>
        </form>

        {message && <p className="mt-4 text-green-700">{message}</p>}
        {error && <p className="mt-4 text-red-600">{error}</p>}
        
        <p className="mt-6 text-sm text-gray-500">
          We respect your privacy and will never share your email.
        </p>

      </div>
    </main>
  );
}
