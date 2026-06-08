import { ShieldCheck, BarChart, FileText, ArrowRight, CheckCircle, Users, CreditCard, Receipt } from 'lucide-react';

const Header = () => (
  <header className="bg-white/30 backdrop-blur-md sticky top-0 z-10">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-serif font-bold text-brand-accent">Verisignum</h1>
      <nav className="space-x-6">
        <a href="#features" className="text-brand-text hover:text-brand-accent transition-colors">Features</a>
        <a href="#how-it-works" className="text-brand-text hover:text-brand-accent transition-colors">How It Works</a>
      </nav>
      <a href="#" className="bg-brand-accent text-white font-bold py-2 px-4 rounded-md hover:bg-brand-text transition-colors shadow-lg">
        Get Started
      </a>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative py-20 md:py-32 bg-white">
     <div className="absolute inset-0 bg-grain opacity-50"></div>
     <div className="container mx-auto px-6 text-center relative">
      <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">Focus on Your Craft, Not Compliance.</h2>
      <p className="text-lg md:text-xl text-brand-text max-w-3xl mx-auto mb-8">
        Verisignum provides compliance-first retainer billing for elite freelancers. Secure your income with automated, legally-sound client agreements and payments.
      </p>
      <div className="flex justify-center items-center gap-4">
        <a href="#" className="bg-brand-accent text-white font-bold py-3 px-6 rounded-md hover:bg-brand-text transition-colors text-lg shadow-xl">
          Join the Waitlist
        </a>
        <a href="#how-it-works" className="flex items-center text-brand-accent font-bold text-lg">
          Learn More <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-20 bg-brand-background/50">
    <div className="container mx-auto px-6 text-center">
      <h3 className="text-3xl font-serif font-bold mb-2">Effortless & Compliant in 3 Steps</h3>
      <p className="text-brand-text max-w-2xl mx-auto mb-12">From proposal to payment, we handle the administrative hurdles so you can stay focused.</p>
      <div className="grid md:grid-cols-3 gap-12">
        <div className="bg-white p-8 rounded-lg shadow-lg relative">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white rounded-full h-16 w-16 flex items-center justify-center font-serif text-2xl font-bold">1</div>
          <FileText className="h-12 w-12 mx-auto mb-4 text-brand-accent-light" />
          <h4 className="text-xl font-serif font-bold mb-2">Create Retainer</h4>
          <p className="text-brand-text">Define your services, deliverables, and monthly rate in our guided template.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white rounded-full h-16 w-16 flex items-center justify-center font-serif text-2xl font-bold">2</div>
          <ShieldCheck className="h-12 w-12 mx-auto mb-4 text-brand-accent-light" />
          <h4 className="text-xl font-serif font-bold mb-2">Client Onboards</h4>
          <p className="text-brand-text">Your client reviews the terms, provides payment info, and gives affirmative consent—all online.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-white rounded-full h-16 w-16 flex items-center justify-center font-serif text-2xl font-bold">3</div>
          <BarChart className="h-12 w-12 mx-auto mb-4 text-brand-accent-light" />
          <h4 className="text-xl font-serif font-bold mb-2">Get Paid Monthly</h4>
          <p className="text-brand-text">Payments are processed automatically. Track your income and client status from your dashboard.</p>
        </div>
      </div>
    </div>
  </section>
);

const features = [
  {
    icon: CheckCircle,
    title: 'ARL Compliant',
    description: 'Built-in compliance with Automatic Renewal Laws, including clear disclosures and one-click cancellation.',
  },
  {
    icon: Users,
    title: 'Client Portal',
    description: 'Clients can manage their subscription, update payment methods, and view their history anytime.',
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Powered by Stripe for ironclad security and reliability. We never store sensitive payment data.',
  },
  {
    icon: Receipt,
    title: 'Automated Invoicing',
    description: 'Branded PDF receipts are automatically sent to you and your client after every successful payment.',
  },
   {
    icon: FileText,
    title: 'Standardized Agreements',
    description: 'Use our vetted retainer agreement templates to ensure you\'re legally protected.',
  },
  {
    icon: BarChart,
    title: 'Income Analytics',
    description: 'Visualize your monthly recurring revenue and project future earnings with simple, clear charts.',
  },
];

const Features = () => (
  <section id="features" className="py-20 bg-white">
     <div className="absolute inset-0 bg-grain opacity-50"></div>
    <div className="container mx-auto px-6 relative">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-serif font-bold">Everything you need. Nothing you don't.</h3>
        <p className="text-brand-text max-w-2xl mx-auto">Verisignum is purpose-built for freelancers who value their time and reputation.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <feature.icon className="h-8 w-8 text-brand-accent" />
            </div>
            <div>
              <h4 className="text-lg font-serif font-bold">{feature.title}</h4>
              <p className="text-brand-text">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-text text-brand-background py-8">
    <div className="container mx-auto px-6 text-center">
      <p>&copy; {new Date().getFullYear()} Verisignum. All rights reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Terms of Service</a>
      </div>
    </div>
  </footer>
);


export default function VerisignumPage() {
  return (
    <div className="bg-brand-background">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Features />
      </main>
      <Footer />
    </div>
  );
}
