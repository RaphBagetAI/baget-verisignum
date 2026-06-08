import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  // const session = await auth();

  // if (!session.user) {
  //   redirect('/login');
  // }

  return (
    <div className="py-16">
      <h1 className="text-4xl font-bold font-serif text-brand-primary">Dashboard</h1>
      <p className="mt-4 text-lg text-brand-text">
        {/* Welcome, {session.user.email}! This is your protected dashboard. */}
        Welcome! This is your protected dashboard.
      </p>
    </div>
  );
}
