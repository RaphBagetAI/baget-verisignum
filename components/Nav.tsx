import Link from 'next/link'
import { Button } from './ui/button'

export async function Nav({ session }: { session: { userId: string | null } }) {
  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <nav className="container flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-serif font-bold text-primary">
          Verisignum
        </Link>

        <div className="flex items-center gap-2">
          {session.userId ? (
            <>
              <Button asChild variant="ghost">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <form action="/api/auth/logout" method="post">
                <Button type="submit">Logout</Button>
              </form>
            </>
          ) : (
            <>
              <Button asChild variant="ghost">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
