"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SignupPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await authClient.signUp.email({ name, email, password });

    if (error) {
      setError(error.message || "An unknown error occurred.");
    } else {
      router.push("/app");
      router.refresh(); // ensure the page reloads to get user session
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && <p className="text-red-500">{error}</p>}
      <div>
        <label
            htmlFor="name"
            className="block text-sm font-medium text-brand-text"
        >
            Full name
        </label>
        <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className="w-full px-3 py-2 mt-1 border rounded-md border-brand-primary focus:ring-brand-primary focus:border-brand-primary"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-brand-text"
        >
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full px-3 py-2 mt-1 border rounded-md border-brand-primary focus:ring-brand-primary focus:border-brand-primary"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-brand-text"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          className="w-full px-3 py-2 mt-1 border rounded-md border-brand-primary focus:ring-brand-primary focus:border-brand-primary"
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 font-bold text-white rounded-md bg-brand-primary hover:bg-brand-text"
      >
        Sign up
      </button>
       <p className="text-sm text-center">
          Already have an account?{' '}
          <a href="/login" className="font-medium text-brand-primary hover:underline">
            Log in
          </a>
        </p>
    </form>
  );
}
