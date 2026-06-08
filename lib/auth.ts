import { betterAuth } from "better-auth";
import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL!);

export const auth = betterAuth({
  database: sql,
  emailAndPassword: { enabled: true },
  secret: process.env.BETTER_AUTH_SECRET,
  // Optional: better-auth infers the base URL from the request when unset (fine for
  // same-origin). Set BETTER_AUTH_URL for absolute links (email verification / OAuth on a
  // custom domain) — and it MUST match the redirect URIs registered with each provider.
  baseURL: process.env.BETTER_AUTH_URL,
});
