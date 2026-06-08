"use server";

import Link from "next/link";

// This is a placeholder for the sandbox-provided function.
// The build system will replace this with the actual tool implementation.
declare function run_sql(params: { sql: string; params: any[] }): Promise<{ rows: any[] }>;

export default async function DashboardPage() {
  // Mock data since auth and db are not available
  const retainers: any[] = [];
  const clients: any[] = [];
  const user = { email: "test@example.com" };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <nav className="flex items-center justify-between p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <span>{user.email}</span>
          <Link href="/" className="text-sm font-semibold text-gray-900">
            Home
          </Link>
        </div>
      </nav>

      <main className="p-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold">Create New Retainer</h2>
            <p>Authentication system is currently disabled. Form will be here.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold">Your Retainers</h2>
            <div className="space-y-4">
              {retainers.map((r: any) => (
                <div key={r.id} className="p-4 border rounded-md">
                  <h3 className="font-bold">{r.product_name}</h3>
                  <p>Amount: ${(r.amount_cents / 100).toFixed(2)} / month</p>
                  <input
                    type="text"
                    readOnly
                    value={r.payment_link_url}
                    className="w-full p-2 mt-2 text-sm bg-gray-100 border rounded"
                  />
                </div>
              ))}
              {retainers.length === 0 && <p>No retainers created yet.</p>}
            </div>
          </div>
        </div>

        <div className="p-6 mt-8 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold">Your Clients</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="p-2">Client Email</th>
                  <th className="p-2">Retainer</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Sign-up Date</th>
                </tr>
              </thead>
              <tbody>
                {clients.map((c: any) => (
                  <tr key={c.id} className="border-t">
                    <td className="p-2">{c.client_email}</td>
                    <td className="p-2">{c.product_name}</td>
                    <td className="p-2">{c.status}</td>
                    <td className="p-2">{new Date(c.created_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {clients.length === 0 && <p className="mt-4">No clients yet.</p>}
          </div>
        </div>
      </main>
    </div>
  );
}
