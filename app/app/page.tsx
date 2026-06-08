import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: headers(),
  }).catch(() => null);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="space-y-8">
      <header className="border-b-2 border-brand-primary pb-4">
        <h1 className="text-3xl font-serif font-bold text-brand-primary">
          Welcome back, {session.user.name || session.user.email}!
        </h1>
        <p className="text-stone-600 mt-1">
          Freelancer compliance dashboard for <span className="font-semibold text-brand-primary">{session.user.email}</span>
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Placeholder cards for compliance overview */}
        <div className="bg-white border-2 border-brand-primary rounded-md p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-serif font-bold text-lg text-brand-primary mb-2">ARL Clear Disclosures</h3>
          <p className="text-sm text-stone-600 mb-4">
            Verify that your subscription material terms are adjacent to sign-up buttons.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-600"></span>
            <span className="text-xs font-semibold text-green-800 uppercase tracking-wider">Compliant</span>
          </div>
        </div>

        <div className="bg-white border-2 border-brand-primary rounded-md p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-serif font-bold text-lg text-brand-primary mb-2">Affirmative Consent Check</h3>
          <p className="text-sm text-stone-600 mb-4">
            Ensures checkbox forms require active verification and start unchecked.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-600"></span>
            <span className="text-xs font-semibold text-green-800 uppercase tracking-wider">Active</span>
          </div>
        </div>

        <div className="bg-white border-2 border-brand-primary rounded-md p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="font-serif font-bold text-lg text-brand-primary mb-2">One-Click Cancellation</h3>
          <p className="text-sm text-stone-600 mb-4">
            Offers a direct, friction-free way for clients to cancel their retainer plans online.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-600"></span>
            <span className="text-xs font-semibold text-green-800 uppercase tracking-wider">Integrated</span>
          </div>
        </div>
      </div>

      <div className="bg-white border-2 border-brand-primary rounded-md p-6 shadow-sm">
        <h2 className="text-xl font-serif font-bold text-brand-primary mb-4">Your Compliance Audit Report</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b pb-2">
            <span className="text-stone-700 font-medium">Automatic Renewal Disclosures</span>
            <span className="text-green-700 font-semibold text-sm">Pass</span>
          </div>
          <div className="flex items-center justify-between border-b pb-2">
            <span className="text-stone-700 font-medium">Pre-checked Boxes Detection</span>
            <span className="text-green-700 font-semibold text-sm">Pass (No pre-checked boxes found)</span>
          </div>
          <div className="flex items-center justify-between border-b pb-2">
            <span className="text-stone-700 font-medium">Cancellation Accessibility Link</span>
            <span className="text-green-700 font-semibold text-sm">Pass</span>
          </div>
        </div>
        <p className="text-xs text-stone-500 mt-4 italic">
          Audit performed on client billing widgets linked to your Verisignum account. Last audit run: Just now.
        </p>
      </div>
    </div>
  );
}
