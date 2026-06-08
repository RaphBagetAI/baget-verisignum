import Link from 'next/link';

export default function Header() {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <Link href="/" className="nav-logo">Verisignum</Link>
        <div className="nav-links">
          <Link href="/pricing">Pricing</Link>
          <a href="#">Log In</a>
        </div>
      </nav>
    </header>
  );
}
