I have refactored the initial static HTML site into a Next.js application, creating a new pricing page and adding a shared navigation header. The home page is now at `/` and the new pricing page is at `/pricing`, with navigation linking them.

**Files shipped:**
- `app/components/Header.tsx`: A new shared header component with navigation links.
- `app/layout.tsx`: The root layout, updated to include the new header, fonts, and global styles.
- `app/globals.css`: A global stylesheet adapted from the original static page, with new styles for the header and pricing tiers.
- `app/page.tsx`: The home page, converted from static HTML into a Next.js client component to preserve form functionality.
- `app/pricing/page.tsx`: The new pricing page featuring three distinct tiers with a feature comparison.

**Key route(s) / function(s):**
The new pricing page component at `app/pricing/page.tsx` is the core deliverable of this task.
```tsx
import Link from 'next/link';

export default function PricingPage() {
  return (
    <>
      <header className="pricing-header">
        <h1 id="main-heading">Find the Right Plan for You</h1>
        <p className="lead">Start for free and scale as you grow. All plans include our compliance guarantee.</p>
      </header>

      <div className="pricing-grid">
        {/* ... tier structure ... */}
      </div>
    </>
  );
}
```

**Live URL:**
The development server is not responding to requests, so a live URL cannot be confirmed. However, the build was successful, and the code is ready for deployment.

**How to test:**
1.  Navigate to the homepage (`/`) to see the original content with the new header.
2.  Click the "Pricing" link in the header to navigate to the new `/pricing` page.
3.  Verify that the pricing page displays the "Starter," "Pro," and "Agency" tiers correctly.
4.  The form on the homepage should retain its validation and submission functionality.
