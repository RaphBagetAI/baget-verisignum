import Link from 'next/link';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import LogoutButton from './LogoutButton';

export default async function Header() {
  const session = await auth.api.getSession({
    headers: headers(),
  }).catch(() => null);

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-brand-primary">
              Verisignum
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {session ? (
              <>
                <Link href="/app" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Dashboard
                </Link>
                <span className="text-sm text-gray-600 hidden md:inline">
                  {session.user.email}
                </span>
                <LogoutButton />
              </>
            ) : (
              <>
                <Link href="/pricing" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Pricing
                </Link>
                <Link href="/faq" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  FAQ
                </Link>
                <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Log In
                </Link>
                <Link href="/signup" className="px-4 py-2 text-sm font-medium text-white bg-brand-primary rounded-md hover:bg-opacity-90">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
