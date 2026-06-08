import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqItems = [
    {
      question: "What is compliant retainer billing?",
      answer: "Compliant retainer billing refers to the practice of charging clients a recurring fee in a way that adheres to federal and state laws, particularly Automatic Renewal Laws (ARL). This includes providing clear and conspicuous disclosures of terms, obtaining affirmative consent, and offering a simple cancellation process."
    },
    {
      question: "Why is compliance so important for freelancers?",
      answer: "Compliance protects both you and your clients. For freelancers, it ensures your recurring revenue is legally sound and reduces the risk of chargebacks or legal disputes. For clients, it provides transparency and control over their subscriptions. Non-compliance can lead to fines, refunds, and damage to your professional reputation."
    },
    {
      question: "What are the key requirements of Automatic Renewal Laws (ARL)?",
      answer: "The core requirements are: 1) 'Clear and Conspicuous' disclosure of all material terms (price, billing frequency) before the client signs up. 2) Obtaining 'Affirmative Consent' from the client, meaning they must actively agree to the recurring charge (e.g., checking an unchecked box). 3) Providing a simple, accessible cancellation method that is at least as easy as the sign-up process."
    },
    {
      question: "How does Verisignum help me stay compliant?",
      answer: "Verisignum is built with compliance at its core. We provide pre-built, compliant sign-up flows that include all necessary disclosures. We enforce affirmative consent and generate audit-ready records of client agreements. Our platform also ensures you can offer one-click cancellation from a client dashboard, meeting legal requirements effortlessly."
    },
    {
      question: "Can I use my own payment processor with Verisignum?",
      answer: "Verisignum integrates with leading payment processors like Stripe. You connect your existing account, and we handle the compliance layer on top of it. This means you maintain control of your payment processing and banking while we ensure the subscription and billing process is legally sound."
    },
    {
      question: "What happens if a client disputes a charge?",
      answer: "With Verisignum, you are well-prepared for disputes. For every subscription, you have a timestamped record of the client's affirmative consent and proof that all material terms were clearly disclosed. This evidence is crucial for winning chargeback disputes and demonstrating your commitment to transparent billing practices."
    }
  ]
  
  export default function FAQPage() {
    return (
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-serif font-bold text-center text-brand-accent mb-2">Frequently Asked Questions</h1>
            <p className="text-lg text-center text-brand-text mb-10">Your questions about compliant retainer billing, answered.</p>
            <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                    <AccordionItem value={`item-${index + 1}`} key={index}>
                        <AccordionTrigger className="text-lg font-medium text-left">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-base text-brand-text">
                            {item.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
  }
   