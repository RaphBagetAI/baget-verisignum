"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="text-sm font-medium text-gray-700 hover:text-gray-900 cursor-pointer bg-transparent border-none p-0 inline-block w-auto hover:bg-transparent"
      style={{ background: 'none', border: 'none', padding: 0, color: '#374151', fontSize: '0.875rem', fontWeight: 500, fontFamily: 'var(--font-lato), sans-serif' }}
    >
      Log out
    </button>
  );
}
