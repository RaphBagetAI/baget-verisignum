import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from 'next/link';

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log(auth);
  // const session = await auth.session();
  // if (!session) {
  //   redirect("/login");
  // }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-2xl font-bold text-brand-primary">
                  Verisignum
                </Link>
              </div>
            </div>
            {/* <div className="flex items-center">
              <span className="mr-4 text-sm text-gray-600">
                {session.user.email}
              </span>
              <form action={async () => {
                "use server"
                await auth.logout()
                redirect("/")
              }}>
                <button type="submit" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  Log out
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </nav>
      <main>
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
