import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="font-serif text-2xl font-bold text-rose-900 hover:text-stone-700">
              Verisignum
            </Link>
          </div>
          <nav className="flex items-center justify-end space-x-8">
            <Link href="/pricing" className="text-base font-medium text-stone-700 hover:text-rose-900 border-b-2 border-transparent hover:border-rose-900 transition-colors">
              Pricing
            </Link>
            <Link href="#" className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-amber-50 bg-rose-900 hover:bg-stone-700">
              Sign In
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
