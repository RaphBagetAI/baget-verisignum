export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Verisignum</h1>
          <p className="mt-2 text-lg text-brand-text">
            Compliance-first retainer billing for elite freelancers.
          </p>
        </div>
        {children}
      </div>
    </main>
  );
}
