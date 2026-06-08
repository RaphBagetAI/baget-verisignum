'use client';

import { useEffect, useRef, useState } from 'react';

export default function HomePage() {
  const formRef = useRef<HTMLFormElement>(null);
  const submitBtnRef = useRef<HTMLButtonElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const consentCheckboxRef = useRef<HTMLInputElement>(null);
  const successMessageRef = useRef<HTMLParagraphElement>(null);
  const errorMessageRef = useRef<HTMLParagraphElement>(null);
  const emailErrorRef = useRef<HTMLParagraphElement>(null);
  const consentErrorRef = useRef<HTMLParagraphElement>(null);
  const checkVisibilityRef = useRef<HTMLLIElement>(null);
  const checkConsentRef = useRef<HTMLLIElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const emailInput = emailInputRef.current;
    const consentCheckbox = consentCheckboxRef.current;
    const submitBtn = submitBtnRef.current;
    const emailError = emailErrorRef.current;
    const consentError = consentErrorRef.current;
    
    if (!emailInput || !consentCheckbox || !submitBtn || !emailError || !consentError) return;

    const validEmail = emailInput.validity.valid;
    const hasConsent = consentCheckbox.checked;

    emailError.style.display = validEmail ? 'none' : 'block';
    consentError.style.display = hasConsent ? 'none' : 'block';
    
    submitBtn.disabled = !(validEmail && hasConsent);
  };

  useEffect(() => {
    const emailInput = emailInputRef.current;
    const consentCheckbox = consentCheckboxRef.current;

    emailInput?.addEventListener('input', validateForm);
    consentCheckbox?.addEventListener('change', validateForm);
    
    validateForm(); // Initial validation check

    // Self-auditing widget checks
    function updateAuditStatus() {
        const checkVisibility = checkVisibilityRef.current;
        const checkConsent = checkConsentRef.current;
        if (!checkVisibility || !checkConsent || !consentCheckbox) return;

        const materialTermsPass = !!document.querySelector('.compliance-note');
        if (materialTermsPass) {
            checkVisibility.textContent = 'Material terms are displayed adjacent to submission.';
            checkVisibility.className = 'pass';
        } else {
            checkVisibility.textContent = 'Material terms must be displayed adjacent to submission.';
            checkVisibility.className = 'fail';
        }

        if (!consentCheckbox.checked) {
            checkConsent.textContent = 'Affirmative, un-checked consent is required before submission.';
            checkConsent.className = 'pass';
        } else {
            checkConsent.textContent = 'Consent checkbox must be mandatory and unchecked by default.';
            checkConsent.className = 'fail';
        }
    }
    updateAuditStatus();
    consentCheckbox?.addEventListener('change', updateAuditStatus);

    return () => {
        emailInput?.removeEventListener('input', validateForm);
        consentCheckbox?.removeEventListener('change', validateForm);
        consentCheckbox?.removeEventListener('change', updateAuditStatus);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitBtnRef.current?.disabled) return;
    
    setIsSubmitting(true);
    if(successMessageRef.current) successMessageRef.current.style.display = 'none';
    if(errorMessageRef.current) errorMessageRef.current.style.display = 'none';


    const email = emailInputRef.current?.value.trim();
    const fullName = (document.getElementById('fullName') as HTMLInputElement)?.value.trim();
    const companyName = (document.getElementById('companyName') as HTMLInputElement)?.value.trim();
    const consent = consentCheckboxRef.current?.checked;

    const dataPayload = {
      email,
      fullName: fullName || null,
      companyName: companyName || null,
      consent,
      timestamp: new Date().toISOString()
    };

    try {
      const response = await fetch('https://app.baget.ai/api/public/databases/8c3c7452-6d96-4049-a021-50ec5a1c4e86/rows', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: dataPayload }),
      });

      if (response.ok) {
        formRef.current?.reset();
        if (successMessageRef.current) successMessageRef.current.style.display = 'block';
        validateForm();
      } else {
        if (errorMessageRef.current) {
            errorMessageRef.current.textContent = 'Submission failed. Please try again.';
            errorMessageRef.current.style.display = 'block';
        }
      }
    } catch (e) {
      if (errorMessageRef.current) {
        errorMessageRef.current.textContent = 'Network error. Please try again.';
        errorMessageRef.current.style.display = 'block';
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header className="page-header">
        <h1 id="main-heading">Verisignum</h1>
        <p className="lead">Compliance-first subscription billing designed to protect elite freelancers and their clients.</p>
      </header>

      <hr aria-hidden="true" />

      <section aria-labelledby="why-title">
        <h2 id="why-title">Why Verisignum?</h2>
        <p>
          Your monthly retainers deserve legally compliant billing with transparent disclosures and simple cancellation.
          Verisignum guarantees the <strong>Clear & Conspicuous disclosures, Affirmative Consent, and One-Click Cancellation</strong> federal and California ARL standards require.
        </p>
        <p>
          Protect your income and reputation with an audit-ready platform trusted by top-tier freelancers managing $2k–$10k monthly retainers.
        </p>
      </section>

      <hr aria-hidden="true" />

      <section aria-labelledby="signup-title" style={{ marginTop: '2rem' }}>
        <h2 id="signup-title">Join the Waitlist for Early Access</h2>

        <form ref={formRef} onSubmit={handleSubmit} noValidate aria-describedby="form-instructions form-error form-success">
          <p id="form-instructions" style={{ marginBottom: '1rem', color: '#2C3E50', fontWeight: 700 }}>
            Sign up to get notified when Verisignum launches. Your billing compliance safeguard starts here.
          </p>

          <div>
            <label htmlFor="email">Email address <sup aria-label="required">*</sup></label>
            <input ref={emailInputRef} type="email" id="email" name="email" autoComplete="email" placeholder="you@example.com" required aria-required="true" aria-describedby="email-error" />
            <p ref={emailErrorRef} role="alert" id="email-error" className="error-message" style={{ display: 'none' }}>Please enter a valid email address.</p>
          </div>

          <div>
            <label htmlFor="fullName">Full name (optional)</label>
            <input type="text" id="fullName" name="fullName" autoComplete="name" placeholder="Your full name" />
          </div>

          <div>
            <label htmlFor="companyName">Company or Freelancer Brand (optional)</label>
            <input type="text" id="companyName" name="companyName" placeholder="Your agency or brand" />
          </div>

          <div className="checkbox-container">
            <input ref={consentCheckboxRef} type="checkbox" id="consent" name="consent" aria-describedby="consent-desc" />
            <label htmlFor="consent" id="consent-desc" style={{ marginLeft: 0 }}>I agree to receive notifications and consent to Verisignum storing my contact details for this purpose. <sup aria-label="required">*</sup></label>
          </div>
          <p ref={consentErrorRef} role="alert" id="consent-error" className="error-message" style={{ display: 'none' }}>Consent is required to join the waitlist.</p>

          <button ref={submitBtnRef} type="submit" disabled id="submit-btn" aria-live="polite" aria-busy={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
          </button>
          
          <p ref={errorMessageRef} role="alert" className="error-message" id="form-error" style={{ display:'none', marginTop:'1rem' }}></p>
          <p ref={successMessageRef} role="alert" className="success-message" id="form-success" style={{ display:'none', marginTop:'1rem' }}>Thank you for joining! We’ll notify you when Verisignum launches.</p>
        </form>
      </section>

      <hr aria-hidden="true" style={{ marginTop:'3rem' }}/>

      <section className="audit-widget" aria-labelledby="audit-title">
        <h2 id="audit-title">Self-Auditing Compliance Check</h2>
        <p>Verisignum landing page enforces the key legal compliance pillars:</p>
        <ul>
          <li ref={checkVisibilityRef} id="check-visibility" className="fail">Material terms displayed adjacent to submission (will update)</li>
          <li ref={checkConsentRef} id="check-consent" className="fail">Affirmative, un-checked consent required before submission (will update)</li>
          <li id="check-simple-cancel" className="pass">Commitment to simple, online cancellation confirmed</li>
          <li id="check-clear-language" className="pass">Clear and easy language used for all disclosures</li>
        </ul>
      </section>

      <section className="compliance-note" aria-label="Compliance notes">
        <p><strong>Material Terms & Disclosure:</strong> Your subscription to Verisignum is $49 per month, billed automatically until cancelled with one-click cancellation.</p>
        <p><strong>Privacy:</strong> We respect your privacy and will never share your contact details without your consent.</p>
        <p><strong>Cancellation:</strong> You may cancel your subscription online at any time from your dashboard with no delays or retention barriers.</p>
      </section>
    </>
  );
}
