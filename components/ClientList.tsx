'use client';
import { Button } from "./ui/button";

interface Product {
  id: string;
  client_name: string;
  amount_cents: number;
  payment_link_url: string | null;
  created_at: string;
}

interface Client {
    id: string;
    client_email: string;
    status: string;
    created_at: string;
    client_name: string;
    amount_cents: number;
}

interface ClientListProps {
  products: Product[];
  clients: Client[];
}

export function ClientList({ products, clients }: ClientListProps) {
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Maybe show a toast notification here
  };

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-2xl font-bold mb-4">Generated Links</h2>
        <div className="bg-card p-4 sm:p-6 rounded-lg border">
          {products.length === 0 ? (
            <p className="text-muted-foreground">You haven't generated any links yet.</p>
          ) : (
            <ul className="divide-y">
              {products.map((product) => (
                <li key={product.id} className="py-4 flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="font-semibold">{product.client_name}</p>
                    <p className="text-sm text-muted-foreground">
                      ${(product.amount_cents / 100).toFixed(2)}/month
                    </p>
                  </div>
                  {product.payment_link_url ? (
                    <Button onClick={() => copyToClipboard(product.payment_link_url!)} size="sm">
                      Copy Link
                    </Button>
                  ) : (
                    <Button size="sm" disabled>
                      Generating...
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Signed-Up Clients</h2>
        <div className="bg-card p-4 sm:p-6 rounded-lg border">
          {clients.length === 0 ? (
            <p className="text-muted-foreground">No clients have signed up yet.</p>
          ) : (
             <ul className="divide-y">
              {clients.map((client) => (
                <li key={client.id} className="py-4 flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <p className="font-semibold">{client.client_email}</p>
                    <p className="text-sm text-muted-foreground">
                      {client.client_name} - ${(client.amount_cents / 100).toFixed(2)}/month
                    </p>
                  </div>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    client.status === 'paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {client.status}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
